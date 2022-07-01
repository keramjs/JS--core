let statement = "The Flintstones Rock";
let freq = {}
statement.split('').forEach(el => { 
    if (Object.keys(freq).includes(el)){
        freq[el] += 1}else{
            freq[el] =1
        }
})

console.log(freq)

//iterate through letters
//if letter doesn't exist in object.keys add it as key and add value 1
//if already exist in keys add 1 to it's value


//