function getGrade(arg1, arg2, arg3){
  let sum = arg1 + arg2 + arg3;
  let avg = sum / 3;
  let grade;
  if(avg >= 90 && avg <=100){
    grade = 'A';
  }else if(avg >=80 && avg < 90){
    grade = 'B';
  }else if(avg >= 70 && avg < 80){
    grade = 'C';
  }else if(avg >= 60 && avg < 70){
    grade = 'D';
  }else if(avg >=0 && avg < 60){
    grade = 'F';
  }

  return grade;
}
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"