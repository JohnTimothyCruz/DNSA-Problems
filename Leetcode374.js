// 374. Guess Number Higher Or Lower

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    let mid;
    let returned;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        returned = guess(mid);

        if (returned === -1) {
            right = mid - 1;
        } else if (returned === 1) {
            left = mid + 1;
        } else {
            return mid;
        };

        mid = Math.floor((right + left) / 2);
    };
};

// Defining guess function here
const guess = (num) => {
    if (num < 6) { // Result should be 6
        return 1
    } else if (num > 6) {
        return -1
    } else {
        return 0
    }
}

// Test here
console.log(guessNumber(10))
