//generate hexadecimal random number in format 8-4-4-4-12 pattern as a string

function generateUUID() {
    arrOfSections = [5,4,4,4,12]
    uiid = []
    arrOfSections.forEach(element => {
        arr = []
        for (i=0; i < element; i++){
            arr.push(Math.floor(Math.random() * 0xf).toString(16))
        }
        uiid.push(arr)
    });
    return uiid.map( element => element.join('')).join('-') 
}
console.log(generateUUID())