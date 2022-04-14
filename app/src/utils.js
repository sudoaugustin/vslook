import palettes from './data/palettes';

const vscode = window.acquireVsCodeApi();

export const getColors = () => {
  const props = document.documentElement.style.cssText.split(';');
  const colors = props.reduce((style, property) => {
    let [name, value] = property.split(':');
    name = name.trim().replace('--vscode-', '').replace('-', '.');
    return { ...style, [name]: value };
  }, {});
  return colors;
};

export const setGlobals = () => {
  window.$shrink = {};
  const colors = Object.entries({ base: palettes.base, ...palettes[window.$palette] });
  window.$colors = colors.map(([name, indents]) => [name, Object.entries(indents)]);
};

export const postMessage = msg => vscode.postMessage(msg);

export const getFallbackScope = name => {
  const [scope, _name] = name.split('_');
  const scopes = scope.split('.');
  if (name[0] !== '$' || scopes.length < 2) return '';
  return `${scopes.slice(0, scopes.length - 1).join('.')}_${_name}`;
};
