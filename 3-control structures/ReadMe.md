# control Structures

## If-Else Statements

- The if-else statement is used to execute code based on a condition. It allows you to specify a block of code to be executed if a condition is true, and another block of code to be executed if the condition is false.

## Nested If-Else Statements

1. Basic Structure: An if statement inside another if or else block.
2. Usage: Useful for checking multiple related conditions.
3. Flow:
   - Evaluate the outer if condition.
   - If true, execute its block which may contain another if-else.
   - If false, move to the outer else block.

### Explanation

- Outer if: Checks the first condition.
- Inner if: Checks the second condition if the first is true.
- Outer else: Executes if the first condition is false.
- Inner else: Executes if the second condition is false.

### Syntax

```
if (condition1) {
    if (condition2) {
        // Code for condition1 and condition2 true
    } else {
        // Code for condition1 true and condition2 false
    }
} else {
    // Code for condition1 false
}
```

- This structure allows for detailed decision-making based on multiple conditions.

## Switch case

1. Purpose: Used for multi-way branch logic based on the value of an expression.

2. Syntax:

```
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if expression !== value1 and expression !== value2
}
```

- expression: An expression whose value is used for comparison.
- case value1, case value2: Values that expression might equal.
- break: Ends the switch statement to prevent fall-through.
- default: Optional. Code executed if no match is found.

3. Example:

```
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("It's neither Monday nor Tuesday.");
}
```

- In this example, switch evaluates day, and executes code based on its value ("Monday", "Tuesday", or another day).

4. Use Cases:
   - Simplifies code when multiple conditions are based on the same value.
   - Offers a clearer alternative to long chains of if-else statements.

### Benefits:

- Readability: Clearly shows intent when handling multiple cases based on one value.
- Efficiency: Optimizes execution for large sets of conditions compared to if-else chains.
