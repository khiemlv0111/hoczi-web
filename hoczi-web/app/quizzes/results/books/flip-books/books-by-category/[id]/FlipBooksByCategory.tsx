'use client'

import { BookService } from "@/data/services/book.service";
import Link from "next/link";
import { useEffect, useState } from "react";

type Topic = { id: number; name: string; slug: string; description?: string };
type BookTopic = { id: string; book_id: number; topic_id: number; topic: Topic };
type Book = {
    id: number;
    title: string;
    slug: string;
    book_url: string;
    cover_image_url?: string;
    description?: string | null;
    status: string;
    is_public: boolean;
    book_topics: BookTopic[];
};
type TopicGroup = { topic: Topic | null; books: Book[] };

function groupByTopic(books: Book[]): TopicGroup[] {
    const map = new Map<number | 'none', TopicGroup>();
    books.forEach((book) => {
        const topic = book.book_topics?.[0]?.topic ?? null;
        const key = topic ? topic.id : 'none';
        if (!map.has(key)) map.set(key, { topic, books: [] });
        map.get(key)!.books.push(book);
    });
    return Array.from(map.values()).sort((a, b) => {
        if (!a.topic) return 1;
        if (!b.topic) return -1;
        return a.topic.name.localeCompare(b.topic.name);
    });
}

const COVER_COLORS = [
    'from-sky-400 to-blue-600',
    'from-rose-400 to-pink-600',
    'from-emerald-400 to-teal-600',
    'from-violet-400 to-purple-600',
    'from-amber-400 to-orange-500',
    'from-cyan-400 to-blue-500',
];

function BookCard({ book, colorIndex }: { book: Book; colorIndex: number }) {
    const gradient = COVER_COLORS[colorIndex % COVER_COLORS.length];

    return (
        <Link
            href={`/quizzes/results/books/flip-books/${book.id}`}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        >
            {/* Cover */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                {book.cover_image_url ? (
                    <img
                        src={book.cover_image_url}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 p-4`}>
                        <span className="text-4xl">📖</span>
                        <p className="text-white text-center text-xs font-semibold leading-snug line-clamp-3 opacity-90">
                            {book.title}
                        </p>
                    </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
            </div>

            {/* Info */}
            <div className="p-3 flex-1 flex flex-col">
                <p className="text-[13px] font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                    {book.title}
                </p>
                {book.description && (
                    <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {book.description}
                    </p>
                )}
                <div className="mt-auto pt-2">
                    <span className="text-[11px] font-semibold text-blue-500 group-hover:text-blue-700 transition-colors">
                        Read →
                    </span>
                </div>
            </div>
        </Link>
    );
}

function SkeletonCard() {
    return (
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 animate-pulse">
            <div className="aspect-[3/4] bg-gray-100 w-full" />
            <div className="p-3 space-y-2">
                <div className="h-3 bg-gray-100 rounded w-3/4" />
                <div className="h-2 bg-gray-100 rounded w-1/2" />
            </div>
        </div>
    );
}

export function FlipBookByCategoryPage({ categoryId }: { categoryId: number }) {
    const [groups, setGroups] = useState<TopicGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        BookService.getBooksByCategory(categoryId)
            .then((res) => {
                const books: Book[] = res?.data ?? res ?? [];
                setGroups(groupByTopic(books));
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Page header */}
            <div className="mb-10">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Books</h1>
                <p className="text-sm text-gray-500">Pick a book and start reading.</p>

                <Link
                    href={`/quizzes/results/books/books-by-category/${categoryId}`}
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-semibold shadow-md hover:from-violet-600 hover:to-indigo-600 hover:shadow-lg transition-all duration-200"
                >
                    <span>📖</span>
                    <span>Read Book Normal</span>
                </Link>


            </div>

            {/* Skeleton */}
            {loading && (
                <div className="space-y-10">
                    {[1, 2].map((i) => (
                        <div key={i}>
                            <div className="h-3 bg-gray-200 rounded w-28 mb-4 animate-pulse" />
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((j) => <SkeletonCard key={j} />)}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty */}
            {!loading && groups.length === 0 && (
                <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
                    <p className="text-4xl mb-3">📭</p>
                    <p className="text-sm text-gray-500">No books found for this category.</p>
                </div>
            )}

            {/* Topic sections */}
            {!loading && groups.length > 0 && (
                <div className="space-y-12">
                    {groups.map((group) => (
                        <div key={group.topic?.id ?? 'none'}>
                            {/* Topic header */}
                            <div className="flex items-center gap-3 mb-5">
                                <h2 className="text-base font-bold text-gray-900 whitespace-nowrap">
                                    {group.topic ? group.topic.name : 'Uncategorized'}
                                </h2>
                                {group.topic?.description && (
                                    <p className="text-xs text-gray-400 truncate hidden sm:block">{group.topic.description}</p>
                                )}
                                <div className="flex-1 h-px bg-gray-100" />
                                <span className="text-xs text-gray-400 flex-shrink-0">
                                    {group.books.length} book{group.books.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            {/* Book cards grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {group.books.map((book, i) => (
                                    <BookCard key={book.id} book={book} colorIndex={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
