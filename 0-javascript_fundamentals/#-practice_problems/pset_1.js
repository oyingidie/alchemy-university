// CODE 0

function shortestString(str1, str2) {
    return str1.length > str2.length
        ? str2
        : str1;
}

module.exports = shortestString;

// CODE 1

function halfValue(numbers) {
    const newArray = [];
    let halved = 0; 

    for (let i = 0; i < numbers.length; i++) {
        halved = Math.round(numbers[i] / 2);
        newArray.push(halved);
    }

    return newArray;
}

module.exports = halfValue;
