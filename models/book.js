const mongoose = require("mongoose");
const Sehema = mongoose.Schema;

const bookSchema = new Sehema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookSchema);
