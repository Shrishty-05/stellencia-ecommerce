import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import EmptyWishlist from "./pages/EmptyWishlist.jsx";
import Cart from "./pages/Cart.jsx";
import ScrollToTop from "./ScrollToTopLayout.jsx";
import { CartProvider } from "./components/Cart-components/CartContext.jsx";
import { WishlistProvider } from "./components/common/WishlistContext.jsx";
import ScrollToTopLayout from "./ScrollToTopLayout.jsx";
import Signup from "./pages/Signup.jsx";


const router = createBrowserRouter([
  {
    element : <ScrollToTopLayout />,
    children: [
       {path:"/", element : <Home/>},
       {path:"/signup", element: <Signup/>},
  {path:"/plp/:type", element:<PLP />},
  {path:"/plp" ,element:<PLP />},
  {path:"/product/:id" ,element:<PDP />},
  {path:"/wishlist", element:<EmptyWishlist />},
  {path:"/cart" ,element:<Cart />}
    ],
  },
]);

export default function App() {
  return (<>
    <WishlistProvider>
      <CartProvider>
          <RouterProvider router={router}/>
      </CartProvider>
    </WishlistProvider>


  </>

  );
}
