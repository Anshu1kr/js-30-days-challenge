// Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values

// URLs of public APIs
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to fetch data from a given URL
function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  });
}

// Create an array of promises
const promises = apiUrls.map((url) => fetchData(url));

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    console.log(results); // Log all the resolved values
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
