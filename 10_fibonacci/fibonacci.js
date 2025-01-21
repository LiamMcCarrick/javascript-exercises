const fibonacci = function(fibNum) {
    if (fibNum < 0) {
        return "OOPS"
    } else if (fibNum == 0) {
        return 0;
    } else if (fibNum == 1) {
        return 1;
    }

    fibNum = Number(fibNum);
    let fib = 0;
    let prev2 = 0;
    let prev1 = 1;
    for (i = 2; i <= fibNum; i++) {
        fib = prev1 + prev2;
        prev2 = prev1;
        prev1 = fib;
    }
    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
