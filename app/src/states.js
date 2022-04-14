import { getFallbackScope } from 'utils';
import { atom, atomFamily, selectorFamily } from 'recoil';

export const themeState = atom({ key: 'THEME_ATOM', default: '' });

export const colorsState = atom({ key: 'COLORS_ATOM', default: {} });

export const valueState = selectorFamily({
  key: 'VALUES_FAMILY',
  get:
    name =>
    ({ get }) => {
      let value = get(themeState)[name];
      if (!value) {
        //? Fallback to css variables values
        value = get(colorsState)[name];
      }
      if (!value) {
        //? Fallback to default or inherit value
        const fallbackName = getFallbackScope(name);
        const defaultValue = name.includes('fontStyle') ? '' : '#00000000';
        value = fallbackName ? get(valueState(fallbackName)) : defaultValue;
      }
      return value;
    },
  set:
    name =>
    ({ set }, newValue) => {
      set(themeState, theme => ({ ...theme, [name]: newValue }));
    },
});

export const expandState = atomFamily({ key: 'EXPAND_STATE', default: true });
