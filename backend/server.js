const express = require("express");
const mongoose = require("mongoose");
const GroceryModel = require("./grocery.model");

const port = 8080;
const mongoUrl = 'mongodb://localhost:27017/grocery_app';

if (!mongoUrl) {
  console.error("Missing Mongo URL");
  process.exit(1);
}

const app = express();

app.use(express.json());

app.use("/api/groceries/:id", async (req, res, next) => {
  let grocery = null;

  try {
    grocery = await GroceryModel.findById(req.params.id);
  } catch (err) {
    return next(err);
  }

  if (!grocery) {
    return res.status(404).end("Grocery not found");
  }

  req.grocery = grocery;
  next();
});

app.get("/api/groceries/", async (req, res) => {
  const groceries = await GroceryModel.find().sort({ created: "desc" });
  return res.json(groceries);
});

app.get("/api/groceries/:id", (req, res) => {
  return res.json(req.grocery);
});

app.post("/api/groceries/", async (req, res, next) => {
  const grocery = req.body;

  try {
    const saved = await GroceryModel.create(grocery);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/groceries/:id", async (req, res, next) => {
  const grocery = req.body;

  try {
    const updated = await req.grocery.set(grocery).save();
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/groceries/:id", async (req, res, next) => {
  try {
    const deleted = await req.grocery.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(mongoUrl, {family: 4});

  app.listen(port, () => {
    console.log('MongoDB connected');
    console.log(`App is listening on port ${port}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});