const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "BookList" }, // optional, linked to swap
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);