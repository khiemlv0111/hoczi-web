'use client'

import { useFileUpload } from "@/data/hooks/useFileUpload";
import { BookService } from "@/data/services/book.service";
import { QuestionService } from "@/data/services/question.service";
import { UserService } from "@/data/services/user.service";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Topic = {
    id: number;
    name: string;
    slug: string;
    description?: string;
};

type BookTopic = {
    id: string;
    book_id: number;
    topic_id: number;
    topic: Topic;
};

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

type TopicGroup = {
    topic: Topic | null;
    books: Book[];
};

function groupByTopic(books: Book[]): TopicGroup[] {
    const map = new Map<number | 'none', TopicGroup>();

    books.forEach((book) => {
        const primaryTopic = book.book_topics?.[0]?.topic ?? null;
        const key = primaryTopic ? primaryTopic.id : 'none';

        if (!map.has(key)) {
            map.set(key, { topic: primaryTopic, books: [] });
        }
        map.get(key)!.books.push(book);
    });

    // sort: named topics first, uncategorized last
    return Array.from(map.values()).sort((a, b) => {
        if (!a.topic) return 1;
        if (!b.topic) return -1;
        return a.topic.name.localeCompare(b.topic.name);
    });
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        draft:     'bg-amber-50 text-amber-700 border-amber-200',
        published: 'bg-green-50 text-green-700 border-green-200',
        active:    'bg-green-50 text-green-700 border-green-200',
    };
    return (
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${styles[status] ?? 'bg-gray-50 text-gray-500 border-gray-200'}`}>
            {status}
        </span>
    );
}

function BookRow({ book }: { book: Book }) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group">
            {/* Cover */}
            {book.cover_image_url ? (
                <img
                    src={book.cover_image_url}
                    alt={book.title}
                    className="flex-shrink-0 w-10 h-13 object-cover rounded shadow-sm"
                    style={{ height: 52 }}
                />
            ) : (
                <div className="flex-shrink-0 w-10 rounded bg-gray-100 flex items-center justify-center text-gray-300 text-lg shadow-sm" style={{ height: 52 }}>
                    📖
                </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                    {book.title}
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">{book.slug}</p>
            </div>

            {/* Status */}
            <StatusBadge status={book.status} />

            {/* Book link */}
            {book.book_url && (
                <a
                    href={book.book_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 text-[11px] text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                    Open ↗
                </a>
            )}
        </div>
    );
}

const EMPTY_FORM = { title: '', description: '', book_url: '', cover_image_url: '', status: 'draft', is_public: false, topic_id: 0 };

export function AdminBooksByCategory({ categoryId }: { categoryId: number }) {
    const [groups, setGroups] = useState<TopicGroup[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [uploadingCover, setUploadingCover] = useState(false);
    const [error, setError] = useState('');
    const { upload: uploadPdf, uploading, progress: pdfProgress } = useFileUpload();
    const pdfRef = useRef<HTMLInputElement>(null);
    const coverRef = useRef<HTMLInputElement>(null);

    async function handlePdfUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const { publicUrl } = await uploadPdf(file);
            setForm((f) => ({ ...f, book_url: publicUrl }));
        } catch (err: any) {
            setError(err.message ?? 'PDF upload failed.');
        }
    }

    async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingCover(true);
        try {
            const res = await UserService.uploadFile(file);
            const url = res?.data?.url ?? res?.url ?? '';
            setForm((f) => ({ ...f, cover_image_url: url }));
        } catch {
            setError('Cover image upload failed.');
        } finally {
            setUploadingCover(false);
        }
    }

    useEffect(() => {
        QuestionService.getTopicList(categoryId).then((data) => setTopics(data ?? []));
        BookService.getBooksByCategory(categoryId)
            .then((res) => {
                const books: Book[] = res?.data ?? res ?? [];
                setTotal(books.length);
                setGroups(groupByTopic(books));
            })
            .finally(() => setLoading(false));
    }, []);

    async function refreshBooks() {
        const res = await BookService.getBooksByCategory(categoryId);
        const books: Book[] = res?.data ?? res ?? [];
        setTotal(books.length);
        setGroups(groupByTopic(books));
    }

    function openModal(topic?: Topic) {
        setModalOpen(true);
        setForm({ ...EMPTY_FORM, topic_id: topic?.id ?? 0 });
        setError('');
    }

    function closeModal() {
        setModalOpen(false);
        setError('');
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.title.trim()) { setError('Title is required.'); return; }
        if (!form.book_url.trim()) { setError('Book URL is required.'); return; }
        if (!form.topic_id) { setError('Please select a topic.'); return; }
        setSubmitting(true);
        setError('');
        try {
            await BookService.createBook({ ...form, category_id: categoryId });
            closeModal();
            await refreshBooks();
        } catch {
            setError('Failed to create book. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-lg font-semibold text-gray-900">Books by Category</h1>
                    {!loading && (
                        <p className="text-xs text-gray-500 mt-0.5">
                            {total} book{total !== 1 ? 's' : ''} · {groups.length} topic{groups.length !== 1 ? 's' : ''}
                        </p>
                    )}
                </div>
                <button
                    onClick={() => openModal()}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                    + Add Book
                </button>
            </div>

            {/* Skeleton */}
            {loading && (
                <div className="space-y-4 animate-pulse">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                                <div className="h-3 bg-gray-200 rounded w-32" />
                            </div>
                            {[1, 2, 3].map((j) => (
                                <div key={j} className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 last:border-0">
                                    <div className="w-10 bg-gray-100 rounded flex-shrink-0" style={{ height: 52 }} />
                                    <div className="flex-1 space-y-1.5">
                                        <div className="h-3 bg-gray-100 rounded w-48" />
                                        <div className="h-2 bg-gray-100 rounded w-24" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Empty */}
            {!loading && groups.length === 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No books found for this category.
                </div>
            )}

            {/* Grouped list */}
            {!loading && groups.length > 0 && (
                <div className="space-y-4">
                    {groups.map((group) => (
                        <div key={group.topic?.id ?? 'none'} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            {/* Topic header */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
                                    {group.topic ? group.topic.name : 'Uncategorized'}
                                </span>
                                {group.topic?.description && (
                                    <span className="text-[11px] text-gray-400">— {group.topic.description}</span>
                                )}
                                <span className="text-[11px] text-gray-400">{group.books.length} book{group.books.length !== 1 ? 's' : ''}</span>
                                <button
                                    onClick={() => openModal(group.topic ?? undefined)}
                                    className="ml-auto text-[11px] font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
                                >
                                    + Add Book
                                </button>
                            </div>

                            {/* Books */}
                            {group.books.map((book) => (
                                <BookRow key={book.id} book={book} />
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* Create book modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
                            <h2 className="text-[15px] font-semibold text-gray-900">Add Book</h2>
                            <button onClick={closeModal} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4 overflow-y-auto">
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Topic <span className="text-red-500">*</span></label>
                                <select
                                    value={form.topic_id}
                                    onChange={(e) => setForm({ ...form, topic_id: Number(e.target.value) })}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                                >
                                    <option value={0}>— Select a topic —</option>
                                    {topics.map((t) => (
                                        <option key={t.id} value={t.id}>{t.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                                <input type="text" value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    placeholder="Book title"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">
                                    PDF File <span className="text-red-500">*</span>
                                </label>
                                <input
                                    ref={pdfRef}
                                    type="file"
                                    accept=".pdf,application/pdf"
                                    onChange={handlePdfUpload}
                                    className="hidden"
                                />
                                <button
                                    type="button"
                                    onClick={() => pdfRef.current?.click()}
                                    disabled={uploading}
                                    className="w-full flex items-center gap-2 px-3 py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 disabled:opacity-50 transition-colors"
                                >
                                    {uploading ? (
                                        <>
                                            <span className="animate-spin">⏳</span>
                                            <span>Uploading… {Math.round(pdfProgress)}%</span>
                                        </>
                                    ) : form.book_url ? (
                                        <>
                                            <span>📄</span>
                                            <span className="flex-1 truncate text-green-600 font-medium">{form.book_url.split('/').pop()}</span>
                                            <span className="text-[11px] text-gray-400 flex-shrink-0">Change</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>📤</span>
                                            <span>Click to upload PDF</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Cover Image</label>
                                <input
                                    ref={coverRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleCoverUpload}
                                    className="hidden"
                                />
                                {form.cover_image_url ? (
                                    <div className="relative inline-block">
                                        <img
                                            src={form.cover_image_url}
                                            alt="cover preview"
                                            className="h-28 rounded-lg border border-gray-200 object-cover shadow-sm"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => { setForm((f) => ({ ...f, cover_image_url: '' })); if (coverRef.current) coverRef.current.value = ''; }}
                                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-500 flex items-center justify-center text-xs shadow-sm"
                                        >
                                            ×
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => coverRef.current?.click()}
                                            className="absolute bottom-1.5 right-1.5 text-[10px] bg-black/50 text-white px-1.5 py-0.5 rounded"
                                        >
                                            Change
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => coverRef.current?.click()}
                                        disabled={uploadingCover}
                                        className="w-full flex items-center gap-2 px-3 py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 disabled:opacity-50 transition-colors"
                                    >
                                        {uploadingCover ? <><span className="animate-spin">⏳</span><span>Uploading…</span></> : <><span>🖼️</span><span>Click to upload cover image</span></>}
                                    </button>
                                )}
                            </div>

                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                                <textarea value={form.description}
                                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                                    placeholder="Short description (optional)"
                                    rows={2}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                                    <select value={form.status}
                                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white">
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                                <div className="flex items-end pb-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={form.is_public}
                                            onChange={(e) => setForm({ ...form, is_public: e.target.checked })}
                                            className="w-4 h-4 rounded border-gray-300 text-blue-500" />
                                        <span className="text-[12px] font-medium text-gray-700">Public</span>
                                    </label>
                                </div>
                            </div>

                            {error && <p className="text-xs text-red-500">{error}</p>}

                            <div className="flex justify-end gap-2 pt-1 flex-shrink-0">
                                <button type="button" onClick={closeModal}
                                    className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                                    Cancel
                                </button>
                                <button type="submit" disabled={submitting || uploading}
                                    className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60 transition-colors">
                                    {submitting ? 'Saving…' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
