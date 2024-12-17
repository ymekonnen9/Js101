function centerOf(str){
  let strarr = str.split("");
  let ind = Math.floor((strarr.length-1) / 2);
  
  if(ind ===0){
    return `${strarr[ind]}`;
  }else if(strarr.length % 2 ===0){
    return `${strarr[ind] + strarr[ind + 1]}`;
  }else{
    return `${strarr[ind]}`;
  }

  
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"