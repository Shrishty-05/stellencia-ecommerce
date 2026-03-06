// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../../api/axios.js"

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const storageKey = "cart"; // simple key, user-specific optional later

//   const [cartItems, setCartItems] = useState(() => {
//     // 🔹 init from localStorage
//     const stored = localStorage.getItem(storageKey);
//     return stored ? JSON.parse(stored) : [];
//   });

// const fetchCart = async () => {
//   try {
//     const res = await api.get("/cart");
//     if(res.data?.items){
//       setCartItems(res.data.items);
//     }
//   } catch(err){
//     console.error("Failed to fetch cart", err);
//   }
// };

//   // 🔹 Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     if (!product?.id) return;

//     setCartItems((prev) => {
//       const found = prev.find((item) => item.id === product.id);
//       if (found) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, qty) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: qty } : item
//       )
//     );
//   };

//     const clearCart = () => setCartItems([]);

//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);


import api from "../api/axios"; // axios instance with baseURL + token

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart from backend
  const fetchCart = async (userId) => {
    try {
      const res = await api.get(`/cart/${userId}`);
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await api.post("/cart/add", { productId: product.id });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await api.post("/cart/delete", { productId: id });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Remove from cart failed", err);
    }
  };

  const updateQuantity = async (id, qty) => {
    try {
      const res = await api.post("/cart/update", { productId: id, quantity: qty });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  const clearCart = async () => {
    try {
      const res = await api.post("/cart/clear");
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Clear cart failed", err);
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      fetchCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}