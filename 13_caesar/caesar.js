const caesar = function (text, shift) {
  textArray = text.split("");
  enc = [];

  for (char of textArray) {
    uni = char.charCodeAt();
    if (!/[.,?!\s]/.test(char)) {
      nUni = uni + shift;
      
      condition1 = uni > 64 && uni < 91 && (nUni < 65 || nUni > 90) 

      if (condition1) {
        while (nUni > 90) {
          nUni -= 26;
        }

        while (nUni < 65) {
          nUni += 26;
        }
      }

      condition2 = uni > 96 && uni < 123 && (nUni < 97 || nUni > 122) 

      if (condition2) {
        while (nUni > 122) {
          nUni -= 26;
        }

        while (nUni < 97) {
          nUni += 26;
        }
      }
    } else {nUni = uni}

    enc.push(String.fromCharCode(nUni));
  }

  return enc.join("");
};

// Do not edit below this line
module.exports = caesar;
