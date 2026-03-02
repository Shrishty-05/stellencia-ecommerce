// import { Heart } from "lucide-react";
// import Navbar from "../components/common/Navbar";
// // import { Link } from "react-router-dom";

// export default function EmptyWishlist() {
//   return (
//     <>
//     <Navbar/>
//     <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      
//       {/* Icon / Illustration placeholder */}
//       <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
//         <Heart size={36} className="text-[maroon]" />
//       </div>

//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
//         Your wishlist is empty
//       </h2>

//       {/* Description */}
//       <p className="text-gray-600 mt-3 max-w-md">
//         Save your favourite pieces here so you can find them easily later.
//       </p>

//       {/* Primary CTA
//       <Link
//         to="/"
//         className="mt-6 bg-[#7A1E2D] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#651823] transition"
//       >
//         Browse Jewellery
//       </Link> */}

//       {/* Secondary CTA 
//       <Link
//         to="/cart"
//         className="mt-3 text-sm text-gray-500 hover:text-gray-700"
//       >
//         Go to Cart
//       </Link> */}

//       {/* Trust / Motivation text */}
//       <p className="mt-8 text-sm text-gray-500">
//         Handcrafted • Timeless • Made to shine
//       </p>
//     </div>
//     </>
//   );
// }


import Navbar from "../components/common/Navbar";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        
        {/* Icon */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
          <Heart size={36} className="text-[maroon]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Your wishlist is empty
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 max-w-md">
          Looks like you haven’t added anything yet. Explore our handcrafted jewellery and add your favourites.
        </p>

        {/* CTA */}
        <Link
          to="/plp"
          className="mt-6 bg-[maroon] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#5a1626] transition"
        >
          Explore Collection
        </Link>
      </div>
    </>
  );
}