import palettes from './data/palettes';

const vscode = window.acquireVsCodeApi();

export const getTheme = () => {
  const props = document.documentElement.style.cssText.split(';');
  return props.reduce((style, property) => {
    let [name, value] = property.split(':');
    name = name.trim().replace('--vscode-', '').replace('-', '.');
    return { ...style, [name]: value };
  }, {});
};

export const setGlobals = () => {
  window.$shrink = {};
  const colors = Object.entries({ base: palettes.base, ...palettes[window.$palette] });
  window.$colors = colors.map(([name, indents]) => [name, Object.entries(indents)]);
};

export const postMessage = msg => vscode.postMessage(msg);
