# Functions

## Function Declaration

- A function declaration defines a named function that can be called before it is defined in the code due to hoisting.

- Example:

```
// Function Declaration
function greet() {
    return "Hello, world!";
}

// Function can be called before its declaration due to hoisting
console.log(greet()); // Output: Hello, world!
```

## function Expression

- A function expression defines a function as part of a variable assignment. This function can be anonymous or named and is not hoisted, meaning it cannot be called before it is defined.

- Example:

```
// Function Expression
const greet = function() {
return "Hello, world!";
};

// Function cannot be called before its expression
console.log(greet()); // Output: Hello, world!
```

## Arrow Functions

- An arrow function in JavaScript is a more concise way to write functions, introduced in ES6. Key features include:

1. Shorter Syntax: Arrow functions are written with =>.
2. Lexical this Binding: They do not have their own this context but inherit it from the surrounding scope.
3. No arguments Object: Arrow functions do not have their own arguments object.

### Examples

1. Basic Arrow Function

```
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

2. Single Parameter

```
const square = x => x * x;
console.log(square(4)); // Output: 16
```

3. Multiple Statements

```
const sumAndSquare = (a, b) => {
    const sum = a + b;
    return sum * sum;
};
console.log(sumAndSquare(2, 3)); // Output: 25
```

4. Lexical this Binding

```
function Person() {
this.age = 0;
setInterval(() => {
this.age++;
console.log(this.age);
}, 1000);
}
const person = new Person();
```

- Arrow functions provide a concise and readable way to write functions, with specific behavior for this and arguments.
