const sumAll = function(start,end) {
    const sumNums = [];
    let finalSum = 0;
    if ((start < 0 || end < 0) || (!Number.isInteger(start) || !Number.isInteger(end))) {
        return "ERROR"
    } else if (start < end) {
        for (i = start; i <= end;i++ ) {
            sumNums.push(i);
        };
    } else {
        for (i = start; i >= end; i--) {
            sumNums.push(i);
        }
    }
    
    sumNums.forEach((num) => {
        finalSum += num;
    });

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
