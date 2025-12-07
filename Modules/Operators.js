// Arithmetic, Comparison, Logical, Assignment, unary, ternary operators

// Arithmetic Operators
// +, -, *, /, %, ++, --, **

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a + ' ' + b); // '10 5' (string concatenation)
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000 (10^5)
console.log(++a); // 11
console.log(--b); // 4
console.log(a++); // 11 (post-increment)

// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

console.log(a == b); // false
console.log(a === b); // false // strict equality check
console.log(a != b); // true
console.log(a !== b); // true // strict inequality check
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

// Logical Operators
// &&, ||, !

console.log(a > 5 && b < 10); // true
console.log(a > 5 || b > 10); // true
console.log(!(a > 5)); // false

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=
let c = 20;
c += 5; // c = c + 5
console.log(c); // 25
c -= 5; // c = c - 5
console.log(c); // 20
c *= 2; // c = c * 2
console.log(c); // 40
c /= 4; // c = c / 4
console.log(c); // 10
c %= 3; // c = c % 3
console.log(c); // 1
c **= 3; // c = c ** 3
console.log(c); // 1

// Unary Operators
// typeof, +, -, !

console.log(typeof a); // number
console.log(+a); // 11 (unary plus)
console.log(-b); // -4 (unary minus)
console.log(!true); // false

// Ternary Operator
// condition ? expr1 ([if]truly code) : expr2 ([else]falsy code)
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // 'Yes'

/////////////////////////////////////////////////////
//instanceof operator
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof String); // false

//only works with reference data types (objects, arrays, functions)
/////////////////////////////////////////////////////


