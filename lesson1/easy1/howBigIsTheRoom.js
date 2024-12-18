let rlSync = require("readline-sync");
let length = rlSync.prompt("Enter the length of the room in meters: ");
let width = rlSync.prompt("Enter the width of the room in meters:");
console.log(`The area of the room is ${length * width }square meters(${(length*width * 10.7639).toFixed(2)}) square feet`);