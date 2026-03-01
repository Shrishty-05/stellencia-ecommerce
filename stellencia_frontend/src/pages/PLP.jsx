import Layout from "../components/common/Layout"
import SearchBar from "../components/common/SearchBar"
import ProductCard from "../components/common/ProductCard"
import Divider from "../components/common/Divider";

import { useParams , useSearchParams } from "react-router-dom";
import products from "../data/products.json";
import { useState } from "react";


export default function PLP() {
    const [wishlist, setWishlist] = useState([]);
    const handleToggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id)
                ? prev.filter((pid) => pid !== id)
                : [...prev, id]
        );
    };

    const handleAddToCart = (id) => {
  console.log("Add to cart:", id);
};

    const { type } = useParams();
    let filteredProducts = products;

if (type === "men" || type === "women") {
  filteredProducts = products.filter(
    (item) => item.gender === type
  );
}
else if (
  ["casual", "party", "date", "work", "ethnic"].includes(type)
) {
  filteredProducts = products.filter(
    (item) => item.occasion?.includes(type)
  );
}
else if (type !== "all") {
  filteredProducts = products.filter(
    (item) => item.category === type
  );
}
else {
  filteredProducts = products;
}

    // console.log(filteredProducts);

    return (
        <div className="plp-content w-full">
            <Layout>

                {/* ------ PRODUCT CONTROLS ---------- */}
                <section className="w-full bg-white pb-1">
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:items-center">

                        {/* SEARCH BAR */}
                        <div className="col-span-2 md:col-span-2 md:order-2">
                            <SearchBar />
                        </div>

                        {/* SORT */}
                        <div className="flex items-center gap-2 md:order-1 px-3">
                            <span className="text-sm text-gray-600 whitespace-nowrap">
                                Sort by :
                            </span>
                            <select
                                defaultValue="recommended"
                                className="border rounded-md px-1 py-2 text-sm bg-white outline-none focus:ring-1 focus:ring-black w-full md:w-auto"
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>

                        {/* FILTER */}
                        <div className="px-3 flex items-center gap-2 justify-end md:order-3">
                            <span className="text-sm text-gray-600 whitespace-nowrap">
                                Filters :
                            </span>
                            <select
                                defaultValue="all"
                                className="border rounded-md px-3 py-2 text-sm bg-white outline-none focus:ring-1 focus:ring-black w-full md:w-auto"
                            >
                                <option value="all">All</option>
                                <option value="in-stock">In Stock</option>
                                <option value="rating">4★ & above</option>
                            </select>
                        </div>

                    </div>
                </section>

                <Divider />

                {/* -------- PRODUCT GRID ---------- */}
                <section className="w-full px-3 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredProducts.map((product) => (
                            <ProductCard
                            product={product}
                                key={product.id}
                                id={product.id}
                                image={product.images[0]}
                                title={product.title}
                                price={product.price}
                                isWishlisted={wishlist.includes(product.id)}
                                onToggleWishlist={handleToggleWishlist}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </section>

            </Layout>
        </div>
    )
}
