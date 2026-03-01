// // import { createContext, useContext, useEffect, useState } from "react";

// // const WishlistContext = createContext();

// // export function WishlistProvider({ children }) {
// //   const storageKey = "wishlist";
// //   const [wishlistItems, setWishlistItems] = useState(() => {
// //     const stored = localStorage.getItem(storageKey);
// //     return stored ? JSON.parse(stored) : [];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem(storageKey, JSON.stringify(wishlistItems));
// //   }, [wishlistItems]);

// //   // Toggle wishlist
// //   const toggleWishlist = (product) => {
// //     setWishlistItems((prev) => {
// //       const exists = prev.find((item) => item.id === product.id);
// //       if (exists) return prev.filter((item) => item.id !== product.id);
// //       return [...prev, product];
// //     });
// //   };

// //   const isWishlisted = (id) => wishlistItems.some((item) => item.id === id);

// //   return (
// //     <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isWishlisted }}>
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // }

// // export const useWishlist = () => useContext(WishlistContext);


// import { createContext, useContext, useEffect, useState } from "react";

// const WishlistContext = createContext();

// export function WishlistProvider({ children }) {
//   const storageKey = "wishlist";

//   const [wishlistItems, setWishlistItems] = useState(() => {
//     const stored = localStorage.getItem(storageKey);
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   // Toggle wishlist
//   const toggleWishlist = (product) => {
//   if (!product || !product.id) {
//     console.error("Invalid product passed to toggleWishlist:", product);
//     return;
//   }

//   setWishlistItems((prev) => {
//     const exists = prev.find((item) => item.id === product.id);

//     if (exists) {
//       return prev.filter((item) => item.id !== product.id);
//     }

//     return [...prev, product];
//   });
// };

//   const isWishlisted = (id) => wishlistItems.some((item) => item.id === id);

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isWishlisted }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export const useWishlist = () => useContext(WishlistContext);


import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const storageKey = "wishlist";

  // Helper to extract correct ID
  const getId = (product) => product?.id || product?._id;

  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error parsing wishlist from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(wishlistItems));
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error);
    }
  }, [wishlistItems]);

  // Toggle Wishlist Item
  const toggleWishlist = (product) => {
    const productId = getId(product);

    if (!product || !productId) {
      console.error("Invalid product passed to toggleWishlist:", product);
      return;
    }

    setWishlistItems((prev) => {
  console.log("Before:", prev);

  const exists = prev.some(
    (item) => getId(item) === productId
  );

  let updated;

  if (exists) {
    updated = prev.filter(
      (item) => getId(item) !== productId
    );
  } else {
    updated = [...prev, product];
  }

  console.log("After:", updated);
  return updated;
});
  };

  // Check if item is wishlisted
  const isWishlisted = (id) => {
    return wishlistItems.some(
      (item) => getId(item) === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);