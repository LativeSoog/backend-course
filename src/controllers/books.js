const getBooks = (req, res) => {
  //Get all books
};

const getBook = (req, res) => {
  const { book_id } = req.params;
  res.writeHead(200);
  res.end(`Book id ${book_id}`);
  //Get book
};

const takeBook = (req, res) => {
  //Take book
};

const handOverBook = (req, res) => {
  //Hand over the book
};

module.exports = { getBooks, getBook, takeBook, handOverBook };
