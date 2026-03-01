
import { CATEGORIES } from "../../config/categories.config";
import CategoryCard from "/src/components/Home-sections/CategoryCard.jsx";
import { Link } from "react-router-dom";


export default function Categories() {
  return (
    <section
      id="category"
      className="w-full bg-white py-20"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Label */}
        <p className="text-[maroon]/70 text-xs tracking-[0.4em] uppercase text-center">
          Discover
        </p>

        {/* Main Heading */}
        <h1 className="mt-4 text-3xl md:text-5xl font-light text-center text-[maroon] tracking-tight">
          Shop by Category
        </h1>

        {/* Subtle Divider */}
        <div className="mt-6 mb-16 h-[1px] w-20 mx-auto bg-[maroon]/30" />

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14">
  {CATEGORIES.map((category) => (
    <Link 
      key={category.id}
      to={`/plp/${category.id}`}
      className="group"
    >
      <CategoryCard
        label={category.label}
        icon={category.icon}
      />
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}