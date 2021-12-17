const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to the password validator tool, please enter a password to validate: ",
  function (input) {
    let passwordLength = input.length;

    if (passwordLength < 10) {
      console.log("Password must be atleast 10 characters long");
    } else {
      console.log("Success, password created");
    }

    reader.close();
  }
);
