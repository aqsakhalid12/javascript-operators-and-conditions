// 1. Arithmetic Operators

// Addition
let price = 500;
let tax = 50;
let totalPrice = price + tax;
console.log("Total Price:", totalPrice); 
// Output: Total Price: 550

// Subtraction
let wallet = 1000;
let remainingMoney = wallet - totalPrice;
console.log("Remaining Money:", remainingMoney); 
// Output: Remaining Money: 450

// Multiplication
let itemPrice = 200;
let quantity = 3;
let totalBill = itemPrice * quantity;
console.log("Total Bill:", totalBill); 
// Output: Total Bill: 600

// Division
let pizzaBill = 1200;
let friends = 4;
let eachPays = pizzaBill / friends;
console.log("Each Friend Pays:", eachPays); 
// Output: Each Friend Pays: 300

// Modulus
let number = 7;
console.log("Remainder:", number % 2); 
// Output: Remainder: 1


// 2. Assignment Operators

// =, +=, -=
let balance = 500;
balance += 200;
console.log("Balance after adding:", balance); 
// Output: Balance after adding: 700

balance -= 100;
console.log("Balance after spending:", balance); 
// Output: Balance after spending: 600


// 3. Comparison Operators

// ==, ===, !=, !==, <, >, <=, >=
let num1 = 5;
let num2 = "5";
console.log(num1 == num2);   
// Output: true
console.log(num1 === num2);  
// Output: false

let marks = 60;
console.log(marks > 50);   
// Output: true
console.log(marks < 40);   
// Output: false
console.log(marks >= 60);  
// Output: true
console.log(marks <= 30);  
// Output: false


// 4. Logical Operators

// &&, ||, !
let email = "admin@gmail.com";
let password = "1234";

if(email === "admin@gmail.com" && password === "1234"){
  console.log("Login Successful"); 
  // Output: Login Successful
}

let day = "Sunday";
if(day === "Saturday" || day === "Sunday"){
  console.log("Weekend"); 
  // Output: Weekend
}

let isLoggedIn = false;
if(!isLoggedIn){
  console.log("Please login first"); 
  // Output: Please login first
}


// 5. Unary Operators

// ++, --
let count = 0;
count++;
count++;
count++;
console.log("Count:", count); 
// Output: Count: 3

let lives = 3;
lives--;
console.log("Lives left:", lives); 
// Output: Lives left: 2


// 6. Ternary Operator

// condition ? value1 : value2
let age = 17;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Age Status:", status); 
// Output: Age Status: Minor

let value = 10;
let result = value % 2 === 0 ? "Even" : "Odd";
console.log("Number check:", result); 
// Output: Number check: Even


// 7. if, else if, else

let examMarks = 85;

if(examMarks >= 90){
  console.log("Grade A+");
  // Output: Grade A+
} else if(examMarks >= 80){
  console.log("Grade A"); 
  // Output: Grade A
} else if(examMarks >= 70){
  console.log("Grade B");
} else if(examMarks >= 50){
  console.log("Pass");
} else {
  console.log("Fail");
}


// 8. switch statement

let month = 2;

switch(month){
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February"); 
    // Output: February
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid Month");
}


// 9. Mini Real World Problem

// Shopping Discount
let totalAmount = 1200;
let discount;

if(totalAmount > 1000){
  discount = totalAmount * 0.20;
} else if(totalAmount > 500){
  discount = totalAmount * 0.10;
} else {
  discount = 0;
}

let finalPrice = totalAmount - discount;
console.log("Original Price:", totalAmount); 
// Output: Original Price: 1200
console.log("Discount:", discount); 
// Output: Discount: 240
console.log("Final Price:", finalPrice); 
// Output: Final Price: 960