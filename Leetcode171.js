// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

var titleToNumber = function(columnTitle) {
    let res = 0

    for (const char of columnTitle) {
        res = res * 26 + (char.charCodeAt(0) - 64)
    }

    return res
};

console.log(titleToNumber("AA"))
