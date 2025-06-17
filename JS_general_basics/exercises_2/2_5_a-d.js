const book = {
  isbn: 0,
  name: '',
  author: '',
  publicationDate: new Date(),
};

const getAuthors = (book) => {
  return book.author;
};

const setAuthors = (book, author) => {
  book.author = author;
};

const getIsbn = (book) => {
  return book.isbn;
};

const setIsbn = (book, isbn) => {
  book.isbn = isbn;
};

const book1 = {
  isbn: 1234567890,
  name: 'Book 1',
  author: 'Author 1',
  publicationDate: new Date(2024, 1, 1),
};
const book2 = {
  isbn: 1234567891,
  name: 'Book 2',
  author: 'Author 2',
  publicationDate: new Date(2024, 1, 2),
};

const book3 = {
  isbn: 1234567890,
  name: 'Book 3',
  author: 'Author 3',
  publicationDate: new Date(2024, 1, 1),
};

const compareBooks = (book1, book2) => {
  if (book1.isbn === book2.isbn) {
    return true;
  } else {
    return false;
  }
};

console.log('Book1 author:', getAuthors(book1));
console.log('Book1 ISBN:', getIsbn(book1));
console.log('Comparing Book1 and Book2:', compareBooks(book1, book2));
console.log('Comparing Book1 and Book3:', compareBooks(book1, book3));
