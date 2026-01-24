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
        <section className="w-full py-11 bg-white px-6 md:px-10">
            {/* Title */}
            <h2 className="md:hidden text-center text-2xl md:text-3xl font-serif text-[maroon] mb-12">
                Stellencia’s promise to you
            </h2>

            {/* ===== MOBILE (vertical list) ===== */}
            <div className="flex flex-col gap-8 items-center md:hidden">
                {promises.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                        <IconCircle Icon={item.icon} />
                        <p className="text-[maroon] text-sm font-medium text-center">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* ===== TABLET & ABOVE (circular layout) ===== */}
            <div className="relative hidden md:flex items-center justify-center h-[420px]">
                {/* Center box */}
                <div className="absolute z-10 px-12 py-7 text-center rounded-xl
                bg-linear-to-b from-[#bfa16a]/80 via-[#a77c3c]/70 to-[#8d6b2d]/80
                text-white font-serif text-xl shadow-md">
                    Stellencia’s promise<br />to you
                </div>

                <PromiseItem className="top-0 left-1/2 -translate-x-1/2" item={promises[0]} />
                <PromiseItem className="right-0 top-1/2 -translate-y-1/2" item={promises[1]} />
                <PromiseItem className="bottom-0 right-[20%]" item={promises[2]} />
                <PromiseItem className="bottom-0 left-[20%]" item={promises[3]} />
                <PromiseItem className="left-0 top-1/2 -translate-y-1/2" item={promises[4]} />
            </div>
        </section>
    );
}

function IconCircle({ Icon }) {
    return (
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[maroon] flex items-center justify-center">
            <Icon className="text-white w-8 h-8 md:w-9 md:h-9" strokeWidth={1.4} />
        </div>
    );
}


function PromiseItem({ item, className }) {
    return (
        <div className={`absolute flex flex-col items-center gap-3 ${className}`}>
            <IconCircle Icon={item.icon} />
            <p className="text-[maroon] text-sm font-medium text-center max-w-[140px]">
                {item.title}
            </p>
        </div>
    );
}

