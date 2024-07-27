// Task 6: Create a promise that randomly resolves or reject. Use '.catch()' to handle the rejection and log an appropriate message to the console

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

randomPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
