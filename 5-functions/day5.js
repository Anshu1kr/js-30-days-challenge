// ---------------- Function Declaration ------------------
// Task 1
function isEvenOrOdd(num1) {
  if (num1 % 2 == 0) {
    console.log(`${num1} is even`);
  } else {
    console.log(`${num1} is odd`);
  }
}
isEvenOrOdd(18);

// Task 2
function square(num2) {
  return num2 * num2;
}
console.log(square(7));

// ----------------- Function Expression -------------------
// Task 3
const maxNum = function (a, b) {
  if (a > b) {
    console.log(`${a} is maximum Number`);
  } else {
    console.log(`${b} is maximum Number`);
  }
};
maxNum(5, 7);

// Task 4
const combineString = function (str1, str2) {
  return str1 + " " + str2;
};
console.log(combineString("anshu", "kushwaha"));

// -------------------- Arrow Functions ---------------------
// Task 5
const sum = (a, b) => {
  return a + b;
};
console.log(sum(7, 5));

// Task 6
const containCharacter = (str, char) => {
  return str.includes(char);
};
console.log(containCharacter("anshu", "s"));

// -------------------- Function Parameters and Default Values ---------------
// Task 7
function product(a, b = 7) {
  return a * b;
}
console.log(product(5));

// Task 8
function greeting(name, age = 18) {
  console.log(`Hello, Good Morning, I am ${name} and my age is ${age}`);
}
greeting("anshu");

// ------------------ Higher-Order Functions --------------------
// Task 9
function callMultipleTimes(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function sayHello() {
  console.log("Hello!");
}
callMultipleTimes(sayHello, 3);

// Task 10
function compose(fn1, fn2, value) {
  return fn2(fn1(value));
}

function double(x) {
  return 2 * x;
}

function decrement(x) {
  return x - 1;
}
console.log(compose(double, decrement, 10));
