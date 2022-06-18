const vscode = require('vscode');

const getConfig = section => vscode.workspace.getConfiguration(section);

const splitName = (name = '') => {
  const names = name.split('.');
  const lastIndex = names.length - 1;
  return { section: names.slice(0, lastIndex).join('.'), property: names[lastIndex] };
};

module.exports = {
  get: (name = '', $default) => {
    const { section, property } = splitName(name);
    return JSON.parse(JSON.stringify(getConfig(section).get(property, $default)));
  },
  set: (name = '', value) => {
    const { section, property } = splitName(name);
    return getConfig(section).update(property, value, vscode.ConfigurationTarget.Global);
  },
};
