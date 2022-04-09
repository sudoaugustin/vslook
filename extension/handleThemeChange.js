const config = require('./utils/config');

const additional = {
  'list.errorForeground': 'list.invalidItemForeground',
  'list.inactiveSelectionBackground': 'list.activeSelectionBackground',
  'list.inactiveSelectionForeground': 'list.activeSelectionForeground',
  'list.inactiveSelectionIconForeground': 'list.activeSelectionIconForeground',
  'list.inactiveFocusBackground': 'list.focusBackground',
  'list.inactiveFocusOutline': 'list.focusOutline',
  // 'tab.inactiveBackground': 'tab.unfocusedInactiveBackground',
  // 'tab.inactiveForeground': 'tab.unfocusedInactiveForeground',
  // 'tab.hoverBackground': 'tab.unfocusedHoverBackground',
  // 'tab.hoverForeground': 'tab.unfocusedHoverForeground',
  // 'tab.hoverBorder': 'tab.unfocusedHoverBorder',
  // 'tab.activeBackground': 'tab.unfocusedActiveBackground',
  // 'tab.activeForeground': 'tab.unfocusedActiveForeground',
  // 'tab.activeBorder': 'tab.unfocusedActiveBorder',
  // 'tab.activeBorderTop': 'tab.unfocusedActiveBorderTop',
  // 'editor.selectionBackground': 'editor.inactiveSelectionBackground',
  // 'statusBarItem.prominentBackground': 'statusBarItem.prominentHoverBackground',
  // 'titleBar.activeBackground': 'titleBar.inactiveBackground',
  // 'titleBar.activeForeground': 'titleBar.inactiveForeground',
  // 'settings.textInputBackground': 'settings.numberInputBackground',
  // 'settings.textInputForeground': 'settings.numberInputForeground',
  // 'settings.textInputBorder': 'settings.numberInputBorder',
};

// function createTheme({ theme, name, value }) {
//   const isColors = name[0] !== '$';
//   const colorType = isColors ? 'colors' : 'tokenColors';
//   const colorTheme = theme[colorType];

//   if (isColors) {
//     colorTheme[name] = value;
//     if (additional[name]) {
//       colorTheme[additional[name]] = value;
//     }
//   } else {
//     const [_scope, _name] = name.substr(1).split('_');
//     let index = colorTheme.findIndex(({ scope }) => scope === _scope);
//     if (index < 0) {
//       index = colorTheme.length;
//       colorTheme[index] = { scope: _scope, settings: {} };
//     }
//     colorTheme[index].settings[_name] = value;
//   }

//   return { ...theme, [colorType]: colorTheme };
// }

module.exports = ({ name, value }) => {
  const colorCustomizations = config.get('workbench.colorCustomizations');
  const newColorsCustomizations = { [name]: value, [additional[name]]: value };
  config.set('workbench.colorCustomizations', { ...colorCustomizations, ...newColorsCustomizations });
};
