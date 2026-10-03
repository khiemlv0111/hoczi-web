'use client'

import { AiDraft, AiService, apiErrorMessage, Citation, DraftItem, DraftOutput } from "@/data/services/ai.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DRAFT_STATUS_STYLE, TASK_LABEL } from "../AiStudioPage";

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

function CitationList({ citations }: { citations: Citation[] }) {
    if (!citations?.length) return <span className="text-[11px] text-amber-600">No verified source</span>;
    return (
        <span className="text-[11px] text-gray-400">
            Source: {citations.map((c) => `${c.documentId}${c.page ? ` p.${c.page}` : ''}${c.section ? ` (${c.section})` : ''}`).join('; ')}
        </span>
    );
}

function ItemView({ item, index }: { item: DraftItem; index: number }) {
    return (
        <div className="border border-gray-100 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{item.type}</span>
                <span className="text-[12px] text-gray-400">#{index + 1}</span>
            </div>
            <p className="text-sm text-gray-900 whitespace-pre-wrap">{item.prompt}</p>
            {item.pinyin && <p className="text-[12px] text-gray-500">{item.pinyin}</p>}
            {item.type === 'sentence_ordering' ? (
                <p className="text-[12px] text-gray-600 mt-1">
                    Segments: {item.options.map((o, i) => `${i}. ${o}`).join('  ')}<br />
                    Answer: <b>{item.correctOrder.map((i) => item.options[i]).join(' ')}</b>
                </p>
            ) : item.type === 'fill_in_blank' ? (
                <p className="text-[12px] text-gray-600 mt-1">Answer: <b>{item.correctAnswer}</b></p>
            ) : (
                <ul className="mt-1 text-[12px]">
                    {item.options.map((o, i) => (
                        <li key={i} className={i === item.correctOptionIndex ? 'text-green-700 font-medium' : 'text-gray-600'}>
                            {String.fromCharCode(65 + i)}. {o} {i === item.correctOptionIndex && '✓'}
                        </li>
                    ))}
                </ul>
            )}
            <p className="text-[12px] text-gray-500 mt-1 whitespace-pre-wrap">{item.explanation}</p>
            <CitationList citations={item.citations} />
        </div>
    );
}

export function AiDraftDetailPage({ id }: { id: number }) {
    const router = useRouter();
    const [draft, setDraft] = useState<AiDraft | null>(null);
    const [loading, setLoading] = useState(true);
    const [busy, setBusy] = useState('');
    const [notes, setNotes] = useState('');

    const [editing, setEditing] = useState(false);
    const [json, setJson] = useState('');
    const [jsonError, setJsonError] = useState('');

    const [publish, setPublish] = useState({ category_id: '', topic_id: '', grade_id: '' });

    useEffect(() => {
        setLoading(true);
        AiService.getDraft(id)
            .then(setDraft)
            .catch(() => setDraft(null))
            .finally(() => setLoading(false));
    }, [id]);

    async function run(action: string, fn: () => Promise<AiDraft>) {
        setBusy(action);
        try {
            const updated = await fn();
            if (updated.id !== id) {
                router.push(`/admin/ai-studio/${updated.id}`);
                return;
            }
            setDraft(updated);
            setEditing(false);
        } catch (error) {
            alert(apiErrorMessage(error, `Failed to ${action}.`));
        } finally {
            setBusy('');
        }
    }

    function startEdit() {
        setJson(JSON.stringify(draft?.output ?? {}, null, 2));
        setJsonError('');
        setEditing(true);
    }

    function saveEdit() {
        let parsed: DraftOutput;
        try {
            parsed = JSON.parse(json);
        } catch (e) {
            setJsonError(e instanceof Error ? e.message : 'Invalid JSON');
            return;
        }
        run('save', () => AiService.updateDraft(id, parsed));
    }

    if (loading) return <div className="text-center py-8 text-sm text-gray-400">Loading...</div>;
    if (!draft) return <div className="text-center py-8 text-sm text-gray-400">Draft not found.</div>;

    const out: DraftOutput = draft.output ?? {};
    const items: DraftItem[] = Array.isArray(out.items) ? out.items : [];
    const p = draft.request_params ?? {};
    const publishable = items.filter((i) => i.type === 'multiple_choice' || i.type === 'true_false').length;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 items-start">
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <Link href="/admin/ai-studio" className="text-[12px] text-blue-600 hover:underline">← AI Studio</Link>
                        <h1 className="text-[15px] font-semibold text-gray-900">{out.title || '(untitled)'}</h1>
                        <p className="text-[12px] text-gray-500">
                            {TASK_LABEL[draft.task_type] ?? draft.task_type} · {String(p.hsk_standard).toUpperCase()} level {p.hsk_level} · {p.script} · {p.difficulty}
                        </p>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${DRAFT_STATUS_STYLE[draft.status]}`}>{draft.status}</span>
                </div>

                {draft.insufficient_evidence && (
                    <div className="rounded-lg bg-amber-50 text-amber-800 px-3 py-2 text-[12px]">
                        The indexed sources did not support this request. Regenerate with a different topic or documents, or upload the missing material.
                    </div>
                )}

                {editing ? (
                    <div className="flex flex-col gap-2">
                        <p className="text-[12px] text-gray-500">Edit the structured output. Citations are re-checked against the sources retrieved at generation time.</p>
                        <textarea value={json} onChange={(e) => setJson(e.target.value)} rows={24}
                            className={`${inputClass} font-mono text-[12px]`} spellCheck={false} />
                        {jsonError && <p className="text-[12px] text-red-600">{jsonError}</p>}
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setEditing(false)} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">Cancel</button>
                            <button onClick={saveEdit} disabled={busy === 'save'}
                                className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                                {busy === 'save' ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {out.instructions && <p className="text-sm text-gray-700">{out.instructions}</p>}
                        {out.passage && (
                            <div className="rounded-lg bg-gray-50 px-3 py-2">
                                <p className="text-[15px] leading-7 text-gray-900 whitespace-pre-wrap">{out.passage}</p>
                                {out.passagePinyin && <p className="text-[12px] text-gray-500 mt-1 whitespace-pre-wrap">{out.passagePinyin}</p>}
                                {out.translation && <p className="text-[12px] text-gray-600 mt-1 whitespace-pre-wrap">{out.translation}</p>}
                            </div>
                        )}
                        {out.grammarPoint && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-gray-900">{out.grammarPoint}</p>
                                <p className="text-[12px] text-gray-500">{out.structure}</p>
                                <p className="text-sm text-gray-700 whitespace-pre-wrap">{out.explanation}</p>
                            </div>
                        )}
                        {Array.isArray(out.vocabulary) && out.vocabulary.length > 0 && (
                            <table className="text-[12px]">
                                <tbody>
                                    {out.vocabulary.map((v, i) => (
                                        <tr key={i}><td className="pr-3 text-gray-900">{v.word}</td><td className="pr-3 text-gray-500">{v.pinyin}</td><td className="text-gray-600">{v.meaning}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        {Array.isArray(out.examples) && out.examples.length > 0 && (
                            <ul className="text-[12px] text-gray-700 list-disc pl-5">
                                {out.examples.map((ex, i) => (
                                    <li key={i}>{ex.sentence} {ex.pinyin && <span className="text-gray-400">({ex.pinyin})</span>} — {ex.translation}</li>
                                ))}
                            </ul>
                        )}
                        {Array.isArray(out.commonMistakes) && out.commonMistakes.length > 0 && (
                            <div className="text-[12px] text-gray-600">
                                <p className="font-medium text-gray-800">Common mistakes</p>
                                <ul className="list-disc pl-5">{out.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}</ul>
                            </div>
                        )}
                        <div className="flex flex-col gap-2">
                            {items.map((item, i) => <ItemView key={i} item={item} index={i} />)}
                        </div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2 text-[12px]">
                    <p className="text-[13px] font-medium text-gray-900">Automated checks</p>
                    {draft.validation_issues.length === 0 ? (
                        <p className="text-green-600">No issues found.</p>
                    ) : (
                        <ul className="list-disc pl-4 text-amber-700">
                            {draft.validation_issues.map((issue, i) => <li key={i}>{issue}</li>)}
                        </ul>
                    )}
                    <p className="text-gray-400">Checks do not prove correctness. Review every answer key.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-1 text-[12px]">
                    <p className="text-[13px] font-medium text-gray-900 mb-1">Sources retrieved</p>
                    {draft.retrieval.length === 0 ? <p className="text-gray-400">None</p> : draft.retrieval.map((r, i) => (
                        <p key={i} className="text-gray-600">
                            {r.documentId} · {r.title ?? ''}{r.pageStart !== null ? ` · p.${r.pageStart}–${r.pageEnd}` : ''}
                            {r.score !== null && <span className="text-gray-400"> ({r.score.toFixed(2)})</span>}
                        </p>
                    ))}
                    <p className="text-gray-400 mt-1">{draft.model} · {draft.prompt_version}{draft.edited ? ' · edited' : ''}</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                    <p className="text-[13px] font-medium text-gray-900">Review</p>
                    {draft.review_notes && <p className="text-[12px] text-gray-600">Notes: {draft.review_notes}</p>}

                    {draft.status === 'draft' && (
                        <>
                            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2}
                                className={`${inputClass} resize-none`} placeholder="Review notes (optional)" />
                            <div className="grid grid-cols-2 gap-2">
                                <button onClick={() => run('approve', () => AiService.approveDraft(id, notes || undefined))}
                                    disabled={!!busy || draft.insufficient_evidence}
                                    className="px-3 py-1.5 text-[12px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">
                                    {busy === 'approve' ? '...' : 'Approve'}
                                </button>
                                <button onClick={() => run('reject', () => AiService.rejectDraft(id, notes || undefined))} disabled={!!busy}
                                    className="px-3 py-1.5 text-[12px] rounded-lg bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50">
                                    {busy === 'reject' ? '...' : 'Reject'}
                                </button>
                                <button onClick={startEdit} disabled={!!busy || editing}
                                    className="px-3 py-1.5 text-[12px] rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                                    Edit
                                </button>
                                <button onClick={() => run('regenerate', () => AiService.regenerateDraft(id))} disabled={!!busy}
                                    className="px-3 py-1.5 text-[12px] rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                                    {busy === 'regenerate' ? 'Generating…' : 'Regenerate'}
                                </button>
                            </div>
                        </>
                    )}

                    {draft.status === 'approved' && (
                        <>
                            <p className="text-[12px] text-gray-500">
                                Publish {publishable} of {items.length} item(s) to the question bank. Other item types are skipped.
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                                <input type="number" placeholder="Category ID" value={publish.category_id}
                                    onChange={(e) => setPublish({ ...publish, category_id: e.target.value })} className={inputClass} />
                                <input type="number" placeholder="Topic ID" value={publish.topic_id}
                                    onChange={(e) => setPublish({ ...publish, topic_id: e.target.value })} className={inputClass} />
                                <input type="number" placeholder="Grade ID" value={publish.grade_id}
                                    onChange={(e) => setPublish({ ...publish, grade_id: e.target.value })} className={inputClass} />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => run('publish', () => AiService.publishDraft(id, {
                                        category_id: publish.category_id ? Number(publish.category_id) : undefined,
                                        topic_id: publish.topic_id ? Number(publish.topic_id) : undefined,
                                        grade_id: publish.grade_id ? Number(publish.grade_id) : undefined,
                                    }))}
                                    disabled={!!busy || publishable === 0}
                                    className="px-3 py-1.5 text-[12px] rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50">
                                    {busy === 'publish' ? '...' : 'Publish'}
                                </button>
                                <button onClick={() => run('reject', () => AiService.rejectDraft(id))} disabled={!!busy}
                                    className="px-3 py-1.5 text-[12px] rounded-lg bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50">
                                    Reject
                                </button>
                            </div>
                        </>
                    )}

                    {draft.status === 'published' && draft.published_refs && (
                        <div className="text-[12px] text-gray-600">
                            <p>Published question IDs: {draft.published_refs.questionIds.join(', ')}</p>
                            {draft.published_refs.skipped.length > 0 && (
                                <p className="text-gray-400">Skipped: {draft.published_refs.skipped.map((s) => `#${s.index + 1} ${s.type}`).join(', ')}</p>
                            )}
                        </div>
                    )}

                    {draft.status === 'rejected' && (
                        <button onClick={() => run('regenerate', () => AiService.regenerateDraft(id))} disabled={!!busy}
                            className="px-3 py-1.5 text-[12px] rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                            {busy === 'regenerate' ? 'Generating…' : 'Regenerate'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
