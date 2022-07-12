const vscode = require('vscode');

const output = vscode.window.createOutputChannel('VSLook');

module.exports = {
  info: msg => {
    output.appendLine(`✅ ${msg}`);
  },
  error: msg => {
    output.show();
    output.appendLine(`🚫 ${msg}`);
  },
};
