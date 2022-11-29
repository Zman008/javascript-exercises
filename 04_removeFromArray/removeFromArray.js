const removeFromArray = function(array, ...nums) {
    for (num of nums){
        for (i = 0; i < array.length; i++) {
            if (array[i] === num){
                array.splice(i, 1);
            }
        }
    }
    return array
}  

// Do not edit below this line
module.exports = removeFromArray;
