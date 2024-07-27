// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

// Function that intentionally throws an error
function throwError() {
  throw new Error("This is an intentional error.");
}

// Main function to handle the error
function main() {
  try {
    // Attempt to call the function that throws an error
    throwError();
  } catch (e) {
    // Handle the error and log an appropriate message to the console
    console.error("An error occurred:", e.message);
    console.error(e.stack);
  }
}

// Run the main function
main();
