const BookList = require('../models/bookList');

// search by title
const searchBooks = async (req, res) => {
  try {
    const q = (req.query.q || '').trim();

    const filters = { available: true }; // only available books
    if (q) {
      filters.title = q; 
    }

    const items = await BookList.find(filters);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};

// view all the book lists
const browseBooks = async (req, res) => {
  try {
    const items = await BookList.find({ available: true });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Browse failed', error: err.message });
  }
};

module.exports = { searchBooks, browseBooks };