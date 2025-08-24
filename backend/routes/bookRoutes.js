
const express = require('express');
const { getBooks,
  addBook,
  updateBook,
  deleteBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

//search & browse functionality

const { searchBooks, browseBooks } = require('../controllers/bookSearchController');

// Auth users can search and browse books
router.get('/search', protect, searchBooks);

router.get('/browse', browseBooks);

router.route('/').get(protect, getBooks).post(protect, addBook);
router.route('/:id').put(protect, updateBook).delete(protect, deleteBook);

module.exports = router;

//view a user's available books

const { getUserBooks } = require('../controllers/bookUserController');

router.get('/user/:userId', getUserBooks);

//send message

const { sendMessage } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, sendMessage);                 
router.get('/thread', protect, getThread); 

//view swapped books

const { getSwappedBooks } = require('../controllers/bookSwapController');

router.get('/swapped', getSwappedBooks);