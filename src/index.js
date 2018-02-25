module.exports = function longestConsecutiveLength(array) {
//function longestConsecutiveLength(array) {
    var arr = array.slice();
    var count = 0;
    var max = 0;
    var o = {};
    var current;
    
    if (!arr) return 0;
    for (var i = 0; i < arr.length; i++)
        o[arr[i]] = 1;
    

    for (var i = 0; i < arr.length; i++) {
        count = 0;
        current = arr[i];
        while (o[current++]) {
            count++;
        }
        if (count > max)
            max = count;
    }
    
    return max;
};
