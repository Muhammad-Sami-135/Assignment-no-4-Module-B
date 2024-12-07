const arrays = [
    42,
    true,
    `Hello, World!`,
    {
        name: "Sami",
        age: 20,
        isStudent: false,
    },
    false,
    3.14,
    "Javascript is fun!",

];


// Q no 1:

let maps = arrays.map((element) => {
    return JSON.stringify(element);
})

console.log(maps);


// q no 2:

let filters = arrays.filter((element) => {
    return typeof element === "number";
})
console.log(filters);


// q no 3:

arrays.forEach((element, index) => {
    console.log(index, element);
})


// q no 4:

let reduces = arrays.reduce((plus, element) => {
    return typeof element === "number" ? plus + element : plus
})

console.log(reduces);


// q no 5:

let finds = arrays.find(element => typeof element === "boolean");

console.log(finds);


// q no 6:

let findIndexs = arrays.findIndex(element => typeof element === "object");

console.log(findIndexs);


// q no 7:

let somes = arrays.some((element) => {
    return typeof element === "number"
})

console.log(somes);


// q no 8:

let everys = arrays.every((element) => {
    typeof element === "string"
})

console.log(everys);