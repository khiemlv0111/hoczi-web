"use client";

import { FormEvent, useState } from "react";
import { Mail, Lock, EyeOff, EyeIcon, User } from "lucide-react";
import Link from "next/link";
import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSecured, setIsSecured] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();



    const pwValid = password.length >= 6;

    // const handleLogin = async () => {
    //     if (!email || !password) return;
    //     // setLoading(true);
    //     // TODO: replace with real API call
    //     // await new Promise((r) => setTimeout(r, 1000));
    //     // setLoading(false);
    //     // alert("Đăng nhập với: " + email);
    // };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!email || !password) return;
        if(password !== confirmPassword){
            setErrorMessage('Not matched')
            return
        }
        setLoading(true);
        const payload = {
            name: name,
            email: email,
            password: password,
        }
        UserService.register(payload).then((res) => {
            setLoading(false);
            router.push(`/auth/signin`);
            
        })
        // console.log({name, email, password, confirmPassword});
        

    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-10 w-full max-w-md">

                {/* Header */}
                <div className="mb-7">
                    <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                        LOGIN
                    </h1>
                    <p className="text-xs text-gray-400 tracking-widest mt-1">
                        SIGN IN TO YOUR ACCOUNT
                    </p>
                </div>

                {errorMessage && <span className="text-red-600">{errorMessage}</span>}

                {/* Email */}
                <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-500 tracking-wider mb-1.5">
                        YOUR NAME
                    </label>
                    <div className="relative">
                        <User
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                        />
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>
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
                            type={isSecured ? 'password' : 'text'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        {pwValid && (
                            <button type="button" className="cursor-pointer" onClick={() => {
                                setIsSecured((v) => !v);

                            }}>
                                {
                                    isSecured ? (
                                        <EyeIcon
                                            size={18}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                                        />
                                    ) : (
                                        <EyeOff
                                            size={18}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                                        />
                                    )
                                }

                            </button>

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
                            type={isSecured ? 'password' : 'text'}
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        {pwValid && (
                            <button type="button" className="cursor-pointer" onClick={() => {
                                setIsSecured((v) => !v);

                            }}>
                                {
                                    isSecured ? (
                                        <EyeIcon
                                            size={18}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                                        />
                                    ) : (
                                        <EyeOff
                                            size={18}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                                        />
                                    )
                                }
                            </button>
                        )}
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={handleSubmit}
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

            </form>
        </div>
    );
}
