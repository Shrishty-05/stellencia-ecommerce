import Navbar from "../components/common/Navbar"
import ProdAmount from "../components/Cart-components/ProdAmount"
import Divider from "../components/common/Divider"
import OrderSummary from "../components/Cart-components/OrderSummary"
import FavPicks from "../components/Cart-components/FavPicks"

export default function Cart(){
    return (
        <> 
        <Navbar />

        {/* header */}
         <div className="cart-page-header flex items-center justify-between px-4 md:px-8 py-4">
                <h1 className="text-xl md:text-2xl font-sans font-semibold tracking-wide text-gray-900">
                    Shopping Cart
                </h1>

                {/* <button className="hidden md:block text-sm md:text-base font-medium text-white bg-[maroon] px-4 py-2 rounded-lg hover:opacity-90 transition">
                    Home
                </button> */}
            </div>

            <Divider/>

         {/* <section className="flex flex-col md:flex-row md:gap-8 max-w-7xl mx-auto px-4 md:px-8"> */}
         <section className="flex flex-col mb-7 mx-3 md:flex-row md:justify-center gap-3 md:gap-8 max-w-7xl md:mx-auto lg:mx-10 md:px-6 lg:px-0">

            <ProdAmount/>
        <OrderSummary/>
        </section> 

        {/* <Divider />  */}
        {/* <FavPicks/> */}

        
        </>
       
    )
}