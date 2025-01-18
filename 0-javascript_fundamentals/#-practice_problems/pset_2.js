// CODE 0

function eitherNotBoth(num) {
    if ((num % 3 === 0 && num % 5 !== 0)
        || (num % 3 !== 0 && num % 5 === 0)) {
        return true;
    }

    return false;
}

module.exports = eitherNotBoth;
