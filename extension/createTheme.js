function createTheme({ theme, name, value, type }) {
  const newType = { [name]: value };
  const additional = {
    // 'tab.inactiveBackground': 'tab.unfocusedInactiveBackground',
    // 'tab.inactiveForeground': 'tab.unfocusedInactiveForeground',
    // 'tab.hoverBackground': 'tab.unfocusedHoverBackground',
    // 'tab.hoverForeground': 'tab.unfocusedHoverForeground',
    // 'tab.hoverBorder': 'tab.unfocusedHoverBorder',
    // 'editor.selectionBackground': 'editor.inactiveSelectionBackground',
    'list.inactiveSelectionBackground': 'list.activeSelectionBackground',
    'list.inactiveSelectionForeground': 'list.activeSelectionForeground',
    'list.inactiveSelectionIconForeground': 'list.activeSelectionIconForeground',
    'list.inactiveFocusBackground': 'list.focusBackground',
    'list.inactiveFocusOutline': 'list.focusOutline',
    // 'statusBarItem.prominentBackground': 'statusBarItem.prominentHoverBackground',
    // 'titleBar.activeBackground': 'titleBar.inactiveBackground',
    // 'titleBar.activeForeground': 'titleBar.inactiveForeground',
    // 'settings.textInputBackground': 'settings.numberInputBackground',
    // 'settings.textInputForeground': 'settings.numberInputForeground',
    // 'settings.textInputBorder': 'settings.numberInputBorder',
  };
  if (additional[name]) {
    newType[additional[name]] = value;
  }
  // switch (name) {
  //   case "tab.inactiveBackground":
  //     newTheme["tab.unfocusedInactiveBackground"] = value;
  //     break;
  //   case "tab.inactiveForeground":
  //     newTheme["tab.unfocusedInactiveForeground"] = value;
  //     break;
  //   case "tab.hoverBackground":
  //     newTheme["tab.unfocusedHoverBackground"] = value;
  //     break;
  //   case "tab.hoverForeground":
  //     newTheme["tab.unfocusedHoverForeground"] = value;
  //     break;
  //   case "tab.hoverBorder":
  //     newTheme["tab.unfocusedHoverBorder"] = value;
  //     break;

  //   /*
  //   @ All `active`'s default bahaviour are low opacity. So leave these for now.
  //   case "tab.activeBackground":
  //   newTheme["tab.unfocusedActiveBackground"] = value;
  //   break;
  //   case "tab.activeForeground":
  //   newTheme["tab.unfocusedActiveForeground"] = value;
  //   break;
  //   case "tab.activeBorder":
  //   newTheme["tab.unfocusedActiveBorder"] = value;
  //   break;
  //   case "tab.activeBorderTop":
  //   newTheme["tab.unfocusedActiveBorderTop"] = value;
  //   break;
  //   */
  // }
  return { ...theme, [type]: { ...theme[type], ...newType } };
}

module.exports = createTheme;
