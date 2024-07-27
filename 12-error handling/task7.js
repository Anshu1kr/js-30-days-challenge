// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and log the error message

function randomPromise() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully.");
      } else {
        reject("Promise rejected due to random failure.");
      }
    }, 1000);
  });
}

async function handlePromise() {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

handlePromise();
