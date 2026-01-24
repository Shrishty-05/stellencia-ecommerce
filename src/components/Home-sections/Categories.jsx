import { CATEGORIES } from "/src/config/categories.config.js";
import CategoryCard from "/src/components/Home-sections/CategoryCard.jsx";

export default function Categories() {
  return (
    <section
  id="category"
  className="w-full py-12 bg-gradient-to- from-[maroon]/10 via-white to-[maroon]/10"
>
      <h1 className="text-2xl md:text-4xl font-semibold tracking-wide text-center mb-7">
        Shop by Category
      </h1>

      <div className="flex gap-6 px-5 py-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 md:px-10">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            label={category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
}
