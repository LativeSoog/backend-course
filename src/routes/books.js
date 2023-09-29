const router = require("express").Router();

const { getBooks, getBook } = require("../controllers/books");

router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/users/:user_id/books/:book_id");
router.delete("/users/:user_id/books/:book_id");

module.exports = router;
