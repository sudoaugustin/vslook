const fs = require('./utils/fs');
const config = require('./utils/config');
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

function set(path, { name = '', value }) {
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
        newTokenColors[i].settings[setting] = value;

        return { ...theme, tokenColors: newTokenColors };
      } else {
        const inherit = inherits[name];
        const newColors = theme.colors;
        if (value) {
          newColors[name] = value;
          if (!!inherit) newColors[inherit] = value;
        } else {
          delete newColors[name];
          delete newColors[inherit];
        }
        return { ...theme, colors: newColors };
      }
    },
    { json: true },
  );
}

module.exports = { get, set };
