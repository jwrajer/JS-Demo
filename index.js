// Determine variable of input
const input = false;
// create if statement to print Boolean true for first statement
if (Boolean(input))  {
  console.log(`good`);
}
// create else if statement for false value
else if (input===false) {
  console.log(`The boolean value false is falsy`);
}
// create else if statement for null value
else if (input===null) {
  console.log(`The null value is falsy`);
}
// create else if statement for undefined value
else if (input===undefined) {
  console.log(`undefined is falsy`);
}
// create else if statement for 0 value
else if (input===0) {
  console.log(`The number 0 is falsy (the only falsy number)`);
}
// create else if statement for "" value
else if (input==="") {
  console.log(`The empty string is falsy (the only falsy string)`);
}


//Number Line
// Determine variables for both numbers to add
// Add both numbers together
// Console.log based on end result

const num1 = 50;
const num2 = 51;
const sum1 = num1 + num2;

if(sum1===101) {
  console.log(`${sum1} is greater than 100`);
}
else if(sum1===97) {
  console.log(`${sum1} is greater than 0`);
}
else if(sum1===101) {
  console.log(`${sum1} is greater than 100`);
}
else if(sum1===0) {
  console.log(`${sum1} is equal 0`);
}
else if(sum1===-1000) {
  console.log(`${sum1} is a negative number`);
}
else if(sum1===-5) {
  console.log(`${sum1} is a negative number`);
}