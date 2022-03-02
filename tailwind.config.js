module.exports = {
  content: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fill: 'fill 1s linear',
      },
      keyframes: {
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [require('./tailwind.radix')],
};
