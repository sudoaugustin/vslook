const fs = require('./utils/fs');
const inherits = require('./data/inherits.json');

function get(path) {
  const theme = fs.read(path, { json: true });
  const tokenColors = theme.tokenColors.reduce((colors, { scope, settings }) => {
    return {
      ...colors,
      [`$${scope}_fontStyle`]: settings.fontStyle,
      [`$${scope}_foreground`]: settings.foreground,
    };
  }, {});

  return { ...theme.colors, ...tokenColors };
}

function set(path, setGlobal, { name = '', value, select }) {
  fs.update(
    path,
    theme => {
      if (name[0] === '$') {
        const newTokenColors = theme.tokenColors;
        const [scope, setting] = name.substring(1).split('_');
        let i = newTokenColors.findIndex(tokenColor => tokenColor.scope === scope);
        if (i < 0) {
          i = newTokenColors.length;
          newTokenColors[i] = { scope, settings: {} };
        }

        if (!!value) {
          newTokenColors[i].settings[setting] = value;
        } else {
          delete newTokenColors[i].settings[setting];
        }

        theme.tokenColors = newTokenColors.filter(({ settings }) => Object.keys(settings).length > 0);
      } else {
        const newColors = theme.colors;
        const inheritProps = (inherits[name] || '').split(', ');

        if (!!value) {
          newColors[name] = value;
          inheritProps.forEach(name => (newColors[name] = value));
        } else {
          delete newColors[name];
          inheritProps.forEach(name => delete newColors[name]);
        }

        theme.colors = newColors;
      }

      select && setGlobal('theme', theme);
      return theme;
    },
    { json: true },
  );
}

module.exports = { get, set };
