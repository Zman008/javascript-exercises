const repeatString = function(string, num) {
    repeatedText = '';
    if (num >= 0){
        for (num; num > 0; num--) {
            repeatedText += string;
        }
        return repeatedText;
    } else {return 'ERROR'}
}; 

// Do not edit below this line
module.exports = repeatString;
