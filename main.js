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
