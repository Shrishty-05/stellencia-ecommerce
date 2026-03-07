import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios.js";
import { AuthContext } from "./authContext.jsx"

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useContext(AuthContext); // get logged-in user + token
  const [cartItems, setCartItems] = useState([]);

  /* ---------------- FETCH CART ---------------- */
  useEffect(() => {
    if (user?.token) {
      fetchCart();
    } else {
      setCartItems([]); // logged out → empty cart
    }
  }, [user]);

  const fetchCart = async () => {
    if (!user?.token) return;
    try {
      const res = await api.get(`/cart/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = async (product) => {
    if (!user?.token || !user?.id || !product?._id) return;

      console.log("Trying to add to cart:", { userId: user.id, productId: product._id });

    try {
      const res = await api.post("/cart/add", {userId: user.id, productId: product._id }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCartItems(res.data.items || res.data.cart?.items || []);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  /* ---------------- REMOVE ITEM ---------------- */
  const removeFromCart = async (productId) => {
    if (!user?.token || !productId) return;
    try {
      const res = await api.delete("/cart/delete", {
        data: { userId: user.id, productId },
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCartItems(res.data.items || res.data.cart?.items || []);
    } catch (err) {
      console.error("Remove from cart failed", err);
    }
  };

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = async (productId, quantity) => {
    if (!user?.token || !productId) return;
    try {
      const res = await api.put("/cart/update", { userId: user.id, productId, quantity }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCartItems(res.data.items || res.data.cart?.items || []);
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  /* ---------------- CLEAR CART ---------------- */
  const clearCart = async () => {
    if (!user?.token) return;
    try {
      const res = await api.delete("/cart/clear", {
        data: {userId : user.id},
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Clear cart failed", err);
    }
  };

  /* ---------------- CART COUNT ---------------- */
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      fetchCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);