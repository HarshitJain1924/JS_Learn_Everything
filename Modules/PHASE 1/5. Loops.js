//repeat karna ko loops kehte hain
//javascript mein 3 tarah ke loops hote hain
//1. for loop
//2. while loop
//3. do...while loop

//kaha se janna hai -> kaha tak jana hai -> kaise jana hai
//for loop
/*
syntax:
for(start; end; change){
    //code to be executed
}
*/


for(let i = 0; i < 5; i++){
    console.log("For Loop iteration number: " + i);
}
console.log("For Loop ended");

//kaha se janna hai -> kab rukna hai -> kaise jana haiN
//while loop
/*
syntax:
start
while(end){
    //code to be executed
    change
}
*/
let j = 0;
while(j < 5){
    console.log("While Loop iteration number: " + j);
    j++;
}
console.log("While Loop ended");

//ek baar jarur chalega phir condition check karega
//do...while loop
/*
syntax:
start
do{
    //code to be executed
    change
}while(end);
*/

let k = 0;
do{
    console.log("Do...While Loop iteration number: " + k);
    k++;
}while(k < 5);
console.log("Do...While Loop ended");

//break and continue statements
//break -> loop ko turant rok deta hai

for(let m = 0; m < 10; m++){
    if(m === 5){
        break; //loop yahan ruk jayega jab m ki value 5 hogi
    }
    console.log("Break Statement Loop iteration number: " + m);
}
console.log("Break Statement Loop ended");

//continue -> current iteration ko skip kar deta hai aur next iteration par chala jata hai
for(let n = 0; n < 10; n++){
    if(n === 5){
        continue; //jab n ki value 5 hogi to yeh iteration skip ho jayega
    }
    console.log("Continue Statement Loop iteration number: " + n);
}
console.log("Continue Statement Loop ended");

//practice
//print numbers from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i);
}

//print 10 to 1 using while loop
let i = 10;
while(i>0){
    console.log(i);
    i--;
}

//print even numbers from 1 to 20 using for loop
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//print odd numbers from 1 to 15 using while loop
let p=1;
while(p<=15){
    if(p%2==1){
        console.log(p);
    }
    p++;
}

//ask a user to enter a number and print whether each number from 1 to that number is even or odd

let userInput = parseInt(prompt("Enter a number: "));
for(let q=1;q<=userInput;q++){
    if(q%2==0){
        console.log(q + " is even");
    } else {
        console.log(q + " is odd");
    }
}

//print multiplication table of a number entered by user using for loop
let num = parseInt(prompt("Enter a number to print its multiplication table: "));
for(let r=1;r<=10;r++){
    console.log(num + " x " + r + " = " + (num*r));
}

//count how many numbers between 1 to 50 are divisible by 3 & 5 using for loop
let cnt = 0;
for(let x=1;i<=50;x++){
    if(x%15==0){
        cnt++;
    }
}

//count digits in a number entered by user using while loop

let number = parseInt(prompt("Enter a number to count its digits: "));
let count = 0;
while(number != 0){
    number = Math.floor(number / 10);
    count++;
}
console.log("Number of digits: " + count);
