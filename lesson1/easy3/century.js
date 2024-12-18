function century(year){
  let stryr = String(year);
  let century = Number(stryr.slice(0, stryr.length - 2)) + 1;
  let strCentury = String(century);
  let endChar = Number(strCentury[strCentury.length - 1]);

  if([1].includes(endChar) || [1].includes(year)){
    return `${century}st`;
  }
  else if(year === 3 || [3].includes(year)){
    return `${century}rd`;
  }else if(year === 2 || [2].includes(endChar)){
    return `${century}nd`;
  }else if([0,2,4,5,6,7,8,9].includes(endChar) || [4,5,6,7,8,9].includes(year)){
    return `${century}th`;
  }


}