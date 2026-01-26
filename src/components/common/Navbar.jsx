// import { Heart, ShoppingCart, User , Menu , HomeIcon} from "lucide-react";


// export default function Navbar() {

//   return ( <section className="">
//     <nav className="w-full md:h-[40%] maroon text-white flex items-center justify-between p-2 sticky">
//       <h1 className="p-1 md:px-5 text-lg font-serif md:text-xl md:tracking-widest" >STELLENCIA</h1>

//         <button className="p-1 text-lg" ><Menu className="md:hidden"></Menu></button>

//       <ul className="hidden px-7 lg:px-10 md:flex justify-center items-center gap-5 lg:gap-10">
//          <li><HomeIcon/></li>
//         <li><Heart /></li>
//         <li><ShoppingCart /></li>
//         <li><User /></li>
//       </ul>
//  </nav>
   

//  </section>
//   );
// }

import { Link } from "react-router-dom";
import { useState } from "react";
import { Heart, ShoppingCart, User, Menu, HomeIcon, X } from "lucide-react";

export default function Navbar() {
  // Temporary auth state (replace with real auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // logout logic here
      setIsLoggedIn(false);
    } else {
      // login logic here
      setIsLoggedIn(true);
    }
    setIsSidebarOpen(false); // close sidebar after action
  };

  return (
    <header className="relative">
      {/* Navbar */}
      <nav className="w-full maroon text-white flex items-center justify-between p-4 sticky top-0 z-50">
        <h1 className="text-lg md:text-xl font-serif md:tracking-widest">STELLENCIA</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8">
          <Link to="/"><li className="flex items-center gap-1"><HomeIcon /> Home</li></Link>
          
          <li className="flex items-center gap-1"><Heart /> Wishlist</li>
          <li className="flex items-center gap-1"><ShoppingCart /> Cart</li>
          <li className="flex items-center gap-1"><User /> Profile</li>
          <li>
            <button
              onClick={handleLoginLogout}
              className="bg-white text-[maroon] px-3 py-1 rounded font-semibold"
            >
              {isLoggedIn ? "Logout" : "Login / Signup"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu button */}
        {!isSidebarOpen && (
          <button
            className="md:hidden text-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu />
          </button>
        )}
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-[maroon] flex flex-col p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="self-end mb-6"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X />
        </button>

        {/* Sidebar items */}
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <HomeIcon /> Home
          </li>
          <li className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <Heart /> Wishlist
          </li>
          <li className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <ShoppingCart /> Cart
          </li>
          <li className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <User /> Profile
          </li>
          <li>
            <button
              onClick={handleLoginLogout}
              className="bg-[maroon] text-white px-3 py-1 rounded font-semibold w-full"
            >
              {isLoggedIn ? "Logout" : "Login / Signup"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
