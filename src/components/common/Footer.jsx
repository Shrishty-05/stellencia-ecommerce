
import {
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[maroon] text-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">

          {/* Brand Column */}
          <div>
            <h2 className="text-xl tracking-[0.35em] uppercase">
              Stèllencia
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-sm">
              Fine jewellery crafted to celebrate elegance,
              emotion, and timeless sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-[0.35em] uppercase text-white/70">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4 text-white/80">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Shop</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">About</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-[0.35em] uppercase text-white/70">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-white/80 leading-relaxed">
              <li>+91 1234567890</li>
              <li>ABC Building, XYZ, State</li>
              <li>info@stellencia.com</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-[1px] w-full bg-white/20" />

        {/* Bottom Row */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">

          <p className="text-white/60 text-sm tracking-wide text-center md:text-left">
            © 2026 Stellencia. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
              <Instagram size={20} strokeWidth={1.4} />
            </a>
            <a className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
              <Linkedin size={20} strokeWidth={1.4} />
            </a>
            <a className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
              <MessageCircle size={20} strokeWidth={1.4} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}