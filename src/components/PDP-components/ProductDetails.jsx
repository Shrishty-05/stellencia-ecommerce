import Policies from "../Policies";
import WishlistButton from "../WishlistButton";
import { useState } from "react";

export default function ProductDetails() {
    const handleWishlistToggle = () => {
        console.log("Wishlist toggled!");
    };



    const description =
        "This adorable pendant undoubtedly adds a touch of glamour to your neckline and is perfect for both casual and festive occasions.";

    const words = description.trim().split(" ");
    const isLong = words.length > 15;
    const shortText = words.slice(0, 15).join(" ");

    const [showMore, setShowMore] = useState(false);

    return <>
<section className="relative product-detail mb-10 m-3 mt-15 flex flex-col gap-3 md:flex-row md:gap-12 lg:gap-16 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 rounded-lg">
            {/* Wishlist button */}
            <WishlistButton isWishlisted={false} onToggleWishlist={handleWishlistToggle}/>


            <img
  src="src/assets/hero.png"
  alt="product"
  className="
    w-full
    max-w-full
    md:max-w-[420px]
    aspect-square
    object-cover
    rounded-lg
   mx-auto
   lg:max-h-80
  "
/>



<div className="description flex flex-col gap-7 w-full md:max-w-[520px]">

                <div className="prod-start-headings flex flex-col gap-3">
                    <h2 className="text-2xl">Silver Lucky Ring</h2>
                <h1 className="font-bold text-xl" >₹1,699</h1>
                <p className="text-xs mb-3">MRP Incl. of all taxes</p>
                </div>
                

                <div className="pincode-box flex flex-col">
                    <h3 className="mb-2">Estimated delivery time</h3>

                    <div className="pin-input flex gap-2">
                        <input className="bg-gray-300 w-40 rounded-md px-3 placeholder:text-sm placeholder:text-gray-600" type="number" placeholder="Enter Pincode" maxlength="6" pattern="\d{6}" />
                        <button className="bg-[maroon] p-2 rounded-md text-white text-sm w-15">Check</button>
                    </div>

                    <div className="delivery-date-output">
                        <p className="text-green-600 font-medium text-sm">Delivery by 20th February</p>
                    </div>
                </div>

                <Policies />

                <div className="product-actions w-full my-1 flex gap-1">
                    <button className="bg-[maroon] p-2 rounded-md text-white text-sm basis-[50%]">Add to Cart</button>
                    <button className="bg-[maroon] p-2 rounded-md text-white text-sm basis-[50%] ">Buy Now</button>
                </div>





                <div className="info-main flex flex-col gap-2 h-auto">
                    <h3 className="text-xl">Product Description</h3>

                    <span className="title font-bold px-5 text-sm block">
                        The Inspiration
                    </span>

                    <p className="text-gray-700 px-5 text-sm transition-all duration-300">
                        {showMore || !isLong ? description : `${shortText}...`}
                    </p>

                    {isLong && (
                        <span
                            className="text-blue-400 px-5 text-sm cursor-pointer w-fit"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show less" : "Show more"}
                        </span>
                    )}
                </div>


            </div>


        </section>
    </>
}