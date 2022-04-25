const config = require('./utils/config');
const handlePreviews = require('./handlePreviews');
const handleThemeChange = require('./handleThemeChange');

module.exports = ({ type, payload }) => {
  console.log('💬', payload);
  switch (type) {
    case 'PREVIEW':
      handlePreviews(payload);
      break;

    case 'SET_THEME':
      handleThemeChange(payload);
      break;

    case 'SET_PALETTE_COLORS':
      config.set('vslook.palette.colors', payload);
      break;
  }
};
