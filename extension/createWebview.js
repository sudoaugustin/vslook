const path = require('path');
const vscode = require('vscode');
const palettes = require('../data/palettes');

function createWebview({ root, palette }, onMessage) {
  const getRootUri = getUri(root);
  const panel = vscode.window.createWebviewPanel('theme.preview', 'Brush', vscode.ViewColumn.Beside, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });

  panel.iconPath = getRootUri('media', 'logo.svg');
  panel.webview.html = getHTML({
    js: panel.webview.asWebviewUri(getRootUri('dist', 'index.js')),
    css: panel.webview.asWebviewUri(getRootUri('dist', 'index.css')),
    palette,
  });
  panel.webview.onDidReceiveMessage(onMessage);
}

function getHTML({ js, css, palette }) {
  return `<!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="${css}" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script> window.$colors=${getPalette(palette)};</script>
          <script src="${js}"></script>
        </body>
      </html>`;
}

function getPalette(name = '') {
  const colors = Object.entries({ base: palettes.base, ...palettes[name] });
  return JSON.stringify(colors.map(([name, indents]) => [name, Object.entries(indents)]));
}

function getUri(root) {
  return (...args) => vscode.Uri.file(path.join(root, ...args));
}

module.exports = createWebview;
