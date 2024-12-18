function logInBox(str){
  let dottedline = '+'+ '-'.repeat(str.length+2)+'+';
  let emptyline = '|'+' '.repeat(str.length+2)+'|';

  console.log(dottedline);
  console.log(emptyline);
  console.log(`| ${str} |`);
  console.log(emptyline);
  console.log(dottedline);
}

logInBox('To boldly go where no one has gone before.');