function isLeapYear(year){

  let leapyr = false;
  if(year > 1752){
    if( year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)){
      leapyr = true;
  }} else{
    if(year % 4 === 0){
      leapyr = true;
    }
  }

  console.log(leapyr);
  return leapyr;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true