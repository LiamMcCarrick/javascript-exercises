const reverseString = function(string) {
    const stringArray = [];
    for (let char of string) {
        stringArray.push(char);
    }

    stringArray.reverse();
    
    let revString = "";

    for (let char of stringArray) {
        revString += char;
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
