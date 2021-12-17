const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to the password validator tool!\nPlease enter a password to validate: ",
  function (input) {
    let passwordLength = input.length;
    let includesSpace = input.includes(" ");
    let includesPlus = input.includes("+");

    if (passwordLength < 10) {
      console.log("Password must be atleast 10 characters long");
    } else if (passwordLength > 30) {
      console.log(
        `Password is too long \n _______  _______  _______        ___      _______  __    _  _______ \n|       ||       ||       |      |   |    |       ||  |  | ||       |\n|_     _||   _   ||   _   |      |   |    |   _   ||   |_| ||    ___|\n  |   |  |  | |  ||  | |  |      |   |    |  | |  ||       ||   | __ \n  |   |  |  |_|  ||  |_|  |      |   |___ |  |_|  ||  _    ||   ||  |\n  |   |  |       ||       |      |       ||       || | |   ||   |_| |\n  |___|  |_______||_______|      |_______||_______||_|  |__||_______|\n`
      );
    } else if ((input = /\d/.test(input))) {
      console.log(
        `no numbers allowed in password"\n                                   /$$                                    \n                                  | $$                                    \n /$$$$$$$  /$$   /$$ /$$$$$$/$$$$ | $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$\n| $$__  $$| $$  | $$| $$_  $$_  $$| $$__  $$ /$$__  $$ /$$__  $$ /$$_____/\n|  $$  \ $$| $$  | $$| $$ \  $$ \ $$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$ \n| $$  | $$| $$  | $$| $$ | $$ | $$| $$  | $$| $$_____/| $$       \____  $$\n| $$  | $$|  $$$$$$/| $$ | $$ | $$| $$$$$$$/|  $$$$$$$| $$       /$$$$$$$/\n|__/  |__/ \______/ |__/ |__/ |__/|_______/  \_______/|__/      |_______/ `
      );
    } else if (includesSpace) {
      console.log("no spaces allowed in password");
    } else if (includesPlus) {
      console.log("no  plus allowed");
    } else {
      console.log("Success, password created");
    }

    reader.close();
  }
);
