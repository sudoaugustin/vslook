const fs = require('fs');
const json = require('json5');

const read = (path = '', options = {}) => {
  if (!fs.existsSync(path)) return options.json ? {} : '';
  const content = fs.readFileSync(path, 'utf8');
  return options.json ? json.parse(content) : content;
};

const write = (path = '', content, options = {}) => {
  //Warning: Don't ever use JSON5 for this
  content = options.json ? JSON.stringify(content) : content;
  fs.writeFileSync(path, content);
};

const update = (path = '', apply, options = {}) => {
  const content = read(path, options);
  write(path, apply(content), options);
};

module.exports = { read, write, update };
