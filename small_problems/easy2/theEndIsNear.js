function penultimate(str){
  let strarr = str.split(" ");
  return strarr[strarr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true