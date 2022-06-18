const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const webview = require('./webview');

let globalState;

const themePath = path.join(__dirname, '../', 'themes', 'index.json');

function activate(context = {}) {
  globalState = context.globalState;
  const version = context.extension.packageJSON.version;

  // Don't sync `last-version`. It needs to be machine dependent
  globalState.setKeysForSync(['theme']);

  if (!globalState.get('theme')) {
    // Initialize `theme` on first install.
    globalState.update('theme', fs.read(themePath, { json: true }));
  }

  if (!globalState.get('last-version') || globalState.get('last-version') !== version) {
    // Installing extension overwrite theme-file. So reload after each install & `deactivate` will do it's job.
    globalState.update('last-version', version).then(() => {
      vscode.commands.executeCommand('workbench.action.reloadWindow');
    });
  }

  const disposableOnEdit = vscode.commands.registerCommand('vslook.edit', () => webview(globalState));

  context.subscriptions.push(disposableOnEdit);
}

function deactivate() {
  fs.write(themePath, globalState.get('theme'), { json: true });
}

module.exports = { activate, deactivate };
