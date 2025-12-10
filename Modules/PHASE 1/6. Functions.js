//what why how
//what function

//agar code likh diya to wo turant chal jaata hai
//function -> code ka ek block jise hum baar baar call kar sakte hain
//function ko define karna padta hai tab jaake wo use ho sakta hai

//function declaration/statement
//syntax
/*
function functionName(parameters){
    //code to be executed
}
*/

//function expression
//syntax
/*
let functionName = function(parameters){
    //code to be executed
}
*/

//fat arrow function (ES6 feature)
//syntax
/*
let functionName = (parameters) => {
    //code to be executed
}
*/

//parameters -> input values jo function ko diye jaate hain
//arguments -> wo values jo function ko call karte waqt diye jaate hain


function greet(name){ //name is a parameter
    console.log("Hello " + name + ", welcome to JavaScript functions!");
}
    
greet("Alice"); //Alice is an argument

//default parameters
function greetUser(name = "Guest"){
    console.log("Hello " + name + ", welcome to our website!");
}
greetUser();

//jab aruguments kai saare ho to hamein utne hi parameters banane honge, isse bachne ke liye, hum rest ka use karte hai ... agar ... function ke parameter space mein lage to wo rest operator hai and agar wo arrays and objects mein lage to wo spread operator hai

//spread operator 

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15

//rest operator
function multiply(factor, ...numbers){
    return numbers.map(num => num * factor);
}
console.log(multiply(2, 1, 2, 3)); // Outputs: [2, 4, 6]

//return statement
//return ka matlab jaha se aaya ho waha daal denge

function add(a, b){
    return a + b;
}
let result = add(5, 10);
console.log(result); // Outputs: 15

//first class functions
//functions can be treated like any other variable
//we can pass functions as arguments to other functions

function performOperation(a, b, operation){
    return operation(a, b);
}
let sumResult = performOperation(5, 10, add);
console.log(sumResult); // Outputs: 15
//we can return functions from other functions
function createMultiplier(factor){
    return function(number){
        return number * factor;
    }
}
let double = createMultiplier(2);
console.log(double(5)); // Outputs: 10

