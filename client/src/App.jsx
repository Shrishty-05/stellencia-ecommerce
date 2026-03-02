import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import EmptyWishlist from "./pages/EmptyWishlist.jsx";
import Cart from "./pages/Cart.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { CartProvider } from "./components/Cart-components/CartContext.jsx";
import { WishlistProvider } from "./components/common/WishlistContext.jsx";

export default function App() {
  return (<>

 
    <WishlistProvider>
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
    </Routes>
    </BrowserRouter>
 
 </CartProvider> 
   </WishlistProvider>


  </>
    
  );
}
