import { useState, useEffect } from "react";

const images = [
  "src/assets/SlideShowImg/slideImg1.png",
  "src/assets/SlideShowImg/slideImg2.png",
  "src/assets/SlideShowImg/slideImg3.png",
  "src/assets/SlideShowImg/slideImg4.png",
];

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const slideInterval = 3000;

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
      className="slides w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden relative"
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Jewellery promotion slide ${index + 1}`}
          sizes="100vw"
          className={`absolute top-1/2 left-1/2 
          h-full w-auto
          object-contain md:object-cover
          -translate-x-1/2 -translate-y-1/2
          transition-opacity duration-1000
          ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </section>
  );
}
