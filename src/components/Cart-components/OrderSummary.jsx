

export default function OrderSummary() {
    return (
        <section className="w-[95vw] md:w-full max-w-4xl my-1 mx-auto md:my-4 flex flex-col gap-5">
            <div className="p-5 border border-gray-200 rounded-xl bg-white">

                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Coupons & Discounts
                </h2>

                <div className="flex flex-col gap-5">

                    {/* Coupon 1 */}
                    <div className="flex justify-between items-start gap-4">
                        <p className="text-sm text-gray-800">
                            Flat <span className="font-medium">10%</span> off on prepaid orders
                        </p>
                        <button className="text-sm font-medium text-sky-500 hover:underline">
                            Apply
                        </button>
                    </div>

                    {/* Coupon 2 */}
                    <div className="flex justify-between items-start gap-4">
                        <p className="text-sm text-gray-800">
                            Flat <span className="font-medium">5%</span> off on Silver Jewellery
                            <br />
                            above <span className="font-medium">₹999</span>
                        </p>
                        <button className="text-sm font-medium text-sky-500 hover:underline">
                            Apply
                        </button>
                    </div>

                    {/* Coupon 3 */}
                    <div className="flex justify-between items-start gap-4">
                        <p className="text-sm text-gray-800">
                            Flat <span className="font-medium">5%</span> off on select Silver Jewellery
                            <br />
                            above <span className="font-medium">₹1899</span>
                        </p>
                        <button className="text-sm font-medium text-sky-500 hover:underline">
                            Apply
                        </button>
                    </div>

                </div>
            </div>

            <div className="w-full border border-gray-200 rounded-xl p-5 bg-white">

                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Select Delivery Address
                </h2>

                {/* Address line */}
                <p className="text-sm text-gray-800 mb-2">
                    XYZ, random colony name, 111000, city, state
                </p>

                {/* Name & contact */}
                <div className="flex gap-10 text-[maroon] font-medium text-sm mb-3">
                     <span className="font-normal">*person name</span>
                    <span className="font-normal">*contact</span>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button className="bg-[maroon] text-white px-3 py-2 rounded-lg text-sm">
                        Edit
                    </button>
                    <button className="bg-[maroon] text-white px-3 py-2 rounded-lg text-sm">
                        Delete
                    </button>
                </div>

            </div>


    <div className="w-full mx-auto bg-[#e6e6e6] rounded-2xl p-6">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold text-black mb-4">
        Order summary
      </h2>

      {/* Items row */}
      <div className="flex justify-between text-lg text-black mb-2">
        <span>Total items</span>
        <span>1</span>
      </div>

      <hr className="border-gray-400 my-3" />

      {/* Price details */}
      <div className="space-y-2 text-md text-black">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹1699</span>
        </div>

        <div className="flex justify-between">
          <span>Making charges</span>
          <span>₹500</span>
        </div>

        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹100</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping charges</span>
          <span className="text-red-700 font-semibold">FREE !</span>
        </div>
      </div>

      <hr className="border-gray-400 my-4" />

      {/* Total */}
      <div className="flex justify-between items-center text-lg font-bold text-black">
        <span>Total Amount</span>
        <span>₹2299</span>
      </div>

      <p className="text-sm text-black mt-1">
        *Inclusive of all taxes
      </p>

      {/* Savings */}
      <p className="text-center text-green-700 font-semibold text-md mt-5">
        You saved ₹750 on this order!
      </p>

      {/* Button */}
      <button className="w-full mt-5 bg-[maroon] text-white text-md font-semibold py-3 rounded-xl">
        Proceed to Checkout
      </button>
    </div>




        </section>
    )
}