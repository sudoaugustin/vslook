import { atom, selectorFamily } from 'recoil';

export const themeState = atom({ key: 'THEME_STATE', default: {} });

export const colorsState = selectorFamily({
  key: 'COLORS_STATE',
  get:
    name =>
    ({ get }) => {
      const theme = get(themeState);
      return theme[name] || '#00000000';
    },
  set:
    name =>
    ({ get, set }, newValue) => {
      const theme = get(themeState);
      set(themeState, { ...theme, [name]: newValue });
    },
});
