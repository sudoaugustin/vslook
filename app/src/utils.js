import { colord } from 'colord';
import palettes from 'data/palettes';
import merge from 'lodash/fp/merge';

const vscode = window.acquireVsCodeApi();

export function postMessage(msg) {
  return vscode.postMessage(msg);
}

export function getCSSColors() {
  const props = document.documentElement.style.cssText.split(';').map(prop => {
    const [name, value] = prop.split(':');
    return [
      name.trim().replace('--vscode-', '').replace('-', '.'),
      value && value[0] !== '#' ? colord(value).toHex() : value,
    ];
  });
  return Object.fromEntries(props);
}

export function getColorValues(value) {
  const Colord = colord(value);
  return {
    rgb: Colord.toRgb(),
    hsl: Colord.toHsl(),
    hex: { hex: Colord.toHex(), a: Colord.alpha() },
  };
}

export function getColorString(value, format) {
  const Colord = colord(value);
  switch (format) {
    case 'hex':
      return Colord.toHex();

    case 'hsl':
      return Colord.toHslString();

    default:
      return Colord.toRgbString();
  }
}

export function getHexFromValues({ a, hex, ...rest }) {
  return colord(hex || rest)
    .alpha(a)
    .toHex();
}

export function getColorsFromPalette({ type, colors }) {
  return Object.entries(merge(palettes[type], colors)).map(([name, indents]) => [name, Object.entries(indents)]);
}

export function getParentScope(name) {
  const [scope, _name] = name.split('_');
  const scopes = scope.split('.');
  return scopes.length >= 2 ? `${scopes.slice(0, scopes.length - 1).join('.')}_${_name}` : undefined;
}
