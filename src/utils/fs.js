const fs = require('fs');

const read = (path = '', options = {}) => {
  if (!fs.existsSync(path)) return options.json ? {} : '';

  const content = fs.readFileSync(path, 'utf8');
  return options.json ? JSON.parse(content) : content;
};

const write = (path = '', content, options = {}) => {
  content = options.json ? JSON.stringify(content) : content;
  fs.writeFileSync(path, content);
};

const update = (path = '', apply, options = {}) => {
  const content = read(path, options);
  write(path, apply(content), options);
};

module.exports = { read, write, update };
