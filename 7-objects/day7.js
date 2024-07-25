// Task 1
const Book = {
  title: "MyStroy",
  author: "Anshu",
  year: "2020",
};
console.log(Book);

// Task 2
console.log(Book.title);
console.log(Book.author);

// Task 3
Book.details = function () {
  return `Title : ${Book.title}, author : ${Book.author}`;
};
console.log(Book.details());

// Task 4
function updateYear(newYear) {
  this.year = newYear;
}
Book.updateYear = updateYear;
Book.updateYear(2024);
console.log(Book);

// Task 5
const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-06-112008-4",
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "978-0-452-28423-4",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      isbn: "978-0-14-243724-7",
    },
  ],
};
console.log(library);

// Task 6
console.log(`Library Name : ${library.name}`);

library.books.forEach((book) => {
  console.log(`Book Title : ${book.title}`);
});

// Task 7
Book.bookDescription = function () {
  return `Title : ${this.title}, Year : ${this.year} `;
};
console.log(Book.bookDescription());

// Task 8
library.books.forEach((book, index) => {
  console.log(`Book ${index + 1} :`);

  for (const property in book) {
    if (book.hasOwnProperty(property)) {
      console.log(`${property} : ${book[property]}`);
    }
  }
  console.log("");
});

// Task 9
library.books.forEach((book, index) => {
  console.log(`Book ${index + 1} :`);

  console.log("Keys:", Object.keys(book));

  console.log("Values:", Object.values(book));

  console.log("");
});
