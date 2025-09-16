let sentences = ["I love JS", "JS is fun"];

let res = sentences.join(" ");
let res2 = res.split(" ");
console.log(res2);

// 2. Print each word with last letter + join words

let wordss = ["Hello", "World", "JS"];

wordss.forEach((word) => console.log(`${word} \n ${word[word.length - 1]}`));
console.log(wordss);
console.log(wordss.join("-"));

// 3. Reverse array and take first 4 elements
let nums = [10, 20, 30, 40, 50, 60];

nums.reverse().splice(4, 3);

console.log(nums);

// 4. Modify fruits array

let fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits.splice(1, 1, "avagado", "firaul");
console.log(fruits);
fruits.splice(fruits.length, 1, "word");
console.log(fruits);
fruits.pop();
console.log(fruits);

//5. Colors manipulation

let colors = ["red", "green", "blue"];

colors.unshift("Pink");
console.log(colors);
colors.pop();

console.log(colors.includes("green"));

// 6. Sort cities and find index

let cities = ["Damascus", "Aleppo", "Homs", "Latakia"];

let sortCitie = cities.sort();
let index = sortCitie.indexOf("Damascus");
console.log(index);

//7

let text =
  "JavaScript is fun but challenging when you want to master it quickly";

let words = text.split(" ");
console.log(words);

words = words.filter((word) => word.length > 2);
console.log(words);

words = words.slice(0, 4);

words = words.reverse();

words.unshift("Start");
words.push("End");

let exists = words.includes("JavaScript");

console.log(words);

words.forEach((words) => console.log(` ${words}\n`));
