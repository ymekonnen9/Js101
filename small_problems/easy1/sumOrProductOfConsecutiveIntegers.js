let rlSync = require("readline-sync");
let num = Number(rlSync.prompt("Please enter an integer greater than 0: "));
let op = rlSync.prompt(`Enter "s" to compute SubmitEvent, or "p" to compute the product.`);

if(op === "s"){
  let sum = 0;
  for(let i =0; i<=num; i++){
    sum+=i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`)
}else if(op === "p"){
  let prod = 1;
  for(let i =0; i<=num; i++){
    prod*=i;
  }
  console.log(`The product of the integers between 1 and ${num} is ${prod}`)

}