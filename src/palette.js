const config = require('./utils/config');
const { PALETTE_TYPE, PALETTE_COLORS } = require('./types');

function get() {
  return {
    type: config.get(PALETTE_TYPE).toLowerCase(),
    colors: config.get(PALETTE_COLORS, {}),
  };
}

function set(colors) {
  config.set(PALETTE_COLORS, colors);
}

module.exports = { get, set };
