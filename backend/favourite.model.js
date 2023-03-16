const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavouriteSchema = new Schema({
  name: String,
  price: Number,
  quantity: String,
  category: String,
  image: String,
});

module.exports = mongoose.model("favourite", FavouriteSchema);
