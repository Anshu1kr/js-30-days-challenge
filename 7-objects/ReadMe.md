# Objects

In JavaScript, an object is a standalone entity, with properties and type. Objects are one of the fundamental building blocks in JavaScript and are used to store collections of data and more complex entities. Here’s a detailed explanation of JavaScript objects:

## Key Concepts

### 1. Properties and Methods:

- Properties: Objects are composed of properties, which are key-value pairs. A key (also called a property name) is a string, and a value can be any data type, including another object.

- Methods: When a function is associated with an object, it is called a method. Methods are actions that can be performed on objects.

### 2. Creating an Object:

- Object Literals: This is the most common way to create an object.

```
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
```

- Using the new Object() Syntax:

```
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.fullName = function() {
    return this.firstName + " " + this.lastName;
};
```

### 3. Accessing Object Properties:

- Dot Notation:

```
console.log(person.firstName); // Output: John
```

- Bracket Notation:

```
console.log(person["lastName"]); // Output: Doe
```

### 4. Modifying Object Properties:

- You can add new properties or modify existing ones.

```
person.age = 35; // Modifies age
person.gender = "male"; // Adds a new property
```

### 5. Deleting Object Properties:

- Use the delete operator to remove a property from an object.

```
delete person.age;
```

### 6. Object Methods:

- Methods are functions stored as object properties.

```
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Output: John Doe
```

### 7. Built-in Objects:

- JavaScript provides several built-in objects like Date, Math, Array, String, etc., which come with their own properties and methods.

```
let date = new Date();
console.log(date.getFullYear()); // Output: current year
```

### 8. Prototypes:

Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

## Example

Here’s a comprehensive example to illustrate the concepts:

```
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    start: function() {
        console.log("Car started");
    },
    stop: function() {
        console.log("Car stopped");
    }
};

// Accessing properties
console.log(car.make); // Output: Toyota
console.log(car["model"]); // Output: Corolla

// Modifying properties
car.year = 2022;
car.color = "red";

// Adding a new method
car.honk = function() {
    console.log("Beep beep!");
};

// Using methods
car.start(); // Output: Car started
car.honk(); // Output: Beep beep!

// Deleting a property
delete car.color;

// Checking the modified object
console.log(car);
```

This example creates a car object with properties and methods, modifies it, adds new properties and methods, and demonstrates how to interact with the object using dot and bracket notations.
