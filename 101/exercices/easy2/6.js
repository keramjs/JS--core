function penultimate(str){
    return str.split(' ').slice(-2,-1).join();
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
