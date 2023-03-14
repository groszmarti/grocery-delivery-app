const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  order: [{ name: String, price: Number, quantity: String, category: String }],
});

module.exports = mongoose.model("order", CartSchema);
