const path = require('path');
const vscode = require('vscode');
const fs = require('./utils/fs');
const createTheme = require('./createTheme');
const createWebview = require('./createWebview');
const handlePreviews = require('./handlePreviews');

function activate(context) {
  const paths = {
    root: context.extensionPath,
    theme: path.join(context.extensionPath, 'themes', 'index.json'),
  };
  let theme = fs.read(paths.theme, true);
  const disposableOnInit = vscode.commands.registerCommand(`brush.init`, () => {
    const config = vscode.workspace.getConfiguration('brush');

    createWebview({ root: paths.root, palette: config.get('palette').toLowerCase() }, ({ type, payload }) => {
      switch (type) {
        case 'SET_COLOR':
          theme = createTheme({ theme, type: 'colors', ...payload });
          fs.write(paths.theme, theme, true);
          break;
        case 'OPEN_PREVIEW':
          handlePreviews(payload);
          break;
        default:
          break;
      }
    });
  });
  context.subscriptions.push(disposableOnInit);
}

function deactivate() {}

module.exports = { activate, deactivate };
