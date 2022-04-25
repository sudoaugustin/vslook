const { window } = require('vscode');

module.exports = ({ name }) => {
  switch (name) {
    case 'BASE_COLORS':
      window.withProgress(
        { title: 'Sending request to server...', cancellable: true, location: 15 },
        () => new Promise(() => {}),
      );
      break;

    case 'BUTTONS':
      window.showInformationMessage(
        'Do you want to request OTP?',
        { detail: "You will recieve a 6-digit code. Please don't share it with anyone." },
        'Continue',
        'Cancel',
      );
      break;

    case 'QUICK_PICK':
      window.showQuickPick(
        [
          { label: '$(account) Account' },
          { label: '$(bell-dot) Notifications' },
          { label: '$(jersey) Themes' },
          { label: 'Access', kind: -1 },
          { label: '$(credit-card) Billings and plans' },
          { label: '$(mail) Emails' },
          { label: '$(shield) Password and authentication' },
          { label: '$(organization) Organizations' },
          { label: 'Integrations', kind: -1 },
          { label: '$(extensions) Applications' },
          { label: '$(watch) Scheduled reminders' },
        ],
        {
          title: '⚙️ Settings (Press `Esc` to close)',
          placeHolder: 'Search or jump to...',
          ignoreFocusOut: true,
        },
      );
      break;

    case 'TOAST':
      window.showErrorMessage('An error occured');
      window.showWarningMessage('This action is not recommended.');
      window.showInformationMessage('Successfully created an account.');
      break;

    // case 'INPUT':
    //   let visible = false;
    //   const eyeIcon = new ThemeIcon('eye');
    //   const eyeOffIcon = new ThemeIcon('eye-closed');
    //   const input = window.createInputBox();
    //   input.title = 'Password';
    //   input.placeholder = 'Enter your password.';
    //   input.password = !visible;
    //   input.ignoreFocusOut = true;
    //   input.buttons = [{ iconPath: eyeOffIcon }];
    //   input.onDidTriggerButton(() => {
    //     input.buttons = [visible ? { iconPath: eyeOffIcon } : { iconPath: eyeIcon }];
    //     visible = !visible;
    //   });
    //   input.show();

    //   break;
    default:
      break;
  }
};
