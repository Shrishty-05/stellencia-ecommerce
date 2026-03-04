import express from "express";
import { addToCart, removeProduct, updateQuantity, getCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId",getCart);

router.post("/add", addToCart);

router.delete("/delete",removeProduct);

router.put("/update", updateQuantity);

export default router;