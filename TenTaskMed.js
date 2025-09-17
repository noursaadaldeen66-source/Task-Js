// //Task 1 name :  hideCreditCard  D:M

// function hideCreditCard(cardNumber) {
//   let result = "************";
//   if (cardNumber.length == 16) {
//     for (let i = 12; i < cardNumber.length; i++) {
//       result += cardNumber[i];
//     }
//   } else {
//     return "wrong cardNumber";
//   }
//   return result;
// }

// console.log(hideCreditCard("1234567891234567"));
// ("************4567");

// //Task 2 name:Smailey Faces D:m

// function replaceSmiley(input) {
//   let res = "";
//   ///
//   for (let i = 0; i < input.length; i++) {
//     let find = false;
//     for (let j = 0; j < input.length; j++) {
//       if (input[i] == ":" && input[i + 1] == ")") {
//         find = true;
//       }
//     }
//     if (find) {
//       res += ":(";
//       i++;
//     } else {
//       res += input[i];
//     }
//   }
//   return res;
// }

// // console.log(replaceSmiley("smile :).....:)"));   'smile :(.....:('

// //Task 3 name: find first and lastindex D:m

// function findFirstAndLast(arr, num) {
//   let arrF = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i] && count == 0) {
//       arrF[0] = i;
//       count++;
//     } else if (num == arr[i] && count > 0) {
//       arrF[1] = i;
//     }
//   }
//   if (arrF[1] == undefined) {
//     arrF[1] = arrF[0];
//   }
//   return arrF;
// }

// // let arr1 = [10, 20, 30];
// // console.log(findFirstAndLast(arr1, 10));   [ 0, 0 ]

// //Task 4 name: Largest Digitn Swap D:m

// function findLargest(num) {
//   let FLR = 0;
//   let num1 = num.toString();
//   let max = num1[0];
//   for (let i = 0; i < num1.length; i++) {
//     if (max < num1[i]) {
//       max = num1[i];
//     }
//   }
//   FLR = max;
//   for (let i = 0; i < num1.length; i++) {
//     if (max != num1[i]) {
//       FLR += num1[i];
//     }
//   }
//   return FLR;
// }

// // console.log(findLargest(7845759));   '9784575'

// //Task 5 name: repeat Vowels D:m

// function repeatVowels(str) {
//   let arV = ["a", "e", "i", "o", "u"];
//   let res = "";
//   ///
//   for (let i = 0; i < str.length; i++) {
//     let find = false;
//     for (let j = 0; j < arV.length; j++) {
//       if (str[i] === arV[j]) {
//         find = true;
//       }
//     }

//     if (find) {
//       res += str[i];
//       res += str[i];
//     } else {
//       res += str[i];
//     }
//   }
//   return res;
// }
// // console.log(repeatVowels("hello world"));
// //("heelloo woorld");

// //Task 6 name:Shortest Word D:m

// function findShortestWord(str) {
//   let word = "";
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       word += str[i];
//     } else {
//       if (res == "") {
//         res = word;
//         word = "";
//       } else {
//         if (word.length <= res.length) {
//           res = word;
//           word = "";
//         } else if (word.length === res.length) {
//           res = word;
//           word = "";
//         }
//       }
//     }
//   }

//   return res;
// }
// // console.log(findShortestWord(" iaaaa love aa wa as w "));
// // ("w");

// //Task 7 name:convert To PascalCase D:m

// function convertToPascalCase(str) {
//   let res = "" + str[1].toUpperCase();

//   for (let i = 2; i < str.length; i++) {
//     let find = false;
//     if (str[i] == " ") {
//       find = true;
//     }

//     if (find) {
//       res += str[i + 1].toUpperCase();
//       i++;
//     } else {
//       res += str[i];
//     }
//   }
//   return res;
// }
// // console.log(convertToPascalCase("i love programing")); ' lovePrograming'

// //Task 8 name:isSpOnGeCaSe D:M

// function isSpOnGeCaSe(str) {
//   let res = true;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === str[i].toUpperCase() &&
//       str[i + 1] === str[i + 1].toLowerCase()
//     ) {
//       i++;
//     } else {
//       return false;
//     }
//   }
//   return res;
// }

// // console.log(isSpOnGeCaSe("SpOnGeCaSe")); true

// //Task 9 name : findSecondLargest D:m

// function findSecondLargest(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }

//   return secondLargest;
// }

// // let arr1 = [10, 20, 30];
// // console.log(findSecondLargest(arr1, 10));  20

// //Task 10 name : swap case of first last characters D:m
// function swapCaseFirstLast(str) {
//   let word = "";
//   let res = "";
//   let C1 = "";
//   let C2 = "";

//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] !== " " && i !== str.length) {
//       word += str[i];
//     } else {
//       if (word.length > 0) {
//         C1 = word[0];
//         if (C1 >= "A" && C1 <= "Z") {
//           C1 = String.fromCharCode(C1.charCodeAt(0) + 32);
//         } else if (C1 >= "a" && C1 <= "z") {
//           C1 = String.fromCharCode(C1.charCodeAt(0) - 32);
//         }

//         C2 = word[word.length - 1];
//         if (C2 >= "A" && C2 <= "Z") {
//           C2 = String.fromCharCode(C2.charCodeAt(0) + 32);
//         } else if (C2 >= "a" && C2 <= "z") {
//           C2 = String.fromCharCode(C2.charCodeAt(0) - 32);
//         }

//         let newWord = "";
//         for (let j = 1; j < word.length - 1; j++) {
//           newWord += word[j];
//         }

//         res += C1 + newWord + C2;

//         if (i !== str.length) {
//           res += " ";
//         }

//         word = "";
//       } else {
//         res += " ";
//       }
//     }
//   }

//   return res;
// }
// console.log(swapCaseFirstLast("asi LovE sad Fa")); 'AsI love SaD fA'
//تم استخدام ال ai ولكن توفير للوقت ولعدم معرفة بتعليمات الاسكي ضمن فكرتي

///////////////////////



// const students =[
//     {name : farah ,grad:85},
//     {name : nour ,grad:70},
//     {name : hamzah ,grad:60},
//     {name : jojo ,grad:65},
// ];

// const sort =(arr) =>{
    
// }



let fullName = ["Nour Saad", "Jol Isso" , "Hanano Panada"];


let arr = fullName.map((item) => (item.split(" ")[0].slice(0 ,1) + "." + item.split(" ")[1].slice(0 ,1)) );

console.log(arr);



let input=[1,11,-9,20,-3,8,-1];

let arr3 = input.reduce((a,b) =>( b> 0 ? a+b: a) );
console.log(arr3);


let inputS =[
    {name:"nour" , grad:85},
    {name:"mahmo" , grad:40},
    {name:"ahmad" , grad:60},
    {name:"hamzah" , grad:50}
];

let studentPass = inputS.filter((item) => item.grad >= 60 ).map((item) =>  {
 return item.name ;  
    
} );

console.log(studentPass);



let sorti =[
    {name: "Ahmad" ,age: 25},
    {name: "jon" ,age: 30},
    {name: "rama" ,age: 22},
]

let namea = sorti.sort( ( a,b ) => b.age - a.age  );
let namee = sorti.map((item) => item.name );

// console.log(namea);
console.log(namee);