import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Product from "./models/Product.js";

dotenv.config();

// json read karo
const products = JSON.parse(
  fs.readFileSync("./data/products.json", "utf-8")
);

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // purane products delete
    await Product.deleteMany();

    // naye insert
    await Product.insertMany(products);

    console.log("Products Seeded Successfully ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedProducts();