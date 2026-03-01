import Policies from "../common/Policies.jsx";
import WishlistButton from "../common/WishlistButton.jsx";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";

export default function ProductDetails() {
  const handleWishlistToggle = () => {
    console.log("Wishlist toggled!");
  };

  const { id } = useParams(); 
  const product = products.find((item) => item.id === id); // string comparison

  if (!product) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Product not found!
      </div>
    );
  }
console.log("IMAGE PATH:", product.images?.[0]);


  return (
    <section className="relative product-detail mb-10 m-3 mt-5 flex flex-col gap-3 md:flex-row md:gap-12 lg:gap-16 max-w-7xl mx-auto px-4 md:px-10 lg:px-20 rounded-lg">

      {/* Wishlist button */}
      <WishlistButton isWishlisted={false} onToggleWishlist={handleWishlistToggle} />

      {/* Product Image */}
      <img
        src={product.images[0]} // dynamic first image
        alt={product.title}
        className="w-full h-[50vh] md:h-[30vh] max-w-full md:max-w-105 aspect-square object-cover rounded-lg mx-auto lg:max-h-80"
      />

      {/* Product Info */}
      <div className="description flex flex-col gap-7 w-full md:max-w-130">

        {/* Title & Price */}
        <div className="prod-start-headings flex flex-col gap-3">
          <h2 className="text-2xl">{product.title}</h2>
          <h1 className="font-bold text-xl">
            {product.currency} {product.price}
          </h1>
          <p className="text-xs mb-3">MRP Incl. of all taxes</p>
        </div>

        {/* Pincode / Delivery */}
        <div className="pincode-box flex flex-col">
          <h3 className="mb-2">Estimated delivery time</h3>
          <div className="pin-input flex gap-2">
            <input
              type="number"
              placeholder="Enter Pincode"
              maxLength={6}
              className="bg-gray-300 w-40 rounded-md px-3 placeholder:text-sm placeholder:text-gray-600"
            />
            <button className="bg-[maroon] p-2 rounded-md text-white text-sm w-15">
              Check
            </button>
          </div>
          <div className="delivery-date-output">
            <p className="text-green-600 font-medium text-sm">
              Delivery by 20th February
            </p>
          </div>
        </div>

        {/* Policies Component */}
        <Policies />

        {/* Actions */}
        <div className="product-actions w-full my-1 flex gap-1">
          <button className="bg-[maroon] p-2 rounded-md text-white text-sm basis-[50%]">
            Add to Cart
          </button>
          <button className="bg-[maroon] p-2 rounded-md text-white text-sm basis-[50%]">
            Buy Now
          </button>
        </div>

        {/* Product Description */}
        <div className="info-main flex flex-col gap-2 h-auto">
          <h3 className="text-xl">Product Description</h3>
          {product.material && (
            <span className="title font-bold px-5 text-sm block">
              Material: {product.material}
            </span>
          )}
          <p className="text-gray-700 px-5 text-sm">
            {/* Optional description */}
            {product.description || "No description available."}
          </p>
        </div>
        </div>
         </section>
  );
}


