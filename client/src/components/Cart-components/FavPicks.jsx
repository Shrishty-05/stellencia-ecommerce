import ProductCard from "../common/ProductCard";

export default function FavPicks() {
    return (
        <section className="">

            <div className="fav-pick-header items-center px-4 md:px-8 py-4">
                <h1 className="text-xl md:text-2xl font-sans tracking-wide text-gray-900">
                    Customer's favourite picks
                </h1>
            </div>

            <div className="m-3 fav-products flex justify-evenly">
               {/* <ProductCard
               id={1}
               image={heroImg}
               title="Silver Lucky Ring"
               price={1699}
               isWishlisted={false}
               onAddToCart={(id) => console.log("Add to cart", id)}
    onToggleWishlist={(id) => console.log("Wishlist", id)}
               /> */}

                {Array.from({ length: 3 }).map((_, idx) => (
                     <ProductCard
                       key={idx}
                       id={idx + 1}
                       image="/product.jpg"
                       title={`Gold Necklace ${idx + 1}`}
                       price={1299 + idx * 100}
                       isWishlisted={false}
                       onAddToCart={(id) => console.log("Add to cart:", id)}
                       onToggleWishlist={(id) => console.log("Wishlist toggled:", id)}
                     />
                   ))}

            </div>



        </section>
    )
}