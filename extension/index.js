const vscode = require('vscode');
const config = require('./utils/config');
const palettes = require('./palettes');
const createWebview = require('./createWebview');
const handleMessage = require('./handleMessage');

function activate(context) {
  let webview;
  const paths = { root: context.extensionPath };
  const palette = config.get('vslook.palette').toLowerCase();

  const disposableOnEdit = vscode.commands.registerCommand(`vslook.edit`, () => {
    webview = createWebview({ root: paths.root }, handleMessage);
    webview.postMessage({
      type: 'SET_INIT_VALUES',
      payload: { palette: { base: palettes.base, ...palettes[palette] } },
    });
  });

  const disposableOnConfigChange = vscode.workspace.onDidChangeConfiguration(() => {
    if (!!webview) {
      const palette = config.get('vslook.palette').toLowerCase();
      webview.postMessage({ type: 'SET_PALETTE', payload: { base: palettes.base, ...palettes[palette] } });
    }
  });

  context.subscriptions.push(disposableOnConfigChange, disposableOnEdit);
}

function deactivate() {}

module.exports = { activate, deactivate };
