import Navbar from "../components/common/Navbar";
import ProdAmount from "../components/Cart-components/ProdAmount";
import OrderSummary from "../components/Cart-components/OrderSummary";
import { useCart } from "../context/CartContext";
import EmptyCart from "../pages/EmptyCart";

export default function Cart() {
  const { cartItems, clearCart } = useCart();

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <Navbar />

          <section className="bg-[#faf7f4] min-h-screen my-10 pt-28 pb-20 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">

              {/* Header */}
              <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
                  Your Shopping Cart
                </h1>

                <div className="mt-4 h-[1px] w-24 mx-auto 
                                bg-gradient-to-r 
                                from-transparent via-[#C6A75E]/60 to-transparent" />
              </div>

              {/* Clear Cart Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={clearCart}
                  className="px-5 py-3 bg-[#6E1C2F] text-white rounded-lg 
                             text-sm md:text-base font-medium 
                             hover:bg-[#5a1626] transition-all shadow-sm"
                >
                  Clear Cart
                </button>
              </div>

              {/* Layout */}
              <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-14">

                {/* Left - Cart Items */}
                <div className="space-y-6 md:space-y-8">
                  {cartItems.map((item) => (
                    <ProdAmount key={item.productId} item={item} />
                  ))}
                </div>

                {/* Right - Summary */}
                <OrderSummary />

              </div>
            </div>
          </section>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}