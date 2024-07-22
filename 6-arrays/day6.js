// Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(1);
console.log(arr);

// Task 7
let newArr1 = arr.map(doubleArr);
function doubleArr(arr) {
  return arr * 2;
}
console.log(newArr1);

// Task 8
let newArr2 = arr.filter((arr) => arr % 2 == 0);
console.log(newArr2);

// Task 9
let sum = 0;
let newArr3 = arr.reduce(sumArr, sum);
function sumArr(accumulator, currentValue) {
  return accumulator + currentValue;
}
console.log(newArr3);

// Task 10
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Task 11
arr.forEach((element) => {
  console.log(element);
});

// Task 12
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix.length; j++) {
//     console.log(matrix[i][j]);
//   }
// }
console.log(matrix);

// Task 13
console.log(matrix[1][2]);
