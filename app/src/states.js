import { atom, atomFamily, selectorFamily } from 'recoil';

export const themeState = atom({ key: 'THEME_STATE', default: {} });

export const valueState = selectorFamily({
  key: 'VALUE_STATE',
  get:
    name =>
    ({ get }) => {
      return get(themeState)[name];
    },
  set:
    name =>
    ({ set }, newValue) => {
      set(themeState, theme => ({ ...theme, [name]: newValue }));
    },
});

export const paletteState = atom({ key: 'PALETTE_STATE', default: {} });

export const isExpandState = atomFamily({ key: 'IS_EXPAND_STATE', default: true });
