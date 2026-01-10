import { Heart, ShoppingCart, User , Menu } from "lucide-react";
import React from "react";

export default function Navbar() {

  return ( <>
    <nav className="w-full maroon text-white flex items-center justify-between p-2">
      <h1 className="p-1 text-lg font-serif" >STELLENCIA</h1>

        <button className="p-1 text-lg" ><Menu className="md:hidden"></Menu></button>

      <ul className="hidden md:flex justify-center items-center gap-2">
        <li><Heart /></li>
        <li><ShoppingCart /></li>
        <li><User /></li>
      </ul>
 </nav>
    <div className="search-bar w-6/7 bg-white border my-1 m-auto p-1 rounded-sm md:inline">
  <input
    type="search"
    placeholder="Search here..."
    className="w-full placeholder:text-gray-500 text-left outline-none"
  />
</div>

 </>
  );
}
