import { atom, atomFamily, DefaultValue, selectorFamily } from 'recoil';
import { getParentScope } from 'utils';

export const themeState = atom({ key: 'THEME_STATE', default: {} });

export const valueState = selectorFamily({
  key: 'VALUE_STATE',
  get:
    name =>
    ({ get }) => {
      const theme = get(themeState);

      if (name[0] === '$') {
        const defaultValue = name.includes('fontStyle') ? '' : theme['editor.foreground'];
        return theme[name] || theme[getParentScope(name)] || defaultValue;
      } else {
        return theme[name];
      }
    },
  set:
    name =>
    ({ set }, newValue) => {
      set(themeState, theme => ({ ...theme, [name]: newValue }));
    },
});

export const formatState = atom({ key: 'FORMAT_STATE', default: 'rgb' });

export const paletteState = atom({ key: 'PALETTE_STATE', default: {} });

export const isExpandState = atomFamily({ key: 'IS_EXPAND_STATE', default: true });
