'use client';

import { useAppData } from "@/app/context/AppContext";
import { UserService } from "@/data/services/user.service";
import { CheckCircle, Loader2, Mail, MessageSquare, Send, User } from "lucide-react";
import { useEffect, useState } from "react";

export function RegisterServicePage() {
    const { user } = useAppData();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name ?? '');
            setEmail(user.email ?? '');
        }
    }, [user]);

    const registerService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await UserService.registerService({ name, email, content });
            setSuccess(true);
            setContent('');
        } catch {
            setError('There was an error sending your request. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="max-w-lg mx-auto mt-12 bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={28} className="text-green-500" />
                </div>
                <h2 className="text-[16px] font-semibold text-gray-900">Request sent!</h2>
                <p className="text-[13px] text-gray-500">
                    We've received your request and will get back to you at <span className="font-medium text-gray-700">{email}</span> shortly.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 text-[13px] text-blue-600 hover:underline"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Send size={18} className="text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-[15px] font-semibold text-gray-900">Register Service</h1>
                        <p className="text-[12px] text-gray-400">Fill in your details and we'll be in touch</p>
                    </div>
                </div>

                <form onSubmit={registerService} className="space-y-4">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">
                            Name
                        </label>
                        <div className="relative">
                            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                placeholder="Your full name"
                                className="w-full pl-9 pr-3 py-2.5 text-[13px] border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">
                            Email
                        </label>
                        <div className="relative">
                            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="w-full pl-9 pr-3 py-2.5 text-[13px] border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">
                            Message
                        </label>
                        <div className="relative">
                            <MessageSquare size={14} className="absolute left-3 top-3.5 text-gray-400" />
                            <textarea
                                name="content"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                required
                                rows={5}
                                placeholder="Fill in the details of Company name, website and other information about the service you need..."
                                className="w-full pl-9 pr-3 py-2.5 text-[13px] border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-[12px] text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-[13px] font-medium py-2.5 rounded-lg transition"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                Sending…
                            </>
                        ) : (
                            <>
                                <Send size={14} />
                                Send Request
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
