// CODE 0

function eitherNotBoth(num) {
    if ((num % 3 === 0 && num % 5 !== 0)
        || (num % 3 !== 0 && num % 5 === 0)) {
        return true;
    }

    return false;
}

module.exports = eitherNotBoth;

// CODE 1

function fizzBuzz(numbers) {
    let swapString = ""

    for (const number of numbers) {
        if (number % 3 === 0 && number % 5 === 0) {
            swapString += "fizzbuzz";
        } else if (number % 3 === 0) {
            swapString += "fizz";
        } else if (number % 5 === 0) {
            swapString += "buzz";
        }
    }

    return swapString;
}

module.exports = fizzBuzz;
