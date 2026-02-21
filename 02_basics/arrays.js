// array => mix data, resizable
const myArr = [1, 2, "Mayank"]
const arr = new Array(1,2,3,4)


// Array methods
//push, pop, unshift, shift, includes, indexOf, join
myArr.push(5);
myArr.pop();
//unshift => at start push
myArr.unshift(9)
//shift => at start pop
myArr.shift()

myArr.includes(9)
myArr.indexOf(3)

//join => converts array to string
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

//slice, splice

//slice => not includes last index and no efffect on original arr

//splice => includes last index and effect on original arr =>[1,2,3,4,5] arr.splice(1,3) =>[2,3,4] orrarr => [1,5]
//splice => arr comes out


const nA1 = [1,2,3]
const nA2 = [4,5,6]
const nA3 = nA1.concat(nA2)
//nA1.push(nA2) => [1,2,3,[4,5,6]]
//constnA3 = nA1.concat(nA2) => [1,2,3,4,5,6]

//spread
const nA4 = [...nA1, ...nA2];
console.log(nA4);

const nA5 = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
nA6=nA5.flat(Infinity) //in flat we have to give depth like 3 in this case 
console.log(nA6);


//isArray, from
console.log(Array.isArray("Mayank"));
console.log(Array.from("Mayank"));

console.log(Array.from({name : "mayank"})); //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
