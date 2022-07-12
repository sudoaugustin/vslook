const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const webview = require('./webview');

let globalState;

const themePath = path.join(__dirname, '../', 'themes', 'index.json');

function activate(context) {
  globalState = context.globalState;
  const theme = require('./theme')(globalState);
  const version = context.extension.packageJSON.version;

  // Don't sync `last-version`. It needs to be machine dependent
  globalState.setKeysForSync(['theme']);

  // globalState.update('theme', undefined);

  // Initialize `theme` on first install.
  if (!globalState.get('theme')) {
    globalState.update('theme', fs.read(themePath, { json: true }));
  }

  // Installing extension overwrite theme-file. So reload after each install & `deactivate` will do it's job.
  if (!globalState.get('last-version') || globalState.get('last-version') !== version) {
    globalState.update('last-version', version).then(() => {
      vscode.commands.executeCommand('workbench.action.reloadWindow');
    });
  }

  const disposableOnEdit = vscode.commands.registerCommand('vslook.edit', () => webview(theme));
  const disposableOnClone = vscode.commands.registerCommand('vslook.clone', () => theme.clone());
  const disposableOnExport = vscode.commands.registerCommand('vslook.export', () => theme.export());

  context.subscriptions.push([disposableOnEdit, disposableOnClone, disposableOnExport]);
}

function deactivate() {
  fs.write(themePath, globalState.get('theme'), { json: true });
}

module.exports = { activate, deactivate };
