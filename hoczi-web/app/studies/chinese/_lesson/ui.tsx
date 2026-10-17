'use client'

import { Volume2 } from "lucide-react";
import { speak } from "./utils";

export function SpeakButton({ text, rate, label }: { text: string; rate?: number; label?: string }) {
  return (
    <button
      type="button"
      onClick={e => { e.stopPropagation(); speak(text, rate); }}
      className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors"
      aria-label={`Nghe: ${text}`}
    >
      <Volume2 className="w-3.5 h-3.5" />
      {label}
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
