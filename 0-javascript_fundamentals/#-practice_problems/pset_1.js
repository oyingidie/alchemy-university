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

// CODE 4

function reverse(string) {
    let reversal = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reversal += string[i];
    }

    return reversal;
}

module.exports = reverse;

// CODE 5

function isPalindrome(string) {
    let mirrorString = "";

    for (let i = string.length - 1; i >= 0; i--) {
        mirrorString += string[i];
    }

    return string === mirrorString;
}

module.exports = isPalindrome;

// CODE 6

function sumTogether(arr1, arr2) {
    const newSingleArray = [];

    for (let i = 0; i < arr1.length; i++) {
        newSingleArray.push(arr1[i] + arr2[i]);
    }

    return newSingleArray;
}

module.exports = sumTogether;

// CODE 7

function countElements(elements) {
    const object = {};

    for (const key of elements) {
        if (!object[key]) {
            object[key] = 1;
        } else {
            object[key]++;
        }
    }

    return object;
}

module.exports = countElements;

// CODE 8

function playerHandScore(hand) {
    let score = 0;

    const cardPoints = {
        "K": 4,
        "Q": 3,
        "J": 2
    }

    for (let i = 0; i < hand.length; i++) {
        score += cardPoints[hand[i]];
    }

    return score;
}

module.exports = playerHandScore;
