// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value

// Function that returns a promise
function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This message is shown after 2 seconds");
    }, 2000);
  });
}

// Async function that waits for the promise to resolve and logs the resolved value
async function logMessage() {
  try {
    const message = await delayedMessage();
    console.log(message);
  } catch (error) {
    console.error("Error: " + error);
  }
}

// Call the async function
logMessage();
