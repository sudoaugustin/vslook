const vscode = require('vscode');
const createWebview = require('./createWebview');
const handleMessage = require('./handleMessage');

function activate(context) {
  const disposableOnInit = vscode.commands.registerCommand(`vslook.edit`, () => {
    const paths = { root: context.extensionPath };
    createWebview({ root: paths.root }, handleMessage);
  });
  context.subscriptions.push(disposableOnInit);
}

function deactivate() {}

module.exports = { activate, deactivate };
