const accountId = 25103088;
let username = "Mayank"
var idPass = 12345
college = "NITJ"
let state;
// accountId = 25103000 // not allowed
username = "Varun"
idPass = 123
college = "IIT"
console.log(accountId);
/*
prefer not to use var 
bcz of issue in block and functional scope
*/
console.table([accountId, username, idPass, college, state])
