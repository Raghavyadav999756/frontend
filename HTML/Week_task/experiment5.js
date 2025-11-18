// Task 12: Welcome Message App
let userName = prompt("What is your name?");
alert("Welcome, " + userName + "!");
document.write("<h2>Hello " + userName + "! Glad to have you here.</h2>");




// Task 13: Eligibility Checker
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("You are eligible to vote!");
  document.write("<p>You are eligible to vote!</p>");
} else {
  alert("You are not eligible yet.");
  document.write("<p>You are not eligible yet. Come back when you are 18!</p>");
}




// Using ternary operator
let message = (age >= 18) ? "You are eligible to vote!" : "You are not eligible yet.";
alert(message);
document.write("<p>" + message + "</p>");





let numbers = [10, 25, 30, 45, 50];



let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);



let above30 = numbers.filter(num => num > 30);
console.log("Numbers above 30:", above30);




let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);



numbers.forEach(num => console.log("Number:", num));
