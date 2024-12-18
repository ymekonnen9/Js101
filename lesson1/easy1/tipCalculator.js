let rlSync = require("readline-sync");
let bill = parseFloat(rlSync.prompt("What is the bill?"));
let tip = parseFloat(rlSync.prompt("what is the tip percentage?"));

let tipAmount = (bill * tip) / 100;
let total = bill + tipAmount;

console.log(`The tip is ${tipAmount.toFixed(2)}`);
console.log(`The total is ${total.toFixed(2)}`);