const config = require('./utils/config');
const getInherits = require('./utils/inherits');

module.exports = globalTheme => {
  return {
    get: () => {
      const theme = globalTheme.get();
      const tokenColors = theme.tokenColors.reduce((colors, { scope, settings }) => {
        const $scope = typeof scope === 'string' ? scope : scope[0];
        return {
          ...colors,
          [`$${$scope}_fontStyle`]: settings.fontStyle,
          [`$${$scope}_foreground`]: settings.foreground,
        };
      }, {});

      return { ...theme.colors, ...tokenColors };
    },
    set: ({ name, value }) => {
      if (name[0] === '$') {
        const [scope, setting] = name.replace('$', '').split('_');
        const newTextMateRules = config.get('editor.tokenColorCustomizations.textMateRules', []);
        let i = newTextMateRules.findIndex((rule = {}) => rule.scope && rule.scope[0] === scope);

        if (i < 0) {
          i = newTextMateRules.length;
          newTextMateRules[i] = { scope: [scope, ...getInherits(scope)], settings: {} };
        }

        if (!!value || value === '') {
          newTextMateRules[i].settings[setting] = value;
        } else {
          delete newTextMateRules[i].settings[setting];
        }
        const newTokenColors = newTextMateRules.filter(({ settings }) => Object.keys(settings).length > 0);

        globalTheme.set({ tokenColors: newTokenColors });
        config.set('editor.tokenColorCustomizations', { textMateRules: newTokenColors });
      } else {
        const newColors = config.get('workbench.colorCustomizations', {});
        const inheritColors = getInherits(name);

        if (!!value) {
          newColors[name] = value;
          inheritColors.forEach(name => (newColors[name] = value));
        } else {
          delete newColors[name];
          inheritColors.forEach(name => delete newColors[name]);
        }
        globalTheme.set({ colors: newColors });
        config.set('workbench.colorCustomizations', newColors);
      }
    },
  };
};
