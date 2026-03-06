// import Layout from "../components/common/Layout";
// import ProductCard from "../components/common/ProductCard";
// // import products from "../data/products.json";
// import { useParams } from "react-router-dom";
// import { useCart } from "../components/Cart-components/CartContext";
// import { useState } from "react";


// export default function PDP() {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [added, setAdded] = useState(false);

//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
//         Product not found.
//       </div>
//     );
//   }

//   const similarProducts = products
//     .filter(
//       (p) =>
//         p.category === product.category &&
//         p.id !== product.id
//     )
//     .slice(0, 4);

//   const handleAddToCart = () => {
//     addToCart(product);
//     setAdded(true);
//   };

//   return (
//     <Layout>
//       {/* ================= PRODUCT SECTION ================= */}
//       <section className="bg-white pt-28 pb-24 px-6 lg:px-20">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

//           {/* ---------- IMAGE ---------- */}
//           <div className="rounded-2xl overflow-hidden 
//                           shadow-[0_25px_60px_rgba(0,0,0,0.06)]">
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               className="w-full aspect-square object-cover"
//             />
//           </div>

//           {/* ---------- DETAILS ---------- */}
//           <div className="flex flex-col gap-8">

//             {/* Category */}
//             <p className="text-xs tracking-[0.4em] uppercase text-[#C6A75E]">
//               {product.category}
//             </p>

//             {/* Title */}
//             <h1 className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-snug">
//               {product.title}
//             </h1>

//             {/* Rating */}
//             <div className="flex items-center gap-2 text-[#C6A75E]">
//               {"★".repeat(Math.floor(product.rating))}
//               <span className="text-gray-300">
//                 {"★".repeat(5 - Math.floor(product.rating))}
//               </span>
//               <span className="text-gray-400 text-sm">
//                 ({product.rating})
//               </span>
//             </div>

//             {/* Price */}
//             <p className="text-3xl font-semibold text-[#6E1C2F]">
//               ₹{product.price}
//             </p>

//             {/* Gold Divider */}
//             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A75E]/50 to-transparent" />

//             {/* Description (Placeholder) */}
//             <p className="text-gray-600 leading-relaxed max-w-md">
//               Crafted with precision and elegance, this piece reflects
//               timeless beauty and refined craftsmanship — designed to
//               elevate your everyday style.
//             </p>

//             {/* Material */}
//             <div>
//               <p className="text-sm uppercase tracking-wide text-gray-400">
//                 Material
//               </p>
//               <p className="text-[#1A1A1A] font-medium">
//                 {product.material}
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4 pt-4">

//               {added ? (
//                 <a
//                   href="/cart"
//                   className="flex-1 border border-[#6E1C2F] 
//                              text-[#6E1C2F] py-4 text-center 
//                              rounded-lg tracking-wide
//                              hover:bg-[#6E1C2F] hover:text-white
//                              transition-all duration-300"
//                 >
//                   View Cart
//                 </a>
//               ) : (
//                 <button
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-[#6E1C2F] text-white 
//                              py-4 rounded-lg tracking-wide
//                              hover:bg-[#581623]
//                              transition-all duration-300"
//                 >
//                   Add to Cart
//                 </button>
//               )}

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= SIMILAR PRODUCTS ================= */}
//       <section className="bg-[#faf7f4] py-24 px-6 lg:px-20">
//         <div className="max-w-7xl mx-auto">

//           {/* Header */}
//           <div className="text-center mb-16">
//             <p className="text-xs tracking-[0.4em] uppercase text-[#C6A75E]">
//               You May Also Like
//             </p>

//             <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A1A1A]">
//               Similar Pieces
//             </h2>

//             <div className="mt-6 h-[1px] w-20 mx-auto bg-gradient-to-r from-transparent via-[#C6A75E]/60 to-transparent" />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//             {similarProducts.map((p) => (
//               <ProductCard
//                 key={p.id}
//                 product={p}
//                 id={p.id}
//                 image={p.images[0]}
//                 title={p.title}
//                 price={p.price}
//                 isWishlisted={false}
//                 onToggleWishlist={() => {}}
//               />
//             ))}
//           </div>

//         </div>
//       </section>

//     </Layout>
//   );
// }


import Layout from "../components/common/Layout";
import ProductCard from "../components/common/ProductCard";
import { useParams } from "react-router-dom";
import { useCart } from "../components/Cart-components/CartContext";
import { useState, useEffect } from "react";
import api from "../api/axios.js";

export default function PDP() {

  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [added, setAdded] = useState(false);

  /* ---------------- FETCH PRODUCT ---------------- */

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const { data } = await api.get(`/products/${id}`);
        setProduct(data);

        const similar = await api.get(`/products?category=${data.category}`);
        setSimilarProducts(
          similar.data.filter((p) => p._id !== data._id).slice(0, 4)
        );

      } catch (error) {
        console.log(error);
      }

    };

    fetchProduct();

  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  /* ---------------- ADD TO CART ---------------- */

  const handleAddToCart = () => {

    addToCart({
      productId: product._id,
      title: product.name,
      price: product.price,
      image: product.image
    });

    setAdded(true);
  };

  return (
    <Layout>

      {/* ================= PRODUCT SECTION ================= */}

      <section className="bg-white pt-28 pb-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}

          <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.06)]">

            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />

          </div>

          {/* DETAILS */}

          <div className="flex flex-col gap-8">

            <p className="text-xs tracking-[0.4em] uppercase text-[#C6A75E]">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-light text-[#1A1A1A] leading-snug">
              {product.name}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 text-[#C6A75E]">

              {"★".repeat(Math.floor(product.rating))}

              <span className="text-gray-300">
                {"★".repeat(5 - Math.floor(product.rating))}
              </span>

              <span className="text-gray-400 text-sm">
                ({product.rating})
              </span>

            </div>

            {/* Price */}

            <p className="text-3xl font-semibold text-[#6E1C2F]">
              ₹{product.discountPrice > 0 ? product.discountPrice : product.price}
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A75E]/50 to-transparent" />

            {/* Description */}

            <p className="text-gray-600 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Brand */}

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                Brand
              </p>

              <p className="text-[#1A1A1A] font-medium">
                {product.brand}
              </p>

            </div>

            {/* Stock */}

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                Availability
              </p>

              <p className="text-[#1A1A1A] font-medium">
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </p>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 pt-4">

              {added ? (
                <a
                  href="/cart"
                  className="flex-1 border border-[#6E1C2F] text-[#6E1C2F] py-4 text-center rounded-lg tracking-wide hover:bg-[#6E1C2F] hover:text-white transition-all duration-300"
                >
                  View Cart
                </a>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#6E1C2F] text-white py-4 rounded-lg tracking-wide hover:bg-[#581623] transition-all duration-300"
                >
                  Add to Cart
                </button>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* ================= SIMILAR PRODUCTS ================= */}

      <section className="bg-[#faf7f4] py-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-xs tracking-[0.4em] uppercase text-[#C6A75E]">
              You May Also Like
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-light text-[#1A1A1A]">
              Similar Pieces
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

            {similarProducts.map((p) => (

              <ProductCard
                key={p._id}
                _id={p._id}
                image={p.image}
                title={p.name}
                price={p.price}
              />

            ))}

          </div>

        </div>

      </section>

    </Layout>
  );
}