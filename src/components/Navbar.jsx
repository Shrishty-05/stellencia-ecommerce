import { Heart, ShoppingCart, User , Menu , HomeIcon} from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {

  return ( <section className="">
    <nav className="w-full md:h-[40%] maroon text-white flex items-center justify-between p-2 sticky">
      <h1 className="p-1 md:px-5 text-lg font-serif md:text-xl md:tracking-widest" >STELLENCIA</h1>

        <button className="p-1 text-lg" ><Menu className="md:hidden"></Menu></button>

      <ul className="hidden px-7 lg:px-10 md:flex justify-center items-center gap-5 lg:gap-10">
         <li><HomeIcon/></li>
        <li><Heart /></li>
        <li><ShoppingCart /></li>
        <li><User /></li>
      </ul>
 </nav>
   {/* <SearchBar/> */}

 </section>
  );
}
