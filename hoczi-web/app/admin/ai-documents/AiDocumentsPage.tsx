'use client'

import { CommonModal } from "@/app/components/modal/CommonModal";
import { PAGE_SIZE } from "@/data/config/constants";
import { AiService, apiErrorMessage, KnowledgeDocument } from "@/data/services/ai.service";
import { useEffect, useState } from "react";

const CONTENT_TYPES = ['textbook', 'workbook', 'answer_key', 'grammar', 'reading', 'vocabulary', 'other'];
const RIGHTS = [
    { value: 'owned', label: 'Owned by Hoczi' },
    { value: 'licensed', label: 'Licensed' },
    { value: 'permission_granted', label: 'Permission granted' },
    { value: 'public_domain', label: 'Public domain' },
];
const HSK_MAX: Record<string, number> = { hsk2: 6, hsk3: 9 };

const STATUS_STYLE: Record<string, string> = {
    pending: 'bg-gray-100 text-gray-600',
    processing: 'bg-blue-50 text-blue-700',
    ready: 'bg-green-50 text-green-700',
    failed: 'bg-red-50 text-red-600',
    deleting: 'bg-amber-50 text-amber-700',
};
const IN_PROGRESS = ['pending', 'processing', 'deleting'];

type UploadForm = {
    title: string;
    hsk_standard: string;
    hsk_level: string;
    edition: string;
    script: string;
    content_type: string;
    tenant_id: string;
    rights_status: string;
    rights_notes: string;
    rights_confirmed: boolean;
};

const emptyForm: UploadForm = {
    title: '', hsk_standard: 'hsk3', hsk_level: '1', edition: '', script: 'simplified',
    content_type: 'textbook', tenant_id: '', rights_status: '', rights_notes: '', rights_confirmed: false,
};

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

function formatSize(bytes?: number | null) {
    if (!bytes) return '—';
    return bytes > 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.ceil(bytes / 1024)} KB`;
}

export function AiDocumentsPage() {
    const [docs, setDocs] = useState<KnowledgeDocument[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    const [showUpload, setShowUpload] = useState(false);
    const [form, setForm] = useState<UploadForm>(emptyForm);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const [detail, setDetail] = useState<KnowledgeDocument | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<KnowledgeDocument | null>(null);
    const [busyId, setBusyId] = useState<number | null>(null);

    function fetchDocs(p: number, silent = false) {
        if (!silent) setLoading(true);
        AiService.getDocuments(p, PAGE_SIZE)
            .then((res) => {
                setDocs(Array.isArray(res?.data) ? res.data : []);
                setTotal(res?.total ?? 0);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }

    useEffect(() => { fetchDocs(page); }, [page]);

    // Refresh while ingestion or deletion is running.
    const hasRunning = docs.some((d) => IN_PROGRESS.includes(d.status));
    useEffect(() => {
        if (!hasRunning) return;
        const timer = setInterval(() => fetchDocs(page, true), 5000);
        return () => clearInterval(timer);
    }, [hasRunning, page]);

    function setField<K extends keyof UploadForm>(field: K, value: UploadForm[K]) {
        setForm((f) => ({ ...f, [field]: value }));
    }

    function closeUpload() {
        setShowUpload(false);
        setForm(emptyForm);
        setFile(null);
    }

    async function handleUpload(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!file) return;
        setUploading(true);
        try {
            await AiService.uploadAndRegister(file, {
                title: form.title,
                hsk_standard: form.hsk_standard,
                hsk_level: Number(form.hsk_level),
                edition: form.edition || undefined,
                script: form.script,
                content_type: form.content_type,
                tenant_id: form.tenant_id ? Number(form.tenant_id) : null,
                rights_status: form.rights_status,
                rights_notes: form.rights_notes || undefined,
            });
            closeUpload();
            setPage(1);
            fetchDocs(1);
        } catch (error) {
            alert(apiErrorMessage(error, error instanceof Error ? error.message : 'Upload failed.'));
        } finally {
            setUploading(false);
        }
    }

    async function openDetail(doc: KnowledgeDocument) {
        setDetail(doc);
        AiService.getDocument(doc.id).then(setDetail).catch(() => { });
    }

    async function handleRetry(doc: KnowledgeDocument, allowDuplicate = false) {
        setBusyId(doc.id);
        try {
            await AiService.retryDocument(doc.id, allowDuplicate);
            setDetail(null);
            fetchDocs(page, true);
        } catch (error) {
            alert(apiErrorMessage(error, 'Failed to retry.'));
        } finally {
            setBusyId(null);
        }
    }

    async function handleDelete() {
        if (!deleteTarget) return;
        setBusyId(deleteTarget.id);
        try {
            await AiService.deleteDocument(deleteTarget.id);
            setDeleteTarget(null);
            fetchDocs(page, true);
        } catch (error) {
            alert(apiErrorMessage(error, 'Failed to delete document.'));
        } finally {
            setBusyId(null);
        }
    }

    const handlePrev = () => { if (page > 1) setPage(page - 1); };
    const handleNext = () => { if (page < totalPages) setPage(page + 1); };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div>
                            <span className="text-[13px] font-medium text-gray-900">AI Source Documents</span>
                            <p className="text-[11px] text-gray-400">Approved HSK materials indexed for AI generation. Supported: PDF, .md, .txt</p>
                        </div>
                        <button
                            onClick={() => setShowUpload(true)}
                            className="text-[12px] px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            + Upload Document
                        </button>
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
                                        <th className="pb-2 pr-4 font-medium">Level</th>
                                        <th className="pb-2 pr-4 font-medium">Type</th>
                                        <th className="pb-2 pr-4 font-medium">Scope</th>
                                        <th className="pb-2 pr-4 font-medium">Size</th>
                                        <th className="pb-2 pr-4 font-medium">Status</th>
                                        <th className="pb-2 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {docs.length === 0 ? (
                                        <tr>
                                            <td colSpan={8} className="py-6 text-center text-gray-400 text-[12px]">
                                                No documents yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        docs.map((d) => (
                                            <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-2 pr-4 text-gray-400">{d.id}</td>
                                                <td className="py-2 pr-4 max-w-[220px]">
                                                    <button onClick={() => openDetail(d)} className="font-medium text-gray-900 truncate block max-w-full text-left hover:text-blue-600">
                                                        {d.title}
                                                    </button>
                                                    <span className="text-[11px] text-gray-400 truncate block">
                                                        {d.original_filename}{d.version > 1 ? ` · v${d.version}` : ''}
                                                    </span>
                                                </td>
                                                <td className="py-2 pr-4 text-[12px] text-gray-600 whitespace-nowrap">
                                                    {d.hsk_standard === 'hsk3' ? 'HSK 3.0' : 'HSK 2.0'} · L{d.hsk_level}
                                                </td>
                                                <td className="py-2 pr-4 text-[12px] text-gray-500">{d.content_type}</td>
                                                <td className="py-2 pr-4 text-[12px] text-gray-500">{d.tenant_id ? `Tenant #${d.tenant_id}` : 'System'}</td>
                                                <td className="py-2 pr-4 text-[12px] text-gray-500 whitespace-nowrap">{formatSize(d.size_bytes)}</td>
                                                <td className="py-2 pr-4">
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${STATUS_STYLE[d.status] ?? 'bg-gray-100 text-gray-500'}`}>
                                                        {d.status}
                                                    </span>
                                                    {d.error_message && (
                                                        <span className="block text-[11px] text-red-500 max-w-[220px] truncate" title={d.error_message}>
                                                            {d.error_message}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="py-2 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        {(d.status === 'failed' || (d.status === 'deleting' && d.error_message)) && (
                                                            <button
                                                                onClick={() => handleRetry(d)}
                                                                disabled={busyId === d.id}
                                                                className="text-[11px] px-3 py-1 rounded-md bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 transition-colors"
                                                            >
                                                                Retry
                                                            </button>
                                                        )}
                                                        {d.status !== 'deleting' && (
                                                            <button
                                                                onClick={() => setDeleteTarget(d)}
                                                                className="text-[11px] px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
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
                            <button onClick={handleNext} disabled={page >= totalPages}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upload Modal */}
            <CommonModal open={showUpload} onClose={closeUpload} title="Upload Source Document">
                <form onSubmit={handleUpload} className="flex flex-col gap-3 mt-4">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">File <span className="text-red-500">*</span></label>
                        <input required type="file" accept=".pdf,.md,.txt"
                            onChange={(e) => {
                                const f = e.target.files?.[0] ?? null;
                                setFile(f);
                                if (f && !form.title) setField('title', f.name.replace(/\.[^.]+$/, ''));
                            }}
                            className="w-full text-sm text-gray-600 file:mr-3 file:px-3 file:py-1.5 file:rounded-lg file:border-0 file:bg-gray-100 file:text-[12px]" />
                        <p className="text-[11px] text-gray-400 mt-1">
                            Scanned PDFs need OCR. If OCR is off, upload the extracted text as .md with &quot;[page N]&quot; lines.
                        </p>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                        <input required type="text" value={form.title} onChange={(e) => setField('title', e.target.value)}
                            className={inputClass} placeholder="HSK Standard Course 3" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">HSK standard</label>
                            <select value={form.hsk_standard}
                                onChange={(e) => {
                                    setField('hsk_standard', e.target.value);
                                    if (Number(form.hsk_level) > HSK_MAX[e.target.value]) setField('hsk_level', '1');
                                }}
                                className={inputClass}>
                                <option value="hsk3">HSK 3.0 (levels 1–9)</option>
                                <option value="hsk2">HSK 2.0 (levels 1–6)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Level</label>
                            <select value={form.hsk_level} onChange={(e) => setField('hsk_level', e.target.value)} className={inputClass}>
                                {Array.from({ length: HSK_MAX[form.hsk_standard] }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Content type</label>
                            <select value={form.content_type} onChange={(e) => setField('content_type', e.target.value)} className={inputClass}>
                                {CONTENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Script</label>
                            <select value={form.script} onChange={(e) => setField('script', e.target.value)} className={inputClass}>
                                <option value="simplified">Simplified</option>
                                <option value="traditional">Traditional</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Edition</label>
                            <input type="text" value={form.edition} onChange={(e) => setField('edition', e.target.value)}
                                className={inputClass} placeholder="2021" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Tenant ID</label>
                            <input type="number" min={1} value={form.tenant_id} onChange={(e) => setField('tenant_id', e.target.value)}
                                className={inputClass} placeholder="Empty = all tenants" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Rights basis <span className="text-red-500">*</span></label>
                            <select required value={form.rights_status} onChange={(e) => setField('rights_status', e.target.value)} className={inputClass}>
                                <option value="">Select...</option>
                                {RIGHTS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Rights notes</label>
                            <input type="text" value={form.rights_notes} onChange={(e) => setField('rights_notes', e.target.value)}
                                className={inputClass} placeholder="Contract / licence reference" />
                        </div>
                    </div>
                    <label className="flex items-start gap-2 text-[12px] text-gray-600">
                        <input required type="checkbox" checked={form.rights_confirmed}
                            onChange={(e) => setField('rights_confirmed', e.target.checked)} className="mt-0.5" />
                        I confirm Hoczi may upload this material to OpenAI for indexing and use it to generate learning content.
                    </label>
                    <div className="flex justify-end gap-2 mt-1">
                        <button type="button" onClick={closeUpload}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" disabled={uploading || !file}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                </form>
            </CommonModal>

            {/* Detail Modal */}
            <CommonModal open={!!detail} onClose={() => setDetail(null)} title={detail?.title ?? ''}>
                {detail && (
                    <div className="mt-3 flex flex-col gap-3 text-[12px] text-gray-600 max-h-[70vh] overflow-y-auto">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            <span>Status: <b className="text-gray-900">{detail.status}</b></span>
                            <span>File: {detail.original_filename} ({formatSize(detail.size_bytes)})</span>
                            <span>Level: {detail.hsk_standard.toUpperCase()} {detail.hsk_level}</span>
                            <span>Script: {detail.script}</span>
                            <span>Rights: {detail.rights_status}</span>
                            <span>Indexed: {detail.indexed_at ? new Date(detail.indexed_at).toLocaleString() : '—'}</span>
                        </div>
                        {detail.error_message && (
                            <div className="rounded-lg bg-red-50 text-red-700 px-3 py-2">{detail.error_message}</div>
                        )}
                        {detail.extraction_report && (
                            <div className="rounded-lg bg-gray-50 px-3 py-2">
                                <p className="font-medium text-gray-800 mb-1">Extraction</p>
                                <p>Format: {detail.extraction_report.format} · Pages: {detail.extraction_report.totalPages ?? '—'} · Characters: {detail.extraction_report.totalChars ?? '—'}</p>
                                {!!detail.extraction_report.ocrPages?.length && <p>OCR pages: {detail.extraction_report.ocrPages.join(', ')}</p>}
                                {!!detail.extraction_report.ocrFailedPages?.length && (
                                    <p className="text-amber-700">Pages still empty after OCR (check manually): {detail.extraction_report.ocrFailedPages.join(', ')}</p>
                                )}
                            </div>
                        )}
                        {!!detail.chunks?.length && (
                            <div>
                                <p className="font-medium text-gray-800 mb-1">Indexed parts ({detail.chunks.length})</p>
                                <div className="divide-y divide-gray-100">
                                    {detail.chunks.map((c) => (
                                        <div key={c.id} className="flex justify-between py-1">
                                            <span>Part {c.chunk_index + 1}{c.page_start !== null ? ` · pages ${c.page_start}–${c.page_end}` : ''} · {c.char_count} chars</span>
                                            <span className={c.status === 'indexed' ? 'text-green-600' : c.status === 'failed' ? 'text-red-600' : 'text-gray-500'}>
                                                {c.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {detail.status === 'failed' && (
                            <div className="flex justify-end gap-2">
                                {detail.error_message?.startsWith('Same file as document') && (
                                    <button onClick={() => handleRetry(detail, true)} disabled={busyId === detail.id}
                                        className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                                        Index anyway
                                    </button>
                                )}
                                <button onClick={() => handleRetry(detail)} disabled={busyId === detail.id}
                                    className="px-3 py-1.5 rounded-lg bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50">
                                    Retry
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </CommonModal>

            {/* Delete Confirm Modal */}
            <CommonModal open={!!deleteTarget} onClose={() => setDeleteTarget(null)} title="Delete Document">
                <div className="mt-3 flex flex-col gap-4">
                    <p className="text-sm text-gray-600">
                        Delete <span className="font-medium text-gray-900">{deleteTarget?.title}</span>? It is removed from AI search, from OpenAI storage and from S3.
                        Content already published from it is kept.
                    </p>
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={() => setDeleteTarget(null)}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="button" onClick={handleDelete} disabled={busyId === deleteTarget?.id}
                            className="px-4 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 disabled:opacity-60">
                            {busyId === deleteTarget?.id ? 'Deleting...' : 'Delete'}
                        </button>
                    </div>
                </div>
            </CommonModal>
        </>
    );
}
