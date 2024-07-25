# ES6 + Features

## Template Literals

Template literals in JavaScript are a feature for creating strings with enhanced functionality. They use backticks (`) and support:

### 1. Multiline Strings:

- Easily create strings that span multiple lines.

```
let text = `Line 1
Line 2
Line 3`;
```

### 2. Expression Interpolation:

- Embed variables and expressions directly within the string using ${}.

```
let name = "Alice";
let age = 30;
let message = `Name: ${name}, Age: ${age}`;
```

### 3. Tagged Templates:

- Process template literals with functions for custom string handling.

```
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => `${acc}${str}${values[i] || ''}`, '');
}
let result = tag`Hello, ${name}! You are ${age} years old.`;
```

Template literals make string handling more powerful and readable in JavaScript.

## Destructuring

Destructuring in JavaScript is a concise way to extract values from arrays or objects and assign them to variables.

### 1. Array Destructuring

- You can extract values from an array into separate variables:

```
const [first, second] = [1, 2];
console.log(first);  // Output: 1
console.log(second); // Output: 2
```

### 2. Object Destructuring

- You can extract properties from an object into variables:

```
const { name, age } = { name: "Alice", age: 30 };
console.log(name); // Output: Alice
console.log(age);  // Output: 30
```

### 3. Nested Destructuring

- You can also destructure nested objects and arrays:

```
const person = {
    name: "Alice",
    address: { city: "Wonderland", zip: 12345 }
};
const { name, address: { city } } = person;
console.log(name); // Output: Alice
console.log(city); // Output: Wonderland
```

Destructuring simplifies variable assignment and improves code readability.

## Spread and Rest Operators

## Spread Operator (...)

- The spread operator expands an iterable (like an array) into individual elements:

### 1. Arrays:

```
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]
```

### 2. Objects:

```
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj); // Output: { a: 1, b: 2, c: 3 }
```

## Rest Operator (...)

- The rest operator collects multiple elements into a single array or object:

### 1. Function Parameters:

```
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
```

### 2. Array Destructuring:

```
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4]
```

### 3. Object Destructuring:

```
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);    // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }
```

### Summary:

- Spread: Expands elements from an iterable.
- Rest: Collects multiple elements into an array.

## Default Parameters

Default parameters in JavaScript allow you to set default values for function parameters if no arguments or undefined are passed. This helps in providing default behavior without additional checks inside the function.

## Syntax

```
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
```

## Examples

### 1. Basic Usage:

```
function add(a = 1, b = 2) {
    return a + b;
}
console.log(add());    // Output: 3 (uses default values)
console.log(add(5));  // Output: 7 (uses default value for b)
console.log(add(5, 3)); // Output: 8 (uses provided values)
```

### 2. With Expressions:

```
function multiply(a, b = a) {
    return a * b;
}
console.log(multiply(4));  // Output: 16 (b defaults to a)
console.log(multiply(4, 5)); // Output: 20 (uses provided value for b)
```

Default parameters make functions more flexible and reduce the need for additional logic to handle missing arguments.

## Enhanced Object Literals

Enhanced object literals in JavaScript provide a concise syntax for defining object properties and methods. Here’s a summary of the key features:

### 1. Property Shorthand

- When the property name and variable name are the same, you can omit the value:

```
const name = "Alice";
const age = 30;

const person = {
    name, // Equivalent to name: name
    age   // Equivalent to age: age
};
```

### 2. Method Definitions

- Define methods without using the function keyword:

```
const person = {
    name: "Alice",
    greet() { // Equivalent to greet: function() { ... }
        console.log("Hello!");
    }
};
```

### 3. Computed Property Names

- Use expressions for property names:

```
const key = "age";
const person = {
    name: "Alice",
    [key]: 30 // Equivalent to age: 30
};
```

### 4. Method Shorthand

- Use concise method syntax for defining functions as object properties:

```
const person = {
    name: "Alice",
    greet() {
        console.log("Hello!");
    }
};
```

### Summary:

Enhanced object literals streamline object creation by allowing shorthand syntax for properties, methods, and computed property names, improving readability and conciseness.
