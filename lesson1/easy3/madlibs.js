let rlSync = require("readline-sync");
let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adjective = rlSync.question("Enter an adjective: ");
let adverb = rlSync.question("Enter an adverb: ");

console.log(`Do you ${verb} your${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`)