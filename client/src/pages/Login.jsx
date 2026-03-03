import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios.js";

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // redirect post login

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await api.post('/auth/login',form);
            console.log(res.data);

            // save token to local storage
            localStorage.setItem("token", res.data.token);

            setMessage("Login successful");

            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
        catch(err){
            setMessage(err.response?.data?.message || "An error occurred");
        }
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-10">

                {/* Brand Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-serif font-semibold text-[#7A1E2D] tracking-[0.12em]">
                        Welcome Back
                    </h1>
                    <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#B18653]">
                        Stèllencia Fine Jewellery
                    </p>
                </div>

                {/* Message */}
                {message && (
                    <div className="mb-4 rounded-lg bg-[#FFF4E5] text-[#B18653] p-3 text-center font-medium shadow-sm">
                        {message}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-6"
                onSubmit={handleSubmit}
                >

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-600">
                            Email Address
                        </label>
                        <input
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                            type="email"
                            className="rounded-lg border border-gray-300 px-4 py-3 text-gray-800
              focus:outline-none focus:ring-2 focus:ring-[#7A1E2D] focus:border-[#7A1E2D]
              transition-all duration-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-600">
                            Password
                        </label>
                        <input
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                            type="password"
                            className="rounded-lg border border-gray-300 px-4 py-3 text-gray-800
              focus:outline-none focus:ring-2 focus:ring-[#7A1E2D] focus:border-[#7A1E2D]
              transition-all duration-300"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a
                            href="#"
                            className="text-xs tracking-[0.15em] uppercase text-[#B18653] hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                    
                        type="submit"
                        className="w-full rounded-lg bg-[#7A1E2D] py-3 text-white 
            text-sm uppercase tracking-[0.2em] font-medium
            hover:bg-[#5e1724] transition-all duration-300 shadow-md"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#B18653]/40 to-transparent" />

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-500">
                    New to Stèllencia?{" "}
                    <Link to="/signup"

                        className="text-[#7A1E2D] font-medium tracking-[0.1em] hover:underline"
                    >
                        Create Account
                    </Link>
                </p>

            </div>
        </div>
    );
}