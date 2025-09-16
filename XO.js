const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let elementCount = 0;
let massge = "XMAN CHOSE PLACE";
let count = 1;

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (myArray[a] === myArray[b] && myArray[b] === myArray[c]) {
      return myArray[a];
    }
  }
  return null;
}

function askForElement() {
  let winner;
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
      winner = checkWin();
      if (winner) {
        displayBoard();
        console.log(`Player ${winner} WINS!`);
        readline.close();
        return;
      }

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
