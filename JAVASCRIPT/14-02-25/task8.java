let mon = parseFloat(prompt("Enter the price of 1 kg tomato on Monday:"));
let tues = parseFloat(prompt("Enter the price of 1 kg tomato on Tuesday:"));
let wed = parseFloat(prompt("Enter the price of 1 kg tomato on Wednesday:"));
let thurs = parseFloat(prompt("Enter the price of 1 kg tomato on Thursday:"));
let fri = parseFloat(prompt("Enter the price of 1 kg tomato on Friday:"));
let sat = parseFloat(prompt("Enter the price of 1 kg tomato on Saturday:"));
let sun = parseFloat(prompt("Enter the price of 1 kg tomato on Sunday:"));

let total = mon + tues + wed + thurs + fri + sat + sun;
let average = total / 7;

if (average > 50) {
    alert("Tomato has given good profit.");
} else {
    alert("No profit from tomato.");
}
