import { useState } from "react";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        brand: "",
        category: "",
        price: 0,
        discountPrice: 0,
        countInStock: 0,
        images: "",
        isFeatured: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await api.post('/products/add', form);
            alert("Product added successfully");
            navigate('/admin/products');
            
        }catch(err){
            console.log("Error adding products : ", err);
        }
    }

    return (
         <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl p-12">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-semibold text-[maroon] tracking-wide">
            Add New Jewellery Piece
          </h1>

          {/* <p className="text-gray-500 mt-3 text-sm">
            Create a premium product listing for your collection
          </p> */}

          <div className="w-20 h-[2px] bg-[#c6a14a] mx-auto mt-6"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-[maroon] mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
              placeholder="e.g. Royal Gold Necklace"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[maroon] mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition resize-none"
              placeholder="Describe craftsmanship, material, uniqueness..."
              required
            />
          </div>

          {/* Brand & Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[maroon] mb-2">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[maroon] mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
                required
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-[maroon] mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[maroon] mb-2">
                Discount Price (₹)
              </label>
              <input
                type="number"
                name="discountPrice"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[maroon] mb-2">
                Stock
              </label>
              <input
                type="number"
                name="countInStock"
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
                required
              />
            </div>
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-[maroon] mb-2">
              Image URLs
            </label>
            <input
              type="text"
              name="images"
              onChange={handleChange}
              placeholder="Paste image URLs separated by commas"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c6a14a] transition"
            />
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center justify-between border-t pt-6">
            <label className="text-sm font-medium text-[maroon]">
              Mark as Featured Product
            </label>
            <input
              type="checkbox"
              name="isFeatured"
              onChange={handleChange}
              className="accent-[#c6a14a] w-5 h-5"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-[maroon] text-white py-3 rounded-lg tracking-wide hover:opacity-90 transition shadow-md"
            >
              Add Product
            </button>
          </div>

        </form>
      </div>
    </div>
    )
}