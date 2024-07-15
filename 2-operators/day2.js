let num1 = 15;
let num2 = 10;

// Arithmetic Operations
console.log(`Addition of num1 and num2 is ${num1 + num2}`);
console.log(`Subtraction of num1 and num2 is ${num1 - num2}`);
console.log(`Multiplication of num1 and num2 is ${num1 * num2}`);
console.log(`Division of num1 and num2 is ${num1 / num2}`);
console.log(`When num1 is divided by num2 then Remainder is ${num1 % num2}`);

// Assignment Operators
num1 += 10;
num2 -= 5;
console.log(`New num1 is ${num1}`);
console.log(`New num2 is ${num2}`);

// Comparison Operators
let num3 = 18;
let num4 = 15;
if (num3 > num4) {
  console.log(`${num3} is greater than ${num4}`);
}
num3 = 10;
if (num3 < num4) {
  console.log(`${num3} is less than ${num4}`);
}

const num5 = 33;
const num6 = "33";
console.log(num5 == num6);
if (num5 == num6) {
  console.log(`The Value of num5 and num6 is same`);
}
console.log(num5 === num6);
if (num5 === num6) {
  console.log(`The Value of num5 and num6 is same`);
}

// Logical Operators
let x = 5;
let y = 10;

console.log(x < 10 && y > 5); // true, because both conditions are true
console.log(x < 10 && y < 5); // false, because the second condition is false

console.log(x < 10 || y > 5); // true, because both conditions are true
console.log(x < 10 || y < 5); // true, because the first condition is true
console.log(x > 10 || y < 5); // false, because both conditions are false

let a = true;

console.log(!a); // false, because a is true

// Ternary Operator

let number = 5;
let result = number > 0 ? "Positive" : "Negative";

console.log(result); // Positive
