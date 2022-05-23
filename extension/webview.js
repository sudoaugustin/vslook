const path = require('path');
const theme = require('./theme');
const vscode = require('vscode');
const palette = require('./palette');
const preview = require('./preview');

function template({ js, css, globals }) {
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
          window.$theme=${JSON.stringify(globals.theme)}
          window.$palette=${JSON.stringify(globals.palette)}
        </script>
        <script src="${js}"></script>
      </body>
    </html>`;
}

module.exports = root => {
  const getUri = (...args) => vscode.Uri.file(path.resolve(root, ...args));
  const themePath = path.join(root, 'themes', 'index.json');
  const panel = vscode.window.createWebviewPanel('theme.preview', 'VSLook', vscode.ViewColumn.Beside, {
    enableScripts: true,
    retainContextWhenHidden: true,
  });
  panel.iconPath = getUri('media', 'logo.svg');
  panel.webview.html = template({
    js: panel.webview.asWebviewUri(getUri('.dist', 'index.js')),
    css: panel.webview.asWebviewUri(getUri('.dist', 'index.css')),
    globals: { theme: theme.get(themePath), palette: palette.get() },
  });

  panel.webview.onDidReceiveMessage(({ type, payload }) => {
    // console.log('💬', payload);
    switch (type) {
      case 'PREVIEW':
        preview(payload);
        break;
      case 'SET_THEME':
        theme.set(themePath, payload);
        break;
      case 'SET_PALETTE_COLORS':
        palette.set(payload);
        break;
    }
  });
};
