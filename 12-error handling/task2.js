// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

function divideNumbers(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  return numerator / denominator;
}

function main() {
  const num = 10;
  const denom = 6;

  try {
    const result = divideNumbers(num, denom);
    console.log("Result:", result);
  } catch (e) {
    console.error("An error occurred:", e.message);
  }
}

main();
