/* Write a function that takes a string and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character. */
function letterPercentages(txt) {
    let lowArr = txt.match(/[a-z]/g) ? txt.match(/[a-z]/g).length : 0
    let upArr = txt.match(/[A-Z]/g) ? txt.match(/[A-Z]/g).length : 0
    let neither = txt.match(/[^A-Za-z]/g) ? txt.match(/[^A-Za-z]/g).length : 0
    let res = {}
    res.lowercase = (lowArr / txt.length * 100).toFixed(2);
    res.uppercase = (upArr / txt.length * 100).toFixed(2);
    res.neither = (neither / txt.length * 100).toFixed(2);
    return res;
}

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
