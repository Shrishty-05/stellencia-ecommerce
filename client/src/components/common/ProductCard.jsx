import { useEffect, useState, useContext } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx"; // auth context

export default function ProductCard({ _id, name, image, price, discountPrice }) {
  const { cartItems, addToCart } = useCart();
  const { user } = useContext(AuthContext);

  const [isInCart, setIsInCart] = useState(false);

  const product = {
    _id,
    name,
    image,
    price: discountPrice || price,
  };

  // Whenever cartItems or _id change, recalc whether this product is in cart
  useEffect(() => {
    const found = cartItems?.some(item => item.productId.toString() === _id);
    setIsInCart(found);
  }, [cartItems, _id]);

  const handleAdd = async () => {
    if (!user) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      await addToCart(product);
      console.log("Added to cart:", product._id);
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
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

          <p className="text-[maroon] font-semibold text-lg">
            ₹{discountPrice || price}
          </p>
        </div>
      </Link>

      {/* Add / Go to Cart */}
      {isInCart ? (
        <Link
          to="/cart"
          className="mt-auto mx-6 mb-6 border border-[maroon] text-[maroon] py-3 rounded-lg text-center hover:bg-[maroon] hover:text-white transition-all duration-300"
        >
          Go to Cart
        </Link>
      ) : (
        <button
          onClick={handleAdd}
          className="mt-auto mx-6 mb-6 bg-[maroon] text-white py-3 rounded-lg hover:bg-[#581623] transition-all duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}