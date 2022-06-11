const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const webview = require('./webview');
const config = require('./utils/config');

function activate(context = {}) {
  context.globalState.setKeysForSync(['theme', 'time']);

  const paths = {
    root: context.extensionPath,
    theme: path.join(context.extensionPath, 'themes', 'index.json'),
  };
  const globalTheme = {
    get: () => context.globalState.get('theme'),
    set: newTheme => {
      const theme = context.globalState.get('theme');
      context.globalState.update('time', Date.now());
      context.globalState.update('theme', { ...theme, ...newTheme });
    },
  };

  const disposableOnEdit = vscode.commands.registerCommand('vslook.edit', () => {
    const theme = globalTheme.get();

    config.set('workbench.colorCustomizations', theme.colors);
    config.set('editor.tokenColorCustomizations', { textMateRules: theme.tokenColors });

    webview({ paths, globalTheme });
  });

  // const disposableOnSync = vscode.commands.registerCommand('vslook.sync', () => {
  //   const theme = globalTheme.get();

  //   fs.write(paths.theme, theme, { json: true });
  //   context.globalState.update('local_time', Date.now());
  //   config.set('workbench.colorCustomizations', undefined);
  //   config.set('editor.tokenColorCustomizations', undefined);
  //   setTimeout(() => {
  //     vscode.commands.executeCommand('workbench.action.reloadWindow');
  //   }, 1000);
  // });

  context.subscriptions.push(disposableOnEdit);
  // context.subscriptions.push(disposableOnSync);
}

function deactivate() {}

module.exports = { activate, deactivate };
