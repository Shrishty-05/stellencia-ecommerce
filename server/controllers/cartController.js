import Cart from "../models/Cart.js";
import Product from "../models/Product.js"; // To get product details
import mongoose from "mongoose";

// Add item to cart
export const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        // Fetch cart for the user
        let cart = await Cart.findOne({ userId });

        // Fetch product details
        const product = await Product.findById(productId);
        console.log("PRODUCT:", product);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (!cart) {
            // Create new cart if user has none
            cart = new Cart({
                userId,
                items: [{
                    productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                }]
            });
        } else {
            // Check if product already in cart
            const item = cart.items.find(
                i => i.productId.toString() === productId.toString()
            );

            if (item) {
                // Increment quantity if exists
                item.quantity += 1;
            } else {
                // Otherwise, push new item
                cart.items.push({
                    productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
        }

        await cart.save();

        res.json({ message: "Item added to cart", cart });

    } catch (err) {
    console.error("ADD TO CART ERROR:", err);
    res.status(500).json({
        message: err.message,
        error: err
    });
}
};

// remove item from cart
export const removeProduct = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        cart.items = cart.items.filter(
            i => i.productId.toString() !== productId.toString()
        );

        await cart.save();
        res.json({
            message: "Items removed from cart"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateQuantity = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const item = cart.items.find(
            i => i.productId.toString() === productId.toString()
        );

        if(!item){ return res.status(404).json("Item not found it cart");}

        if(quantity < 1){
            cart.items = cart.items.filter(
                item => item.productId.toString() !== productId.toString()
            )
        }else {
            item.quantity = quantity;
        }

        await cart.save();
        res.json({
            message: "Cart updated successfully"
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        console.log("GET CART HIT:", userId);

        // Validate userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID format"
            });
        }

        const cart = await Cart.findOne({ userId }).populate({
            path: "items.productId",
            select: "name price image"
        });

        if (!cart) {
            return res.status(200).json({
                message: "Cart empty",
                items: []
            });
        }

        res.json(cart);

    } catch (err) {
        console.error("GET CART ERROR:", err);
        res.status(500).json({
            message: "Server error"
        });
    }
};