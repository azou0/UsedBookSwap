
const mongoose = require('mongoose');

const bookListSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    available: { type: Boolean, default: true }, // book can be swapped or not
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BookList', bookListSchema);
