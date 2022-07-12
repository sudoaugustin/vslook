const vscode = require('vscode');

module.exports = (message = '', option = {}) => {
  const type = option.type || 'info';
  const method = { info: 'showInformationMessage', error: 'showErrorMessage', warning: 'showWarningMessage' }[type];
  vscode.window[method](message);
};
