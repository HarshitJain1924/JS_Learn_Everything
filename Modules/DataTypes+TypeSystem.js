// dat type
//data ka type
//12 harshit true [] {} function null undefined NaN Symbol bigInt
//data types in js

//1. primitive data types - aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
//string, number, boolean, null, undefined, symbol, bigInt
a = 12
b = a; //b = 12
//b ab 12 hai, a ki value change karne par b ki value change nahi hogi
a = 20; //a = 20
//b ab bhi 12 hai, b ki value change nahi hui

//String
let str = "hello"; //string
let str2 = 'hello'; //string
let str3 = `hello`; //string

//Number
let num = 12; //number
let num2 = 12.5; //number

//Boolean
let bool = true; //boolean
let bool2 = false; //boolean

//Null
//null ka matlab haai ki apne jaan bujh kar kisi variable ko null set kiya hai
let n = null; //null

//Undefined
//undefined ka matlab hai ki variable ko declare to kiya hai lekin usse value assign nahi ki hai by default use undefined milta hai
let u; //undefined

//Symbol -> unique immutable value
//symbol ka use unique identifier banane ke liye hota hai
//symbol ko kisi bhi value se compare nahi kar sakte, wo hamesha unique hota hai
let sym = Symbol("description"); //symbol
let sym2 = Symbol("description"); //symbol
//sym aur sym2 alag alag hai, dono ka description same hai lekin value alag hai

//BigInt
let bigInt = BigInt(1234567890123456789012345678901234567890n); //bigInt

//NaN
let notANumber = NaN; //not a number
//NaN is a special value that represents a value that is not a number


//2. reference data types - aisi saari values jinko copy karne par tumhe ek reference milta hai asli value ka
//array, object, function
//{} [] ()

//Array - ek aisi data structure jo multiple values ko ek sath store kar sakta hai
let a = [1,2,3];
let b = a; //b = [1,2,3]
//b ab [1,2,3] hai, a ki value change karne par b ki value change hogi
a.push(4); //a = [1,2,3,4]
//b ab bhi [1,2,3,4] hai, b ki value change hui hai

//Object - ek aisi data structure jo key-value pairs ko store karti hai
let obj1 = {name: "harshit", age: 21};
let obj2 = obj1; //obj2 = {name: "harshit", age: 21}
//obj2 ab {name: "harshit", age: 21} hai, obj1 ki value change karne par obj2 ki value change hogi
obj1.age = 22; //obj1 = {name: "harshit", age: 22}
//obj2 ab bhi {name: "harshit", age: 22} hai, obj2 ki value change hui hai

//Function - ek aisi data structure jo ek ya zyada statements ko ek sath execute karti hai
function greet() {
    console.log("Hello World");
}
let greet2 = greet; //greet2 ab greet function ka reference hai
greet2(); //Hello World
//greet2 function ko call karne par greet function execute hota hai
/////////////////////////////////////////////////////

// Dynamic Typing - dynamic typing ka matlab hai ki variable ka type runtime par change ho sakta hai

let data = 10; //data is number
data = "harshit"; //data is string
data = true; //data is boolean
data = {name: "harshit"}; //data is object

/////////////////////////////////////////////////////
//typeof quirks
console.log(typeof null); //object
//yeh ek bug hai javascript ka, null ka type object return karta hai

console.log(typeof NaN); //number
//NaN ka type number hota hai, kyunki NaN ek special number value hai jo represent karta hai "Not a Number"

console.log(typeof function(){}); //function
//function ka type function hota hai, kyunki function ek callable object hota hai

console.log(typeof []); //object
//array ka type object hota hai, kyunki array bhi ek object hi hota hai jo indexed properties ko store karta hai

//////////////////////////////////////////////////////
//type coercion
//type coercion ka matlab hai ki javascript automatically ek type ko dusre type mein convert kar deta hai

console.log('5' + 5); // '55'
//string + number = string (js has choice when it comes to + operator - it prefers string concatenation, so it converts number to string)
console.log('5' - 5); // 0
//string - number = number (js has no choice when it comes to - operator - it prefers numeric subtraction, so it converts string to number)
console.log('5' * 5); // 25
//string * number = number
console.log('5' / 5); // 1
//string / number = number

console.log(true + 1); // 2
//boolean + number = number (true is converted to 1)
console.log(false + 1); // 1
//boolean + number = number (false is converted to 0)

///////////////////////////////////////////////////
// truly and falsy values
//js mein kuch values aisi hoti hai jo condition mein false consider hoti hai, unhe falsy values kehte hai
//falsy values: false, 0, "", null, undefined, NaN, document.all
//baaki sab values truly hoti hai

if(false){
    console.log("This is falsy");
}
if(true){
    console.log("This is truly");
}
if(-1){
    console.log("This is truly");
}

