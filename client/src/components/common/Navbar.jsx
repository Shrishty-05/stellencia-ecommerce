import { useState, useEffect, useContext } from "react";
import { Menu, X, ShoppingBag, Heart } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, clearCart } = useCart();
  const { user, logout: authLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: `Cart (${cartCount})`, path: "/cart"},
    { name: "About", path: "/about" }, 
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup"}
  ];

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear JWT
    authLogout();                      // clear AuthContext
    clearCart();                       // reset cart
    navigate("/");                // redirect
  };
  console.log(cartCount);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-center justify-between h-24 lg:h-28">

          {/* Logo */}
          <Link to="/" className="leading-none select-none">
            <span className="block text-[maroon] text-lg lg:text-xl tracking-[0.38em] uppercase">
              Stèllencia
            </span>
            <span className="block text-[10px] tracking-[0.55em] uppercase text-[maroon]/60 mt-2">
              Fine Jewellery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary Navigation">
            <ul className="flex items-center gap-16">
              {navLinks.map((link) => {
                // Auth aware logic
                if ((link.name === "Login" || link.name === "Signup") && user) return null;
                if ((link.name === "Profile") && !user) return null;

                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="relative group text-[maroon]/80 text-sm tracking-[0.28em] uppercase font-light transition-colors duration-300"
                    >
                      <span className="transition-colors duration-300 group-hover:text-[maroon]">
                        {link.name}
                      </span>
                      <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                );
              })}

              {/* Auth Logout Button */}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-[maroon]/80 text-sm tracking-[0.28em] uppercase font-light hover:text-red-600 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </li>
              )}

              
            </ul>
          </nav>
              
             
             
          {/* Right Section (Mobile menu toggle) */}
          <div className="flex items-center gap-8 lg:hidden">
            {/* Cart */}
              <div>
                 </div>
                <Link
                  to="/cart"
                  aria-label="Cart"
                  className="block relative text-[maroon]/80 hover:text-gray transition-colors duration-300"
                >
                  <ShoppingBag size={22} strokeWidth={1.4} />
                  {(
                    <span className="absolute -top-2 -right-2 bg-white/95 text-[maroon] text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-medium shadow-md">
                      {cartCount}
                    </span>
                  )}
                </Link>
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[maroon]/80 hover:text-[secondary] transition-colors duration-300"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[secondary]/40 to-transparent" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[secondary]/10">
          <nav className="max-w-7xl mx-auto px-8 py-12">
            <ul className="flex flex-col gap-8">
              {navLinks.map((link) => {
                if ((link.name === "Login" || link.name === "Signup") && user) return null;
                if ((link.name === "Profile") && !user) return null;

                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-[maroon]/80 text-sm tracking-[0.3em] uppercase font-light hover:text-[secondary] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              {user && (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block text-[maroon]/80 text-sm tracking-[0.3em] uppercase font-light hover:text-red-600 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}