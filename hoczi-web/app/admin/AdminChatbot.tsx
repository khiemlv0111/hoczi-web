'use client'

import { AiService, apiErrorMessage, ChatCitation, ChatReply } from "@/data/services/ai.service";
import { Loader2, MessageCircle, Send, Trash2, X } from "lucide-react";
import { ChatCitationList, ChatSourceBadge } from "@/app/components/ai/ChatSources";
import { useEffect, useRef, useState } from "react";

type Message =
    | { id: number; role: 'user'; content: string }
    | { id: number; role: 'assistant'; content: string; source: ChatReply['source']; citations: ChatCitation[]; queried?: ChatReply['queried'] }
    | { id: number; role: 'error'; content: string };

const STORAGE_KEY = 'hoczi-admin-chat';
// Keep the request small; the server also caps history.
const HISTORY_TURNS = 12;

const SUGGESTIONS = [
    'Hệ thống có tất cả bao nhiêu user?',
    'Giải thích cấu trúc 是…的 cho người mới học',
    'Từ vựng chính của HSK 3 bài 1 là gì?',
    'Gợi ý một hoạt động lớp học 15 phút cho HSK 1',
];

function loadMessages(): Message[] {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveMessages(messages: Message[]) {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    } catch {
        // Storage can be unavailable (private mode); the chat still works in memory.
    }
}

export function AdminChatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [sending, setSending] = useState(false);
    const nextId = useRef(1);
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Restore the conversation after a page reload (per browser tab).
    useEffect(() => {
        const restored = loadMessages();
        nextId.current = restored.reduce((max, m) => Math.max(max, m.id), 0) + 1;
        setMessages(restored);
    }, []);

    useEffect(() => { saveMessages(messages); }, [messages]);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages, sending, open]);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    async function send(text: string) {
        const question = text.trim();
        if (!question || sending) return;

        const userMessage: Message = { id: nextId.current++, role: 'user', content: question };
        const conversation = [...messages, userMessage];
        setMessages(conversation);
        setInput('');
        setSending(true);

        // Only real turns are sent; error bubbles stay local.
        const history = conversation
            .filter((m): m is Extract<Message, { role: 'user' | 'assistant' }> => m.role !== 'error')
            .slice(-HISTORY_TURNS)
            .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

        try {
            const reply = await AiService.chat(history);
            setMessages((prev) => [...prev, {
                id: nextId.current++,
                role: 'assistant',
                content: reply.answer,
                source: reply.source,
                citations: reply.citations,
                queried: reply.queried,
            }]);
        } catch (error) {
            setMessages((prev) => [...prev, {
                id: nextId.current++,
                role: 'error',
                content: apiErrorMessage(error, 'The assistant could not answer. Please try again.'),
            }]);
        } finally {
            setSending(false);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            send(input);
        }
    }

    return (
        <>
            {open && (
                <div className="fixed z-40 bottom-20 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[min(560px,calc(100vh-7rem))] bg-white border border-gray-200 rounded-xl shadow-xl flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                        <div>
                            <p className="text-[13px] font-medium text-gray-900">Hoczi Assistant</p>
                            <p className="text-[11px] text-gray-400">Answers from Hoczi data, your documents, or general knowledge</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setMessages([])}
                                disabled={!messages.length || sending}
                                title="Clear conversation"
                                className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 disabled:opacity-40"
                            >
                                <Trash2 size={14} />
                            </button>
                            <button onClick={() => setOpen(false)} title="Close"
                                className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
                        {messages.length === 0 && (
                            <div className="flex flex-col gap-2 mt-2">
                                <p className="text-[12px] text-gray-500">
                                    Ask anything. System statistics (admins) come from the Hoczi database; HSK content questions are answered from your uploaded documents, with sources.
                                </p>
                                {SUGGESTIONS.map((s) => (
                                    <button key={s} onClick={() => send(s)}
                                        className="text-left text-[12px] px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map((m) => {
                            if (m.role === 'user') {
                                return (
                                    <div key={m.id} className="self-end max-w-[85%] rounded-xl rounded-br-sm bg-blue-600 text-white px-3 py-2 text-[13px] whitespace-pre-wrap break-words">
                                        {m.content}
                                    </div>
                                );
                            }
                            if (m.role === 'error') {
                                return (
                                    <div key={m.id} className="self-start max-w-[85%] rounded-xl bg-red-50 text-red-700 px-3 py-2 text-[12px]">
                                        {m.content}
                                    </div>
                                );
                            }
                            return (
                                <div key={m.id} className="self-start max-w-[90%] flex flex-col gap-1">
                                    <div className="rounded-xl rounded-bl-sm bg-gray-100 text-gray-900 px-3 py-2 text-[13px] whitespace-pre-wrap break-words">
                                        {m.content}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-1">
                                        <ChatSourceBadge source={m.source} queried={m.queried} />
                                    </div>
                                    <ChatCitationList citations={m.citations} />
                                </div>
                            );
                        })}

                        {sending && (
                            <div className="self-start flex items-center gap-2 text-[12px] text-gray-400">
                                <Loader2 size={14} className="animate-spin" />
                                Thinking…
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-100 p-3 flex items-end gap-2">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            rows={1}
                            maxLength={4000}
                            placeholder="Ask a question…"
                            className="flex-1 resize-none max-h-32 border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={() => send(input)}
                            disabled={sending || !input.trim()}
                            title="Send"
                            className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setOpen((v) => !v)}
                title={open ? 'Close assistant' : 'Open assistant'}
                className="fixed z-40 bottom-4 right-4 sm:right-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
                {open ? <X size={20} /> : <MessageCircle size={20} />}
            </button>
        </>
    );
}
