// import { useEffect, useState } from "react";

// export default function OrderSummary() {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);

//   useEffect(() => {
//     // 1️⃣ Get products from localStorage
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(savedCart);

//     // 2️⃣ Calculate subtotal
//     const sub = savedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     setSubtotal(sub);
//   }, []);

//   const makingCharges = 500;
//   const taxes = 100;
//   const shippingCharges = 0; // FREE

//   const couponDiscount = 200; // abhi kuch apply nahi hai
// const totalAmount = subtotal + makingCharges + taxes + shippingCharges - couponDiscount;

//   return (
//     <section className="w-[95vw] md:w-full max-w-4xl my-1 mx-auto md:my-4 flex flex-col gap-5">
//       {/* Coupons & Delivery sections remain unchanged */}
//       {/* ...existing code for coupons and address... */}

//       <div className="w-full mx-auto bg-[#e6e6e6] rounded-2xl p-6">
//         <h2 className="text-2xl font-bold text-black mb-4">Order summary</h2>

//         {/* Total items */}
//         <div className="flex justify-between text-lg text-black mb-2">
//           <span>Total items</span>
//           <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
//         </div>

//         <hr className="border-gray-400 my-3" />

//         {/* Price details */}
//         <div className="space-y-2 text-md text-black">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{subtotal}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Making charges</span>
//             <span>₹{makingCharges}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Taxes</span>
//             <span>₹{taxes}</span>
//           </div>

//           <div className="flex justify-between">
//             <span>Shipping charges</span>
//             <span className="text-red-700 font-semibold">
//               {shippingCharges === 0 ? "FREE !" : `₹${shippingCharges}`}
//             </span>
//           </div>
//         </div>

//         <hr className="border-gray-400 my-4" />

//         {/* Total */}
//         <div className="flex justify-between items-center text-lg font-bold text-black">
//           <span>Total Amount</span>
//           <span>₹{totalAmount}</span>
//         </div>

//         <p className="text-sm text-black mt-1">*Inclusive of all taxes</p>

//         {/* Savings */}
//         {/* <p className="text-center text-green-700 font-semibold text-md mt-5">
//           You saved ₹{Math.max(0, subtotal + makingCharges + taxes - totalAmount)} on this order!
//         </p> */}

//         <p className="text-center text-green-700 font-semibold text-md mt-5">
//   You saved ₹{couponDiscount > 0 ? couponDiscount : 0} on this order!
// </p>

//         {/* Button */}
//         <button className="w-full mt-5 bg-[maroon] text-white text-md font-semibold py-3 rounded-xl">
//           Proceed to Checkout
//         </button>
//       </div>
//     </section>
//   );
// }


export default function OrderSummary() {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = savedCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const makingCharges = 500;
  const taxes = 100;
  const shippingCharges = 0;
  const couponDiscount = 200;

  const totalAmount =
    subtotal + makingCharges + taxes + shippingCharges - couponDiscount;

  return (
    <section className="bg-white rounded-2xl p-8 
                        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                        border border-[#f1ece7] h-fit">

      <h2 className="text-2xl font-light text-[#1A1A1A] mb-8">
        Order Summary
      </h2>

      {/* Divider */}
      <div className="h-[1px] bg-gradient-to-r 
                      from-transparent via-[#C6A75E]/40 to-transparent mb-8" />

      <div className="space-y-4 text-[15px] text-gray-600">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-[#1A1A1A]">₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Making Charges</span>
          <span>₹{makingCharges}</span>
        </div>

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

      <div className="h-[1px] bg-[#eee] my-8" />

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