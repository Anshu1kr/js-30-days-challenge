// Task 8: Use the 'fetch' API to request data from an invalid URL and handle the error using '.catch()'. Log an appropriate error message to the console

const invalidUrl = "https://example.com/invalid-endpoint";

fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error occurred:", error.message);
  });
