import {
  ShieldCheck,
  RotateCcw,
  Handshake,
  Gem,
  Receipt
} from "lucide-react";

const promises = [
  { title: "Ethically Crafted", icon: ShieldCheck },
  { title: "30-Day Easy Returns", icon: RotateCcw },
  { title: "Customer-First Approach", icon: Handshake },
  { title: "Authentic Jewellery", icon: Gem },
  { title: "Transparent Pricing", icon: Receipt },
];

export default function PromiseSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Label */}
        <p className="text-center text-[maroon]/60 text-xs tracking-[0.5em] uppercase">
          Our Commitment
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-light text-center text-[maroon]">
          Stellencia’s Promise
        </h2>

        {/* Space */}
        <div className="mt-20 relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[maroon]/20" />

          <div className="flex flex-col gap-20">

            {promises.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`flex items-center gap-6 max-w-md ${
                      isLeft
                        ? "md:text-right md:pr-16"
                        : "md:text-left md:pl-16"
                    }`}
                  >
                    {isLeft && (
                      <>
                        <Content item={item} align="right" />
                        <IconNode Icon={item.icon} />
                      </>
                    )}

                    {!isLeft && (
                      <>
                        <IconNode Icon={item.icon} />
                        <Content item={item} align="left" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconNode({ Icon }) {
  return (
    <div className="relative z-10 w-16 h-16 rounded-full border border-[maroon] flex items-center justify-center bg-white shadow-sm">
      <Icon className="w-6 h-6 text-[maroon]" strokeWidth={1.4} />
    </div>
  );
}

function Content({ item, align }) {
  return (
    <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
      <p className="text-[maroon] text-lg font-light tracking-wide">
        {item.title}
      </p>
      <div className="mt-3 w-10 h-[1px] bg-[maroon]/30" />
    </div>
  );
}