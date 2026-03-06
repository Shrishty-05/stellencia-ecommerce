// // import { useWishlist } from "./WishlistContext";
// import { useCart } from "../Cart-components/CartContext";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import api from "../../api/axios.js";
// // import WishlistButton from "./WishlistButton";

// export default function ProductCard({ id, image, name, price }) {
//   const { addToCart, cartItems } = useCart();
//   const [products, setProducts] = useState([]);
//   // const { toggleWishlist, isWishlisted } = useWishlist();

//   const product = { id, image, name, price };

//   // const wishlisted = isWishlisted(id);
// const isInCart = cartItems.some((item) => item.productId === id);
//   localStorage.clear();

//   return (
//     <div className="group relative bg-white rounded-xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-all">

//       {/* Wishlist */}
//       {/* <div className="absolute top-4 right-4 z-10">
//         <WishlistButton
//           wishlisted={wishlisted}
//           onToggle={() => {
//             console.log("clicked",product);
//             toggleWishlist(product)}}
//         />
//       </div> */}

//       {/* Product Image & Info */}
//       <Link to={`/product/${id}`} className="flex flex-col flex-grow">
//         <img
//           src={image}
//           alt={name}
//           className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
//         />
//         <div className="px-6 py-5 flex flex-col gap-2">
//           <h3 className="text-[15px] font-medium text-[#1A1A1A] line-clamp-2">
//             {title}
//           </h3>
//           <p className="text-[#6E1C2F] font-semibold text-lg">₹{price}</p>
//         </div>
//       </Link>

//       {/* Add / Go to Cart */}
//       {isInCart ? (
//         <Link
//           to="/cart"
//           className="mt-auto mx-6 mb-6 border border-[#6E1C2F] text-[#6E1C2F] py-3 rounded-lg text-center hover:bg-[#6E1C2F] hover:text-white transition-all duration-300"
//         >
//           Go to Cart
//         </Link>
//       ) : (
//         <button
//           onClick={() => addToCart(product)}
//           className="mt-auto mx-6 mb-6 bg-[#6E1C2F] text-white py-3 rounded-lg hover:bg-[#581623] transition-all duration-300"
//         >
//           Add to Cart
//         </button>
//       )}
//     </div>
//   );
// }

import { useCart } from "../Cart-components/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ _id, name, image, price, discountPrice }) {

  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some((item) => item.productId === _id);

  const product = {
    productId: _id,
    name,
    image: image,
    price: discountPrice || price
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-all">

      {/* Product Image & Info */}
      <Link to={`/product/${_id}`} className="flex flex-col flex-grow">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="px-6 py-5 flex flex-col gap-2">
          <h3 className="text-[15px] font-medium text-[#1A1A1A] line-clamp-2">
            {name}
          </h3>

          <p className="text-[#6E1C2F] font-semibold text-lg">
            ₹{discountPrice || price}
          </p>
        </div>
      </Link>

      {/* Add / Go to Cart */}
      {isInCart ? (
        <Link
          to="/cart"
          className="mt-auto mx-6 mb-6 border border-[#6E1C2F] text-[#6E1C2F] py-3 rounded-lg text-center hover:bg-[#6E1C2F] hover:text-white transition-all duration-300"
        >
          Go to Cart
        </Link>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="mt-auto mx-6 mb-6 bg-[#6E1C2F] text-white py-3 rounded-lg hover:bg-[#581623] transition-all duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

