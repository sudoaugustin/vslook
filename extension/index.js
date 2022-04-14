const vscode = require('vscode');
const createWebview = require('./createWebview');
const handleMessage = require('./handleMessage');

function activate(context) {
  const disposableOnEdit = vscode.commands.registerCommand(`vslook.edit`, () => {
    const paths = { root: context.extensionPath };
    createWebview({ root: paths.root }, handleMessage);
  });
  context.subscriptions.push(disposableOnEdit);
}

function deactivate() {}

module.exports = { activate, deactivate };
