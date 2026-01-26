import Divider from "../components/common/Divider";
import Layout from "../components/common/Layout";
import ProductDetails from "../components/PDP-components/ProductDetails";
import ProductCard from "../components/common/ProductCard";
import products from "../data/products.json";
import { useParams } from "react-router-dom";


export default function PDP() {
  const { id } = useParams();
  const currentProduct = products.find((p) => p.id === id);

  if (!currentProduct) return <p>Product not found!</p>;

  return (
    <>
      <Layout>

        <ProductDetails />
        <Divider />

      <section className="similar-products m-3">
          <h2 className="font-medium mb-2 text-2xl">View Similar Products</h2>
          <div className="similar-prod-list flex gap-3 overflow-x-auto py-2">
            {products
              .filter(
                (p) =>
                  p.category === currentProduct.category &&
                  p.id !== currentProduct.id
              )
              .slice(0, 4)
              .map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  image={p.images[0]}
                  title={p.title}
                  price={p.price}
                  isWishlisted={false}
                  onAddToCart={(id) => console.log("Add to cart:", id)}
                  onToggleWishlist={(id) => console.log("Wishlist toggled:", id)}
                />
              ))}
          </div>
        </section>

      </Layout>
    </>
  )
}


