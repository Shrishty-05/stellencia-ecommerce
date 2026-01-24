export default function CategoryCard({ label, icon }) {
  return (
    <div className="snap-start shrink-0 w-36 md:w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center py-6">
      
      <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mb-4">
        <img
          src={icon}
          alt={label}
          loading="lazy"
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </div>

      <h2 className="text-center text-sm md:text-base font-medium text-gray-700">
        {label}
      </h2>
    </div>
  );
}
