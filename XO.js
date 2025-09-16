const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myArray = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let elementCount = 0;

function askForElement() {
  readline.question(` START ${elementCount + 1}: `, (input) => {
    if (input.trim() === "") {
      console.log("الرجاء إدخال قيمة صالحة!");
      askForElement();
      return;
    }

    myArray.push(input);
    elementCount++;

    console.log(`تم إضافة العنصر "${input}" بنجاح!`);
    console.log(`المصفوفة الحالية: [${myArray.join(", ")}]`);

    if (elementCount < 2) {
      askForElement();
    } else {
      console.log("تم إدخال العنصرين!");
      readline.close();
    }
  });
}

askForElement();
