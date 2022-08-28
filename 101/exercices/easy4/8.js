function wordSizes(txt){
    if (txt.length ===0) return {};
    return txt.split(' ').reduce((acc, elem)=>{
        if (acc.hasOwnProperty(elem.length)){
            acc[elem.length] +=1;
            return acc
        }else{
        acc[elem.length] = 1;
        return acc
        }
    },{})
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}