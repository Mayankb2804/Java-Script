//const {score} = req.body;
let score = "33"
let score1 = "33abc"
let scoreNumber = Number(score);
let scoreNumber1 = Number(score1);
// 33abc => NaN => not a number
// null => null
// undefined => NaN
 
let isName = "mayank"
let name1 = Boolean(isName);
console.log(name1);
 
let x = 3
let n = Boolean(x)
console.log(n);

//"" => false
// "Mayank" => true

//******************************** operations ********************************//

//string additions 
// mathematical operations
  
// console.log(+"") => 0
// console.log(+true) => 1
// console.log(true+) => error

// precedence & postfix operator