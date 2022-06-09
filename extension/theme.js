const fs = require('./utils/fs');
const getInherits = require('./utils/inherits');

function get(path) {
  const theme = fs.read(path, { json: true });
  const tokenColors = theme.tokenColors.reduce((colors, { scope, settings }) => {
    const $scope = typeof scope === 'string' ? scope : scope[0];
    return {
      ...colors,
      [`$${$scope}_fontStyle`]: settings.fontStyle,
      [`$${$scope}_foreground`]: settings.foreground,
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
        let i = newTokenColors.findIndex(tokenColor => tokenColor.scope[0] === scope);
        if (i < 0) {
          i = newTokenColors.length;
          newTokenColors[i] = { scope: [scope, ...getInherits(scope)], settings: {} };
        }

        if (!!value || value === '') {
          newTokenColors[i].settings[setting] = value;
        } else {
          delete newTokenColors[i].settings[setting];
        }

        theme.tokenColors = newTokenColors.filter(({ settings }) => Object.keys(settings).length > 0);
      } else {
        const newColors = theme.colors;
        const inheritColors = getInherits(name);

        if (!!value) {
          newColors[name] = value;
          inheritColors.forEach(name => (newColors[name] = value));
        } else {
          delete newColors[name];
          inheritColors.forEach(name => delete newColors[name]);
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
