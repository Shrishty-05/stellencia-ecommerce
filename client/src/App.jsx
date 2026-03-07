import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PLP from "./pages/PLP";
import PDP from "./pages/PDP";
import EmptyWishlist from "./pages/EmptyWishlist.jsx";
import Cart from "./pages/Cart.jsx";
import ScrollToTop from "./ScrollToTopLayout.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { WishlistProvider } from "./components/common/WishlistContext.jsx";
import ScrollToTopLayout from "./ScrollToTopLayout.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AdminPLP from "./admin/AdminPLP.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import EditProduct from "./admin/EditProduct.jsx";

const router = createBrowserRouter([
  {
    element: <ScrollToTopLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login/>},
      { path: "/plp/:type", element: <PLP /> },
      { path: "/plp", element: <PLP /> },
      { path: "/product/:id", element: <PDP /> },
      { path: "/wishlist", element: <EmptyWishlist /> },
      { path: "/cart", element: <Cart /> },
      { path: "/admin/products", element: <AdminPLP/>},
      { path: "/admin/products/add", element: <AddProduct/>},
      { path: "/admin/products/update/:id", element: <EditProduct/>}
    ],
  },
]);

export default function App() {
  return (<>

<AuthProvider>
  {/* <WishlistProvider> */}
      <CartProvider >
        <RouterProvider router={router} />
      </CartProvider>
    {/* </WishlistProvider> */}
</AuthProvider>
    


  </>

  );
}
