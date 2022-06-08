import { atom, atomFamily, selectorFamily } from 'recoil';
import { getParentScope } from 'utils';

export const themeState = atom({ key: 'THEME_STATE', default: {} });

export const valueState = selectorFamily({
  key: 'VALUE_STATE',
  get:
    name =>
    ({ get }) => {
      const theme = get(themeState);
      const value = theme[name];

      if (name[0] === '$' && value === undefined) {
        const parentScope = getParentScope(name);
        const defaultValue = name.includes('fontStyle') ? null : theme['editor.foreground'];
        return !!parentScope ? get(valueState(parentScope)) : defaultValue;
      }

      return value;
    },
  set:
    name =>
    ({ set }, newValue) => {
      set(themeState, theme => ({ ...theme, [name]: newValue }));
    },
});

export const formatState = atom({ key: 'FORMAT_STATE', default: 'hex' });

export const paletteState = atom({ key: 'PALETTE_STATE', default: {} });

export const isExpandState = atomFamily({ key: 'IS_EXPAND_STATE', default: true });
