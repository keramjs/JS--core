
function swap(txt) {
    let txtArr = txt.split(' ');
    return txtArr.map(el => {
        if (el.length > 1) {
            return el[el.length - 1] + el.slice(1, -1) + el[0];
        } else { return el }
    }).join(" ")
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"