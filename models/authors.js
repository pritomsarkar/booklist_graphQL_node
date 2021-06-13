const mongoose = require("mongoose");
const Sehema = mongoose.Schema;

const authorSchema = new Sehema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Author", authorSchema);
