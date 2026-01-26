import {
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";


export default function Footer() {
  return (
    <section className="footer text-sm maroon w-full text-white px-4 py-7 md:px-10 md:py-14">
      
      {/* Quick Links */}
      <div className="quick mb-8 md:mb-12">
        <h2 className="text-center mb-4 md:mb-6 font-bold underline">
          Quick Links
        </h2>

        <div className="quick-links flex justify-evenly md:justify-center md:gap-16">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>

      {/* Info + Contact */}
      <div className="first-row flex flex-col md:flex-row justify-evenly gap-10 md:gap-20 mb-8 md:mb-12 leading-loose">
        
        <div className="info text-center md:text-left">
          <h2 className="mb-3 font-bold underline">Info</h2>
          <ul>
            <li>Help center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>FAQs & Support</li>
          </ul>
        </div>

        <div className="contact text-center md:text-left">
          <h2 className="mb-3 font-bold underline">Contact us</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>ABC building, XYZ , State</li>
            <li>info@stellencia.com</li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links mb-8 md:mb-10">
        <h2 className="mb-4 md:mb-6 text-center font-bold underline">
          Social Links
        </h2>
        <ul className="flex justify-evenly md:justify-center md:gap-20">
          <li><Instagram/></li>
          <li><Linkedin/></li>
          <li><MessageCircle/></li>
        </ul>
      </div>

      {/* Copyright */}
      <footer className="text-center pt-6 border-t border-white/30">
        ©️ 2026 Stellencia | All rights reserved
      </footer>
    </section>
  );
}
