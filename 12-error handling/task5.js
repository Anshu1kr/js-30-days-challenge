// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (input.trim() === "") {
    throw new ValidationError("Input cannot be empty.");
  }
  return "Input is valid.";
}

function main() {
  const userInput = "anshu";

  try {
    const result = validateInput(userInput);
    console.log(result);
  } catch (e) {
    if (e instanceof ValidationError) {
      console.error("Validation error:", e.message);
    } else {
      console.error("An unexpected error occurred:", e.message);
    }
  }
}

main();
