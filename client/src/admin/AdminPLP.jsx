import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios"
// import product from "../../../server/models/product";

export default function AdminPLP() {
    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const res = await api.get('/products');
        setProducts(res.data);
    }

    const deletedProduct = async (id) => {
        try {
            await api.delete(`/products/delete/${id}`);
            alert("Product deleted");
            loadProducts();
        }
        catch(err){
            console.error("Error deleting product: ",err);
        }
    }
    useEffect(() => {
        loadProducts();
    }, []);

    // console.log(products);

    return (<>
         <div className="min-h-screen px-10 py-12 bg-white">

      {/* Top Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#7A1E2D]">
          Product List
        </h2>

        <Link
          to="/admin/products/add"
          className="px-5 py-2 bg-[#7A1E2D] text-white rounded-md text-sm hover:bg-[#5e1724] transition"
        >
          Add New Product
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-3 border-b">Title</th>
              <th className="text-left px-6 py-3 border-b">Price</th>
              <th className="text-left px-6 py-3 border-b">Stock</th>
              <th className="text-left px-6 py-3 border-b">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">
                  {product.name}
                </td>

                <td className="px-6 py-4 border-b">
                  ₹{product.price}
                </td>

                <td className="px-6 py-4 border-b">
                  {product.countInStock}
                </td>

                <td className="px-6 py-4 border-b space-x-4">
                  <Link
                    to={`/admin/products/update/${product._id}`}
                    className="text-[#7A1E2D] hover:underline text-sm"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deletedProduct(product._id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
    </>
    )
}