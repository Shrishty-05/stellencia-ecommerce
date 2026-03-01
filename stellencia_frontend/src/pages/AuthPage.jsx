import { useState } from "react";
import { X } from "lucide-react";

import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
  const email = "user@example.com"; // backend se aayega
  localStorage.setItem("userId", email);
};

const handleLogout = () => {
  localStorage.removeItem("userId");
  window.location.reload();
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
        {/* Close Button */}
        <Link to="/">  
        <button
          aria-label="Close auth modal"
          className="absolute top-7 right-7 text-gray-400 hover:text-gray-700 text-xl"
        >
          <X />
        </button>
        </Link>
      

        <h2 className="text-2xl font-semibold text-center text-[maroon] mb-6">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>

        {isLogin ? <Login /> : <Signup />}

        <p className="text-sm text-center mt-6 text-gray-600">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-medium hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}
