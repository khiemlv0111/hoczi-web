'use client'

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { CommonModal } from "@/app/components/modal/CommonModal";
import {
    AdminEmailService, BroadcastSummary, EMAIL_PATTERN, MAX_RECIPIENTS, RecipientOption, RichDoc,
} from "@/data/services/adminEmail.service";
import { EmailEditor } from "./EmailEditor";
import { buttonClass, inputClass, labelClass, primaryButtonClass, useTr } from "./shared";

function newRequestId() {
    return crypto.randomUUID();
}

function parseEmails(raw: string) {
    return raw.split(/[,;\n]+/).map((e) => e.trim().toLowerCase()).filter(Boolean);
}

function apiError(error: unknown) {
    if (axios.isAxiosError(error)) return error.response?.data as { message?: string; invalid_emails?: string[]; invalid_user_ids?: number[] } | undefined;
    return undefined;
}

export function ComposeEmail({ onSent }: { onSent: (broadcast: BroadcastSummary) => void }) {
    const tr = useTr();
    const [rawEmails, setRawEmails] = useState('');
    const [selected, setSelected] = useState<RecipientOption[]>([]);
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<RecipientOption[]>([]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState<{ doc: RichDoc; empty: boolean }>({ doc: { type: 'doc' }, empty: true });
    // New id per compose: a double click or retry of the same compose creates only one send.
    const [requestId, setRequestId] = useState(newRequestId);
    const [editorKey, setEditorKey] = useState(0);
    const [preview, setPreview] = useState<string | null>(null);
    const [busy, setBusy] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    // Debounced user search (server limits it to the admin's tenant)
    useEffect(() => {
        const handle = setTimeout(() => {
            AdminEmailService.searchRecipients(search).then(setOptions).catch(() => setOptions([]));
        }, 300);
        return () => clearTimeout(handle);
    }, [search]);

    const typed = useMemo(() => parseEmails(rawEmails), [rawEmails]);
    const invalidTyped = useMemo(() => [...new Set(typed.filter((e) => e.length > 254 || !EMAIL_PATTERN.test(e)))], [typed]);
    const recipientCount = useMemo(() => {
        const all = new Set(typed.filter((e) => EMAIL_PATTERN.test(e)));
        selected.forEach((u) => all.add(u.email.trim().toLowerCase()));
        return all.size;
    }, [typed, selected]);

    const subjectOk = subject.trim().length > 0 && subject.length <= 200;
    const canSend = !busy && subjectOk && !content.empty && recipientCount > 0 && recipientCount <= MAX_RECIPIENTS && !invalidTyped.length;

    const addUser = (u: RecipientOption) => {
        if (!u.has_valid_email || selected.some((s) => s.id === u.id)) return;
        setSelected((list) => [...list, u]);
    };

    const showPreview = async () => {
        setServerError(null);
        try {
            const res = await AdminEmailService.preview(subject, content.doc);
            setPreview(res.html);
        } catch (error) {
            setServerError(apiError(error)?.message ?? tr('error_generic'));
        }
    };

    const send = async () => {
        if (!canSend) return;
        if (!window.confirm(tr('confirm_send').replace('{n}', String(recipientCount)))) return;
        setBusy(true);
        setServerError(null);
        try {
            const broadcast = await AdminEmailService.create({
                client_request_id: requestId,
                subject,
                content: content.doc,
                emails: typed,
                user_ids: selected.map((u) => u.id),
            });
            // Start a fresh compose
            setRequestId(newRequestId());
            setRawEmails('');
            setSelected([]);
            setSubject('');
            setContent({ doc: { type: 'doc' }, empty: true });
            setEditorKey((k) => k + 1);
            onSent(broadcast);
        } catch (error) {
            const data = apiError(error);
            if (data?.invalid_user_ids?.length) {
                const bad = selected.filter((u) => data.invalid_user_ids!.includes(u.id)).map((u) => u.email);
                setSelected((list) => list.filter((u) => !data.invalid_user_ids!.includes(u.id)));
                setServerError(`${tr('users_cannot_receive')} ${bad.join(', ')}`);
            } else if (data?.invalid_emails?.length) {
                setServerError(`${tr('invalid_emails')}: ${data.invalid_emails.join(', ')}`);
            } else {
                setServerError(data?.message ?? tr('error_generic'));
            }
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="grid gap-4 max-w-4xl">
            <section className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-[14px] font-medium text-gray-900">{tr('recipients')}</h2>
                    <span className={`text-[12px] ${recipientCount > MAX_RECIPIENTS ? 'text-red-600' : 'text-gray-500'}`}>
                        {recipientCount} {tr('recipient_count')}{recipientCount > MAX_RECIPIENTS ? ` — ${tr('too_many')}` : ''}
                    </span>
                </div>

                <div>
                    <label className={labelClass}>{tr('type_emails')}</label>
                    <textarea value={rawEmails} onChange={(e) => setRawEmails(e.target.value)} rows={3}
                        placeholder="a@example.com, b@example.com" className={inputClass} />
                    <p className="text-[12px] text-gray-400 mt-1">{tr('type_emails_hint')}</p>
                    {invalidTyped.length > 0 && (
                        <p className="text-[12px] text-red-600 mt-1">{tr('invalid_emails')}: {invalidTyped.join(', ')}</p>
                    )}
                </div>

                <div>
                    <label className={labelClass}>{tr('select_users')}</label>
                    {selected.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                            {selected.map((u) => (
                                <span key={u.id} className="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[12px]">
                                    {u.name || u.email} <span className="text-blue-400">{u.name ? u.email : ''}</span>
                                    <button type="button" onClick={() => setSelected((l) => l.filter((x) => x.id !== u.id))} aria-label="remove"
                                        className="p-0.5 rounded-full hover:bg-blue-100"><X size={12} /></button>
                                </span>
                            ))}
                        </div>
                    )}
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={tr('search_users')} className={inputClass} />
                    <div className="mt-1 max-h-44 overflow-y-auto border border-gray-100 rounded-md divide-y divide-gray-100">
                        {options.filter((u) => !selected.some((s) => s.id === u.id)).map((u) => (
                            <button key={u.id} type="button" disabled={!u.has_valid_email} onClick={() => addUser(u)}
                                className="w-full flex items-center justify-between px-3 py-1.5 text-left text-[13px] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
                                <span>{u.name || '—'} <span className="text-gray-400">{u.email}</span></span>
                                {!u.has_valid_email && <span className="text-[11px] text-red-500">{tr('no_valid_email')}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                <div>
                    <label className={labelClass}>{tr('subject')}</label>
                    <input value={subject} maxLength={200} onChange={(e) => setSubject(e.target.value.replace(/[\r\n]/g, ' '))} className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>{tr('content')}</label>
                    <EmailEditor key={editorKey} onChange={(doc, empty) => setContent({ doc, empty })} />
                </div>

                {serverError && <p className="text-[13px] text-red-600">{serverError}</p>}

                <div className="flex justify-end gap-2">
                    <button type="button" onClick={showPreview} disabled={!subjectOk || content.empty} className={buttonClass}>{tr('preview')}</button>
                    <button type="button" onClick={send} disabled={!canSend} className={primaryButtonClass}>{busy ? tr('sending') : tr('send')}</button>
                </div>
            </section>

            <CommonModal open={preview !== null} onClose={() => setPreview(null)} title={tr('preview')}>
                {preview !== null && (
                    // Server-rendered HTML, shown in a sandboxed frame (no scripts, no same-origin access)
                    <iframe title={tr('preview')} sandbox="" srcDoc={preview} className="w-full h-[65vh] mt-2 border border-gray-200 rounded-md bg-white" />
                )}
            </CommonModal>
        </div>
    );
}
