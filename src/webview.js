const path = require('path');
const vscode = require('vscode');
const config = require('./utils/config');
const palette = require('./palette');
const previewElement = require('./preview-element');
const { COLORS, TOKEN_COLORS, IGNORED_SETTINGS } = require('./types');

function getUri(...args) {
  return vscode.Uri.file(path.join(__dirname, '../', ...args));
}

function template({ globals, asWebviewUri }) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${asWebviewUri('index.css')}" rel="stylesheet">
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.$theme=${JSON.stringify(globals.theme)}
          window.$palette=${JSON.stringify(globals.palette)}
        </script>
        <script src="${asWebviewUri('index.js')}"></script>
      </body>
    </html>`;
}

module.exports = globalState => {
  const theme = require('./theme')(globalState);
  const panel = vscode.window.createWebviewPanel('vslook', 'VSLook', vscode.ViewColumn.Beside, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });
  const ignoredSettings = config.get(IGNORED_SETTINGS);

  config.set(IGNORED_SETTINGS, [...ignoredSettings, COLORS, TOKEN_COLORS]);

  panel.iconPath = getUri('media', 'logo.svg');
  panel.webview.html = template({
    globals: { theme: theme.get(), palette: palette.get() },
    asWebviewUri: file => panel.webview.asWebviewUri(getUri('.dist', file)),
  });

  panel.onDidDispose(() => {
    config.set(COLORS, undefined);
    config.set(TOKEN_COLORS, undefined);
    config.set(IGNORED_SETTINGS, ignoredSettings);
    setTimeout(() => vscode.commands.executeCommand('workbench.action.reloadWindow'), 1500);
  });

  panel.webview.onDidReceiveMessage(({ type, payload }) => {
    switch (type) {
      case 'PREVIEW':
        previewElement(payload);
        break;
      case 'SET_THEME':
        theme.set(payload);
        break;
      case 'SET_PALETTE_COLORS':
        palette.set(payload);
        break;
    }
  });
};
