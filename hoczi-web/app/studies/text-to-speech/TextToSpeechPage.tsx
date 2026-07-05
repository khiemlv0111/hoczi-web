'use client'

import { useState, useRef } from "react";
import { UserService } from "@/data/services/user.service";
import { Volume2, Loader2, RotateCcw, Copy, Check } from "lucide-react";

const EXAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog.",
  "Xin chào, tôi đang học tiếng Trung Quốc.",
  "你好，我在学习中文。",
];

export default function TextToSpeechPage() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() || loading) return;

    setLoading(true);
    setError(null);
    setAudioUrl(null);

    try {
      const blob = await UserService.textToSpeech({ message: text.trim() });
      // revoke previous object URL to free memory
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
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
    setAudioUrl(null);
    setError(null);
  };

  const charCount = text.length;
  const MAX_CHARS = 1000;

  return (
    <div className="mt-[100px] min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">

        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c1a3a]">
            <Volume2 size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Text to Speech</h1>
            <p className="text-sm text-gray-500">Chuyển văn bản thành giọng nói tự nhiên</p>
          </div>
        </div>

        {/* Example chips */}
        <div className="mb-4 flex flex-wrap gap-2">
          {EXAMPLE_TEXTS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setText(t)}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 hover:border-[#0c1a3a] hover:text-[#0c1a3a] transition-colors"
            >
              {t.length > 36 ? t.slice(0, 36) + "…" : t}
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
              rows={6}
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
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
              <Volume2 size={16} className="text-[#0c1a3a]" />
              Kết quả
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
