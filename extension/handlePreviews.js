const vscode = require('vscode');

function handlePreviews({ name, show }) {
  switch (name) {
    case 'BASE_COLORS':
      vscode.window.withProgress(
        { title: "Brush's sample progress bar", cancellable: true, location: 15 },
        () => new Promise((resolve, reject) => {}),
      );
      break;

    default:
      break;
  }
}

module.exports = handlePreviews;
