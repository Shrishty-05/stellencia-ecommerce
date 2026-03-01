// import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";

export default function Error404() {
  return (<>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
      
      {/* Big 404 */}
      <h1 className="text-[80px] md:text-[120px] font-bold text-[maroon] leading-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
        Page not found
      </h2>

      <p className="text-gray-600 mt-3 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      {/* Actions
      <div className="flex gap-4 mt-6">
        <Link
          to="/"
          className="bg-[#7A1E2D] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#651823] transition"
        >
          Go to Home
        </Link>

        <Link
          to="/wishlist"
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-100 transition"
        >
          Wishlist
        </Link>
      </div> */}

      {/* Subtle footer text */}
      <p className="mt-10 text-sm text-gray-400">
        Handcrafted jewellery, made with care
      </p>
    </div>
    </>
  );
}
