import Layout from "../components/common/Layout";
import ProductCard from "../components/common/ProductCard";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useState, useMemo } from "react";

export default function PLP() {
  const { type } = useParams();
  const [sortOption, setSortOption] = useState("recommended");

  /* ---------------- FILTER LOGIC ---------------- */

  const filteredProducts = useMemo(() => {
    let result = products;

    if (!type || type === "all") return products;

    // Gender filter
    if (type === "men" || type === "women") {
      result = products.filter((item) => item.gender === type);
    }

    // Occasion filter
    else if (
      ["casual", "party", "date", "work", "ethnic"].includes(type)
    ) {
      result = products.filter((item) =>
        item.occasion?.includes(type)
      );
    }

    // Category filter
    else {
      result = products.filter((item) => item.category === type);
    }

    return result;
  }, [type]);

  /* ---------------- SORT LOGIC ---------------- */

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    switch (sortOption) {
      case "price-low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "price-high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        sorted.reverse();
        break;

      default:
        break;
    }

    return sorted;
  }, [filteredProducts, sortOption]);

  return (
    <div className="mt-5 w-full bg-white">
      <Layout>

        {/* -------- PAGE HEADER -------- */}
        <section className="text-center pt-20 pb-12 px-6">
          <p className="text-xs tracking-[0.35em] uppercase text-[#C6A75E]">
            Refined Collection
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-[#1A1A1A] capitalize">
            {type ? type.replace("-", " ") : "All Products"}
          </h1>

          <div className="mt-6 h-[1px] w-24 mx-auto 
                          bg-gradient-to-r 
                          from-transparent via-[#C6A75E]/60 to-transparent" />
        </section>

        {/* -------- PRODUCT CONTROLS -------- */}
        <section className="w-full px-6 lg:px-16 pb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* SORT */}
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-wide uppercase text-gray-500">
                Sort
              </span>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white 
                           outline-none focus:ring-1 focus:ring-[#6E1C2F]/40 
                           transition-all duration-300 
                           hover:border-[#6E1C2F]/40"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <p className="text-sm text-gray-500">
              {sortedProducts.length} Products
            </p>

          </div>
        </section>

        {/* -------- PRODUCT GRID -------- */}
        <section className="w-full px-6 lg:px-16 py-5 bg-gradient-to-b from-white to-[#faf7f4]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
              />
            ))}

          </div>
        </section>

      </Layout>
    </div>
  );
}