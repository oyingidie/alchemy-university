// CODE 0

function shortestString(str1, str2) {
    return str1.length > str2.length
        ? str2
        : str1;
}

module.exports = shortestString;
