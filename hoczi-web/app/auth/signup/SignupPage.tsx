"use client";

import { useState } from "react";
import { Mail, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const pwValid = password.length >= 6;

  const handleLogin = async () => {
    if (!email || !password) return;
    setLoading(true);
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    alert("Đăng nhập với: " + email);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200 p-10 w-full max-w-md">

        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            LOGIN
          </h1>
          <p className="text-xs text-gray-400 tracking-widest mt-1">
            SIGN IN TO YOUR ACCOUNT
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-500 tracking-wider mb-1.5">
            YOUR E-MAIL
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-500 tracking-wider mb-1.5">
            PASSWORD
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {pwValid && (
              <CheckCircle2
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
              />
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-500 tracking-wider mb-1.5">
            CONFORM PASSWORD 
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {pwValid && (
              <CheckCircle2
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
              />
            )}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!email || !password || loading}
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm rounded-lg transition-all duration-150 mb-4"
        >
          {loading ? "Đang đăng nhập..." : "Register"}
        </button>

        {/* Forgot */}
        <p className="text-center">
          <Link
            href="/auth/signin"
            className="text-sm hover:text-indigo-500 transition-colors"
          >
            Go to login
          </Link>
        </p>

      </div>
    </div>
  );
}
