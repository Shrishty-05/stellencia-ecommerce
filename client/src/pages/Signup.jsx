import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [ message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.name] : e.target.value         
            })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post('auth/signup', form);
            setMessage(response.data.message);
            setTimeout(() => {
              navigate('/');
            }, 1000);
        }
        catch(error){
            setMessage(error.response?.data?.message || "An error occurred");
        }
    }

    return (
          <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-10 bg-white">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#7A1E2D] mb-6 text-center tracking-[0.1em]">
          Join Stèllencia
        </h1>
        <p className="text-center text-[#B18653]/90 mb-6 uppercase text-xs tracking-[0.2em]">
          Fine Jewellery Club
        </p>

        {/* Message */}
        {message && (
          <div className="mb-4 rounded-lg bg-[#FFF4E5] text-[#B18653] p-3 text-center font-medium shadow-sm">
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 uppercase tracking-[0.1em]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            //   placeholder="John Doe"
              className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2D] focus:border-[#7A1E2D] text-gray-800"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 uppercase tracking-[0.1em]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            //   placeholder="john@example.com"
              className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2D] focus:border-[#7A1E2D] text-gray-800"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 uppercase tracking-[0.1em]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            //   placeholder="********"
              className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7A1E2D] focus:border-[#7A1E2D] text-gray-800"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#7A1E2D] py-3 text-white font-semibold text-lg hover:bg-[#5e1724] transition-colors shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Already a member?{" "}
          <a
            href="/login"
            className="text-[#B18653] font-medium hover:underline tracking-[0.1em]"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
    )
} 