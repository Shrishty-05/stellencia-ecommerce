import { useCart } from "../../context/CartContext";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const subTotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  // const makingCharges = ;
  const taxes = 100;
  const shippingCharges = 0;
  const couponDiscount = 200;

  const totalAmount =
    subTotal + taxes + shippingCharges - couponDiscount;

  return (
    <section className="bg-white rounded-2xl p-8 
                        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                        border border-[#f1ece7] h-fit">

      <h2 className="text-2xl font-light text-[#1A1A1A] mb-8">
        Order Summary
      </h2>

      {/* Divider */}
      <div className="h-px bg-linear-to-r 
                      from-transparent via-[#C6A75E]/40 to-transparent mb-8" />

      <div className="space-y-4 text-[15px] text-gray-600">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-[#1A1A1A]">₹{subTotal}</span>
        </div>

        {/* <div className="flex justify-between">
          <span>Making Charges</span>
          <span>₹{makingCharges}</span>
        </div> */}

        <div className="flex justify-between">
          <span>Taxes</span>
          <span>₹{taxes}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-[#C6A75E] font-medium">
            FREE
          </span>
        </div>
      </div>

      <div className="h-px bg-[#eee] my-8" />

      <div className="flex justify-between text-lg font-semibold text-[#1A1A1A]">
        <span>Total</span>
        <span>₹{totalAmount}</span>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        Inclusive of all taxes
      </p>

      <button className="w-full mt-8 bg-[#6E1C2F] 
                         hover:bg-[#581623] 
                         text-white py-4 
                         rounded-lg tracking-wide 
                         transition-all duration-300 
                         shadow-md hover:shadow-lg">
        Proceed to Checkout
      </button>
    </section>
  );
}