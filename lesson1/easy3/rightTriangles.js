function triangle(num){
  for(let i = 1; i<= num; i++){
      console.log(" ".repeat(num-i)+"*".repeat(i));
    continue;
  }
}

triangle(5);
triangle(9);