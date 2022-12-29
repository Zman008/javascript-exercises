function pigLatin(text) {
    textArray = text.split("");
    textArrayCopy = [...textArray];

    for (letter of textArray) {
        if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
            text = textArrayCopy.join("");
            text += 'ay';
            return text;
        } else {
            elm = textArrayCopy.shift()
            textArrayCopy.push(elm)
        }
    }
};

// Do not edit below this line
module.exports = pigLatin;
