let rlSync = require("readline-sync");
let name = rlSync.question("what is your name?");
if(name.includes("!")){
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
}else{
  console.log(`Hello ${name}`);
}