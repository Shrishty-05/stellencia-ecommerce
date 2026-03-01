// export default function ProdAmount() {
//     return (
//         <section className="w-[95vw] md:w-full max-w-4xl mx-auto my-1">

//             <div className="prod-qty p-5 my-3 border border-gray-200 rounded-xl flex gap-5 bg-white">

//                 {/* Left: Product Image */}
//                 <img
//                     src="src/assets/hero.png"
//                     alt="Silver Lucky Ring"
//                     className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shrink-0"
//                 />

//                 {/* Right Content */}
//                 <div className="flex flex-col gap-3">

//                     {/* Title */}
//                     <h3 className="text-base md:text-lg font-medium text-gray-900">
//                         Silver Lucky Ring
//                     </h3>

//                     {/* Price */}
//                     <h2 className="text-lg md:text-xl font-semibold text-gray-900">
//                         ₹1,699
//                     </h2>

//                     {/* Quantity */}
//                     <div className="quantity flex items-center gap-4">
//                         <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[maroon] text-white text-lg">
//                             −
//                         </button>

//                         <p className="text-base font-medium">1</p>

//                         <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-[maroon] text-white text-lg">
//                             +
//                         </button>
//                     </div>

//                     {/* Free delivery */}
//                     <p className="text-sm text-gray-700 flex items-center gap-2">
//                         🚚 <span className="font-medium">Free delivery</span>
//                     </p>

//                     {/* Expected delivery */}
//                     <p className="text-sm text-gray-700">
//                         Expected delivery by : <span className="font-medium">20 Jan 2026</span>
//                     </p>

//                 </div>
//             </div>

//             <div className="policy">
//                 <ul className="flex justify-around md:flex-col text-sm md:text-md md:font-bold md:gap-2">
//                     <li>🔒 Secure Checkout</li>
//                     <li>🔄 Easy Returns</li>
//                     <li>🚚 Insured Delivery</li>
//                 </ul>
//             </div>

//         </section>

//     )
// }


// import { useCart } from "../Cart-components/CartContext";

// export default function ProdAmount({ item }) {
//   const { updateQuantity, removeFromCart } = useCart();

//   const handleDecrease = () => {
//     if (item.quantity === 1) {
//       removeFromCart(item.id);
//     } else {
//       updateQuantity(item.id, item.quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     updateQuantity(item.id, item.quantity + 1);
//   };

//   return (
//     <section className="w-[95vw] md:w-full max-w-4xl mx-auto my-1">
//       <div className="prod-qty p-5 my-3 border border-gray-200 rounded-xl flex gap-5 bg-white">

//         {/* Left: Product Image */}
//         <img
//           src={item.images}
//           alt={item.title}
//           className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shrink-0"
//         />

//         {/* Right Content */}
//         <div className="flex flex-col gap-3 flex-1">

//           {/* Title */}
//           <h3 className="text-base md:text-lg font-medium text-gray-900">
//             {item.title}
//           </h3>

//           {/* Price */}
//           <h2 className="text-lg md:text-xl font-semibold text-gray-900">
//             ₹{item.price}
//           </h2>

//           {/* Quantity */}
//           <div className="quantity flex items-center gap-4">
//             <button
//               onClick={handleDecrease}
//               className="w-9 h-9 flex items-center justify-center rounded-lg bg-[maroon] text-white text-lg"
//             >
//               −
//             </button>

//             <p className="text-base font-medium">{item.quantity}</p>

//             <button
//               onClick={handleIncrease}
//               className="w-9 h-9 flex items-center justify-center rounded-lg bg-[maroon] text-white text-lg"
//             >
//               +
//             </button>
//           </div>

//           {/* Free delivery */}
//           <p className="text-sm text-gray-700 flex items-center gap-2">
//             🚚 <span className="font-medium">Free delivery</span>
//           </p>

//           {/* Expected delivery */}
//           <p className="text-sm text-gray-700">
//             Expected delivery by :
//             <span className="font-medium"> 20 Jan 2026</span>
//           </p>

//         </div>
//       </div>

//       {/* Policies
//       <div className="policy">
//         <ul className="flex justify-around md:flex-col text-sm md:text-md md:font-bold md:gap-2">
//           <li>🔒 Secure Checkout</li>
//           <li>🔄 Easy Returns</li>
//           <li>🚚 Insured Delivery</li>
//         </ul>
//       </div> */}
//     </section>
//   );
// }

import {useCart} from "./CartContext"

export default function ProdAmount({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-2xl p-6 
                    shadow-[0_15px_40px_rgba(0,0,0,0.05)]
                    border border-[#f1ece7]
                    flex gap-6">

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-cover rounded-xl"
      />

      {/* Info */}
      <div className="flex flex-col flex-1 justify-between">

        <div>
          <h3 className="text-lg font-medium text-[#1A1A1A]">
            {item.title}
          </h3>

          <p className="text-[#6E1C2F] font-semibold mt-2">
            ₹{item.price}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-6">

          <button
            onClick={() =>
              item.quantity === 1
                ? removeFromCart(item.id)
                : updateQuantity(item.id, item.quantity - 1)
            }
            className="w-9 h-9 rounded-lg border border-[#6E1C2F] 
                       text-[#6E1C2F] flex items-center justify-center 
                       hover:bg-[#6E1C2F] hover:text-white transition"
          >
            −
          </button>

          <span className="text-md font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }
            className="w-9 h-9 rounded-lg border border-[#6E1C2F] 
                       text-[#6E1C2F] flex items-center justify-center 
                       hover:bg-[#6E1C2F] hover:text-white transition"
          >
            +
          </button>

        </div>

        <p className="text-sm text-gray-400 mt-4">
          Complimentary insured delivery
        </p>

      </div>
    </div>
  );
}