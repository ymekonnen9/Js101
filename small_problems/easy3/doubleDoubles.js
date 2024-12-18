function twice(num){
   let numstr = String(num);

   if(numstr.length % 2 !== 0){
    return num*2;
   }else{
    let mid = Math.floor((numstr.length - 1)/ 2);
    let leftside = numstr.slice(0, mid+1);
    let rightside = numstr.slice(mid+1, numstr.length);
    if(leftside === rightside){
      return num;
    }else{
      return num*2;
    }
   }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676