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

//high order functions
//hof wo function hota hai jo ki return kare function ya fir accept kare ek function apne parameter mein
//example of hof -> map, filter, reduce
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

function filterEvenNumbers(arr){
    return function(){
        //some code to filter even numbers
    }
}

filterEvenNumbers()();
//or

function abcd(){

}

abcd(function(){
    //some code
});


//pure vs impure functions
//pure function -> jo same input par hamesha same output de aur jiska koi side effect na ho
function pureAdd(a, b){
    return a + b;
}
//impure function -> jo same input par alag alag output de sakta hai ya jiska side effect ho
let counter = 0;
function impureIncrement(){
    counter++;
    return counter;
}
console.log(impureIncrement()); // Outputs: 1
console.log(impureIncrement()); // Outputs: 2

//closure and lexical scope
//closure -> ek fnc jo return kare ek aur function aur return hone waale function humesha use karega parent fnc ka koi variable
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}
const newFunction = outerFunction("outside");
newFunction("inside");

//lexical scope -> ek fnc apne parent fnc ke variables ko access kar sakta hai
function parentFunction(){
    let parentVariable = "I am from parent function";
    function childFunction(){
        console.log(parentVariable);
    }
    childFunction();
}
parentFunction();

//immediately invoked function expression (IIFE)
//ek aisa function jo define hote hi turant execute ho jata hai
(function(){
    console.log("This is an IIFE!");
})();

//OR
(() => {
    console.log("This is an IIFE using arrow function!");
}
)();

//hoisting in functions
//function declarations are hoisted
hoistedFunction();
function hoistedFunction(){
    console.log("This function is hoisted!");
}
//function expressions and arrow functions are not hoisted
//unhoistedFunction(); // This will throw an error
let unhoistedFunction = function(){
    console.log("This function is not hoisted!");
};
unhoistedFunction();
//arrow function
//unhoistedArrowFunction(); // This will throw an error
let unhoistedArrowFunction = () => {
    console.log("This arrow function is not hoisted!");
};
unhoistedArrowFunction();

//practice problems
//use rest parameters to accept any number of scores and return the total

function getScore(...scores){
    let total = 0;
    scores.forEach(function(score){
        total += score;
    });
    return total;
}

console.log(getScore(10, 20, 30)); // Outputs: 60

//pass a function inside a function into another function and excute it inside 

function abcd(val){
    val();
}

abcd(function(){
    console.log("Function passed as argument executed!");
});

//BMI calculator 
function bmi(weight,height){
    return weight/(height*height);
}

console.log(bmi(69,1.7).toFixed(2));

//create a reusable discount calculator (HOF)

function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);
    };
}

let discounter = discountCalculator(10);
console.log(discounter(200));

//create a counter using closure

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4

//create a pure function to transform a value
function double(val){
    return val+val;
}

console.log(5);

//IIFE to isolate variables
(function(){
    const password = "secret password";
    console.log(password);
})();

console.log(password);

function level(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum+=i;
        if(sum==n){
            return i;
        }
        else if(sum>n){
            return i-1;
        }
    }
    return 0;
}
