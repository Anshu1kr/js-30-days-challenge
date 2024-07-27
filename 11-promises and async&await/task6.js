// Task 6: Use the 'fetch' API to get data from a public API and log the response data to the console using promises

// URL of a public API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Fetch data from the public API
fetch(apiUrl)
  .then((response) => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Log the response data to the console
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
