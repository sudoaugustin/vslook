const os = require('os');
const path = require('path');
const { window, commands, extensions } = require('vscode');
const { TOKENS, COLORS } = require('./types');
const { toast, output } = require('./components');
const { fs, config, getInherits } = require('./utils');

module.exports = globalState => {
  const newColors = {};
  return {
    get: () => {
      const { colors, tokenColors } = globalState.get('theme');
      const newTokenColors = tokenColors.reduce((colors, { scope, settings }) => {
        const $scope = typeof scope === 'string' ? scope : scope[0];
        return {
          ...colors,
          [`$${$scope}_fontStyle`]: settings.fontStyle,
          [`$${$scope}_foreground`]: settings.foreground,
        };
      }, {});

      return { ...colors, ...newTokenColors };
    },
    set: ({ name, value }) => {
      const { colors, tokenColors } = globalState.get('theme');

      if (name[0] === '$') {
        const [scope, setting] = name.replace('$', '').split('_');
        let i = tokenColors.findIndex(tokenColor => tokenColor.scope && tokenColor.scope[0] === scope);

        if (i < 0) {
          i = tokenColors.length;
          tokenColors[i] = { scope: [scope, ...getInherits(scope)], settings: {} };
        }

        if (!!value || value === '') {
          tokenColors[i].settings[setting] = value;
        } else {
          delete tokenColors[i].settings[setting];
        }
        config.set(TOKENS, { textMateRules: tokenColors });
      } else {
        const inheritProps = getInherits(name);

        if (!!value) {
          newColors[name] = value;
          inheritProps.forEach(name => (newColors[name] = value));
        } else {
          delete newColors[name];
          inheritProps.forEach(name => delete newColors[name]);
        }
        config.set(COLORS, newColors);
      }

      globalState.update('theme', {
        colors: { ...colors, ...newColors },
        tokenColors: tokenColors.filter(({ settings }) => Object.keys(settings).length > 0),
      });
    },
    clone: () => {
      const themes = extensions.all
        // Filter theme-defaults extension vslook extension & extensions with theme contributions
        .filter(({ id, packageJSON: { name, contributes } }) => {
          return id !== 'vscode.theme-defaults' && name !== 'vslook' && contributes && contributes.themes;
        })
        // FlatMap themes' path and label
        .flatMap(({ extensionPath, packageJSON }) => {
          const themes = packageJSON.contributes.themes;
          return themes.map(({ label, uiTheme, path: themePath }) => ({
            label,
            type: uiTheme,
            path: path.join(extensionPath, themePath),
          }));
        })
        // Group themes into three groups
        .reduce(
          (themes, { label, type, path }) => {
            const types = { vs: 'light', 'vs-dark': 'dark', 'hc-light': 'high contrast', 'hc-black': 'high contrast' };
            const currentType = types[type];
            const currentThemes = themes[currentType];
            return { ...themes, [currentType]: [...currentThemes, { label, path }] };
          },
          { light: [], dark: [], 'high contrast': [] },
        );

      // Convert grouped themes into quickpick items
      const items = Object.entries(themes).flatMap(([type, themes]) => {
        return themes.length > 0 ? [{ label: type.toUpperCase(), kind: -1 }, ...themes] : [];
      });

      window.showQuickPick(items, { placeHolder: 'Enter theme name', ignoreFocusOut: true }).then(theme => {
        if (theme) {
          window
            .withProgress({ title: 'Copying styles...', location: 15 }, () => {
              const $theme = fs.read(theme.path, { json: true });
              globalState.update('theme', { colors: $theme.colors, tokenColors: $theme.tokenColors });
              return Promise.resolve();
            })
            .then(() => {
              commands.executeCommand('workbench.action.reloadWindow');
            })
            // Ignore this syntax err
            .catch(err => {
              // console.log(theme.path);
              toast("Can't copy styles.", { type: 'error' });
              output.error(err.stack);
            });
        }
      });
    },
    export: () => {
      const theme = globalState.get('theme');
      const $path = path.join(os.homedir(), 'vslook-theme.json');

      try {
        fs.write($path, theme, { json: true });
        toast('Successfully exported.');
        output.info(`Theme file has been exported to ${$path}`);
      } catch (err) {
        toast("Can't export theme file.", { type: 'error' });
        output.error(err.message);
      }
    },
  };
};
