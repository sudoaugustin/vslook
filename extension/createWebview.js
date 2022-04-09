const path = require('path');
const vscode = require('vscode');
const config = require('./utils/config');

function getUri(root) {
  return (...args) => vscode.Uri.file(path.join(root, ...args));
}

function getTheme() {
  const tokenColors = config
    .get('editor.tokenColorCustomizations.textMateRules', [])
    .map(({ scope, settings }) => Object.entries(settings).map(([name, value]) => [`$${scope}_${name}`, value]))
    .flat();

  const colorCustomizations = config.get('workbench.colorCustomizations');

  return { ...colorCustomizations, ...Object.fromEntries(tokenColors) };
}

function createPage({ js, css }) {
  return `<!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="${css}" rel="stylesheet">
        </head>
        <body>
          <div id="root"></div>
          <script>
             window.$theme=${JSON.stringify(getTheme())};
             window.$palette='${config.get('vslook.palette').toLowerCase()}';
          </script>
          <script src="${js}"></script>
        </body>
      </html>`;
}

function createWebview({ root }, onMessage) {
  const getRootUri = getUri(root);
  const panel = vscode.window.createWebviewPanel('theme.preview', 'VSLook Editor', vscode.ViewColumn.Beside, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });

  panel.iconPath = getRootUri('media', 'logo.svg');
  panel.webview.html = createPage({
    js: panel.webview.asWebviewUri(getRootUri('.dist', 'index.js')),
    css: panel.webview.asWebviewUri(getRootUri('.dist', 'index.css')),
  });
  panel.webview.onDidReceiveMessage(onMessage);
}

module.exports = createWebview;
