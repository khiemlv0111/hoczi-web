'use client'

import { QuestionService } from "@/data/services/question.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Category = { id: number; name: string };

export function AdminBookPage() {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        QuestionService.getCategoryList()
            .then((res) => setCategories(res ?? []))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-lg font-semibold text-gray-900">Books</h1>
                    <p className="text-xs text-gray-500 mt-0.5">Browse and manage books by category.</p>
                </div>
            </div>

            {loading ? (
                <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 animate-pulse">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3">
                            <div className="w-7 h-7 rounded-lg bg-gray-100" />
                            <div className="h-3 bg-gray-100 rounded w-40" />
                        </div>
                    ))}
                </div>
            ) : categories.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No categories found.
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    {categories.map((cat, i) => (
                        <button
                            key={cat.id}
                            onClick={() => router.push(`/admin/books/books-by-category/${cat.id}`)}
                            className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-left group"
                        >
                            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                                {i + 1}
                            </span>
                            <span className="flex-1 text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                {cat.name}
                            </span>
                            <span className="text-gray-300 group-hover:text-blue-400 transition-colors">→</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
