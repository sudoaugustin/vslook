const plugin = require('tailwindcss/plugin');

// const data = {
//   side: ['top', 'left', 'right', 'bottom'],
//   state: ['open', 'closed', 'checked', 'unchecked'],
//   orientation: ['vertical', 'horizontal'],
//   default: ['disabled'],
// };

const data = {
  side: ['top', 'left', 'right', 'bottom'],
  state: ['on', 'open', 'active', 'checked'],
  default: ['disabled'],
  orientation: ['vertical', 'horizontal'],
};

module.exports = plugin(({ addVariant, e }) => {
  Object.entries(data).map(([type, items]) => {
    items.forEach(item => {
      const attr = type === 'default' ? `data-${type}` : `data-${type}='${item}'`;

      // radix-closed:text-gray-600
      const variant = `radix-${item}`;
      addVariant(variant, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`${variant}${separator}${className}`)}[${attr}]`;
        });
      });

      // radix-group-closed:text-gray-600
      const groupVariant = `radix-group-${item}`;
      addVariant(groupVariant, ({ modifySelectors, separator, ...s }) => {
        modifySelectors(({ className }) => {
          return `.radix-group[${attr}] .${e(`${groupVariant}${separator}${className}`)}`;
        });
      });

      // radix-peer-closed:text-gray-600
      const peerVariant = `radix-peer-${item}`;
      addVariant(peerVariant, ({ modifySelectors, separator, ...s }) => {
        modifySelectors(({ className }) => {
          return `.radix-peer[${attr}] ~ .${e(`${peerVariant}${separator}${className}`)}`;
        });
      });
    });
  });
});
