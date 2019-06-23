//检测回文数
var isPalindrome = function(num) {
    var str = String(num);
    return str == str.split("").reverse().join("")
};

console.log(isPalindrome(121))

