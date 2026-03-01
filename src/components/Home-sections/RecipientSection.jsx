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
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">

        <p className="text-center text-[maroon]/70 text-xs tracking-[0.4em] uppercase">
          Curated
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-light text-center text-[maroon] tracking-tight">
          Designed for Every Recipient
        </h2>

        <div className="mt-6 h-[1px] w-24 mx-auto bg-[maroon]/30" />

        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-20 md:gap-32">

          {RECIPIENTS.map(({ id, label, image }) => (
            <Link
              key={id}
              to={`/plp/${id}`}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-64 h-72 transition-all duration-500 group-hover:-translate-y-3">
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="w-full h-full object-contain 
                             drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] 
                             transition-all duration-500 
                             group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)]"
                />
              </div>

              <p className="mt-6 text-xl md:text-2xl font-light tracking-wide text-[maroon] 
                            transition-colors duration-300 group-hover:text-[maroon]/80">
                {label}
              </p>

              <div className="mt-3 h-[1px] w-0 bg-[maroon] 
                              transition-all duration-500 group-hover:w-16" />
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}