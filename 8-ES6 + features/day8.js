// Template Literals
// Task 1
let name = "Anshu";
let age = 20;

let personInfo = `The person's name is ${name} and they are ${age} year old.`;
console.log(personInfo);

// Task 2
let personDetails = `Hello, I'm ${name} Kumar Kushwaha, 
A Computer Science Student Pursuing B.Tech at KIET Group Of Institutions, Ghaziabad`;
console.log(personDetails);

// Destructuring
// Task 3
const nums = [7, 18, 45, 33];
let [num1, num2] = nums;
console.log(`${num1}, ${num2}`);

// Task 4
const Book = {
  title: "My Stroy",
  author: "Anshu",
  year: 2024,
};
let { title, author } = Book;
console.log(`Title: ${title}, Author: ${author}`);

// Spread and Rest Operators
// Task 5
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newArr = [...arr1, ...arr2, 9, 10, 11, 12];
console.log(newArr);

// Task 6
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Default Parameters
// Task 7
function product(x, y = 1) {
  return x * y;
}
// const product1 = (x, y = 1) => x * y;
console.log(product(5));

// Enhanced Object Literals
// Task 8
const firstName = "Anshu";
const lastName = "Kushwaha";
const age1 = 20;

const person = {
  firstName,
  lastName,
  age,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet() {
    console.log(
      `Hello, my name is ${this.fullName()} and I am ${this.age} years old.`
    );
  },
};

console.log(person);
person.greet();

// Task 9
const propName1 = "name";
const propName2 = "age";
const propValue1 = "Anshu";
const propValue2 = 20;

const person1 = {
  [propName1]: propValue1,
  [propName2]: propValue2,
  greet() {
    console.log(
      `Hello, my name is ${this[propName1]} and I am ${this[propName2]} years old.`
    );
  },
};

console.log(person1);
person.greet();
