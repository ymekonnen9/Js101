function stringy(num){

  let returnstr = "";
  for(let i = 0; i< num; i++){
    if(i%2 ===0){
      returnstr+=1;
    }else{
      returnstr+=0;
    }
  }
  return returnstr;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"