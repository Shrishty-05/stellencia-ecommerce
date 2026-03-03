import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../api/axios.js"; 

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    discountPrice: "",
    countInStock: "",
  });

  const allowedFields = [
    "name",
    "description",
    "brand",
    "category",
    "price",
    "discountPrice",
    "countInStock",
  ];

  useEffect(() => {
  const loadProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      const product = res.data;

      const filteredProduct = {};
      allowedFields.forEach((field) => {
        filteredProduct[field] = product[field] || "";
      });

      setForm(filteredProduct);
    } catch (error) {
      console.error("Failed to load product", error);
    }
  };

  if (id) loadProduct();
}, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.put(`/products/update/${id}`, form);
    alert("Product updated");
    navigate("/admin/products");
  } catch (error) {
    console.error("Update failed", error);
    alert("Update failed");
  }
};

  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  // console.log(id);

  return (
    <div className="min-h-screen px-10 py-12 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#7A1E2D]">
          Edit Product
        </h2>

        <Link
          to="/admin/products"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back to Products
        </Link>
      </div>

      {/* Form Card */}
      <div className="max-w-2xl bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          {allowedFields.map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-2">
                {formatLabel(field)}
              </label>

              {field === "description" ? (
                <textarea
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-[#7A1E2D]"
                />
              ) : (
                <input
                  type={
                    field.includes("price") || field.includes("Stock")
                      ? "number"
                      : "text"
                  }
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 
                  focus:outline-none focus:ring-2 focus:ring-[#7A1E2D]"
                />
              )}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-[#7A1E2D] text-white rounded-md 
              hover:bg-[#5e1724] transition"
            >
              Update Product
            </button>

            <Link
              to="/admin/products"
              className="px-6 py-2 border border-gray-300 rounded-md 
              text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}