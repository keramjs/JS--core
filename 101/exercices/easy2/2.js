
let readline = require("readline-sync");
let nm = readline.question("What is your name ? ");
if(/!$/.test(nm)){
    console.log(`HELLO ${nm.slice(0,-1).toUpperCase()}. WHY ARE YOU SCREAMING?`)
}else{
    console.log(`hello ${nm}.`)
}