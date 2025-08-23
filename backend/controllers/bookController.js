const BookList = require('../models/bookList');
//Get all book listings for logged-in user
const getBooks = async (req, res) => {
try {
const books = await BookList.find({ userId: req.user.id });
res.json(books);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const addBook = async (req, res) => {
const { title, description } = req.body;
try {
const book = await BookList.create({ userId: req.user.id, title,
      description });
res.status(201).json(book);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

const updateBook = async (req, res) => {
const { title, description, available } = req.body;
try {
const book = await BookList.findById(req.params.id);
if (!book) return res.status(404).json({ message: 'Book not found' });

book.title = title || book.title;
book.description = description || book.description;
book.available = available ?? book.available;

const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Delete book listing
const deleteBook = async (req, res) => {
  try {
    const book = await BookList.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });


 await book.remove();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getBooks, addBook, updateBook, deleteBook};

