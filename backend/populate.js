const mongoose = require("mongoose");
const GroceryModel = require("./grocery.model");
const groceries = require("./groceries")

const mongoUrl = 'mongodb://localhost:27017/grocery_app';

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateGroceries = async () => {
  await GroceryModel.deleteMany({});
  const createdAt = Date.now();

  const foods = groceries.map((grocery) => ({
    name: grocery.name,
    price: grocery.price,
    quantity: grocery.quantity,
    createdAt: Date.now()
  }));

  await GroceryModel.create(...foods);
  console.log("Groceries created");
};

const main = async () => {
  await mongoose.connect(mongoUrl, {family: 4});

  await populateGroceries();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});