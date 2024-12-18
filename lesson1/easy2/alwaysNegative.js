function negative(num){
  if(Math.abs(num) !== num){
    return num;
  }else{
    return -num;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0