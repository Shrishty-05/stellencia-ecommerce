import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import date from "/assets/occasion-icons/date.jpeg"
import workwear from "/assets/occasion-icons/workwear.jpeg";
import ethnic from "/assets/occasion-icons/ethnic.jpeg";
import party from "/assets/occasion-icons/party.jpeg";

const occasions = [
  {
    title: "Everyday",
    subtitle: "Understated elegance for daily refinement.",
    image: date,
    slug: "casual",
  },
  {
    title: "Work",
    subtitle: "Effortless sparkle for relaxed sophistication.",
    image: workwear,
    slug: "work",
  },
  {
    title: "Festive",
    subtitle: "Radiance designed for grand celebrations.",
    image: ethnic,
    slug: "ethnic",
  },
  {
    title: "Party",
    subtitle: "Statement pieces that command attention.",
    image: party,
    slug: "party",
  },
];

export default function OccasionSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <p className="text-center text-[maroon]/60 text-xs tracking-[0.5em] uppercase">
          Shop by Occasion
        </p>

        <h2 className="mt-6 text-3xl md:text-5xl font-light text-center text-[maroon] tracking-tight">
          Curated for Every Moment
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-14">

          {occasions.map((item, i) => (
            <Link
              key={item.slug}
              to={`/plp/${item.slug}`}
              className={`group relative rounded-xl overflow-hidden 
              shadow-[0_15px_40px_rgba(0,0,0,0.06)] 
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] 
              transition-all duration-500 
              ${i % 2 !== 0 ? "sm:mt-16" : ""}`}
            >
              {/* Image */}
              <div className="h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[maroon]/70 via-[maroon]/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-white/90 max-w-xs leading-relaxed">
                  {item.subtitle}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#C6A75E] group-hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}