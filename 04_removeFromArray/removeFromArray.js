const removeFromArray = function(array, ...args) {
    /*
    let args = Array.prototype.slice.call(arguments,1);
    let filteredArrary = array;

    for (let arg of args){
        filteredArrary = filteredArrary.filter(val => val !== arg);
    }

    return filteredArrary */
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item)
        }
    });
    return newArray;
};

console.log(removeFromArray([1,2,3,4],2,3));

// Do not edit below this line
//module.exports = removeFromArray;
