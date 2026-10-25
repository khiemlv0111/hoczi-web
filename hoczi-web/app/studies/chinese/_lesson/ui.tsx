'use client'

import { Loader2, Pause, Play, Volume2 } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { getPlayback, pausePlayback, resumePlayback, speak, subscribePlayback } from "./tts";

export function SpeakButton({ text, rate, label, owner }: { text: string; rate?: number; label?: string; owner?: string }) {
  const [loading, setLoading] = useState(false);
  const Icon = loading ? Loader2 : Volume2;
  return (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation();
        setLoading(true);
        speak(text, rate, owner).finally(() => setLoading(false));
      }}
      className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors"
      aria-label={`Nghe: ${text}`}
      aria-busy={loading}
    >
      <Icon className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
      {label}
    </button>
  );
}

/** Nút tạm dừng/tiếp tục, chỉ hiện khi audio của `owner` đang phát. */
export function PauseButton({ owner, className = "" }: { owner: string; className?: string }) {
  const playback = useSyncExternalStore(subscribePlayback, getPlayback, () => null);
  if (playback?.owner !== owner) return null;
  const Icon = playback.paused ? Play : Pause;
  return (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation();
        if (playback.paused) resumePlayback();
        else pausePlayback();
      }}
      className={`inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 hover:bg-amber-100 transition-colors ${className}`}
    >
      <Icon className="w-3.5 h-3.5" />
      {playback.paused ? "Tiếp tục" : "Tạm dừng"}
    </button>
  );
}

export function SectionCard({ id, icon, title, subtitle, badge, children }: {
  id?: string;
  icon: string;
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-48 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h2 className="text-lg font-semibold text-gray-900">
          <span className="mr-2">{icon}</span>{title}
        </h2>
        {badge}
      </div>
      {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
      {children}
    </section>
  );
}

/** Viền/nền cho một câu theo trạng thái đúng sai sau khi chấm. */
export function markClass(result: boolean | number | undefined) {
  if (result === undefined) return "border-gray-200";
  const ok = typeof result === "number" ? result >= 0.5 : result;
  return ok ? "border-green-400 bg-green-50/50" : "border-red-300 bg-red-50/50";
}

export const inputClass =
  "w-full rounded-xl border border-gray-300 px-3 py-2 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 disabled:bg-gray-50";
