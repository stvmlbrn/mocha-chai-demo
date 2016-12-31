exports.sanitize = (word) => {
  return word.toLowerCase().replace(/-/g, ' ');
};

exports.tokenize = (sentence) => {
  return sentence.split(' ');
};