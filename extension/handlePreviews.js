const { window, commands } = require('vscode');

function handlePreviews({ name, show }) {
  switch (name) {
    case 'BASE_COLORS':
      window.withProgress(
        { title: 'Progress bar and Shadow preview are here', cancellable: true, location: 15 },
        () => new Promise((resolve, reject) => {}),
      );
      break;

    case 'BUTTONS':
      window.showInformationMessage(
        'Buttons preview is here',
        {
          detail: 'This is a dummy dialouge for displaying the buttons preview',
          modal: true,
        },
        'I understand',
      );
      break;

    case 'QUICK_PICKER':
      window.showQuickPick(
        [
          { label: 'Recommended Activities', kind: -1 },
          { label: '📚 Reading' },
          { label: '🍿 Watch movie' },
          { label: 'Other Activities', kind: -1 },
          { label: '🏄‍♂️ Surfing' },
          { label: '⛪ Go to church' },
        ],
        {
          placeHolder: 'e.g. Reading',
          title: '🤖 Hello! What you wanna do now?',
          ignoreFocusOut: true,
        },
      );
      break;

    default:
      break;
  }
}

module.exports = handlePreviews;
