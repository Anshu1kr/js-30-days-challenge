# Loops

## for Loop:

1. Purpose: Repeats a block of code a certain number of times.
2. Syntax:

```
for (initialization; condition; increment) {
    // code to execute
}
```

3. Example:

```
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

- This prints numbers 0 to 4.

## while Loop:

1. Purpose: Repeats a block of code as long as a condition is true.
2. Syntax:

```
while (condition) {
    // code to execute
}
```

3. Example:

```
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

- This prints numbers 0 to 4.

## do...while Loop:

1. Purpose: Similar to while but guarantees the block of code is executed at least once.
2. Syntax:

```
do {
    // code to execute
} while (condition);
```

3. Example:

```
let i = 0;
do {
console.log(i);
i++;
} while (i < 5);
```

- This prints numbers 0 to 4.

## Summary:

- for: Use for a known number of iterations.
- while: Use when the number of iterations is not known.
- do...while: Use when the loop must run at least once.
