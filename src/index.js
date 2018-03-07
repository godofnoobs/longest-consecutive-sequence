module.exports = function longestConsecutiveLength(arr) {
    var count = 0;
    var max = 0;
    var o = {};
    var current;
    
    if (!arr) return 0;
    for (var i = 0; i < arr.length; i++)
        o[arr[i]] = 1;
    for (var i = 0; i < arr.length; i++) {
        count = 0;
        var c = 0;
        current = arr[i];
        while (o[current++]) {
            c++;
            count++;
        }
        i += c-1;
        if (count > max)
            max = count;
    }
    return max;
};
