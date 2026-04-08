
export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden font-sans">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="public/assets/hero-vd-tb.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24">
        
        <div className="max-w-2xl mb-20 md:mb-28">

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1]">
            Crafted for Moments
            <span className="block mt-1 font-medium">
              That Matter
            </span>
          </h1>

          <p className="mt-4 text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            Hand-finished jewellery designed to celebrate elegance,
            emotion, and everyday luxury.
          </p>

          <div className="mt-6">
            <button className="px-10 py-3 border border-white/40 text-white font-semibold text-sm tracking-[0.25em] uppercase rounded-full transition-all duration-500 hover:border-white hover:text-[maroon] hover:bg-white">
              Explore the Collection
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}