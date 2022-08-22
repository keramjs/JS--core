
function stringToSignedInteger(str){

    if (str[0] === "-"){
        return stringToInteger(str.slice(1))* -1;
    }else if (str[0] === "+"){
        return stringToInteger(str.slice(1));
    }else{
        return stringToInteger(str);
}
}

function stringToInteger(str){
    let num = 0;
    let numbers ={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9};
    let arrNum = str.split('').reverse();
    for(let i = 0; i < arrNum.length; i+=1){
        let currentNum = numbers[arrNum[i]]
        num = num + (currentNum*(10**i))
    }
    return num 
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true