const name = "Mayank"
const age = 18
console.log(`My name is ${name} and my age is ${age}`);

const college = new String('NITJ')
//length, charAt, indexOf, toLowerCase, __proto__
console.log(college.__proto__);
console.log(college.length);
console.log(college.toLowerCase());
console.log(college.indexOf('T'));

//slicing
let anotherName = "Mayank"
let newString = anotherName.substring(0, 4);
let newString1 = anotherName.substring(0, 4);



const anotherName1 = "    Mayank     "
console.log(anotherName1);
const newString2 = anotherName1.trim();
console.log(newString2);


const url = "https://mayank. com"
console.log(url.replace(' ', ''));
console.log(url.includes('mayank'));
console.log(url.split(' '));

