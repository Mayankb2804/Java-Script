// singleton 

//constrctor => singleton
Object.create
// object literals => !singleton
const user = {
    name : "Mayank",
    0 : "bansal",
    "fullname" : "Mayank Bansal"
}
console.log(user.name);

//console.log(user[name]); don't do this
console.log(user["name"]);

console.log(user["fullname"]);


const mysym = Symbol("key1");

let jsuser = {
//    mysym : "mykey1",
    name : "Mayank",
    [mysym] : "mykey2" // correct notation for symbol
}

//console.log(typeof jsuser.mysym); => string
console.log(jsuser[mysym]); // correct notation
console.log(jsuser);

user[0] = 18
//user["name"] = "Mayank Bansal"
console.log(user);

Object.freeze(user) // No changes can do in object

const jsuser1 = {
    name : "Mayank"
}
jsuser1.greeting = function(){
    console.log("hello")
}
jsuser1.greetingtwo = function(){
    console.log(`hello ${this.name}`)   
}
console.log(jsuser1.greeting); // => [Function (anonyomus)]
console.log(jsuser1.greetingtwo())

/* 
------------------------------------------------------------Object part 2-----------------------------------------------------------------------------                        
------------------------------------------------------------singleton---------------------------------------------------------------------------------
*/



const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "Mayank"
tinderuser.isLoggedIn = false

const regularuser = {
    email : "123@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Mayank",
            lastname : "Bansal"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname); 


const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    2 : "b",
    3 : "c",
    4 : "d"
}
const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2) // {} => source where all union comes
const obj5 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4); // Union in assign 
console.log(obj5);

Object.keys(obj2)
Object.values(obj2)
Object.entries(obj2) //=>gives keys and values in list/array from {['name'] , ['Mayank']}
console.log(tinderuser.hasOwnProperty('name'))
 


const users = [{name : "Mayank"},{name : "Parshva"},{}]
console.log(users[0]);
console.log(users[1].name);

console.log(Object.keys(tinderuser))//put keys in arrays
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));// make arrays to objects items

console.log(tinderuser.hasOwnProperty('name'));



// -------------------------------------------- destructure
 const course = {
    coursename : "JS",
    price : 999,
    courseInstructor : "Mayank"
 }

 const {courseInstructor} = course;
console.log(courseInstructor);

 const {courseInstructor : instructor} = course;
console.log(instructor);

