// // import Navbar from "../components/common/Navbar";
// // import ProductCard from "../components/PLP-components/ProductCard";
// // import EmptyWishlist from "./EmptyWishlist";
// // import { useWishlist } from "../components/WishlistContext"; // assume context exists

// // export default function Wishlist() {
// //   const { wishlistItems, toggleWishlist } = useWishlist();

// //   return (
// //     <>
// //       {wishlistItems.length === 0 ? (
// //         <EmptyWishlist />
// //       ) : (
// //         <>
// //           <Navbar />

// //           <section className="bg-white min-h-screen pt-28 pb-20 px-6 lg:px-16">
// //             {/* Header */}
// //             <div className="max-w-7xl mx-auto text-center mb-12">
// //               <h1 className="text-4xl md:text-5xl font-light text-[maroon] tracking-tight">
// //                 Your Wishlist
// //               </h1>
// //               <div className="mt-4 h-[1px] w-24 mx-auto 
// //                               bg-gradient-to-r from-transparent via-[#C6A75E]/60 to-transparent" />
// //             </div>

// //             {/* Grid of Wishlist Items */}
// //             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //               {wishlistItems.map((item) => (
// //                 <ProductCard
// //                   key={item.id}
// //                   id={item.id}
// //                   image={item.image}
// //                   title={item.title}
// //                   price={item.price}
// //                   isWishlisted={true}
// //                   product={item}
// //                   onToggleWishlist={toggleWishlist}
// //                 />
// //               ))}
// //             </div>
// //           </section>
// //         </>
// //       )}
// //     </>
// //   );
// // }

// import { useWishlist } from "../components/WishlistContext.jsx";
// import ProductCard from "../components/common/ProductCard.jsx";
// import EmptyWishlist from "./EmptyWishlist.jsx";

// export default function Wishlist() {
//   const { wishlistItems } = useWishlist();

//   return (
//     <>
//       {wishlistItems.length === 0 ? (
//         <EmptyWishlist />
//       ) : (
//         <div className="min-h-screen bg-[#faf7f4] pt-28 px-6 lg:px-16">
//           <h1 className="text-4xl font-light text-[#1A1A1A] text-center mb-12">
//             Your Wishlist
//           </h1>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//            {wishlistItems.map((product) => (
//   <ProductCard
//     key={product.id}
//     id={product.id}
//     image={product.image}
//     title={product.title}
//     price={product.price}
//     product={product}
//     onToggleWishlist={() => toggleWishlist(product)}
//   />
// ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import { useWishlist } from "../components/WishlistContext.jsx";
import ProductCard from "../components/common/ProductCard.jsx";
import EmptyWishlist from "./EmptyWishlist.jsx";

export default function Wishlist() {
  const { wishlistItems, toggleWishlist } = useWishlist();

  return (
    <>
      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="min-h-screen bg-[#faf7f4] pt-28 px-6 lg:px-16">
          <h1 className="text-4xl font-light text-[#1A1A1A] text-center mb-12">
            Your Wishlist
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                product={product}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}