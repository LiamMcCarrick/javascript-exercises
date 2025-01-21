const palindromes = function (str) {
    const palinArr = [];
    for (char of str) {
        palinArr.push(char.toLowerCase());
    }
    const palinFilter = palinArr.filter((char) => {
        if ((char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58) ||
        (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
        (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)  ) {
            return true;
        } else {
            return false;
        }
    });
    const palinStrFilter = palinFilter.toString();

    const reverseStr = palinFilter.reverse().toString();

    return palinStrFilter === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
