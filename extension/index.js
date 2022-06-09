const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const webview = require('./webview');

function activate(context = {}) {
  const paths = {
    root: context.extensionPath,
    storage: context.globalStoragePath,
    theme: path.join(context.extensionPath, 'themes', 'index.json'),
  };

  context.globalState.setKeysForSync(['theme']);

  console.log(Object.keys(context.globalState.get('theme').colors));
  fs.write(paths.theme, context.globalState.get('theme'), { json: true });

  const disposableOnEdit = vscode.commands.registerCommand(`vslook.edit`, () => {
    webview({ paths, setGlobal: (name, value) => context.globalState.update(name, value) });
  });

  context.subscriptions.push(disposableOnEdit);
}

function deactivate() {}

module.exports = { activate, deactivate };
