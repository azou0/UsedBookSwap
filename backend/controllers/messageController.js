const Message = require('../models/message');
const BookList = require('../models/bookList');

const sendMessage = async (req, res) => {
  try {
    const { to, bookId, content } = req.body;
    if (!to || !bookId || !content) {
      return res.status(400).json({ message: 'to, bookId and content are required' });
    }

    const msg = await Message.create({
      from: req.user.id,
      to,
      book: bookId,
      content
    });

    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
};