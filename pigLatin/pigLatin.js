function pigLatin(text) {
    wordList = text.split(' ');
    pigL = [];
    
    for (word of wordList) {
        pigL.push(toPigLatin(word));
    }
    
    return pigL.join(' ');
};

function toPigLatin(word) {
    textArray = word.split("");
    textArrayCopy = [...textArray];

    for (letter of textArray) {
        if(letter == 'u' && textArrayCopy[textArrayCopy.length - 1] == 'q') {
            elm = textArrayCopy.shift()
            textArrayCopy.push(elm)
        } else if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
            word = textArrayCopy.join("");
            word += 'ay';
            return word;
        } else {
            elm = textArrayCopy.shift()
            textArrayCopy.push(elm)
        }
    }
}

// Do not edit below this line
module.exports = pigLatin;
