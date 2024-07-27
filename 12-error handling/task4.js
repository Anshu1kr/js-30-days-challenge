// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error message.");
}

function main() {
  try {
    throwCustomError();
  } catch (e) {
    if (e instanceof CustomError) {
      console.error("Caught a custom error:", e.message);
    } else {
      console.error("Caught an unexpected error:", e.message);
    }
  }
}

main();
