// if else else if
// switch case
// early return pattern
// ternary operator

// if else else if
let loggedIn = true;
let isAdmin = false;

if(loggedIn && isAdmin){
    console.log("Admin User");
} else if(loggedIn){
    console.log("Regular User"); 
} else {
    console.log("Guest User"); 
}

// switch case
let role = "admin";
switch(role){
    case "admin":
        console.log("Admin User");
        break;
    case "user":
        console.log("Regular User");
        break;
    default:
        console.log("Guest User");
}
// early return pattern
let value = 10;

if(val<25)return "D";
else if(val<45) return "C";
else if(val<65) return "B";
else if(val<80) return "A";
else return "A+";

// ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes


