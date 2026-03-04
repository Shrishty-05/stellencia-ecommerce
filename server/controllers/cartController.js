import Cart from "../models/Cart.js";
import Product from "../models/Product.js"; // To get product details

// Add item to cart
export const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        // Fetch cart for the user
        let cart = await Cart.findOne({ userId });

        // Fetch product details
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (!cart) {
            // Create new cart if user has none
            cart = new Cart({
                userId,
                items: [{
                    productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                }]
            });
        } else {
            // Check if product already in cart
            const item = cart.items.find(
                i => i.productId.toString() === productId
            );

            if (item) {
                // Increment quantity if exists
                item.quantity += 1;
            } else {
                // Otherwise, push new item
                cart.items.push({
                    productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
        }

        await cart.save();

        res.json({ message: "Item added to cart", cart });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
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
            i => i.productId.toString() !== productId
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
            i => i.productId.toString() === productId
        );

        if(!item){ return res.status(404).json("Item not found it cart");}

        if(quantity < 1){
            cart.items = cart.items.filter(
                item => item.productId.toString() !== productId
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

export const getCart = async (req,res) => {
    try{
        const { userId } = req.body;
        const cart = await Cart.findOne({userId}).populate('items.productId');

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.json(cart);
    }
     catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}