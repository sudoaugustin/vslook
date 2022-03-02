const fs = require("fs");

const read = (path, isJson) => {
  const content = fs.readFileSync(path, "utf8");
  return isJson ? JSON.parse(content) : content;
};

const write = (path, content, isJson) => {
  content = isJson ? JSON.stringify(content, null, "\t") : content;
  fs.writeFileSync(path, content);
};

module.exports = { read, write };
