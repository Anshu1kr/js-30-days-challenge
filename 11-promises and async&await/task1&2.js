// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to console
// Task 2: Create a promise that reject with an error message after a 2-second timeout and handle the error using '.catch()'

function delayedMessage(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("This message is shown after 2 seconds");
      } else {
        reject("This is an error message after 2 seconds");
      }
    }, 2000);
  });
}

delayedMessage(false)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
