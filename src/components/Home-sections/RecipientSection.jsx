import { Link } from "react-router-dom";

const RECIPIENTS = [
  {
    id: "women",
    label: "For Her",
    image: "/src/assets/her.png",
  },
  {
    id: "men",
    label: "For Him",
    image: "/src/assets/him.png",
  },
];

export default function RecipientSection() {
  return (
    <section
      className="w-full py-5 md:py-12 bg-white"
      aria-labelledby="recipient-heading"
    >
      {/* Title */}
      <header className="text-center mb-8 md:mb-10">
        <h2
          id="recipient-heading"
          className="text-2xl md:text-4xl font-semibold tracking-wide"
        >
          Designed for Every Recipient
        </h2>
      </header>

      {/* Cards */}
      
      <div className="flex justify-center gap-10 md:gap-20">
        {RECIPIENTS.map(({ id, label, image }) => (
          <Link key={id} to={`/plp/${id}`} >
          <div
            key={id}
            className="group flex flex-col items-center cursor-pointer"
          >
            {/* Image wrapper */}
            <div className="relative w-56 h-64 transition-all duration-300 group-hover:-translate-y-2">
              <img
                src={image}
                alt={label}
                loading="lazy"
                className="
                  w-full h-full object-contain
                  drop-shadow-[0_18px_25px_rgba(0,0,0,0.25)]
                "
              />
            </div>

            {/* Label */}
            <p className="mt-3 text-lg md:text-2xl font-medium tracking-wide text-gray-800 group-hover:text-[maroon] transition-colors duration-300">
              {label}
            </p>
          </div>
          </Link>
        ))}
      </div>
      
    
    </section>
  );
}


