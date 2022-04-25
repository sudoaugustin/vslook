const { workspace, ConfigurationTarget } = require('vscode');

const getConfig = section => workspace.getConfiguration(section);

const splitName = (name = '') => {
  const names = name.split('.');
  const lastIndex = names.length - 1;
  return { section: names.slice(0, lastIndex).join('.'), property: names[lastIndex] };
};

module.exports = {
  get: (name = '', _default = '') => {
    const { section, property } = splitName(name);
    return JSON.parse(JSON.stringify(getConfig(section).get(property, _default)));
  },
  set: (name = '', value = '') => {
    const { section, property } = splitName(name);
    getConfig(section).update(property, value, ConfigurationTarget.Global);
  },
};
