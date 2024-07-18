// Task 1
const n = 10;
for (let i = 1; i <= n; i++) {
  console.log(i);
}

// Task 2
for (let i = 1; i <= n; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Task 3
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`The sum of number from 1 to 10 is : ${sum}`);

// Task 4
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// Task 5
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Task 6
let fact = 1;
let num1 = 5;
do {
  fact = fact * num1;
  num1--;
} while (num1 > 0);
console.log(`The factorial of 5 is ${fact}`);

// Task 7
let num2 = 5;
for (let i = 0; i < num2; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}
