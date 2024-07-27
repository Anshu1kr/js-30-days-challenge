// Task 7: Use the 'fetch' API to get data from a public API and log the response data to the console using async/await

// URL of a public API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Async function to fetch data from the public API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json(); // Parse the JSON from the response
    console.log(data); // Log the response data to the console
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Call the async function
fetchData();
