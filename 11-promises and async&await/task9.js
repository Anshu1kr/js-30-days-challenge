// Task 9: Use 'Promise.race' to log the value of the first promise that resolves among multiple promises

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

// Use Promise.race to wait for the first promise to resolve
Promise.race(promises)
  .then((result) => {
    console.log(result); // Log the value of the first resolved promise
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
