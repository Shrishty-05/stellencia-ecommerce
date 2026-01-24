import WishlistButton from "../WishlistButton"; 

export default function ProductCard({
  id = null,
  image = "/placeholder.png",
  title = "",
  price = "",
  isWishlisted = false,
  onAddToCart = () => {},
  onToggleWishlist = () => {},
}) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white relative w-40 shrink-0 md:w-auto md:max-h-auto">
      <WishlistButton
        isWishlisted={isWishlisted}
        onToggleWishlist={() => onToggleWishlist(id)}
      />

      <img src={image} alt={title} className="w-full aspect-square object-cover" />

      <div className="p-3 text-left">
        <p className="text-sm font-semibold text-gray-900">₹{price}</p>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">{title}</p>
      </div>

      <button
        onClick={() => onAddToCart(id)}
        className="w-full bg-[#7A1E2D] text-white text-sm py-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
