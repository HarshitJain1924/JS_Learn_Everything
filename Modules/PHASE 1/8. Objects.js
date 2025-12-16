//Object Literal Notation
let obj = {
    name: "Harshit",
    age: 21,
    city: "New Delhi"
};

console.log(obj.name); //Accessing property using dot notation
console.log(obj["age"]); //Accessing property using bracket notation

let aa = 'name';
console.log(obj[aa]); //Accessing property using variable with bracket notation

//nested object
let nestedObj = {
    name: "Harshit",
    address: {
        street: "123 Main St",
        city: "New Delhi",
        country: "India",
        location: {
            lat: 28.6790,
            long: 77.2690
        }
    },
    hobbies: ["reading", "gaming", "coding"]
};

//deep accessing
console.log(nestedObj.address.city); //Accessing nested object property
console.log(nestedObj.hobbies[1]); //Accessing array inside object

let {lat, long} = nestedObj.address.location; //Destructuring nested object
console.log(lat, long);

//looping through object
//for-in loop
for (let key in obj) {
    console.log(key, obj[key]);
}

//Object.keys()
Object.keys(obj);
console.log(Object.keys(obj));

//Object.values()
Object.values(obj);
console.log(Object.values(obj));

//Object.entries()
Object.entries(obj);
console.log(Object.entries(obj));

//Cloning an object
let obj2 = {...obj}; //Cloning using spread operator

let obj3 = Object.assign({}, obj); //Cloning using Object.assign()
//we can also add new properties while cloning
let obj4 = Object.assign({country: "India"}, obj); //Adding new property while cloning ,it will be added at the start
console.log(obj2);
console.log(obj3);
console.log(obj4);

//deep cloning using JSON methods
//shallow copy only copies the first level properties
let jsonString = JSON.stringify(nestedObj); //Convert object to JSON string
console.log(jsonString);
let deepClonedObj = JSON.parse(jsonString); //Convert JSON string back to object
console.log(deepClonedObj);
console.log(deepClonedObj.address === nestedObj.address); //false, different references

//optional chaining
console.log(nestedObj?.address?.location?.lat); //28.6790
console.log(nestedObj?.contact?.phone); //undefined, doesn't throw error

//computed property names
let role = "admin";

let user = {
    name: "Harshit",
    [role]: true //Computed property name
};  
console.log(user.admin); //true

//EXTRA METHODS

//Object.freeze()
Object.freeze(obj); //Freezing the object
obj.age = 22; //This will not change the age property
console.log(obj.age); //21

//Object.seal()
Object.seal(nestedObj); //Sealing the object
nestedObj.name = "Rohan"; //This will change the name property
delete nestedObj.age;
console.log(nestedObj.name); //Rohan
console.log(nestedObj.age); //21, age property not deleted
//nestedObj.address = {}; //This will throw error as we cannot add or remove properties

//Object.getOwnPropertyNames()
let propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames); //["name", "age", "city"]


/* -------------------------------------------------------
  JAVASCRIPT OBJECTS PRACTICE QUESTIONS
  Source: Sheryians Coding School - Objects Section
  -------------------------------------------------------
*/

// ==========================================
// 1. BASICS: CREATION & ACCESS
// ==========================================

// Q1: Create an object called 'student' with keys: 'name', 'age', and 'isEnrolled'.
// Your code here...
let student = {
    name: "Harshit",
    age: 21,
    isEnrolled: true
}

console.log(student);


// Q2: Can an object key be a number or a boolean? Try creating an object with 
//     keys like 10 or true and see if you can access them.
// Your code here...

const obj = {
    true: "yes",
    42:"ans"
}
console.log(obj[42]);


// Q3: Access the value of the key "first-name" from this object.
// (Note: You cannot use dot notation for keys with hyphens).
let users = {
    "first-name": "Harshit",
    "last-name": "Jain"
};
// Your code here...
console.log(users["first-name"]);


// Q4: Given a dynamic key stored in a variable, how do you access the value from the object?
let key = "age";
let person = { name: "Harshit", age: 21 };
// Access 'age' using the variable 'key':
// Your code here...
console.log(person[key]);


// ==========================================
// 2. NESTING & OPTIONAL CHAINING
// ==========================================

let userProfile = {
    username: "coder123",
    details: {
        firstName: "Rohan",
        address: {
            city: "Bhopal",
            zip: "462001",
            coordinates: {
                lat: 23.2599,
                lng: 77.4126
            }
        }
    }
};

// Q5: Print the 'lat' (latitude) from the nested 'userProfile' object.
// Your code here...
console.log(userProfile.details.address.coordinates.lat);


// Q6: What happens if 'coordinates' is missing? 
//     Try accessing 'lat' using Optional Chaining (?.) to prevent an error.
// Your code here...
console.log(userProfile?.details?.address?.coordinates?.lat);


// ==========================================
// 3. DESTRUCTURING
// ==========================================

let locationData = {
    city: "Indore",
    coords: {
        latitude: 22.7196,
        longitude: 75.8577
    }
};

// Q7: Destructure 'city' and 'latitude' from the 'locationData' object.
// (Hint: You need to destructure deeply for latitude).
// Your code here...
let {city} = locationData;
let {latitude} = locationData.coords;
console.log({city});
console.log({latitude});


// Q8: Destructure the 'firstName' from this object, but rename the variable to 'fName'.
let studentInfo = { firstName: "Aditya", grade: "A" };
// Your code here...
let {"firstName":fName} = studentInfo;
console.log(fName);


// ==========================================
// 4. LOOPING & METHODS
// ==========================================

let course = {
    title: "JavaScript Revolution",
    duration: "4 Weeks",
    instructor: "Harsh Sharma"
};

// Q9: Use a 'for...in' loop to log all keys in the 'course' object.
// Your code here...
for(let key in course){
    console.log(key);
}


// Q10: Use 'Object.entries()' to print key-value pairs in this format: 
//      "Key: title, Value: JavaScript Revolution"
// Your code here...
Object.entries(course).forEach(val=>{
    console.log(val[0]+":"+val[1]);
});

// ==========================================
// 5. CLONING & REFERENCES
// ==========================================

let originalObj = {
    name: "Apple",
    details: {
        color: "Red",
        price: 200
    }
};

// Q11: Create a shallow copy of 'originalObj' using the Spread Operator (...).
// Your code here...
let copyOriginalObj = {...originalObj};
console.log(copyOriginalObj);

// Q12: (Concept) If you change 'details.price' in the copied object, 
//      does it change in the original object too? Why?
// Answer as a comment:
//If we create a shallow copy it only creates copy for outermost obj, for inner obj it sends reference of them


// Q13: Perform a Deep Clone of 'originalObj' so that nested objects are also copied properly.
// (Hint: Use JSON.parse and JSON.stringify).
// Your code here...
let cloneOriginalObj = JSON.stringify(originalObj);
console.log(JSON.parse(cloneOriginalObj));


// ==========================================
// 6. COMPUTED PROPERTIES
// ==========================================

// Q14: Create an object where the key is dynamic (coming from a variable).
let roleKey = "isAdmin";
// Create an object 'userRole' that has the key "isAdmin" (using the variable) set to true.
// Your code here...
let userRole = {
    [roleKey]: true,
}

console.log(userRole.isAdmin);