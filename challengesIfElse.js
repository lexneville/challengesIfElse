// // Challenge 1 (if/else) 

// let password = "open"

// if (password.length < 8){
//     console.log("The password is too short")
// } else {
//     console.log(password)
// }

// let password = "asdfg";

// let passLength = password.length;

// if (passLength > 8){
//     console.log("Your password is secure");
// } else  if (passLength >= 6){
//     console.log("Your password OK but not very secure");
// } else {
//     console.log("The password is too short");
// }

// // Challenge 2 (if/else)

// num = 8;

// if (Number.isInteger(num/5) || Number.isInteger(num/3)){
//     console.log("This number is divisible by 3 or 5");
// }   else {
//     console.log("This number is not divisible by 3 or 5")
// }

// switch (true){
//     case (Number.isInteger(num/5) || Number.isInteger(num/3)):
//         console.log("This number is divisible by 3 or 5");
//         break;
//     default:
//         console.log("This number is not divisible by 3 or 5")
// }

// // Challenge 3 (if/else)

// num = 15;

// switch (true){
//     case (Number.isInteger(num/5) && Number.isInteger(num/3)):
//         console.log("fizz buzz");
//         break;
//     case Number.isInteger(num/5):
//         console.log("buzz");
//         break;
//     case Number.isInteger(num/3):
//         console.log("fizz");
//         break;
//     default:
//         console.log(num)
// }

// // Challenge 4 (if/else)

// let num = "1020";
// console.log(num);
// let splitToArray = num.split("");
// console.log(splitToArray);
// let revArray = splitToArray.reverse();
// console.log(revArray);
// let joinArray = revArray.join("");
// console.log(joinArray);
// switch (true){
//     case num === joinArray:
//         console.log("This number is a palindrome");
//         break;
//     default:
//         console.log("This number is not a palindrome")
//     }

// // Challenge 5 (if/else)

// let time = 9;
// let placeOfWork = "CodeNation";
// let townOfHome = "Stretford";

// if (time >= 8 && time < 9) {
//   console.log(
//     `It's ${time} O'Clock and I am on my way to work at ${placeOfWork}`
//   );
// } else if (time < 8) {
//   console.log(`It's ${time} O'Clock and I am at home in ${townOfHome}`);
// } else if (time >= 9) {
//   console.log(`It's ${time} O'Clock and I am at ${placeOfWork}`);
// }

// // Challenge 6 (if/else)

// let string1 =
//   "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// let aind = string1.lastIndexOf("a");
// let eind = string1.lastIndexOf("e");
// let iind = string1.lastIndexOf("i");
// let oind = string1.lastIndexOf("o");
// let uind = string1.lastIndexOf("u");
// let Aind = string1.lastIndexOf("A");
// let Eind = string1.lastIndexOf("E");
// let Iind = string1.lastIndexOf("I");
// let Oind = string1.lastIndexOf("O");
// let Uind = string1.lastIndexOf("U");

// let lastVowelIndex = Math.max(
//   aind,
//   eind,
//   iind,
//   oind,
//   uind,
//   Aind,
//   Eind,
//   Iind,
//   Oind,
//   Uind
// );
// let lastVowelCharacter = string1.charAt(lastVowelIndex);

// console.log(
//   `The index number of the last vowel in the string is ${lastVowelIndex} and the character is ${lastVowelCharacter}`
// );

let string1 = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let stringLength = string1.length;
let splitString = string1.split("");
let reversedString = splitString.reverse();

for (i = 0; i < stringLength; i++){
    if (reversedString.charAt(0) === (A || E || I || O || U || a || e || i || o || u)){
        console.log(`The last vowel in the string is the letter `)
    }

}


console.log(stringLength); 