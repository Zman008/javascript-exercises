const palindromes = function (string) {
    string = string.replace(/[.,!]/g,"")
    string = string.toLowerCase();
    string = string.replace(/\s/g, '');
    strArr = string.split('');

    reverseStr = (strArr.reverse()).join('');
    if (reverseStr === string) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
