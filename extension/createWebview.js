const path = require('path');
const vscode = require('vscode');

function getUri(root) {
  return (...args) => vscode.Uri.file(path.join(root, ...args));
}

function createPage({ js, css, data }) {
  return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="${css}" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script>
            window.$theme=${JSON.stringify(data.theme)}
            window.$palette=${JSON.stringify(data.palette)}
          </script>
          <script src="${js}"></script>
        </body>
      </html>`;
}

function createWebview({ root, data }, onMessage) {
  const getRootUri = getUri(root);
  const panel = vscode.window.createWebviewPanel('theme.preview', 'VSLook', vscode.ViewColumn.Beside, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });
  panel.iconPath = getRootUri('media', 'logo.svg');
  panel.webview.html = createPage({
    js: panel.webview.asWebviewUri(getRootUri('.dist', 'index.js')),
    css: panel.webview.asWebviewUri(getRootUri('.dist', 'index.css')),
    data,
  });
  panel.webview.onDidReceiveMessage(onMessage);
}

module.exports = createWebview;
