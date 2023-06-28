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


