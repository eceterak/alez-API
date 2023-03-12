// Find a string between a two characters
exports.strBetweenChar = (string, character) => {
  return string.substring(string.indexOf(character) + 1, string.lastIndexOf(character));
};

// Capitalize first letter of a string
exports.capitalize = (string) => string.charAt().toUpperCase() + string.slice(1);
