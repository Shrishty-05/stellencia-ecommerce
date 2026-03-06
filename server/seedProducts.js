import mongoose from "mongoose";
import Product from "./models/Product";
import products from "./data/products.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const seedProducts = async () => {
  try {
    await Product.deleteMany({}); // optional: clean DB
    await Product.insertMany(products);
    console.log("Products seeded!");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

seedProducts();