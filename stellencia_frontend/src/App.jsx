import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import EmptyWishlist from "./pages/EmptyWishlist.jsx";
import Cart from "./pages/Cart.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { CartProvider } from "./components/Cart-components/CartContext.jsx";
import { AuthProvider } from "./components/auth/AuthContext";

export default function App() {
  return (<>

  <AuthProvider>
     <CartProvider>
   <BrowserRouter>
  <ScrollToTop/>
    <Routes> 
       <Route path="/" element={<Home />} />
      <Route path="/plp/:type" element={<PLP/>}/>
      <Route path="/plp" element={<PLP/>}/>
      <Route path="/product/:id" element={<PDP/>}/>
      <Route path="/wishlist" element={<EmptyWishlist/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<AuthPage/>} />
    </Routes>
    </BrowserRouter>
 </CartProvider>
  </AuthProvider>

  </>
    
  );
}
