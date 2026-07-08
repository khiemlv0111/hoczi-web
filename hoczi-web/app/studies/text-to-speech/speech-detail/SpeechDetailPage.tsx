'use client'

import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Volume2, Calendar } from "lucide-react";

type AudioItem = { id: number; url?: string; audioUrl?: string; audio_url?: string };

type ContentDetail = {
  id: number;
  title: string;
  content: string;
  audios: AudioItem[];
  created_at: string;
  language_code: string;
  type: string;
};

function resolveAudioUrl(audio: AudioItem): string {
  return audio.url ?? audio.audioUrl ?? audio.audio_url ?? "";
}

export default function SpeechDetailPage({ id }: { id: string }) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [detail, setDetail] = useState<ContentDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    UserService.getAudioContentDetail(Number(id))
      .then((res) => {
        const data = res?.data ?? res;
        setDetail(data);
      })
      .catch(() => setDetail(null))
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  return (
    <div className="mt-[100px] min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft size={15} />
          Quay lại
        </button>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-3/4 rounded bg-gray-200" />
            <div className="h-4 w-1/3 rounded bg-gray-100" />
            <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-2">
              <div className="h-3 w-full rounded bg-gray-100" />
              <div className="h-3 w-full rounded bg-gray-100" />
              <div className="h-3 w-2/3 rounded bg-gray-100" />
            </div>
          </div>
        ) : !detail ? (
          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center text-sm text-gray-400">
            Không tìm thấy nội dung.
          </div>
        ) : (
          <div className="space-y-5">
            {/* Title + meta */}
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-snug">{detail.title}</h1>
              <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(detail.created_at)}
                </span>
                {detail.language_code && (
                  <span className="rounded-full border border-gray-200 px-2 py-0.5 uppercase">
                    {detail.language_code}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Nội dung
              </h2>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                {detail.content}
              </p>
            </div>

            {/* Audio players */}
            {detail.audios?.length > 0 ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Volume2 size={16} className="text-[#0c1a3a]" />
                  Audio ({detail.audios.length})
                </div>
                <div className="space-y-3">
                  {detail.audios.map((audio, idx) => {
                    const src = resolveAudioUrl(audio);
                    return src ? (
                      <div key={audio.id}>
                        {detail.audios.length > 1 && (
                          <p className="mb-1 text-xs text-gray-400">Audio {idx + 1}</p>
                        )}
                        <audio
                          ref={idx === 0 ? audioRef : undefined}
                          src={src}
                          controls
                          className="w-full"
                        />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-8 text-center text-sm text-gray-400">
                <Volume2 size={20} className="mx-auto mb-2 opacity-30" />
                Chưa có file audio nào được lưu.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
