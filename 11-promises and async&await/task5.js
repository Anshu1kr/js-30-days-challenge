// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message

// Function that returns a promise that rejects
function delayedError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("This is an error message after 2 seconds");
    }, 2000);
  });
}

// Async function that handles the rejected promise using try...catch
async function handleError() {
  try {
    const message = await delayedError();
    console.log(message);
  } catch (error) {
    console.error("Error: " + error);
  }
}

// Call the async function
handleError();
