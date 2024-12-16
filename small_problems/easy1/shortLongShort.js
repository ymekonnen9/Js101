function shortLongShort(arg1, arg2){
  let short = arg1.length < arg2.length ? arg1 : arg2;
  let long = arg1.length > arg2.length ? arg1 : arg2;
  return `${short}${long}${short}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"