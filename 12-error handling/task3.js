// Task 3: Write a script that includes a try-catch block and finally block. Log messages in the try, catch and finally blocks to observe the execution flow

function executeWithFlow() {
  try {
    console.log("In the try block: Attempting to execute code.");

    throw new Error("This is a simulated error.");
  } catch (e) {
    console.log("In the catch block: An error occurred -", e.message);
  } finally {
    console.log("In the finally block: This block always executes.");
  }
}

executeWithFlow();
