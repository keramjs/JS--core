let numbers = [1, 2, 3, 4];

numbers = []
numbers.splice(0);
for (let i = 0; i = numbers.length; i+=i){
    numbers.pop();
}
numbers.length = 0;
while(numbers.length){
    numbers.pop();
}
console.log(numbers)

