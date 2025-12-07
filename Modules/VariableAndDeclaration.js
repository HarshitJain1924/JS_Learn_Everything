//GIVE IN HINDI-ENGLISH 

//var let const
var a;
var a = 10;
let a;
let a = 12;
// const a; //error
const a = 10;

//declaration and initialization

var a; //declare karna
var a = 10; //declare and initialize(first value assign)

//window mein add hota hai
//function scoped hota hai
//aap firse declare kr skte ho same name se and error nahi aayega  

//Scope (global,block,functional)

// 
function abcd(){
    if(true){
        let a = 12; //block scoped
        var b = 2; //function scoped
    }
}
/////////////////////////////////////////////////////
//TEMPORAL DEAD ZONE (TDZ)
console.log(a); //error
let a = 10;
console.log(a); //10

//TDZ ka matlab hai ki jab tak variable declare nahi hota tab tak usse access nahi kar sakte
//TDZ sirf let and const ke liye hota hai var ke liye nahi hota

/////////////////////////////////////////////////////
//hoisting
console.log(a); //undefined
var a = 10;
console.log(a); //10

/*
-------------------------------------------------------
behind the scenes ye hota hai
var a = undefined;
console.log(a); //undefined
a = 10;
console.log(a); //10
-------------------------------------------------------
*/

//hoisting ek variable ko jab js mein banate hai to wo variable do hisso mein toot jata hai
//1. declaration
//2. initialization
//js pehle declaration ko upar le jata hai aur fir initialization ko niche karta hai
//isliye pehle undefined aata hai fir value aati hai

//const ke sath hoisting nahi hoti
console.log(a); //error
const a = 10;
console.log(a); //10

/*
var -> hoist -> undefined
let/const -> hoist -> TDZ
*/

/////////////////////////////////////////////////////

//practice question
console.log(a);
let a = 10;
//output kya hoga? -> error
console.log(b);
var b = 20;
//output kya hoga? -> undefined
console.log(c);
const c = 30;
//output kya hoga? -> error

const person = {name: "John", age: 25};
person.age = 26; //yeh allowed hai
//person = {name: "Doe", age: 30}; //error
//const se banaye gaye object ke properties ko change kar sakte hai lekin pura object ko reassign nahi kar sakte

