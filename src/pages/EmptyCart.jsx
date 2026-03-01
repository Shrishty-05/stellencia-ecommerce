import { ShoppingBag } from "lucide-react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <Navbar />

      <div className="my-20 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-white">
        
        {/* Icon */}
        <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-[#F9F4F2] shadow-md mb-6">
          <ShoppingBag size={40} className="text-[#6E1C2F]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] mb-3 tracking-tight">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-lg md:max-w-md mb-6 leading-relaxed">
          Looks like you haven’t added any items yet. Explore our handcrafted 
          jewellery and discover pieces you’ll love.
        </p>

        {/* CTA Button */}
        <Link to="/plp"
          className="mt-2 px-8 py-3 bg-[#6E1C2F] text-white rounded-lg 
                     text-base font-medium hover:bg-[#5a1626] transition-all shadow-sm"
        >
          Explore Collection
        </Link>

        {/* Optional subtle gold accent divider */}
        <div className="mt-10 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />

        {/* Trust Badges */}
        <div className="flex gap-8 mt-6 text-sm text-gray-500">
          <span>✔ Free Shipping</span>
          <span>✔ Easy Returns</span>
          <span>✔ Secure Checkout</span>
        </div>
      </div>
    </>
  );
}