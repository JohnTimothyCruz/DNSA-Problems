// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var generate = function(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        res[i] = [];
        res[i][0] = res[i][i] = 1;

        for(let j = 1; j < i; j++) {
            res[i][j] = res[i-1][j] + res[i-1][j-1];
        }
    }

    return res;
};

console.log(generate(5))
