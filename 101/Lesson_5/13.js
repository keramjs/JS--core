let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//returb sorted array based on sum of odd number contain by subarray

arr.sort((a,b)=>{
    return (a.reduce((acc, el)=> (el%2===0)? acc: acc+el))-(b.reduce((acc, el)=> (el%2===0)? acc: acc+el))
})

arr.forEach(el => console.log(el))