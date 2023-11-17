const palindromes = function (string) {
    string = string.replace(/[^\w]/g, '');
    string = string.toLowerCase();
    strArr = string.split('');

    reverseStr = (strArr.reverse()).join('');
    if (reverseStr === string) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
