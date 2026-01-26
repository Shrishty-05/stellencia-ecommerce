// import WishlistButton from "../common/WishlistButton"

// export default function ProductCard({
//   id = null,
//   image = "/placeholder.png",
//   title = "",
//   price = "",
//   isWishlisted = false,
//   onAddToCart = () => {},
//   onToggleWishlist = () => {},
// }) {
//   return (
//     <div className="border rounded-lg overflow-hidden bg-white relative w-full h-auto shrink-0 md:w-auto md:max-h-auto">
//       <WishlistButton
//         isWishlisted={isWishlisted}
//         onToggleWishlist={() => onToggleWishlist(id)}
//       />

//       <img src={image} alt={title} className="w-full aspect-square object-cover" />

//       <div className="p-3 text-left">
//         <p className="text-sm font-semibold text-gray-900">₹{price}</p>
//         <p className="text-sm text-gray-700 mt-1 line-clamp-2">{title}</p>
//       </div>

//       <button
//         onClick={() => onAddToCart(id)}
//         className="w-full bg-[#7A1E2D] text-white text-sm py-2"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// export default function ProductCard({
//   id,
//   image,
//   title,
//   price,
//   isWishlisted,
//   onAddToCart,
//   onToggleWishlist,
// }) {
//   return (
//     <div className="border rounded-lg overflow-hidden bg-white relative w-full h-auto shrink-0 md:w-auto">

//       {/* Wishlist - absolute top right */}
//       <WishlistButton
//         wishlisted={isWishlisted}
//         onToggle={(e) => {
//           e.stopPropagation(); // Click ko Link pe propagate hone se roke
//           onToggleWishlist(id);
//         }}
//       />

//       {/* Image + Title clickable - Link */}
//       <Link to={`/product/${id}`}>
//         <img
//           src={image}
//           alt={title}
//           className="w-full aspect-square object-cover"
//         />
//         <div className="p-3 text-left">
//           <p className="text-sm font-semibold text-gray-900">₹{price}</p>
//           <p className="text-sm text-gray-700 mt-1 line-clamp-2">{title}</p>
//         </div>
//       </Link>

//       {/* Add to Cart button */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation(); // Click ko Link pe propagate hone se roke
//           onAddToCart(id);
//         }}
//         className="w-full bg-[#7A1E2D] text-white text-sm py-2"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import WishlistButton from "../common/WishlistButton";

export default function ProductCard({
  id,
  image,
  title,
  price,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white relative flex flex-col h-full">

      {/* Wishlist */}
      <WishlistButton
        wishlisted={isWishlisted}
        onToggle={(e) => {
          e.stopPropagation();
          onToggleWishlist(id);
        }}
      />

      {/* Clickable content */}
      <Link to={`/product/${id}`} className="flex flex-col flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
        />

        {/* Details */}
        <div className="p-3 text-left grow">
          <p className="text-sm font-semibold text-gray-900">₹{price}</p>
          <p className="text-sm text-gray-700 mt-1 line-clamp-2">
            {title}
          </p>
        </div>
      </Link>

      {/* Button fixed at bottom */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(id);
        }}
        className="mt-auto w-full bg-[#7A1E2D] text-white text-sm py-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
