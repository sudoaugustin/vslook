const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const webview = require('./webview');

let globalState;

const themePath = path.join(__dirname, '../', 'themes', 'index.json');

function activate(context = {}) {
  globalState = context.globalState;
  const version = context.extension.packageJSON.version;

  globalState.setKeysForSync(['theme', 'last-version']);

  if (!globalState.get('theme')) {
    // Initialize  `globalState` on first install.
    globalState.update('theme', fs.read(themePath, { json: true }));
    globalState.update('last-version', version);
  } else if (globalState.get('last-version') !== version) {
    // Updates overwrite theme-file. So reload after each update & `deactivate` will do it's job.
    vscode.commands.executeCommand('workbench.action.reloadWindow');
  }

  const disposableOnEdit = vscode.commands.registerCommand('vslook.edit', () => webview(context.globalState));

  context.subscriptions.push(disposableOnEdit);
}

function deactivate() {
  fs.write(themePath, globalState.get('theme'), { json: true });
}

module.exports = { activate, deactivate };
