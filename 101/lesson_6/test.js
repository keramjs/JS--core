
const readline = require("readline-sync");

function playerInput(){
    let field = readline.question("Pick your field! You can pick only from 0 to 9 ").trim()
    let square = readline.question("Pick your square ! You can pick only from 0 to 9").trim()
    
    if (/\d/.test(field)){
        console.log("passed")
    }
}

playerInput()