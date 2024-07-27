// Task 9: Use the 'fetch' API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message

const invalidUrl = "https://example.com/invalid-endpoint";

async function fetchData() {
  try {
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

fetchData();
