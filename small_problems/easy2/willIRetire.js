let rlSync = require("readline-sync");
let age = Number(rlSync.question("What is your age?\n"));
let ret = Number(rlSync.question("At what age would you like to retire?\n"));
let yearNow = Number(new Date().getFullYear());
console.log(`It's ${yearNow}. You will retire in ${yearNow + (ret - age)}`)
console.log(`You have only ${ret-age} years of work to go!`);