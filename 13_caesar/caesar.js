const caesar = function (str, shift) {
  strArr = str.split("");
  shift = shift % 26;

  for (let i = 0; i < strArr.length; i++) {
    if (/[\w]/.test(strArr[i])) {
      code = strArr[i].charCodeAt();

      if (strArr[i] >= "a") {
        code = ((code + shift - 97 + 26) % 26) + 97;
      } else {
        code = ((code + shift - 65 + 26) % 26) + 65;
      }

      strArr[i] = String.fromCharCode(code);
    }
  }
  return strArr.join("");
};

// Do not edit below this line
module.exports = caesar;
