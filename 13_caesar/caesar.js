const caesar = function (text, shift) {
  textArray = text.split("");
  enc = [];

  for (char of textArray) {
    uni = char.charCodeAt();
    if (!/[.,?!\s]/.test(char)) {
      uni += shift;
    }
    
    enc.push(String.fromCharCode(uni));
  }

  return enc.join("");
};

// Do not edit below this line
module.exports = caesar;
