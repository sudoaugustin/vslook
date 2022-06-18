const config = require('./utils/config');
const getInherits = require('./utils/inherits');
const { TOKEN_COLORS, COLORS } = require('./types');

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
        config.set(TOKEN_COLORS, { textMateRules: tokenColors });
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
  };
};
