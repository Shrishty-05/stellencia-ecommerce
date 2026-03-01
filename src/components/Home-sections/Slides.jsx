// import { useState, useEffect } from "react";

// const images = [
//   "src/assets/SlideShowImg/slideImg1.png",
//   "src/assets/SlideShowImg/slideImg2.png",
//   "src/assets/SlideShowImg/slideImg3.png",
//   "src/assets/SlideShowImg/slideImg4.png",
// ];

// export default function Slides() {
//   const [current, setCurrent] = useState(0);
//   const slideInterval = 3000;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, slideInterval);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       aria-roledescription="carousel"
//       aria-label="Jewellery promotional slideshow"
//       className="slides w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden relative"
//     >
//       {images.map((img, index) => (
//         <img
//           key={index}
//           src={img}
//           alt={`Jewellery promotion slide ${index + 1}`}
//           sizes="100vw"
//           className={`absolute top-1/2 left-1/2 
//           h-full w-full
//           object-contain md:object-cover
//           -translate-x-1/2 -translate-y-1/2
//           transition-opacity duration-1000
//           ${index === current ? "opacity-100" : "opacity-0"}`}
//         />
//       ))}
//     </section>
//   );
// }


import { useState, useEffect } from "react";

const images = [
  "src/assets/SlideShowImg/slideImg1.png",
  "src/assets/SlideShowImg/slideImg2.png",
  "src/assets/SlideShowImg/slideImg3.png",
  "src/assets/SlideShowImg/slideImg4.png",
];

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const slideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Jewellery promotional slideshow"
      className="w-full bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Section Label */}
        <p className="text-center text-[maroon]/70 text-xs tracking-[0.4em] uppercase">
          Highlights
        </p>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-light text-center text-[maroon] tracking-tight">
          Timeless Craftsmanship
        </h2>

        {/* Divider */}
        <div className="mt-6 h-[1px] w-24 mx-auto bg-[maroon]/30" />

        {/* Slideshow Container */}
        <div className="relative mt-16 h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-sm">

          {/* Slides */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Jewellery promotion slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

          {/* Minimal Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[2px] transition-all duration-300 ${
                  index === current
                    ? "w-10 bg-white"
                    : "w-6 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}