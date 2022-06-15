function mergeTokenColors(tokens1, tokens2) {
  const tokens = [...tokens1, ...tokens2].reduce(() => {}, {});
}

module.exports = { mergeTokenColors };
