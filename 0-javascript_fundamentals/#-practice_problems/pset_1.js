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

// CODE 2

function countC(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "c") {
            count++;
        }
    }

    return count;
}

module.exports = countC;

// CODE 3

function countVowels(str) {
    let count = 0;
    const vowels = ["A", "E", "I", "O", "U"];

    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toUpperCase();

        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;
