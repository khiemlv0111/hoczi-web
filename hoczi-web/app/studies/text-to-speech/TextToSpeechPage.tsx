'use client'

import { useState, useRef } from "react";
import { UserService } from "@/data/services/user.service";
import { useFileUpload } from "@/data/hooks/useFileUpload";
import { Volume2, Loader2, RotateCcw, Copy, Check, Save } from "lucide-react";
import Link from "next/link";

const voiceIds = {
    default: "JBFqnCBsd6RMkjVDRZzb",
    man: "fQj4gJSexpu8RDE2Ii5m",
    women: "El018FmI047NtSsCfyrY"
};

const VOICE_OPTIONS = [
    { id: voiceIds.default, label: "Mặc định" },
    { id: voiceIds.man, label: "Giọng nam" },
    { id: voiceIds.women, label: "Giọng nữ" },
];

export default function TextToSpeechPage() {
    const [text, setText] = useState("");
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const audioBlobRef = useRef<Blob | null>(null);
    const { upload: uploadToS3 } = useFileUpload();

    const [voice, setVoice] = useState(voiceIds.default);

    const handleSave = async () => {
        if (saving || saved || !audioBlobRef.current) return;
        setSaving(true);
        try {
            const file = new File([audioBlobRef.current], "audio.mp3", {
                type: audioBlobRef.current.type || "audio/mpeg",
            });
            // Upload directly to S3 via presigned URL — no backend 2 MB limit
            const { publicUrl } = await uploadToS3(file);
            await UserService.saveAudioContent({ content: text.trim(), audioUrl: publicUrl });
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch {
            // silent
        } finally {
            setSaving(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim() || loading) return;

        setLoading(true);
        setError(null);
        setAudioUrl(null);

        try {
            const blob = await UserService.textToSpeech({ message: text.trim(), voiceId: voice });
            audioBlobRef.current = blob;
            if (audioUrl) URL.revokeObjectURL(audioUrl);
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);
            setSaved(false);
            setTimeout(() => audioRef.current?.play(), 100);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Lỗi không xác định.";
            setError(`Không thể tạo giọng nói: ${msg}`);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleReset = () => {
        setText("");
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
        setError(null);
        audioBlobRef.current = null;
        setSaved(false);
    };

    const charCount = text.length;
    const MAX_CHARS = 10000;

    return (
        <div className="mt-[100px] min-h-screen bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-10">

                {/* Header */}
                <div className="mb-8 flex justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c1a3a]">
                            <Volume2 size={20} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">Text to Speech</h1>
                            <p className="text-sm text-gray-500">Chuyển văn bản thành giọng nói tự nhiên</p>
                        </div>

                    </div>

                    <div className="ml-5">
                        <Link className="text-blue-600 underline" href={`/studies/text-to-speech/my-list`}>Saved List</Link>
                    </div>
                </div>

                {/* Voice selection */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {VOICE_OPTIONS.map((v) => (
                        <button
                            key={v.id}
                            type="button"
                            onClick={() => setVoice(v.id)}
                            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                                voice === v.id
                                    ? "border-[#0c1a3a] bg-[#0c1a3a] text-white"
                                    : "border-gray-200 bg-white text-gray-600 hover:border-[#0c1a3a] hover:text-[#0c1a3a]"
                            }`}
                        >
                            {v.label}
                        </button>
                    ))}
                </div>

                {/* Input card */}
                <form onSubmit={handleSubmit}>
                    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
                            placeholder="Nhập văn bản muốn chuyển thành giọng nói…"
                            rows={12}
                            className="w-full resize-none rounded-t-2xl px-5 pt-5 pb-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
                        />

                        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
                            <span className={`text-xs ${charCount >= MAX_CHARS ? "text-red-500" : "text-gray-400"}`}>
                                {charCount} / {MAX_CHARS}
                            </span>
                            <div className="flex items-center gap-2">
                                {text && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleCopy}
                                            className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-100"
                                        >
                                            {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                                            {copied ? "Đã sao chép" : "Sao chép"}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-gray-500 hover:bg-gray-100"
                                        >
                                            <RotateCcw size={13} />
                                            Xoá
                                        </button>
                                    </>
                                )}
                                <button
                                    type="submit"
                                    disabled={!text.trim() || loading}
                                    className="flex items-center gap-2 rounded-xl bg-[#0c1a3a] px-5 py-2 text-sm font-medium text-white hover:bg-[#152a5c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={15} className="animate-spin" />
                                            Đang tạo…
                                        </>
                                    ) : (
                                        <>
                                            <Volume2 size={15} />
                                            Tạo giọng nói
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Error */}
                {error && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {/* Audio player */}
                {audioUrl && (
                    <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <Volume2 size={16} className="text-[#0c1a3a]" />
                                Kết quả
                            </div>
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={saving || saved}
                                className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {saving ? (
                                    <Loader2 size={13} className="animate-spin" />
                                ) : saved ? (
                                    <Check size={13} className="text-green-500" />
                                ) : (
                                    <Save size={13} />
                                )}
                                {saved ? "Đã lưu" : "Lưu audio"}
                            </button>
                        </div>
                        <audio
                            ref={audioRef}
                            src={audioUrl}
                            controls
                            className="w-full"
                        />
                    </div>
                )}

            </div>
        </div>
    );
}
