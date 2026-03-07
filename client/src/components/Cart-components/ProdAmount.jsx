import { useCart } from "../../context/CartContext";

export default function ProdAmount({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-[#f1ece7] flex gap-6">

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
            {item.name}
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
                ? removeFromCart(item.productId)
                : updateQuantity(item.productId, item.quantity - 1)
            }
            className="w-9 h-9 rounded-lg border border-[#6E1C2F] text-[#6E1C2F] flex items-center justify-center hover:bg-[#6E1C2F] hover:text-white transition"
          >
            −
          </button>

          <span className="text-md font-medium">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            className="w-9 h-9 rounded-lg border border-[#6E1C2F] text-[#6E1C2F] flex items-center justify-center hover:bg-[#6E1C2F] hover:text-white transition"
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