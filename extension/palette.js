const config = require('./utils/config');

function get() {
  return {
    type: config.get('vslook.palette.type').toLowerCase(),
    colors: config.get('vslook.palette.colors'),
  };
}

function set(colors) {
  config.set('vslook.palette.colors', colors);
}

module.exports = { get, set };
