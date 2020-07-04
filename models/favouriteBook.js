const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  href: { type: String, required: true },
});

const Book = mongoose.model("Favourite", bookSchema);

module.exports = Book;
