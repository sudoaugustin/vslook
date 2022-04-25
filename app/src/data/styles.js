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
    { title: 'Preformat', styles: { normal: [{ label: 'Foreground', name: 'textPreformat.foreground' }] } },
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
  ],
  [
    {
      title: 'Toolbar',
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
        obscure: [{ label: 'Foreground', name: 'list.deemphasizedForeground' }],
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
      title: 'List Item',
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
      title: 'Problem Icons',
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
      title: 'Editor',
      styles: {
        normal: [{ label: 'Whitespace', name: 'editorWhitespace.foreground' }],
        selection: [
          { label: 'Background', name: 'editor.selectionBackground' },
          { label: 'Foreground', name: 'editor.selectionForeground' },
        ],
      },
    },
    {
      title: 'Indent',
      styles: {
        normal: [{ label: 'Background', name: 'editorIndentGuide.background' }],
        active: [{ label: 'Background', name: 'editorIndentGuide.activeBackground' }],
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
      title: 'Light Bulb',
      styles: {
        normal: [{ label: 'Foreground', name: 'editorLightBulb.foreground' }],
        'auto-fix': [{ label: 'Foreground', name: 'editorLightBulbAutoFix.foreground' }],
      },
    },
    {
      title: 'Cursor',
      styles: {
        normal: [
          { label: 'Background', name: 'editorCursor.foreground' },
          { label: 'Foreground', name: 'editorCursor.background' },
        ],
      },
    },
    {
      title: 'Highlight',
      styles: {
        selection: [
          { label: 'Background', name: 'editor.selectionHighlightBackground' },
          { label: 'Border', name: 'editor.selectionHighlightBorder' },
        ],
        hover: [{ label: 'Background', name: 'editor.hoverHighlightBackground' }],
        word: [
          { label: 'Background', name: 'editor.wordHighlightBackground' },
          { label: 'Border', name: 'editor.wordHighlightBorder' },
        ],
        strong: [
          { label: 'Background', name: 'editor.wordHighlightStrongBackground' },
          { label: 'Border', name: 'editor.wordHighlightStrongBorder' },
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
      title: 'Bracket Pair',
      styles: {
        active: [
          { label: 'Background', name: 'editorBracketMatch.background' },
          { label: 'Border', name: 'editorBracketMatch.border' },
        ],
      },
    },
    {
      title: 'Colorizer',
      styles: {
        1: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground1' }],
        2: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground2' }],
        3: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground3' }],
        4: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground4' }],
        5: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground5' }],
        6: [{ label: 'Foreground', name: 'editorBracketHighlight.foreground6' }],
      },
    },
  ],
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
      },
    },
    {
      title: 'Unused Code',
      styles: { unused: [{ label: 'Border', name: 'editorUnnecessaryCode.border' }] },
    },
    {
      title: 'Hint',
      styles: {
        normal: [
          { label: 'Foreground', name: 'editorHint.foreground' },
          { label: 'Border', name: 'editorHint.border' },
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
      title: 'Slider',
      styles: {
        normal: [{ label: 'Background', name: 'minimapSlider.background' }],
        hover: [{ label: 'Background', name: 'minimapSlider.hoverBackground' }],
        active: [{ label: 'Background', name: 'minimapSlider.activeBackground' }],
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
  ],
  [
    {
      title: 'Gutter',
      styles: {
        normal: [{ label: 'Background', name: 'editorGutter.background' }],
      },
    },
    {
      title: 'Line No',
      styles: {
        normal: [{ label: 'Foreground', name: 'editorLineNumber.foreground' }],
        active: [{ label: 'Foreground', name: 'editorLineNumber.activeForeground' }],
      },
    },
    {
      title: 'Highlights',
      styles: {
        normal: [
          { label: 'Modify', name: 'editorGutter.modifiedBackground' },
          { label: 'Add', name: 'editorGutter.addedBackground' },
          { label: 'Delete', name: 'editorGutter.deletedBackground' },
          { label: 'Comment', name: 'editorGutter.commentRangeForeground' },
          { label: 'Fold Control', name: 'editorGutter.foldingControlForeground' },
        ],
      },
    },
  ],
  [
    {
      title: 'Overview',
      styles: {
        normal: [
          { label: 'Background', name: 'editorOverviewRuler.background' },
          { label: 'Border', name: 'editorOverviewRuler.border' },
        ],
      },
    },
    {
      title: 'Highlights',
      styles: {
        normal: [
          { label: 'Find Match', name: 'editorOverviewRuler.findMatchForeground' },
          { label: 'Range', name: 'editorOverviewRuler.rangeHighlightForeground' },
          { label: 'Selection', name: 'editorOverviewRuler.selectionHighlightForeground' },
          { label: 'Word', name: 'editorOverviewRuler.wordHighlightForeground' },
          { label: 'Strong', name: 'editorOverviewRuler.wordHighlightStrongForeground' },
          { label: 'Modify', name: 'editorOverviewRuler.modifiedForeground' },
          { label: 'Add', name: 'editorOverviewRuler.addedForeground' },
          { label: 'Delete', name: 'editorOverviewRuler.deletedForeground' },
          { label: 'Info', name: 'editorOverviewRuler.infoForeground' },
          { label: 'Warning', name: 'editorOverviewRuler.warningForeground' },
          { label: 'Error', name: 'editorOverviewRuler.errorForeground' },
          { label: 'Bracket', name: 'editorOverviewRuler.bracketMatchForeground' },
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
        ],
        focus: [{ label: 'Highlight', name: 'editorSuggestWidget.focusHighlightForeground' }],
      },
    },
  ],
  [
    {
      title: 'Hover Card',
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
  [
    {
      title: 'Navigator',
      styles: {
        normal: [{ label: 'Background', name: 'editorMarkerNavigation.background' }],
      },
    },
    {
      title: 'Header',
      styles: {
        info: [{ label: 'Background', name: 'editorMarkerNavigationInfo.headerBackground' }],
        error: [{ label: 'Background', name: 'editorMarkerNavigationError.headerBackground' }],
        warning: [{ label: 'Background', name: 'editorMarkerNavigationWarning.headerBackground' }],
      },
    },
    {
      title: 'Item',
      styles: {
        info: [{ label: 'Background', name: 'editorMarkerNavigationInfo.background' }],
        error: [{ label: 'Background', name: 'editorMarkerNavigationError.background' }],
        warning: [{ label: 'Background', name: 'editorMarkerNavigationWarning.background' }],
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
        add: [
          { label: 'Background', name: 'diffEditor.insertedTextBackground' },
          { label: 'Border', name: 'diffEditor.insertedTextBorder' },
        ],
        delete: [
          { label: 'Background', name: 'diffEditor.removedTextBackground' },
          { label: 'Border', name: 'diffEditor.removedTextBorder' },
        ],
      },
    },
    {
      title: 'Line Highlight',
      styles: {
        add: [{ label: 'Background', name: 'diffEditor.insertedLineBackground' }],
        delete: [{ label: 'Background', name: 'diffEditor.removedLineBackground' }],
      },
    },
    {
      title: 'Gutter Highlights',
      styles: {
        normal: [
          { label: 'Add', name: 'diffEditorGutter.insertedLineBackground' },
          { label: 'Delete', name: 'diffEditorGutter.removedLineBackground' },
        ],
      },
    },
    {
      title: 'Overview Highlights',
      styles: {
        normal: [
          { label: 'Add', name: 'diffEditorOverview.insertedLineBackground' },
          { label: 'Delete', name: 'diffEditorOverview.removedLineBackground' },
        ],
      },
    },
  ],
];

const syntax = [
  [
    {
      title: 'Comment',
      styles: {
        normal: [
          { label: 'Foreground', name: '$comment_foreground' },
          { label: 'Font', name: '$comment_fontStyle', type: 'select' },
        ],
        block: [
          { label: 'Foreground', name: '$comment.block_foreground' },
          { label: 'Font', name: '$comment.block_fontStyle', type: 'select' },
        ],
        document: [
          { label: 'Foreground', name: '$comment.block.documentation_foreground' },
          { label: 'Font', name: '$comment.block.documentation_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Constant',
      styles: {
        normal: [
          { label: 'Foreground', name: '$constant_foreground' },
          { label: 'Font', name: '$constant_fontStyle', type: 'select' },
        ],
        regexp: [
          { label: 'Foreground', name: '$constant.regexp_foreground' },
          { label: 'Font', name: '$constant.regexp_fontStyle', type: 'select' },
        ],
        color: [
          { label: 'Foreground', name: '$constant.rgb-value_foreground' },
          { label: 'Font', name: '$constant.rgb-value_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Character',
      styles: {
        normal: [
          { label: 'Foreground', name: '$constant.character_foreground' },
          { label: 'Font', name: '$constant.character_fontStyle', type: 'select' },
        ],
        escape: [
          { label: 'Foreground', name: '$constant.character.escape_foreground' },
          { label: 'Font', name: '$constant.character.escape_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Number',
      styles: {
        normal: [
          { label: 'Foreground', name: '$constant.numeric_foreground' },
          { label: 'Font', name: '$constant.numeric_fontStyle', type: 'select' },
        ],
        int: [
          { label: 'Foreground', name: '$constant.numeric.integer_foreground' },
          { label: 'Font', name: '$constant.numeric.integer_fontStyle', type: 'select' },
        ],
        float: [
          { label: 'Foreground', name: '$constant.numeric.float_foreground' },
          { label: 'Font', name: '$constant.numeric.float_fontStyle', type: 'select' },
        ],
        octal: [
          { label: 'Foreground', name: '$constant.numeric.octal_foreground' },
          { label: 'Font', name: '$constant.numeric.octal_fontStyle', type: 'select' },
        ],
        hex: [
          { label: 'Foreground', name: '$constant.numeric.hex_foreground' },
          { label: 'Font', name: '$constant.numeric.hex_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Emphasis',
      styles: {
        normal: [
          { label: 'Foreground', name: '$emphasis_foreground' },
          { label: 'Font', name: '$emphasis_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    { title: 'Entity' },
    {
      title: 'Name',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.name_foreground' },
          { label: 'Font', name: '$entity.name_fontStyle', type: 'select' },
        ],
        class: [
          { label: 'Foreground', name: '$entity.name.class_foreground' },
          { label: 'Font', name: '$entity.name.class_fontStyle', type: 'select' },
        ],
        func: [
          { label: 'Foreground', name: '$entity.name.function_foreground' },
          { label: 'Font', name: '$entity.name.function_fontStyle', type: 'select' },
        ],
        method: [
          { label: 'Foreground', name: '$entity.name.method_foreground' },
          { label: 'Font', name: '$entity.name.method_fontStyle', type: 'select' },
        ],
        selector: [
          { label: 'Foreground', name: '$entity.name.selector_foreground' },
          { label: 'Font', name: '$entity.name.selector_fontStyle', type: 'select' },
        ],
        tag: [
          { label: 'Foreground', name: '$entity.name.tag_foreground' },
          { label: 'Font', name: '$entity.name.tag_fontStyle', type: 'select' },
        ],
        type: [
          { label: 'Foreground', name: '$entity.name.type_foreground' },
          { label: 'Font', name: '$entity.name.type_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Attribute',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.other.attribute-name_foreground' },
          { label: 'Font', name: '$entity.other.attribute-name_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Inherited Class',
      styles: {
        normal: [
          { label: 'Foreground', name: '$entity.other.inherited-class_foreground' },
          { label: 'Font', name: '$entity.other.inherited-class_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Invalid',
      styles: {
        normal: [
          { label: 'Foreground', name: '$invalid_foreground' },
          { label: 'Font', name: '$invalid_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Keyword',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword_foreground' },
          { label: 'Font', name: '$keyword_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Control',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword.control_foreground' },
          { label: 'Font', name: '$keyword.control_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Operator',
      styles: {
        normal: [
          { label: 'Foreground', name: '$keyword.operator_foreground' },
          { label: 'Font', name: '$keyword.operator_fontStyle', type: 'select' },
        ],
        logical: [
          { label: 'Foreground', name: '$keyword.operator.logical_foreground' },
          { label: 'Font', name: '$keyword.operator.logical_fontStyle', type: 'select' },
        ],
        arithmetic: [
          { label: 'Foreground', name: '$keyword.operator.arithmetic_foreground' },
          { label: 'Font', name: '$keyword.operator.arithmetic_fontStyle', type: 'select' },
        ],
        assignment: [
          { label: 'Foreground', name: '$keyword.operator.assignment_foreground' },
          { label: 'Font', name: '$keyword.operator.assignment_fontStyle', type: 'select' },
        ],
        new: [
          { label: 'Foreground', name: '$keyword.operator.new_foreground' },
          { label: 'Font', name: '$keyword.operator.new_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Markup',
      styles: {
        normal: [
          { label: 'Foreground', name: '$markup_foreground' },
          { label: 'Font', name: '$markup_fontStyle', type: 'select' },
        ],
        bold: [
          { label: 'Foreground', name: '$markup.bold_foreground' },
          { label: 'Font', name: '$markup.bold_fontStyle', type: 'select' },
        ],
        italic: [
          { label: 'Foreground', name: '$markup.italic_foreground' },
          { label: 'Font', name: '$markup.italic_fontStyle', type: 'select' },
        ],
        underline: [
          { label: 'Foreground', name: '$markup.underline_foreground' },
          { label: 'Font', name: '$markup.underline_fontStyle', type: 'select' },
        ],
        link: [
          { label: 'Foreground', name: '$markup.underline.link_foreground' },
          { label: 'Font', name: '$markup.underline.link_fontStyle', type: 'select' },
        ],
        quote: [
          { label: 'Foreground', name: '$markup.quote_foreground' },
          { label: 'Font', name: '$markup.quote_fontStyle', type: 'select' },
        ],
        heading: [
          { label: 'Foreground', name: '$markup.heading_foreground' },
          { label: 'Font', name: '$markup.heading_fontStyle', type: 'select' },
        ],
        list: [
          { label: 'Foreground', name: '$markup.list_foreground' },
          { label: 'Font', name: '$markup.list_fontStyle', type: 'select' },
        ],
        raw: [
          { label: 'Foreground', name: '$markup.raw_foreground' },
          { label: 'Font', name: '$markup.raw_fontStyle', type: 'select' },
        ],
        inserted: [
          { label: 'Foreground', name: '$markup.inserted_foreground' },
          { label: 'Font', name: '$markup.inserted_fontStyle', type: 'select' },
        ],
        changed: [
          { label: 'Foreground', name: '$markup.changed_foreground' },
          { label: 'Font', name: '$markup.changed_fontStyle', type: 'select' },
        ],
        deleted: [
          { label: 'Foreground', name: '$markup.deleted_foreground' },
          { label: 'Font', name: '$markup.deleted_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Meta',
      styles: {
        normal: [
          { label: 'Foreground', name: '$meta_foreground' },
          { label: 'Font', name: '$meta_fontStyle', type: 'select' },
        ],
        block: [
          { label: 'Foreground', name: '$meta.block_foreground' },
          { label: 'Font', name: '$meta.block_fontStyle', type: 'select' },
        ],
        class: [
          { label: 'Foreground', name: '$meta.class_foreground' },
          { label: 'Font', name: '$meta.class_fontStyle', type: 'select' },
        ],
        func: [
          { label: 'Foreground', name: '$meta.function_foreground' },
          { label: 'Font', name: '$meta.function_fontStyle', type: 'select' },
        ],
        'function-call': [
          { label: 'Foreground', name: '$meta.function-call_foreground' },
          { label: 'Font', name: '$meta.function-call_fontStyle', type: 'select' },
        ],
        preprocessor: [
          { label: 'Foreground', name: '$meta.preprocessor_foreground' },
          { label: 'Font', name: '$meta.preprocessor_fontStyle', type: 'select' },
        ],
        'return-type': [
          { label: 'Foreground', name: '$meta.return-type_foreground' },
          { label: 'Font', name: '$meta.return-type_fontStyle', type: 'select' },
        ],
        selector: [
          { label: 'Foreground', name: '$meta.selector_foreground' },
          { label: 'Font', name: '$meta.selector_fontStyle', type: 'select' },
        ],
        tag: [
          { label: 'Foreground', name: '$meta.tag_foreground' },
          { label: 'Font', name: '$meta.tag_fontStyle', type: 'select' },
        ],
        type: [
          { label: 'Foreground', name: '$meta.type_foreground' },
          { label: 'Font', name: '$meta.type_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    { title: 'Punctuation' },
    {
      title: 'Definition',
      styles: {
        start: [
          { label: 'Foreground', name: '$punctuation.definition.string.begin_foreground' },
          { label: 'Font', name: '$punctuation.definition.string.begin_fontStyle', type: 'select' },
        ],
        end: [
          { label: 'Foreground', name: '$punctuation.definition.string.end_foreground' },
          { label: 'Font', name: '$punctuation.definition.string.end_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Separator',
      styles: {
        normal: [
          { label: 'Foreground', name: '$punctuation.separator_foreground' },
          { label: 'Font', name: '$punctuation.separator_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Terminator',
      styles: {
        normal: [
          { label: 'Foreground', name: '$punctuation.terminator_foreground' },
          { label: 'Font', name: '$punctuation.terminator_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Storage',
      styles: {
        type: [
          { label: 'Foreground', name: '$storage.type_foreground' },
          { label: 'Font', name: '$storage.type_fontStyle', type: 'select' },
        ],
        modifier: [
          { label: 'Foreground', name: '$storage.modifier_foreground' },
          { label: 'Font', name: '$storage.modifier_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'String',
      styles: {
        normal: [
          { label: 'Foreground', name: '$string_foreground' },
          { label: 'Font', name: '$string_fontStyle', type: 'select' },
        ],
        regexp: [
          { label: 'Foreground', name: '$string.regexp_foreground' },
          { label: 'Font', name: '$string.regexp_fontStyle', type: 'select' },
        ],
        unquoted: [
          { label: 'Foreground', name: '$string.unquoted_foreground' },
          { label: 'Font', name: '$string.unquoted_fontStyle', type: 'select' },
        ],
        interpolated: [
          { label: 'Foreground', name: '$string.interpolated_foreground' },
          { label: 'Font', name: '$string.interpolated_fontStyle', type: 'select' },
        ],
      },
    },
    {
      title: 'Quoted',
      styles: {
        normal: [
          { label: 'Foreground', name: '$string.quoted_foreground' },
          { label: 'Font', name: '$string.quoted_fontStyle', type: 'select' },
        ],
        single: [
          { label: 'Foreground', name: '$string.quoted.single_foreground' },
          { label: 'Font', name: '$string.quoted.single_fontStyle', type: 'select' },
        ],
        double: [
          { label: 'Foreground', name: '$string.quoted.double_foreground' },
          { label: 'Font', name: '$string.quoted.double_fontStyle', type: 'select' },
        ],
        triple: [
          { label: 'Foreground', name: '$string.quoted.triple_foreground' },
          { label: 'Font', name: '$string.quoted.triple_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Support',
      styles: {
        normal: [
          { label: 'Foreground', name: '$support_foreground' },
          { label: 'Font', name: '$support_fontStyle', type: 'select' },
        ],
        class: [
          { label: 'Foreground', name: '$support.class_foreground' },
          { label: 'Font', name: '$support.class_fontStyle', type: 'select' },
        ],
        var: [
          { label: 'Foreground', name: '$support.variable_foreground' },
          { label: 'Font', name: '$support.variable_fontStyle', type: 'select' },
        ],
        const: [
          { label: 'Foreground', name: '$support.const_foreground' },
          { label: 'Font', name: '$support.const_fontStyle', type: 'select' },
        ],
        type: [
          { label: 'Foreground', name: '$support.type_foreground' },
          { label: 'Font', name: '$support.type_fontStyle', type: 'select' },
        ],
        func: [
          { label: 'Foreground', name: '$support.function_foreground' },
          { label: 'Font', name: '$support.function_fontStyle', type: 'select' },
        ],
      },
    },
  ],
  [
    {
      title: 'Variable',
      styles: {
        normal: [
          { label: 'Foreground', name: '$variable_foreground' },
          { label: 'Font', name: '$variable_fontStyle', type: 'select' },
        ],
        name: [
          { label: 'Foreground', name: '$variable.name_foreground' },
          { label: 'Font', name: '$variable.name_fontStyle', type: 'select' },
        ],
        lang: [
          { label: 'Foreground', name: '$variable.lang_foreground' },
          { label: 'Font', name: '$variable.lang_fontStyle', type: 'select' },
        ],
      },
    },
  ],
];

export default { components, layouts, editors, pages, others };
