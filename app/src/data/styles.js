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
          { label: 'Scroll Shadow', name: 'scrollbar.shadow' },
          { label: 'Slider', name: 'scrollbarSlider.background' },
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
        code: [{ label: 'Foreground', name: 'textPreformat.foreground' }],
        error: [{ label: 'Foreground', name: 'errorForeground' }],
        selection: [{ label: 'Background', name: 'selection.background' }],
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
      styles: {
        normal: [
          { label: 'Background', name: 'button.background' },
          { label: 'Foreground', name: 'button.foreground' },
          { label: 'Border', name: 'button.border' },
        ],
        hover: [{ label: 'Background', name: 'button.hoverBackground' }],
      },
      preview: 'BUTTONS',
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
      // preview: 'INPUT',
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
      styles: {
        normal: [
          { label: 'Background', name: 'dropdown.background' },
          { label: 'Border', name: 'dropdown.border' },
        ],
      },
    },
    {
      title: 'Trigger',
      styles: {
        normal: [{ label: 'Foreground', name: 'dropdown.foreground' }],
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
        normal: [{ label: 'Indent', name: 'tree.indentGuidesStroke' }],
      },
    },
    {
      title: 'Item',
      styles: {
        normal: [{ label: 'Highlight', name: 'list.highlightForeground' }],
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
          { label: 'Highlight', name: 'list.focusHighlightForeground' },
        ],
        warning: [{ label: 'Foreground', name: 'list.warningForeground' }],
        error: [{ label: 'Foreground', name: 'list.errorForeground' }],
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
      title: 'Filter Match',
      styles: {
        normal: [
          { label: 'Background', name: 'list.filterMatchBackground' },
          { label: 'Border', name: 'list.filterMatchBorder' },
        ],
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
          { label: 'Border Btm', name: 'keybindingLabel.bottomBorder' },
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
      title: 'Menu Content Item',
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
      title: 'Section Header',
      styles: {
        normal: [
          { label: 'Background', name: 'sideBarSectionHeader.background' },
          { label: 'Foreground', name: 'sideBarSectionHeader.foreground' },
          { label: 'Separator', name: 'sideBarSectionHeader.border' },
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
        warning: [
          { label: 'Background', name: 'statusBarItem.warningBackground' },
          { label: 'Foreground', name: 'statusBarItem.warningForeground' },
        ],
        error: [
          { label: 'Background', name: 'statusBarItem.errorBackground' },
          { label: 'Foreground', name: 'statusBarItem.errorForeground' },
        ],
      },
      preview: 'STATUS_BAR_ITEM',
    },
  ],
  [
    {
      title: 'Quick Pick',
      styles: {
        normal: [
          { label: 'Background', name: 'quickInput.background' },
          { label: 'Foreground', name: 'quickInput.foreground' },
          { label: 'Seperator', name: 'pickerGroup.border' },
        ],
      },
      preview: 'QUICK_PICK',
    },
    {
      title: 'Title',
      styles: {
        normal: [{ label: 'Background', name: 'quickInputTitle.background' }],
      },
    },
    {
      title: 'Label',
      styles: {
        normal: [{ label: 'Foreground', name: 'pickerGroup.foreground' }],
      },
    },
    {
      title: 'Item',
      styles: {
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
      title: 'Icons',
      styles: {
        normal: [
          { label: 'Info', name: 'problemsInfoIcon.foreground' },
          { label: 'Warning', name: 'problemsWarningIcon.foreground' },
          { label: 'Error', name: 'problemsErrorIcon.foreground' },
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
      preview: 'NOTIFICATION_CENTER',
    },
    {
      title: 'Toast',
      styles: {
        normal: [
          { label: 'Background', name: 'notifications.background' },
          { label: 'Foreground', name: 'notifications.foreground' },
          { label: 'Link', name: 'notificationLink.foreground' },
          { label: 'Border', name: 'notificationToast.border' },
        ],
      },
      preview: 'TOAST',
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
];

const editors = [
  [
    {
      title: 'Root',
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
  ],
  [
    {
      title: 'Pane',
      styles: {
        normal: [{ label: 'Background', name: 'editorPane.background' }],
      },
    },
  ],
  [
    {
      title: 'Tabs',
      styles: {
        normal: [
          { label: 'Background', name: 'editorGroupHeader.tabsBackground' },
          { label: 'Border', name: 'editorGroupHeader.tabsBorder' },
          { label: 'Separator', name: 'tab.border' },
        ],
      },
    },
    {
      title: 'Item',
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
  ],
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
      title: 'Dropdown',
      styles: {
        normal: [{ label: 'Background', name: 'breadcrumbPicker.background' }],
      },
    },
  ],
  [
    {
      title: 'Body',
      styles: {
        normal: [
          { label: 'Indent', name: 'editorIndentGuide.background' },
          { label: 'Cursor', name: 'editorCursor.foreground' },
          { label: 'Whitespace', name: 'editorWhitespace.foreground' },
          { label: 'Light Bulb', name: 'editorLightBulb.foreground' },
        ],
        active: [{ label: 'Indent', name: 'editorIndentGuide.activeBackground' }],
        selection: [{ label: 'Background', name: 'editor.selectionBackground' }],
      },
    },
    {
      title: 'Line',
      styles: {
        active: [
          { label: 'Background', name: 'editor.lineHighlightBackground' },
          { label: 'Border', name: 'editor.lineHighlightBorder' },
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
        bracket: [
          { label: 'Background', name: 'editorBracketMatch.background' },
          { label: 'Border', name: 'editorBracketMatch.border' },
        ],
        occurence: [
          { label: 'Background', name: 'editor.selectionHighlightBackground' },
          { label: 'Border', name: 'editor.selectionHighlightBorder' },
        ],
      },
    },
    // {
    //   title: 'Inlay Hint',
    //   styles: {
    //     normal: [
    //       { label: 'Background', name: 'editorInlayHint.background' },
    //       { label: 'Foreground', name: 'editorInlayHint.foreground' },
    //     ],
    //     type: [
    //       { label: 'Background', name: 'editorInlayHint.typeBackground' },
    //       { label: 'Foreground', name: 'editorInlayHint.typeForeground' },
    //     ],
    //     parameter: [
    //       { label: 'Background', name: 'editorInlayHint.parameterBackground' },
    //       { label: 'Foreground', name: 'editorInlayHint.parameterForeground' },
    //     ],
    //   },
    // },
  ],
  [
    {
      title: 'Gutter',
      styles: {
        normal: [
          { label: 'Background', name: 'editorGutter.background' },
          { label: 'Fold Icon', name: 'editorGutter.foldingControlForeground' },
        ],
      },
    },
    {
      title: 'Line No',
      styles: {
        normal: [{ label: 'Foreground', name: 'editorLineNumber.foreground' }],
        active: [{ label: 'Foreground', name: 'editorLineNumber.activeForeground' }],
      },
    },
  ],
  [
    {
      title: 'Minimap',
      styles: {
        normal: [
          { label: 'Background', name: 'minimap.background' },
          { label: 'Slider', name: 'minimapSlider.background' },
        ],
        hover: [{ label: 'Slider', name: 'minimapSlider.hoverBackground' }],
        active: [{ label: 'Slider', name: 'minimapSlider.activeBackground' }],
      },
    },
  ],
  [
    {
      title: 'Overview Ruler',
      styles: {
        normal: [
          { label: 'Background', name: 'editorOverviewRuler.background' },
          { label: 'Border', name: 'editorOverviewRuler.border' },
        ],
      },
    },
  ],
  [
    {
      title: 'Widget',
      styles: {
        normal: [
          { label: 'Background', name: 'editorWidget.background' },
          { label: 'Foreground', name: 'editorWidget.foreground' },
          { label: 'Border', name: 'editorWidget.border' },
        ],
      },
    },
  ],
  [
    {
      title: 'Suggestions',
      styles: {
        normal: [
          { label: 'Background', name: 'editorSuggestWidget.background' },
          { label: 'Foreground', name: 'editorSuggestWidget.foreground' },
          { label: 'Border', name: 'editorSuggestWidget.border' },
        ],
      },
    },
    {
      title: 'Item',
      styles: {
        normal: [{ label: 'Highlight', name: 'editorSuggestWidget.highlightForeground' }],
        active: [
          { label: 'Background', name: 'editorSuggestWidget.selectedBackground' },
          { label: 'Foreground', name: 'editorSuggestWidget.selectedForeground' },
          { label: 'Icon', name: 'editorSuggestWidget.selectedIconForeground' },
          { label: 'Highlight', name: 'editorSuggestWidget.focusHighlightForeground' },
        ],
      },
    },
  ],
  [
    { title: 'Tooltip' },
    {
      title: 'Trigger',
      styles: {
        hover: [{ label: 'Background', name: 'editor.hoverHighlightBackground' }],
      },
    },
    {
      title: 'Content',
      styles: {
        normal: [
          { label: 'Background', name: 'editorHoverWidget.background' },
          { label: 'Foreground', name: 'editorHoverWidget.foreground' },
          { label: 'Border', name: 'editorHoverWidget.border' },
          { label: 'Highlight', name: 'editorHoverWidget.highlightForeground' },
        ],
      },
    },
  ],
  // [
  //   {
  //     title: 'Navigator',
  //     styles: {
  //       normal: [{ label: 'Background', name: 'editorMarkerNavigation.background' }],
  //     },
  //   },
  //   {
  //     title: 'Header',
  //     styles: {
  //       info: [{ label: 'Background', name: 'editorMarkerNavigationInfo.headerBackground' }],
  //       warning: [{ label: 'Background', name: 'editorMarkerNavigationWarning.headerBackground' }],
  //       error: [{ label: 'Background', name: 'editorMarkerNavigationError.headerBackground' }],
  //     },
  //   },
  //   {
  //     title: 'Item',
  //     styles: {
  //       info: [{ label: 'Background', name: 'editorMarkerNavigationInfo.background' }],
  //       warning: [{ label: 'Background', name: 'editorMarkerNavigationWarning.background' }],
  //       error: [{ label: 'Background', name: 'editorMarkerNavigationError.background' }],
  //     },
  //   },
  // ],
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
      title: 'Dropdown Trigger',
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
  [
    {
      title: 'Search Editor',
    },
    {
      title: 'Find Match',
      styles: {
        normal: [
          { label: 'Background', name: 'searchEditor.findMatchBackground' },
          { label: 'Border', name: 'searchEditor.findMatchBorder' },
        ],
      },
    },
    {
      title: 'Input',
      styles: {
        normal: [{ label: 'Border', name: 'searchEditor.textInputBorder' }],
      },
    },
  ],
];

const syntax = [
  [
    {
      title: 'Linter',
      styles: {
        info: [
          { label: 'Background', name: 'editorInfo.background' },
          { label: 'Border', name: 'editorInfo.border' },
          { label: 'Wavy', name: 'editorInfo.foreground' },
        ],
        warning: [
          { label: 'Background', name: 'editorWarning.background' },
          { label: 'Border', name: 'editorWarning.border' },
          { label: 'Wavy', name: 'editorWarning.foreground' },
        ],
        error: [
          { label: 'Background', name: 'editorError.background' },
          { label: 'Border', name: 'editorError.border' },
          { label: 'Wavy', name: 'editorError.foreground' },
        ],
        unused: [{ label: 'Border', name: 'editorUnnecessaryCode.border' }],
        hint: [
          { label: 'Foreground', name: 'editorHint.foreground' },
          { label: 'Border', name: 'editorHint.border' },
        ],
      },
    },
  ],
  [
    {
      title: 'Variable',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.var_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$variable_foreground' },
          { label: 'Font Style', name: '$variable_fontStyle', type: 'select' },
        ],
        parameter: [
          { label: 'Foreground', name: '$variable.parameter_foreground' },
          { label: 'Font Style', name: '$variable.parameter_fontStyle', type: 'select' },
        ],
        language: [
          { label: 'Foreground', name: '$variable.language_foreground' },
          { label: 'Font Style', name: '$variable.language_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Value',
      styles: {
        normal: [
          { label: 'Foreground', name: '$constant_foreground' },
          { label: 'Font Style', name: '$constant_fontStyle', type: 'select' },
        ],
        num: [
          { label: 'Foreground', name: '$constant.numeric_foreground' },
          { label: 'Font Style', name: '$constant.numeric_fontStyle', type: 'select' },
        ],
        str: [
          { label: 'Foreground', name: '$string_foreground' },
          { label: 'Font Style', name: '$string_fontStyle', type: 'select' },
        ],
        esc: [
          { label: 'Foreground', name: '$constant.character.escape_foreground' },
          { label: 'Font Style', name: '$constant.character.escape_fontStyle', type: 'select' },
        ],
        color: [
          { label: 'Foreground', name: '$constant.other.color_foreground' },
          { label: 'Font Style', name: '$constant.other.color_fontStyle', type: 'select' },
        ],
        regex: [
          { label: 'Foreground', name: '$string.regexp_foreground' },
          { label: 'Font Style', name: '$string.regexp_fontStyle', type: 'select' },
        ],
        language: [
          { label: 'Foreground', name: '$constant.language_foreground' },
          { label: 'Font Style', name: '$constant.language_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Type',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.type_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.type_foreground' },
          { label: 'Font Style', name: '$entity.name.type_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Enum',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.enum_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.type.enum_foreground' },
          { label: 'Font Style', name: '$entity.name.type.enum_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Interface',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.interface_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.type.interface_foreground' },
          { label: 'Font Style', name: '$entity.name.type.interface_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Class',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.class_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.type.class_foreground' },
          { label: 'Font Style', name: '$entity.name.type.class_fontStyle', type: 'select' },
        ],
        super: [
          { label: 'Foreground', name: '$entity.other.inherited-class_foreground' },
          { label: 'Font Style', name: '$entity.other.inherited-class_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'New Keyword',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword.operator.new_foreground' },
          { label: 'Font Style', name: '$keyword.operator.new_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Function',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.function_fontStyle', type: 'select' }],
        invoke: [{ label: 'Font Style', name: '$meta.function-call_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.function_foreground' },
          { label: 'Font Style', name: '$entity.name.function_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Tag',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.tag_fontStyle', type: 'select' }],
      },
    },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name.tag_foreground' },
          { label: 'Font Style', name: '$entity.name.tag_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Attribute',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.other.attribute-name_foreground' },
          { label: 'Font Style', name: '$entity.other.attribute-name_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Import',
      styles: {
        normal: [{ label: 'Font Style', name: '$meta.import_fontStyle', type: 'select' }],
      },
    },
  ],
  [
    {
      title: 'Keyword',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword_foreground' },
          { label: 'Font Style', name: '$keyword_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Operator',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword.operator_foreground' },
          { label: 'Font Style', name: '$keyword.operator_fontStyle', type: 'select' },
        ],
        arithmetic: [
          { label: 'Foreground', name: '$keyword.operator.arithmetic_foreground' },
          { label: 'Font Style', name: '$keyword.operator.arithmetic_fontStyle', type: 'select' },
        ],
        assignment: [
          { label: 'Foreground', name: '$keyword.operator.assignment_foreground' },
          { label: 'Font Style', name: '$keyword.operator.assignment_fontStyle', type: 'select' },
        ],
        bitwise: [
          { label: 'Foreground', name: '$keyword.operator.bitwise_foreground' },
          { label: 'Font Style', name: '$keyword.operator.bitwise_fontStyle', type: 'select' },
        ],
        logical: [
          { label: 'Foreground', name: '$keyword.operator.logical_foreground' },
          { label: 'Font Style', name: '$keyword.operator.logical_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Declaration',
      styles: {
        normal: [
          { label: 'Foreground', name: '$storage.type_foreground' },
          { label: 'Font Style', name: '$storage.type_fontStyle', type: 'select' },
        ],
        modifier: [
          { label: 'Foreground', name: '$storage.modifier_foreground' },
          { label: 'Font Style', name: '$storage.modifier_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Punctuation',
      styles: {
        normal: [
          { label: 'Foreground', name: '$punctuation_foreground' },
          { label: 'Font Style', name: '$punctuation_fontStyle', type: 'select' },
        ],
        string: [
          { label: 'Foreground', name: '$punctuation.definition.string_foreground' },
          { label: 'Font Style', name: '$punctuation.definition.string_fontStyle', type: 'select' },
        ],
        separator: [
          { label: 'Foreground', name: '$punctuation.separator_foreground' },
          { label: 'Font Style', name: '$punctuation.separator_fontStyle', type: 'select' },
        ],
        accessor: [
          { label: 'Foreground', name: '$punctuation.accessor_foreground' },
          { label: 'Font Style', name: '$punctuation.accessor_fontStyle', type: 'select' },
        ],
        terminator: [
          { label: 'Foreground', name: '$punctuation.terminator_foreground' },
          { label: 'Font Style', name: '$punctuation.terminator_fontStyle', type: 'select' },
        ],
        tag: [
          { label: 'Foreground', name: '$punctuation.definition.tag_foreground' },
          { label: 'Font Style', name: '$punctuation.definition.tag_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Colorizer',
      styles: {
        normal: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground1' }],
        '2nd': [{ label: 'Foreground', name: 'editorBracketHighlight.foreground2' }],
        '3rd': [{ label: 'Foreground', name: 'editorBracketHighlight.foreground3' }],
        '4th': [{ label: 'Foreground', name: 'editorBracketHighlight.foreground4' }],
        '5th': [{ label: 'Foreground', name: 'editorBracketHighlight.foreground5' }],
        '6th': [{ label: 'Foreground', name: 'editorBracketHighlight.foreground6' }],
      },
    },
  ],
  [
    {
      title: 'Comment',
      styles: {
        normal: [
          { label: 'Foreground', name: '$comment_foreground' },
          { label: 'Font Style', name: '$comment_fontStyle', type: 'select' },
        ],
        block: [
          { label: 'Foreground', name: '$comment.block_foreground' },
          { label: 'Font Style', name: '$comment.block_fontStyle', type: 'select' },
        ],
      },
    },
  ],
];

const languages = [
  [
    {
      title: 'Markdown',
      styles: {
        normal: [
          { label: 'Foreground', name: '$markup_foreground' },
          { label: 'Font Style', name: '$markup_fontStyle', type: 'select' },
        ],
        bold: [
          { label: 'Foreground', name: '$markup.bold_foreground' },
          { label: 'Font Style', name: '$markup.bold_fontStyle', type: 'select' },
        ],
        italic: [
          { label: 'Foreground', name: '$markup.italic_foreground' },
          { label: 'Font Style', name: '$markup.italic_fontStyle', type: 'select' },
        ],
        link: [
          { label: 'Foreground', name: '$markup.underline.link_foreground' },
          { label: 'Font Style', name: '$markup.underline.link_fontStyle', type: 'select' },
        ],
        quote: [
          { label: 'Foreground', name: '$markup.quote_foreground' },
          { label: 'Font Style', name: '$markup.quote_fontStyle', type: 'select' },
        ],
        list: [
          { label: 'Foreground', name: '$markup.list_foreground' },
          { label: 'Font Style', name: '$markup.list_fontStyle', type: 'select' },
        ],
        heading: [
          { label: 'Foreground', name: '$markup.heading_foreground' },
          { label: 'Font Style', name: '$markup.heading_fontStyle', type: 'select' },
        ],
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
          { label: 'Added', name: 'gitDecoration.addedResourceForeground' },
          { label: 'Modified', name: 'gitDecoration.modifiedResourceForeground' },
          { label: 'Deleted', name: 'gitDecoration.deletedResourceForeground' },
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
      title: 'Diff Editor',
      styles: {
        normal: [
          { label: 'Separator', name: 'diffEditor.border' },
          { label: 'Stripe', name: 'diffEditor.diagonalFill' },
        ],
      },
    },
    {
      title: 'Text Highlight',
      styles: {
        added: [
          { label: 'Background', name: 'diffEditor.insertedTextBackground' },
          { label: 'Border', name: 'diffEditor.insertedTextBorder' },
        ],
        deleted: [
          { label: 'Background', name: 'diffEditor.removedTextBackground' },
          { label: 'Border', name: 'diffEditor.removedTextBorder' },
        ],
      },
    },
    {
      title: 'Gutter Highlight',
      styles: {
        added: [{ label: 'Background', name: 'diffEditorGutter.insertedLineBackground' }],
        deleted: [{ label: 'Background', name: 'diffEditorGutter.removedLineBackground' }],
      },
    },
  ],
  [
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
        ],
        bright: [
          { label: 'Black', name: 'terminal.ansiBrightBlack' },
          { label: 'Blue', name: 'terminal.ansiBrightBlue' },
          { label: 'Cyan', name: 'terminal.ansiBrightCyan' },
          { label: 'Green', name: 'terminal.ansiBrightGreen' },
          { label: 'Magenta', name: 'terminal.ansiBrightMagenta' },
          { label: 'Red', name: 'terminal.ansiBrightRed' },
          { label: 'White', name: 'terminal.ansiBrightWhite' },
          { label: 'Yellow', name: 'terminal.ansiBrightYellow' },
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
          { label: 'Parameter', name: 'symbolIcon.typeParameterForeground' },
          { label: 'Unit', name: 'symbolIcon.unitForeground' },
          { label: 'Variable', name: 'symbolIcon.variableForeground' },
        ],
      },
    },
  ],
];

export default { components, layouts, editors, syntax, pages, others };
