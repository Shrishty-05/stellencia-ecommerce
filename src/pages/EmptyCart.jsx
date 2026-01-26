import { ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function EmptyCart() {
  return (
    <>

    <Navbar/>

    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
        <ShoppingBag size={36} className="text-[maroon]" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Your cart is empty
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-md">
        Looks like you haven’t added anything yet. Discover our handcrafted
        jewellery and find something you love.
      </p>

      {/* CTA */}
      {/* <Link
        to="/"
        className="mt-6 bg-[#7A1E2D] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#651823] transition"
      >
        Explore Collection
      </Link> */}

      {/* Secondary action
      <Link
        to="/wishlist"
        className="mt-3 text-sm text-gray-500 hover:text-gray-700"
      >
        View Wishlist
      </Link> */}

      {/* Trust badges
      <div className="flex gap-6 mt-10 text-sm text-gray-500">
        <span>✔ Free Shipping</span>
        <span>✔ Easy Returns</span>
        <span>✔ Secure Checkout</span>
      </div> */}
    </div>
    </>
  );
}
