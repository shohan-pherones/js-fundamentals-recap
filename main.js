"use strict";

//console.log()
console.log("Hello, world!");

// variables
let age = 20;
let fullName = "Coder Boy Amzad";
let herName = "TikTok Queen Ayesha";
console.log(age, fullName, herName);

// variable naming convention
let carBrand = "Porsche";
let bikeBrand = "Kawasaki";
let ram_price = 4500;
let API_TOKEN = "hasihhdfgkujhskjgbksjdbgkwksgnb";
let $primary_os = "Windows";
let PI = 3.1416;
let JUMP_SPEED = 3.2;

// variable naming restrictions
// let 10cars = 10;
// let me&you = 'love';
// let function = 10;
// let false = 10;
// let player-number = 11;
// let Classroom = "A3";
// let age1 = 21;
// let age2 = 22;

// data types: primitive and non-primitive (object)
// primitive data types:
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt

let myNumber = 100;
let songName = "Oniket Prantor";
let isRaining = false;
let pocketMoney = null;
let carPrice;

// typeof operator
console.log(typeof myNumber);
console.log(typeof songName);
console.log(typeof isRaining);
console.log(typeof pocketMoney);
console.log(typeof carPrice);

// let, const or var
//let
let testNumber; // declaring a variable using let keyword
testNumber = 100; // re-assign or mutate
console.log(testNumber);

//const
const carSpeed = null;

// var
console.log(onionPrice);
var onionPrice = 40;
onionPrice = 30;

// let and const - blocked scope
// var - function scope

// no keyword - can not create a scope
//likes = 150;

// mathemetical operators (+,-,*,/,%,**)
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 ** 10);

//assignment operators
let x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x **= 5;
x++;
x--;
console.log(x);

// comparison operators (>,<,>=,<=)
console.log(10 > 20);
console.log(10 < 20);
console.log(20 >= 20);
console.log(20 <= 20);

// operator precedence
const birthYear = 1990;
console.log(20 > 2022 - 1990 * (10 - 30));

// template literals
console.log(`${herName} is fashion designer and her age is ${age + 5}`);

// conditionals
const mangoPrice = 160;
const applePrice = 180;

if (mangoPrice >= 100) {
  console.log("Mango khabo!");
}
if (applePrice >= 100) {
  console.log("apple khabo");
} else {
  console.log("kisui khabo na");
}

// type convertion and coercion
const a = "30";
const b = 300;

console.log(typeof Number(a));
console.log(typeof String(b));

// coercion
console.log(10 + 30 + "10");
console.log(10 - 30 - "10");
console.log(10 * 30 * "10");
console.log(10 / 30 / "10");
console.log("Ahmed" + " " + "Saif");

// falsy values: 0, '', undefined, null, NaN

// equality operators (==, !=, ===, !==)
console.log(10 === "10");

// combined boolean (&&, ||)
const m = 20;
const n = 20;

// nested conditions
if (m >= 10 && n >= 10) {
  if (m >= 20) {
    console.log("m is greater than 20");
    if (n >= 25 || n % 2 === 0) {
      console.log("n is greater than 20");
    } else {
      console.log("n is not greater than 20");
    }
  } else {
    console.log("m is not greater than 20");
  }
}

// switch case
const color = "pink";

switch (color) {
  case "white":
    console.log("amar mon sada");
    break;
  case "black":
    console.log("tar mon kalo");
    break;
  case "blue":
    console.log("she is my nil pori");
    break;
  case "red":
    console.log("she is my lal pori");
    break;
  default:
    console.log("Kono kisui na");
}

// expressions and statements

// ternary operators
const num1 = 100;
const num2 = 200;

const whoIsBig =
  num1 > num2 ? console.log("num1 is big") : console.log("num2 is big");

//function declarations
// function ageCalculator(birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// }

// console.log(ageCalculator(1995));

// function expressions
// const ageCalculator = function (birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// };

// console.log(ageCalculator(1995));

// arrow functions
// const ageCalculator = (birthYear) => {
//   const age = 2022 - birthYear;
//   return age;
// };

const ageCalculator = (birthYear) => 2022 - birthYear;
console.log(ageCalculator(1995));

// callback
function breadCutter(breads) {
  return breads * 2;
}

function burgerMaker(breads, chickens, vegetables) {
  const breadPieces = breadCutter(breads);
  return `Burger is ready using ${breadPieces} bread pieces, ${chickens} chickens and ${vegetables} gram vegetables. 🍔`;
}

console.log(burgerMaker(10, 2, 0.35));

// curry function
function multiplication(a) {
  return function (b) {
    return function (c, x, y) {
      return function (d) {
        return a * b * c * d * x * y;
      };
    };
  };
}

console.log(multiplication(1)(2)(3, 10, 20)(4));

const multiplicationPro = (a) => (b) => (c, x, y) => (d) =>
  a * b * c * d * x * y;

console.log(multiplicationPro(1)(2)(3, 10, 20)(4));

// arrays
const numbers = [11, 22, 33, 44, 45]; //literal syntax

const years = new Array(2020, 2021, 2022); // array function

console.log(numbers.length);
console.log(years.length);

// mutate
numbers[2] = 66;
numbers[3] = 80;
console.log(numbers);

// array methods(push, pop,  shift, unshift, indexOf, includes)
years.push(2023);
years.push(2024);
years.pop();
years.pop();
years.unshift(2019);
years.unshift(2018);
years.shift();
years.shift();
console.log(years);

console.log(numbers.indexOf(80));
console.log(numbers.indexOf(88));
console.log(numbers.includes(88));
console.log(numbers.includes(22));

//objects
const restuarant = {
  restuarantName: "Spectra Burger Zone",
  founding: 1998,
  founder: "Mr. X",
  setMenu: ["Burger", "Pasta", "Fajita", "Pizza", "Nachos"],

  // foodCount: function (foods) {
  //   return foods.length;
  // },

  foodCount: function () {
    return this.setMenu.length;
  },
}; //object literal syntax

console.log(restuarant.setMenu[3]);
console.log(restuarant["restuarant" + "Name"]);

// console.log(restuarant.foodCount(["Burger", "Pasta", "Fajita", "Nachos"]));

console.log(restuarant.foodCount());

const restuarant2 = restuarant;
restuarant2.founding = 1996;
restuarant.founder = "vv";
console.log(restuarant);
console.log(restuarant2);

//for loop
const arr = [1, 5, 3, 6, 9, 8];
let sum = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  sum = sum + arr[i];
}

console.log(sum);

//////////////////////////////////////////////////////
function testfunction(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}

function diff(arr, sum) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(sum - arr[i]);
  }
  return newArray;
}

const lambda = (a) => (b) => (c) => (d) => (e) => (f) => a + b + c + d + e + f;

const testArray = [10, 20, 33, 54, 66, 78];
const total = testfunction(testArray);
const newArray = diff(testArray, total);
console.log(total);
console.log(newArray);
const lambdaResult = lambda(newArray[0])(newArray[1])(newArray[2])(newArray[3])(
  newArray[4]
)(newArray[5]);
console.log(lambdaResult);
