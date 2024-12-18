function crunch(str){
  let returnStr = [];

  for(let i = 0; i< str.length; i++){
    if(str[i] === str[i+1]){
      continue;
    }else{
      returnStr.push(str[i]);
    }
  }

  return returnStr.join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""