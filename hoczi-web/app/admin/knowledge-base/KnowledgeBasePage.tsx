'use client'

import { CommonModal } from "@/app/components/modal/CommonModal";
import { PAGE_SIZE } from "@/data/config/constants";
import { KnowledgeBase, KnowledgeBaseService } from "@/data/services/knowledgeBase.service";
import { useEffect, useState } from "react";

type KnowledgeBaseForm = {
    title: string;
    description: string;
    content: string;
    category: string;
    status: string;
};

const emptyForm: KnowledgeBaseForm = {
    title: '', description: '', content: '', category: '', status: 'active',
};

export function KnowledgeBasePage() {
    const [items, setItems] = useState<KnowledgeBase[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    const [searchInput, setSearchInput] = useState('');
    const [search, setSearch] = useState('');

    // null = closed, 'new' = create, KnowledgeBase = edit
    const [editing, setEditing] = useState<KnowledgeBase | 'new' | null>(null);
    const [form, setForm] = useState<KnowledgeBaseForm>(emptyForm);
    const [saving, setSaving] = useState(false);

    const [deleteTarget, setDeleteTarget] = useState<KnowledgeBase | null>(null);
    const [deleting, setDeleting] = useState(false);

    function fetchItems(p: number, q: string) {
        setLoading(true);
        KnowledgeBaseService.getKnowledgeBases(p, PAGE_SIZE, q)
            .then((res) => {
                setItems(Array.isArray(res?.data) ? res.data : []);
                setTotal(res?.total ?? 0);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }

    useEffect(() => { fetchItems(page, search); }, [page, search]);

    function setField(field: keyof KnowledgeBaseForm, value: string) {
        setForm((f) => ({ ...f, [field]: value }));
    }

    function handleSearch(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setPage(1);
        setSearch(searchInput.trim());
    }

    function openCreateModal() {
        setForm(emptyForm);
        setEditing('new');
    }

    function openEditModal(kb: KnowledgeBase) {
        setForm({
            title: kb.title,
            description: kb.description ?? '',
            content: kb.content ?? '',
            category: kb.category ?? '',
            status: kb.status ?? 'active',
        });
        setEditing(kb);
    }

    function closeFormModal() {
        setEditing(null);
        setForm(emptyForm);
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!editing) return;
        setSaving(true);
        const payload = {
            title: form.title,
            content: form.content,
            description: form.description || undefined,
            category: form.category || undefined,
            status: form.status,
        };
        try {
            if (editing === 'new') {
                await KnowledgeBaseService.createKnowledgeBase(payload);
            } else {
                await KnowledgeBaseService.updateKnowledgeBase(editing.id, payload);
            }
            closeFormModal();
            fetchItems(page, search);
        } catch {
            alert(editing === 'new' ? 'Failed to create knowledge base.' : 'Failed to update knowledge base.');
        } finally {
            setSaving(false);
        }
    }

    async function handleDelete() {
        if (!deleteTarget) return;
        setDeleting(true);
        try {
            await KnowledgeBaseService.deleteKnowledgeBase(deleteTarget.id);
            setDeleteTarget(null);
            // Step back a page if we just removed the last item on this one
            if (items.length === 1 && page > 1) {
                setPage(page - 1);
            } else {
                fetchItems(page, search);
            }
        } catch {
            alert('Failed to delete knowledge base.');
        } finally {
            setDeleting(false);
        }
    }

    const handlePrev = () => { if (page > 1) setPage(page - 1); };
    const handleNext = () => { if (page < totalPages) setPage(page + 1); };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-[13px] font-medium text-gray-900">Knowledge Base</span>
                        <div className="flex items-center gap-2">
                            <form onSubmit={handleSearch} className="flex items-center gap-1">
                                <input type="text" value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Search by title..." />
                                <button type="submit"
                                    className="text-[12px] px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                                    Search
                                </button>
                            </form>
                            <button
                                onClick={openCreateModal}
                                className="text-[12px] px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                + New Knowledge
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-8 text-sm text-gray-400">Loading...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                        <th className="pb-2 pr-4 font-medium">#</th>
                                        <th className="pb-2 pr-4 font-medium">Title</th>
                                        <th className="pb-2 pr-4 font-medium">Category</th>
                                        <th className="pb-2 pr-4 font-medium">Description</th>
                                        <th className="pb-2 pr-4 font-medium">Status</th>
                                        <th className="pb-2 pr-4 font-medium">Updated</th>
                                        <th className="pb-2 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {items.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="py-6 text-center text-gray-400 text-[12px]">
                                                No knowledge base found.
                                            </td>
                                        </tr>
                                    ) : (
                                        items.map((kb, idx) => (
                                            <tr key={kb.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-2 pr-4 text-gray-400">{(page - 1) * PAGE_SIZE + idx + 1}</td>
                                                <td className="py-2 pr-4 font-medium text-gray-900 max-w-[200px] truncate">{kb.title}</td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[120px] truncate">{kb.category ?? '—'}</td>
                                                <td className="py-2 pr-4 text-gray-400 max-w-[240px] truncate">{kb.description || '—'}</td>
                                                <td className="py-2 pr-4">
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${kb.status === 'active'
                                                        ? 'bg-green-50 text-green-700'
                                                        : 'bg-gray-100 text-gray-500'}`}>
                                                        {kb.status ?? 'active'}
                                                    </span>
                                                </td>
                                                <td className="py-2 pr-4 text-gray-500 text-[12px] whitespace-nowrap">
                                                    {kb.updated_at ? new Date(kb.updated_at).toLocaleDateString() : '—'}
                                                </td>
                                                <td className="py-2 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button
                                                            onClick={() => openEditModal(kb)}
                                                            className="text-[11px] px-3 py-1 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => setDeleteTarget(kb)}
                                                            className="text-[11px] px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <span className="text-[12px] text-gray-400">
                            Page {page} of {totalPages} &middot; {total} total
                        </span>
                        <div className="flex items-center gap-1">
                            <button onClick={handlePrev} disabled={page <= 1}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                Previous
                            </button>
                            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                                const pageNum = totalPages <= 7 ? i + 1
                                    : page <= 4 ? i + 1
                                        : page >= totalPages - 3 ? totalPages - 6 + i
                                            : page - 3 + i;
                                return (
                                    <button key={pageNum} onClick={() => setPage(pageNum)}
                                        className={`w-7 h-7 text-[12px] rounded-md border transition-colors ${page === pageNum
                                            ? 'bg-blue-500 border-blue-500 text-white'
                                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                        {pageNum}
                                    </button>
                                );
                            })}
                            <button onClick={handleNext} disabled={page >= totalPages}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create / Edit Modal */}
            <CommonModal open={!!editing} onClose={closeFormModal}
                title={editing === 'new' ? 'New Knowledge' : 'Edit Knowledge'}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                        <input required type="text" value={form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Knowledge title" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Category</label>
                            <input type="text" value={form.category}
                                onChange={(e) => setField('category', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="e.g. Grammar" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                            <select value={form.status} onChange={(e) => setField('status', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                        <textarea value={form.description} onChange={(e) => setField('description', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            rows={2} placeholder="Optional description" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Content <span className="text-red-500">*</span></label>
                        <textarea required value={form.content} onChange={(e) => setField('content', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={8} placeholder="Knowledge content" />
                    </div>
                    <div className="flex justify-end gap-2 mt-1">
                        <button type="button" onClick={closeFormModal}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" disabled={saving}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                            {saving ? 'Saving...' : editing === 'new' ? 'Create' : 'Save'}
                        </button>
                    </div>
                </form>
            </CommonModal>

            {/* Delete Confirm Modal */}
            <CommonModal open={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Knowledge">
                <div className="mt-3 flex flex-col gap-4">
                    <p className="text-sm text-gray-600">
                        Are you sure you want to delete <span className="font-medium text-gray-900">{deleteTarget?.title}</span>? This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setDeleteTarget(null)}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="button" onClick={handleDelete} disabled={deleting}
                            className="px-4 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 disabled:opacity-60">
                            {deleting ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                </div>
            </CommonModal>
        </>
    );
}
