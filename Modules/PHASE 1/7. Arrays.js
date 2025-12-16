// Array

let marks = [78, 85, 90, 66];

// accessing array elements
console.log(marks[0]); // 78

// modifying array elements
marks[1] = 88;

// array length
console.log(marks.length); // 4

// iterating over an array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// adding elements to an array
marks.push(92);
console.log(marks); // [78, 88, 90, 66, 92]

// removing the last element from an array
marks.pop();
console.log(marks); // [78, 88, 90, 66]

// removing the first element from an array
marks.shift();
console.log(marks); // [88, 90, 66]

// adding elements to the beginning of an array
marks.unshift(75);
console.log(marks); // [75, 88, 90, 66]

// splicing an array (remove element)
marks.splice(1, 1);
console.log(marks); // [75, 90, 66]

// adding in middle using splice
marks.splice(1, 0, 82, 95);
console.log(marks); // [75, 82, 95, 90, 66]

// slicing an array
let selectedMarks = marks.slice(1, 3);
console.log(selectedMarks); // [82, 95]

// finding the index of an element
let index = marks.indexOf(90);
console.log(index); // 3

// checking if an element exists in an array
let hasFullMarks = marks.includes(100);
console.log(hasFullMarks); // false

// merging two arrays
let extraMarks = [89, 91];
let allMarks = marks.concat(extraMarks);
console.log(allMarks); // merged array

// reversing an array
allMarks.reverse();
console.log(allMarks);

//sort, map, filter, reduce, forEach all these accept functions as arguments
//these are high order functions

// sorting an array (numeric sort)
allMarks.sort(function (a, b) {
    return a - b;
});
console.log(allMarks); // sorted marks

//for each on array

marks.forEach(function(val){
    console.log(val);
});

// map on array
//map srf tab use karna hai jab aapko ek naya array hai  pichle array ke data ke basis par

//map dikhte hi saath man mein ek blank array bana liye karo

let DupMarks = marks.map(function(val){
    return val * 2;
});

console.log(DupMarks); // [150, 164, 190, 132]

// filter on array
let highMarks = marks.filter(function(val){
    return val > 80;
});

console.log(highMarks); // [82, 95, 90]

// reduce on array
let totalMarks = marks.reduce(function(accumulator , val){ // accumulator is like a running total, can use any name like sum, total
    return accumulator + val;
}, 0);
console.log(totalMarks); // sum of marks
// accumulator = 0 (initial value)
// accumulator = 0 + 75 = 75
// accumulator = 75 + 82 = 157
// accumulator = 157 + 95 = 252
// accumulator = 252 + 90 = 342
// accumulator = 342 + 66 = 408

// find on array
let firstHighMark = marks.find(function(val){
    return val > 80;
});
console.log(firstHighMark); // 82

// some on array //checks if at least one element satisfies the condition
let hasLowMarks = marks.some(function(val){
    return val < 70;
});
console.log(hasLowMarks); // true

// every on array //basically opposite of some
let allAbove60 = marks.every(function(val){
    return val > 60;
});
console.log(allAbove60); // true

//destructuring array
let [firstMark, secondMark, ...restMarks] = marks;
console.log(firstMark); // 75
console.log(secondMark); // 82
console.log(restMarks); // [95, 90, 66] (rest operator)

//copying array
let copiedMarks = [...marks]; // spread operator
console.log(copiedMarks); // [75, 82, 95, 90, 66]

/* -------------------------------------------------------
  JAVASCRIPT ARRAY PRACTICE QUESTIONS
  Source: Sheryians Coding School - Array Section
  -------------------------------------------------------
*/

// ==========================================
// 1. BASIC ARRAY OPERATIONS
// ==========================================

// Q1: Create an array with three fruits and print the second fruit.
let fruits = ["Apple", "Banana", "Orange"];
// Your code here...
console.log(fruits[1]);


// Q2: Add 'Mango' to the end and 'Pineapple' to the beginning of the 'fruits' array.
// Your code here...
fruits.push('Mango');
fruits.unshift('Pineapple');
console.log(fruits);


// Q3: Replace 'Banana' with 'Kiwi' in the 'fruits' array.
// Your code here...
fruits.splice(2,1,'Kiwi');
console.log(fruits);


// Q4: (Concept) What is the difference between push() and unshift()?
// Answer as a comment: 
//push puts new element in last, unshift add them in front


// Q5: Remove the last item from the array using a method.
// Your code here...
fruits.pop();
console.log(fruits)

// Q6: Insert 'Red' and 'Blue' at index 1 in the array.
let colors = ["Green", "Yellow"];
// Your code here...
colors.splice(1,0,'Red','Blue');
console.log(colors);


// Q7: Extract only the middle three elements from the array.
let bigArray = [1, 2, 3, 4, 5, 6]; 
// Your code here...
let smallArray = bigArray.slice(1,4);
console.log(smallArray);

// Q8: Sort the array alphabetically and then reverse it.
let alphabets = ["D", "A", "C", "B"];
// Your code here...
alphabets.sort(function(a,b){
    return a.localeCompare(b);
}).reverse();
console.log(alphabets);


// ==========================================
// 2. ARRAY METHODS (Map, Filter, Reduce, etc.)
// ==========================================

let numbers = [1, 2, 3, 4, 5, 12,7, 8];
console.log(numbers);

// Q9: Use .map() to square each number in the 'numbers' array.
// Your code here...
let sqrtNumbers = numbers.map(function(val){
    return val*val;
})
console.log(sqrtNumbers);


// Q10: Use .filter() to keep numbers greater than 10 from the 'numbers' array.
// Your code here...
let highNumber = numbers.filter(function(val){
    return val>10;
})
console.log(highNumber);


// Q11: Use .reduce() to find the sum of numbers in the 'numbers' array.
// Your code here...
let sum = numbers.reduce(function(accumulator, val){
    return accumulator+val;
}, 0);

console.log(sum);


// Q12: Use .find() to get the first number less than 10.
// Your code here...
let findNumber = numbers.find(val =>{
    return val<10;
})

console.log(findNumber);


// Q13: Use .some() to check if *any* student has scored below 35.
let studentScores = [45, 60, 32, 90, 85];
// Your code here...
let lowScore = studentScores.some(val=>{
    return val<35;
})
console.log(lowScore);

// Q14: Use .every() to check if *all* numbers in the array are even.
let Even = [2, 4, 6, 8];
// Your code here...
let checkEven = Even.every(val=>{
    return val%2===0;
})
console.log(checkEven);

// ==========================================
// 3. DESTRUCTURING & SPREAD OPERATOR
// ==========================================

// Q15: Destructure this array to get the 'firstName' and 'lastName' into separate variables.
let fullName = ["Harshit", "Jain"];
// Your code here...
let [first_name,last_name] = fullName;
console.log(first_name);
console.log(last_name);


// Q16: Merge these two arrays using the spread operator (...).
let arr1 = [1, 2];
let arr2 = [3, 4];
// Your code here...
let newArr = [...arr1,...arr2];
console.log(newArr);


// Q17: Add 'India' to the start of the 'countries' array using the spread operator.
let countries = ["USA", "UK", "Canada"];
// Your code here...
countries = ["India",...countries];
console.log(countries);

// Q18: Clone the 'originalArray' properly (create a deep copy/new reference, not just a reference copy).
let originalArray = [1, 2, 3];
// Your code here...
let cloneArr = [...originalArray];
console.log(cloneArr);
