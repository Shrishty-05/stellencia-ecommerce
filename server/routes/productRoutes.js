import express from "express";
import { createProduct, getProduct, updateProduct, deleteProduct, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

// create product
router.post('/add', createProduct);

// get product
router.get('/', getProduct);

// update product
router.put('/update/:id', updateProduct);

// delete product
router.delete('/delete/:id', deleteProduct);

// single product
router.get('/:id', getSingleProduct);

export default router;