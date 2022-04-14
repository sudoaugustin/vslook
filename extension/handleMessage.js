const handlePreviews = require('./handlePreviews');
const handleThemeChange = require('./handleThemeChange');

module.exports = ({ type, payload }) => {
  console.log('💬', payload);

  switch (type) {
    case 'SET_THEME':
      handleThemeChange(payload);
      // theme = createTheme({ theme, ...payload });
      // fs.write(paths.theme, theme, true);
      break;
    case 'OPEN_PREVIEW':
      handlePreviews(payload);
      break;
    default:
      break;
  }
};
