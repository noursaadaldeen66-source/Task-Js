const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let elementCount = 0;
let message = "XMAN CHOSE PLACE";
let count = 1;

function displayBoard() {
  console.log("\n");
  console.log(` ${myArray[0]} | ${myArray[1]} | ${myArray[2]} `);
  console.log("-----------");
  console.log(` ${myArray[3]} | ${myArray[4]} | ${myArray[5]} `);
  console.log("-----------");
  console.log(` ${myArray[6]} | ${myArray[7]} | ${myArray[8]} `);
  console.log("\n");
}

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
  
  if (count % 2 === 0) {
    message = "OMAN CHOSE PLACE (1-9)";
  } else {
    message = "XMAN CHOSE PLACE (1-9)";
  }
  
  displayBoard();
  
  readline.question(`${message}: `, (input) => {
    const position = parseInt(input) - 1;
    
    // التحقق من صحة الإدخال
    if (isNaN(position) || position < 0 || position > 8) {
      console.log("Invalid input! Please choose a number between 1 and 9.");
      askForElement();
      return;
    }
    
    // التحقق إذا كانت الخلية محجوزة مسبقاً
    if (myArray[position] === 'X' || myArray[position] === 'O') {
      console.log("This place is already taken! Choose another one.");
      askForElement();
      return;
    }
    
    // تحديث اللوحة بناءً على دور اللاعب
    if (count % 2 !== 0) {
      myArray[position] = "X";
      message = "OMAN CHOSE PLACE";
    } else {
      myArray[position] = "O";
      message = "XMAN CHOSE PLACE";
    }
    
    count++;
    elementCount++;

    // التحقق من وجود فائز
    winner = checkWin();
    if (winner) {
      displayBoard();
      console.log(`Player ${winner} WINS!`);
      readline.close();
      return;
    }

    // التحقق إذا انتهت اللعبة بدون فائز
    if (elementCount === 9) {
      displayBoard();
      console.log("It's a DRAW! No winner.");
      readline.close();
      return;
    }

    // الاستمرار في اللعبة
    askForElement();
  });
}

// بدء اللعبة
askForElement();