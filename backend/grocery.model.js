const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrocerySchema = new Schema({
  name: String,
  price: Number,
  quantity: String,
  category: String,
  image: String,
  createdAt: Date
})

module.exports = mongoose.model('grocery', GrocerySchema);