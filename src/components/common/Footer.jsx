export default function Footer(){
    return <>
    <section className="footer text-sm maroon md:pt-5 w-full text-white md:flex-col md:justify-evenly " >
        <div className="quick mb-5 md:mb-10">
            <h2 className="text-center mb-2 md:mb-5 font-bold underline">Quick Links</h2>

            <div className="quick-links flex justify-evenly">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
            </div>
        </div>

        <div className="first-row flex flex-row justify-evenly md:mb-5 gap-10 leading-loose">
        
        <div className="info">
            <h2 className="mb-2 font-bold underline">Info</h2>
            <ul>
                <li>Help center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>FAQs & Support</li>
            </ul>
        </div>

        <div className="contact">
            <h2 className="mb-2 font-bold underline">Contact us</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>ABC building, XYZ , State</li>
                <li>info@stellencia.com</li>
            </ul>
        </div>
        </div>

        <div className="social-links mb-5 md:mb-10">
            <h2 className="mb-2 text-center md:mb-5 font-bold underline">Social Links</h2>
            <ul className="flex flex-row justify-evenly">
                <li>Instagram</li>
                <li>Whatsapp</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <footer className="text-center">
           ©️ 2026 Stellencia | All rights reserved
        </footer>
    </section>
    </>
}