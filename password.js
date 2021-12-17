const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to the password validator tool, please enter a password to validate: ",
  function (input) {
    let passwordLength = input.length;
    let includesSpace = input.includes(" ");
    let includesPlus = input.includes("+");

    if (passwordLength < 10) {
      console.log("Password must be atleast 10 characters long");
    } else if (passwordLength > 30) {
      console.log("Password is too long");
    } else if ((input = /\d/.test(input))) {
      console.log("no numbers allowed in password");
    } else if (includesSpace) {
      console.log("no spaces allowed in password");
    } else if (includesPlus) {
      console.log("no plus sign allowed");
    } else {
      console.log("Success, password created");
    }

    reader.close();
  }
);
