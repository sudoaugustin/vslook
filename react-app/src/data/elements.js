const components = [
  [
    {
      title: 'Base Colors',
      styles: {
        normal: [
          { label: 'Progress Bar', name: 'progressBar.background' },
          { label: 'Sash', name: 'sash.hoverBorder' },
          { label: 'Icon', name: 'icon.foreground' },
          { label: 'Shadow', name: 'widget.shadow' },
        ],
        focus: [{ label: 'Border', name: 'focusBorder' }],
      },
      preview: 'BASE_COLORS',
    },
  ],
  [
    {
      title: 'Scrollbar',
      styles: {
        normal: [
          { label: 'Slider', name: 'scrollbarSlider.background' },
          { label: 'Scroll Shadow', name: 'scrollbar.shadow' },
        ],
        hover: [{ label: 'Slider', name: 'scrollbarSlider.hoverBackground' }],
        active: [{ label: 'Slider', name: 'scrollbarSlider.activeBackground' }],
      },
    },
  ],
  [
    {
      title: 'Text',
      styles: {
        normal: [{ label: 'Foreground', name: 'foreground' }],
        error: [{ label: 'Foreground', name: 'errorForeground' }],
        selection: [{ label: 'Background', name: 'selection.background' }],
      },
    },
    {
      title: 'Preformat',
      styles: {
        normal: [{ label: 'Foreground', name: 'textPreformat.foreground' }],
      },
    },
    {
      title: 'Link',
      styles: {
        normal: [{ label: 'Foreground', name: 'textLink.foreground' }],
        active: [{ label: 'Foreground', name: 'textLink.activeForeground' }],
      },
    },
    {
      title: 'Quote',
      styles: {
        normal: [
          { label: 'Background', name: 'textBlockQuote.background' },
          { label: 'Border', name: 'textBlockQuote.border' },
        ],
      },
    },
  ],
  [
    {
      title: 'Button',
      preview: 'BUTTONS',
    },
    {
      title: 'Primary',
      styles: {
        normal: [
          { label: 'Background', name: 'button.background' },
          { label: 'Foreground', name: 'button.foreground' },
        ],
        hover: [{ label: 'Background', name: 'button.hoverBackground' }],
      },
    },
    {
      title: 'Secondary',
      styles: {
        normal: [
          { label: 'Background', name: 'button.secondaryBackground' },
          { label: 'Foreground', name: 'button.secondaryForeground' },
        ],
        hover: [{ label: 'Background', name: 'button.secondaryHoverBackground' }],
      },
    },
    {
      title: 'Icon',
      styles: {
        hover: [
          { label: 'Background', name: 'toolbar.hoverBackground' },
          { label: 'Outline', name: 'toolbar.hoverOutline' },
        ],
        active: [{ label: 'Background', name: 'toolbar.activeBackground' }],
      },
    },
  ],
  [
    {
      title: 'Checkbox',
      styles: {
        normal: [
          { label: 'Background', name: 'checkbox.background' },
          { label: 'Foreground', name: 'checkbox.foreground' },
          { label: 'Border', name: 'checkbox.border' },
        ],
      },
    },
  ],
  [
    {
      title: 'Input',
      styles: {
        normal: [
          { label: 'Background', name: 'input.background' },
          { label: 'Foreground', name: 'input.foreground' },
          { label: 'Placeholder', name: 'input.placeholderForeground' },
          { label: 'Border', name: 'input.border' },
        ],
      },
    },
    {
      title: 'Message',
      styles: {
        info: [
          { label: 'Background', name: 'inputValidation.infoBackground' },
          { label: 'Foreground', name: 'inputValidation.infoForeground' },
          { label: 'Border', name: 'inputValidation.infoBorder' },
        ],
        warning: [
          { label: 'Background', name: 'inputValidation.warningBackground' },
          { label: 'Foreground', name: 'inputValidation.warningForeground' },
          { label: 'Border', name: 'inputValidation.warningBorder' },
        ],
        error: [
          { label: 'Background', name: 'inputValidation.errorBackground' },
          { label: 'Foreground', name: 'inputValidation.errorForeground' },
          { label: 'Border', name: 'inputValidation.errorBorder' },
        ],
      },
    },
    {
      title: 'Icon Button',
      styles: {
        hover: [{ label: 'Background', name: 'inputOption.hoverBackground' }],
        active: [
          { label: 'Background', name: 'inputOption.activeBackground' },
          { label: 'Foreground', name: 'inputOption.activeForeground' },
          { label: 'Border', name: 'inputOption.activeBorder' },
        ],
      },
    },
  ],
  [
    {
      title: 'Dropdown',
    },
    {
      title: 'Trigger',
      styles: {
        normal: [
          { label: 'Background', name: 'dropdown.background' },
          { label: 'Foreground', name: 'dropdown.foreground' },
          { label: 'Border', name: 'dropdown.border' },
        ],
      },
    },
    {
      title: 'Content',
      styles: {
        normal: [{ label: 'Background', name: 'dropdown.listBackground' }],
      },
    },
  ],
  [
    {
      title: 'Badge',
      styles: {
        normal: [
          { label: 'Background', name: 'badge.background' },
          { label: 'Foreground', name: 'badge.foreground' },
        ],
      },
    },
  ],
  [
    {
      title: 'List',
      styles: {
        normal: [{ label: 'Indent Stroke', name: 'tree.indentGuidesStroke' }],
      },
    },
    {
      title: 'Item',
      styles: {
        hover: [
          { label: 'Background', name: 'list.hoverBackground' },
          { label: 'Foreground', name: 'list.hoverForeground' },
        ],
        active: [
          { label: 'Background', name: 'list.inactiveSelectionBackground' },
          { label: 'Foreground', name: 'list.inactiveSelectionForeground' },
          { label: 'Icon', name: 'list.inactiveSelectionIconForeground' },
        ],
        focus: [
          { label: 'Background', name: 'list.inactiveFocusBackground' },
          { label: 'Foreground', name: 'list.focusForeground' },
          { label: 'Border', name: 'list.inactiveFocusOutline' },
        ],
        obscure: [{ label: 'Foreground', name: 'list.deemphasizedForeground' }],
        error: [{ label: 'Foreground', name: 'list.errorForeground' }],
        warning: [{ label: 'Foreground', name: 'list.warningForeground' }],
        drop: [{ label: 'Background', name: 'list.dropBackground' }],
      },
    },
    {
      title: 'Filter Widget',
      styles: {
        normal: [
          { label: 'Background', name: 'listFilterWidget.background' },
          { label: 'Border', name: 'listFilterWidget.outline' },
        ],
        'no-match': [{ label: 'Border', name: 'listFilterWidget.noMatchesOutline' }],
      },
    },
    {
      title: 'Filter Highlight',
      styles: {
        normal: [
          { label: 'Foreground', name: 'list.highlightForeground' },
          { label: 'Background', name: 'list.filterMatchBackground' },
          { label: 'Border', name: 'list.filterMatchBorder' },
        ],
        focus: [{ label: 'Foreground', name: 'list.focusHighlightForeground' }],
      },
    },
  ],
  [
    {
      title: 'Keybinding Label',
      styles: {
        normal: [
          { label: 'Background', name: 'keybindingLabel.background' },
          { label: 'Foreground', name: 'keybindingLabel.foreground' },
          { label: 'Border', name: 'keybindingLabel.border' },
          { label: 'Border Bottom', name: 'keybindingLabel.bottomBorder' },
        ],
      },
    },
  ],
];

const layouts = [
  [
    {
      title: 'Title Bar',
      styles: {
        normal: [
          { label: 'Background', name: 'titleBar.activeBackground' },
          { label: 'Foreground', name: 'titleBar.activeForeground' },
          { label: 'Border', name: 'titleBar.border' },
        ],
      },
    },
    {
      title: 'Menu Trigger',
      styles: {
        hover: [
          { label: 'Background', name: 'menubar.selectionBackground' },
          { label: 'Foreground', name: 'menubar.selectionForeground' },
          { label: 'Border', name: 'menubar.selectionBorder' },
        ],
      },
    },
    {
      title: 'Menu Content',
      styles: {
        normal: [
          { label: 'Background', name: 'menu.background' },
          { label: 'Foreground', name: 'menu.foreground' },
          { label: 'Border', name: 'menu.border' },
          { label: 'Separator', name: 'menu.separatorBackground' },
        ],
      },
    },
    {
      title: 'Menu Item',
      styles: {
        hover: [
          { label: 'Background', name: 'menu.selectionBackground' },
          { label: 'Foreground', name: 'menu.selectionForeground' },
          { label: 'Border', name: 'menu.selectionBorder' },
        ],
      },
    },
  ],
  [
    {
      title: 'Quick Picker',
      styles: {
        normal: [
          { label: 'Background', name: 'quickInput.background' },
          { label: 'Foreground', name: 'quickInput.foreground' },
          { label: 'Seperator', name: 'pickerGroup.border' },
        ],
      },
      preview: 'QUICK_PICKER',
    },
    {
      title: 'Title',
      styles: {
        normal: [{ label: 'Background', name: 'quickInputTitle.background' }],
      },
    },
    {
      title: 'List Item',
      styles: {
        normal: [{ label: 'Foreground', name: 'pickerGroup.foreground' }],
        focus: [
          { label: 'Background', name: 'quickInputList.focusBackground' },
          { label: 'Foreground', name: 'quickInputList.focusForeground' },
          { label: 'Icon', name: 'quickInputList.focusIconForeground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Activity Bar',
      styles: {
        normal: [
          { label: 'Background', name: 'activityBar.background' },
          { label: 'Border', name: 'activityBar.border' },
        ],
      },
    },
    {
      title: 'Item',
      styles: {
        normal: [{ label: 'Foreground', name: 'activityBar.inactiveForeground' }],
        active: [
          { label: 'Background', name: 'activityBar.activeBackground' },
          { label: 'Foreground', name: 'activityBar.foreground' },
          { label: 'Border', name: 'activityBar.activeBorder' },
        ],
        focus: [{ label: 'Border', name: 'activityBar.activeFocusBorder' }],
        drop: [{ label: 'Border', name: 'activityBar.dropBorder' }],
      },
    },
    {
      title: 'Badge',
      styles: {
        normal: [
          { label: 'Background', name: 'activityBarBadge.background' },
          { label: 'Foreground', name: 'activityBarBadge.foreground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Side Bar',
      styles: {
        normal: [
          { label: 'Background', name: 'sideBar.background' },
          { label: 'Foreground', name: 'sideBar.foreground' },
          { label: 'Border', name: 'sideBar.border' },
        ],
        drop: [{ label: 'Background', name: 'sideBar.dropBackground' }],
      },
    },
    {
      title: 'Title',
      styles: {
        normal: [{ label: 'Foreground', name: 'sideBarTitle.foreground' }],
      },
    },
    {
      title: 'Sections',
      styles: {
        normal: [{ label: 'Separator', name: 'sideBarSectionHeader.border' }],
      },
    },
    {
      title: 'Section Header',
      styles: {
        normal: [
          { label: 'Background', name: 'sideBarSectionHeader.background' },
          { label: 'Foreground', name: 'sideBarSectionHeader.foreground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Status Bar',
      styles: {
        normal: [
          { label: 'Background', name: 'statusBar.background' },
          { label: 'Foreground', name: 'statusBar.foreground' },
          { label: 'Border', name: 'statusBar.border' },
        ],
        debug: [
          { label: 'Background', name: 'statusBar.debuggingBackground' },
          { label: 'Foreground', name: 'statusBar.debuggingForeground' },
          { label: 'Border', name: 'statusBar.debuggingBorder' },
        ],
      },
    },
    {
      title: 'Item',
      styles: {
        hover: [{ label: 'Background', name: 'statusBarItem.hoverBackground' }],
        active: [{ label: 'Background', name: 'statusBarItem.activeBackground' }],
        prominent: [
          { label: 'Background', name: 'statusBarItem.prominentBackground' },
          { label: 'Foreground', name: 'statusBarItem.prominentForeground' },
        ],
        remote: [
          { label: 'Background', name: 'statusBarItem.remoteBackground' },
          { label: 'Foreground', name: 'statusBarItem.remoteForeground' },
        ],
        error: [
          { label: 'Background', name: 'statusBarItem.errorBackground' },
          { label: 'Foreground', name: 'statusBarItem.errorForeground' },
        ],
        warning: [
          { label: 'Background', name: 'statusBarItem.warningBackground' },
          { label: 'Foreground', name: 'statusBarItem.warningForeground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Extension',
    },
    {
      title: 'Button',
      styles: {
        normal: [
          { label: 'Background', name: 'extensionButton.prominentBackground' },
          { label: 'Foreground', name: 'extensionButton.prominentForeground' },
        ],
        hover: [{ label: 'Background', name: 'extensionButton.prominentHoverBackground' }],
      },
    },
    {
      title: 'Icons',
      styles: {
        normal: [
          { label: 'Star', name: 'extensionIcon.starForeground' },
          { label: 'Verified', name: 'extensionIcon.verifiedForeground' },
          { label: 'Pre-release', name: 'extensionIcon.preReleaseForeground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Panel',
      styles: {
        normal: [
          { label: 'Background', name: 'panel.background' },
          { label: 'Border', name: 'panel.border' },
        ],
        drop: [{ label: 'Border', name: 'panel.dropBorder' }],
      },
    },
    {
      title: 'Title',
      styles: {
        normal: [{ label: 'Foreground', name: 'panelTitle.inactiveForeground' }],
        active: [
          { label: 'Foreground', name: 'panelTitle.activeForeground' },
          { label: 'Border', name: 'panelTitle.activeBorder' },
        ],
      },
    },
    {
      title: 'Terminal',
      styles: {
        normal: [
          { label: 'Background', name: 'terminal.background' },
          { label: 'Foreground', name: 'terminal.foreground' },
          { label: 'Separator', name: 'terminal.border' },
          { label: 'Cursor', name: 'terminalCursor.foreground' },
        ],
        selection: [{ label: 'Background', name: 'terminal.selectionBackground' }],
        drop: [{ label: 'Background', name: 'terminal.dropBackground' }],
      },
    },
    {
      title: 'Terminal ANSI',
      styles: {
        normal: [
          { label: 'Black', name: 'terminal.ansiBlack' },
          { label: 'Blue', name: 'terminal.ansiBlue' },
          { label: 'Cyan', name: 'terminal.ansiCyan' },
          { label: 'Green', name: 'terminal.ansiGreen' },
          { label: 'Magenta', name: 'terminal.ansiMagenta' },
          { label: 'Red', name: 'terminal.ansiRed' },
          { label: 'White', name: 'terminal.ansiWhite' },
          { label: 'Yellow', name: 'terminal.ansiYellow' },
          { label: 'Bright Black', name: 'terminal.ansiBrightBlack' },
          { label: 'Bright Blue', name: 'terminal.ansiBrightBlue' },
          { label: 'Bright Cyan', name: 'terminal.ansiBrightCyan' },
          { label: 'Bright Green', name: 'terminal.ansiBrightGreen' },
          { label: 'Bright Magenta', name: 'terminal.ansiBrightMagenta' },
          { label: 'Bright Red', name: 'terminal.ansiBrightRed' },
          { label: 'Bright White', name: 'terminal.ansiBrightWhite' },
          { label: 'Bright Yellow', name: 'terminal.ansiBrightYellow' },
        ],
      },
    },
  ],
  [
    {
      title: 'Notification Center',
      styles: {
        normal: [
          { label: 'Background', name: 'notificationCenterHeader.background' },
          { label: 'Foreground', name: 'notificationCenterHeader.foreground' },
          { label: 'Border', name: 'notificationCenter.border' },
          { label: 'Separator', name: 'notifications.border' },
        ],
      },
    },
    {
      title: 'Item',
      styles: {
        normal: [
          { label: 'Background', name: 'notifications.background' },
          { label: 'Foreground', name: 'notifications.foreground' },
          { label: 'Link', name: 'notificationLink.foreground' },
          { label: 'Border', name: 'notificationToast.border' },
        ],
      },
    },
    {
      title: 'Icons',
      styles: {
        normal: [
          { label: 'Info', name: 'notificationsInfoIcon.foreground' },
          { label: 'Warning', name: 'notificationsWarningIcon.foreground' },
          { label: 'Error', name: 'notificationsErrorIcon.foreground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Minimap',
      styles: {
        normal: [{ label: 'Background', name: 'minimap.background' }],
      },
    },
    {
      title: 'Highlights',
      styles: {
        normal: [
          { label: 'Find Match', name: 'minimap.findMatchHighlight' },
          { label: 'Selection', name: 'minimap.selectionHighlight' },
          { label: 'Occurrence', name: 'minimap.selectionOccurrenceHighlight' },
          { label: 'Unicode', name: 'minimap.unicodeHighlight' },
          { label: 'Error', name: 'minimap.errorHighlight' },
          { label: 'Warning', name: 'minimap.warningHighlight' },
        ],
      },
    },
    {
      title: 'Slider',
      styles: {
        normal: [{ label: 'Background', name: 'minimapSlider.background' }],
        hover: [{ label: 'Background', name: 'minimapSlider.hoverBackground' }],
        active: [{ label: 'Background', name: 'minimapSlider.activeBackground' }],
      },
    },
  ],
  [
    {
      title: 'Editor',
      styles: {
        normal: [
          { label: 'Background', name: 'editor.background' },
          { label: 'Foreground', name: 'editor.foreground' },
          { label: 'Separator', name: 'editorGroup.border' },
        ],
        drop: [{ label: 'Background', name: 'editorGroup.dropBackground' }],
        empty: [{ label: 'Background', name: 'editorGroup.emptyBackground' }],
      },
    },
    {
      title: 'Header',
      styles: {
        normal: [
          { label: 'Background', name: 'editorGroupHeader.tabsBackground' },
          { label: 'Border', name: 'editorGroupHeader.tabsBorder' },
          { label: 'Separator', name: 'tab.border' },
        ],
      },
    },
    {
      title: 'Tab',
      styles: {
        normal: [
          { label: 'Background', name: 'tab.inactiveBackground' },
          { label: 'Foreground', name: 'tab.inactiveForeground' },
        ],
        hover: [
          { label: 'Background', name: 'tab.hoverBackground' },
          { label: 'Foreground', name: 'tab.hoverForeground' },
          { label: 'Border Bottom', name: 'tab.hoverBorder' },
        ],
        active: [
          { label: 'Background', name: 'tab.activeBackground' },
          { label: 'Foreground', name: 'tab.activeForeground' },
          { label: 'Border Bottom', name: 'tab.activeBorder' },
          { label: 'Border Top', name: 'tab.activeBorderTop' },
        ],
      },
    },
    {
      title: 'Body',
      styles: {
        normal: [
          { label: 'Line No', name: 'editorLineNumber.foreground' },
          { label: 'Cursor', name: 'editorCursor.foreground' },
        ],
        active: [{ label: 'Line No', name: 'editorLineNumber.activeForeground' }],
        selection: [
          { label: 'Background', name: 'editor.selectionBackground' },
          { label: 'Foreground', name: 'editor.selectionForeground' },
        ],
      },
    },
    {
      title: 'Highlight',
      styles: {
        word: [
          { label: 'Background', name: 'editor.wordHighlightBackground' },
          { label: 'Border', name: 'editor.wordHighlightBorder' },
        ],
        strong: [
          { label: 'Background', name: 'editor.wordHighlightStrongBackground' },
          { label: 'Border', name: 'editor.wordHighlightStrongBorder' },
        ],
        selection: [
          { label: 'Background', name: 'editor.selectionHighlightBackground' },
          { label: 'Border', name: 'editor.selectionHighlightBorder' },
        ],
      },
    },
    {
      title: 'Find Match',
      styles: {
        normal: [
          { label: 'Background', name: 'editor.findMatchHighlightBackground' },
          { label: 'Border', name: 'editor.findMatchHighlightBorder' },
        ],
        active: [
          { label: 'Background', name: 'editor.findMatchBackground' },
          { label: 'Border', name: 'editor.findMatchBorder' },
        ],
      },
    },
  ],
];

const pages = [
  [
    {
      title: 'Settings',
      styles: {
        normal: [{ label: 'Header', name: 'settings.headerForeground' }],
      },
    },
    {
      title: 'Row',
      styles: {
        normal: [{ label: 'Indicator', name: 'settings.modifiedItemIndicator' }],
        hover: [{ label: 'Background', name: 'settings.rowHoverBackground' }],
        focus: [
          { label: 'Background', name: 'settings.focusedRowBackground' },
          { label: 'Border', name: 'settings.focusedRowBorder' },
        ],
      },
    },
    {
      title: 'Select Trigger',
      styles: {
        normal: [
          { label: 'Background', name: 'settings.dropdownBackground' },
          { label: 'Foreground', name: 'settings.dropdownForeground' },
          { label: 'Border', name: 'settings.dropdownBorder' },
        ],
      },
    },
    {
      title: 'Checkbox',
      styles: {
        normal: [
          { label: 'Background', name: 'settings.checkboxBackground' },
          { label: 'Foreground', name: 'settings.checkboxForeground' },
          { label: 'Border', name: 'settings.checkboxBorder' },
        ],
      },
    },
    {
      title: 'Input',
      styles: {
        normal: [
          { label: 'Background', name: 'settings.textInputBackground' },
          { label: 'Foreground', name: 'settings.textInputForeground' },
          { label: 'Border', name: 'settings.textInputBorder' },
        ],
      },
    },
  ],
  [
    {
      title: 'Keyboard Shortcuts',
    },
    {
      title: 'Header',
      styles: {
        normal: [{ label: 'Background', name: 'keybindingTable.headerBackground' }],
      },
    },
    {
      title: 'Row',
      styles: {
        normal: [{ label: 'Background', name: 'keybindingTable.rowsBackground' }],
      },
    },
  ],
  [
    {
      title: 'Welcome',
      styles: {
        normal: [{ label: 'Background', name: 'welcomePage.background' }],
      },
    },
    {
      title: 'Progress',
      styles: {
        normal: [
          { label: 'Background', name: 'welcomePage.progress.background' },
          { label: 'Foreground', name: 'welcomePage.progress.foreground' },
        ],
      },
    },
    {
      title: 'Tile',
      styles: {
        normal: [
          { label: 'Background', name: 'welcomePage.tileBackground' },
          { label: 'Shadow', name: 'welcomePage.tileShadow' },
        ],
        hover: [{ label: 'Background', name: 'welcomePage.tileHoverBackground' }],
      },
    },
  ],
];

const others = [
  [
    {
      title: 'Git Decoration',
      styles: {
        normal: [
          { label: 'Add', name: 'gitDecoration.addedResourceForeground' },
          { label: 'Modify', name: 'gitDecoration.modifiedResourceForeground' },
          { label: 'Delete', name: 'gitDecoration.deletedResourceForeground' },
          { label: 'Rename', name: 'gitDecoration.renamedResourceForeground' },
          { label: 'Untrack', name: 'gitDecoration.untrackedResourceForeground' },
          { label: 'Ignore', name: 'gitDecoration.ignoredResourceForeground' },
          { label: 'Conflict', name: 'gitDecoration.conflictingResourceForeground' },
          { label: 'Submodule', name: 'gitDecoration.submoduleResourceForeground' },
        ],
        staged: [
          { label: 'Modify', name: 'gitDecoration.stageModifiedResourceForeground' },
          { label: 'Delete', name: 'gitDecoration.stageDeletedResourceForeground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Symbols',
      styles: {
        normal: [
          { label: 'Array', name: 'symbolIcon.arrayForeground' },
          { label: 'Boolean', name: 'symbolIcon.booleanForeground' },
          { label: 'Class', name: 'symbolIcon.classForeground' },
          { label: 'Color', name: 'symbolIcon.colorForeground' },
          { label: 'Constant', name: 'symbolIcon.constantForeground' },
          { label: 'Constructor', name: 'symbolIcon.constructorForeground' },
          { label: 'Enum', name: 'symbolIcon.enumeratorForeground' },
          { label: 'Enum Member', name: 'symbolIcon.enumeratorMemberForeground' },
          { label: 'Event', name: 'symbolIcon.eventForeground' },
          { label: 'Field', name: 'symbolIcon.fieldForeground' },
          { label: 'File', name: 'symbolIcon.fileForeground' },
          { label: 'Folder', name: 'symbolIcon.folderForeground' },
          { label: 'Function', name: 'symbolIcon.functionForeground' },
          { label: 'Interface', name: 'symbolIcon.interfaceForeground' },
          { label: 'Key', name: 'symbolIcon.keyForeground' },
          { label: 'Keyword', name: 'symbolIcon.keywordForeground' },
          { label: 'Method', name: 'symbolIcon.methodForeground' },
          { label: 'Module', name: 'symbolIcon.moduleForeground' },
          { label: 'Namespace', name: 'symbolIcon.namespaceForeground' },
          { label: 'Null', name: 'symbolIcon.nullForeground' },
          { label: 'Number', name: 'symbolIcon.numberForeground' },
          { label: 'Object', name: 'symbolIcon.objectForeground' },
          { label: 'Operator', name: 'symbolIcon.operatorForeground' },
          { label: 'Package', name: 'symbolIcon.packageForeground' },
          { label: 'Property', name: 'symbolIcon.propertyForeground' },
          { label: 'Reference', name: 'symbolIcon.referenceForeground' },
          { label: 'Snippet', name: 'symbolIcon.snippetForeground' },
          { label: 'String', name: 'symbolIcon.stringForeground' },
          { label: 'Struct', name: 'symbolIcon.structForeground' },
          { label: 'Text', name: 'symbolIcon.textForeground' },
          { label: 'Type parameter', name: 'symbolIcon.typeParameterForeground' },
          { label: 'Unit', name: 'symbolIcon.unitForeground' },
          { label: 'Variable', name: 'symbolIcon.variableForeground' },
        ],
      },
    },
  ],
];

const editor = [
  [
    {
      title: 'Breadcrumb',
      styles: {
        normal: [{ label: 'Background', name: 'breadcrumb.background' }],
      },
    },
    {
      title: 'Item',
      styles: {
        normal: [{ label: 'Foreground', name: 'breadcrumb.foreground' }],
        hover: [{ label: 'Foreground', name: 'breadcrumb.focusForeground' }],
        active: [{ label: 'Foreground', name: 'breadcrumb.activeSelectionForeground' }],
      },
    },
    {
      title: 'Picker',
      styles: {
        normal: [{ label: 'Background', name: 'breadcrumbPicker.background' }],
      },
    },
  ],
];

export default { components, layouts, pages, others };
