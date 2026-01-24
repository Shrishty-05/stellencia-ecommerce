import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
    //   onClick={() => navigate("src/pages/PLP")}
      className="relative w-full h-[80vh] cursor-pointer overflow-hidden bg-black"
    >
      {/* Background Video */}
      {/* Tablet & Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-fill "
      >
        <source src="src/assets/hero-vd-tb.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

     {/* Content */}
<div className="relative z-10 h-full flex flex-col justify-end items-center text-center sm:pb-7 px-4">

  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug">
    Crafted for Moments That Matter
  </h1>

  <p className="text-white/90 text-sm sm:text-base md:text-lg mt-4 max-w-xl leading-relaxed">
    Hand-finished jewellery designed to celebrate elegance, emotion, and everyday luxury.
  </p>

  <button
    // onClick={(e) => {
    //   e.stopPropagation();
    //   navigate("src/pages/PLP.jsx");
    // }}
    className="mt-6 px-8 py-3 bg-[maroon] text-white rounded-full text-sm sm:text-base tracking-wide uppercase hover:opacity-90 transition transform hover:scale-[1.02]"
  >
    Explore the Collection
  </button>

</div>

    
    </section>
  );
}
