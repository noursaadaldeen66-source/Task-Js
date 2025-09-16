const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let elementCount = 0;
let massge = "XMAN CHOSE PLACE";

function askForElement() {
  let count = 1;
  if (count % 2 == 0) massge = "OMAN CHOSE PLACE";
  readline.question(
    ` Play X: ${myArray.splice(0, 3)} \n \t \t ${myArray.splice(
      0,
      3
    )}  \n \t \t ${myArray.splice(0, 9)} \n ${massge}: `,
    (input) => {
      if (input.trim() === "") {
        if (count % 2 != 0 && parseInt(input) == /[1-9]/.test) {
          massge = "OMAN CHOSE PLACE";
          count++;
        } else if (count % 2 == 0 && parseInt(input) == /[1-9]/.test) {
          count++;
        } else if (myArray[parseInt(input) - 1] === String)
          console.log("Wrong CHOSE");
        askForElement();
        return;
      }

      if (count % 2 != 0) {
        myArray[parseInt(input) - 1] = "X";
      } else if (count % 2 == 0) {
        myArray[parseInt(input) - 1] = "O";
      }

      //check

      elementCount++;

      if (elementCount < 10) {
        askForElement();
      } else {
        console.log("NO WINER");

        readline.close();
      }
    }
  );
}

askForElement();
