const vscode = require('vscode');
const webview = require('./webview');

function activate(context = {}) {
  const paths = { root: context.extensionPath, storage: context.globalStoragePath };

  const disposableOnEdit = vscode.commands.registerCommand(`vslook.edit`, () => webview(paths.root));
  context.subscriptions.push(disposableOnEdit);
}

function deactivate() {}

module.exports = { activate, deactivate };
