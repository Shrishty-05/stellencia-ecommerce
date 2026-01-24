import { useState } from "react";

export default function WishlistButton({
  isWishlisted = false,
  onToggleWishlist = () => {},
}) {
  const [wishlisted, setWishlisted] = useState(isWishlisted);

  const handleToggle = () => {
    setWishlisted(!wishlisted);
    onToggleWishlist();
  };

  return (
    <button
      onClick={handleToggle}
      className={`absolute top-2 md:top-0 lg:right-1 md:right-10 right-2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center md:text-2xl
        ${wishlisted ? "bg-[#7A1E2D] text-white" : "bg-white text-gray-500 hover:text-[#7A1E2D]"}
      `}
    >
      ♡
    </button>
  );
}

