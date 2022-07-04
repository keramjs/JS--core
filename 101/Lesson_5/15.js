let arr = [{
        a: [1, 2, 3]
    },
    {
        b: [2, 4, 6],
        c: [3, 6],
        d: [4]
    },
    {
        e: [8],
        f: [6, 10]
    },
];

newArr = arr.reduce((acc, obj) => {
    if (Object.values(obj).every(el => {
            if (Array.isArray(el)) {
                return el.every(subEl => subEl % 2 === 0)
            } else {
                return el % 2 === 0
            }
        })) {
        console.log(obj)
        acc.push(obj)
        return acc
    } else {
        return acc
    }
}, [])

newArr.forEach(el => console.log(el))