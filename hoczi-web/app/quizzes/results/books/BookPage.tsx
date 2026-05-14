'use client'

import { QuestionService } from "@/data/services/question.service";
import Link from "next/link";
import { useEffect, useState } from "react";

type Category = { id: number; name: string };

const PALETTE = [
    { gradient: 'from-sky-400 to-blue-600',       bg: 'bg-sky-50',     text: 'text-sky-700',     border: 'border-sky-200',     emoji: '📘' },
    { gradient: 'from-rose-500 to-red-600',        bg: 'bg-rose-50',    text: 'text-rose-700',    border: 'border-rose-200',    emoji: '📕' },
    { gradient: 'from-emerald-400 to-green-600',   bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', emoji: '📗' },
    { gradient: 'from-violet-500 to-purple-700',   bg: 'bg-violet-50',  text: 'text-violet-700',  border: 'border-violet-200',  emoji: '📙' },
    { gradient: 'from-amber-400 to-orange-500',    bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   emoji: '📒' },
    { gradient: 'from-teal-400 to-cyan-600',       bg: 'bg-teal-50',    text: 'text-teal-700',    border: 'border-teal-200',    emoji: '📓' },
];

function getPalette(index: number) {
    return PALETTE[index % PALETTE.length];
}

export function BookPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        QuestionService.getCategoryList()
            .then((res) => setCategories(res ?? []))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Books</h1>
                <p className="text-sm text-gray-500">Browse books by category.</p>
            </div>

            {/* Skeleton */}
            {loading && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl mb-3" />
                            <div className="h-4 bg-gray-100 rounded w-2/3" />
                        </div>
                    ))}
                </div>
            )}

            {/* Empty */}
            {!loading && categories.length === 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                    <p className="text-3xl mb-2">📭</p>
                    <p className="text-sm text-gray-500">No categories found.</p>
                </div>
            )}

            {/* Cards */}
            {!loading && categories.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {categories.map((cat, i) => {
                        const p = getPalette(i);
                        return (
                            <Link
                                key={cat.id}
                                href={`/quizzes/results/books/flip-books/books-by-category/${cat.id}`}
                                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                {/* Gradient strip */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

                                <div className="p-5">
                                    {/* Icon */}
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-xl mb-3 shadow-sm`}>
                                        {p.emoji}
                                    </div>

                                    {/* Name */}
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                                        {cat.name}
                                    </p>

                                    {/* CTA */}
                                    <p className={`text-[11px] font-medium mt-2 ${p.text}`}>
                                        Browse books →
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
