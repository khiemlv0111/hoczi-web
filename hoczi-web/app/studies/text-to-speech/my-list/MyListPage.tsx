'use client'

import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Volume2, ChevronRight, Calendar } from "lucide-react";

type AudioItem = { id: number; url?: string; audioUrl?: string; audio_url?: string };

type ContentItem = {
  id: number;
  title: string;
  content: string;
  audios: AudioItem[];
  created_at: string;
  language_code: string;
  type: string;
};

export function MyListPage() {
  const router = useRouter();
  const [list, setList] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getAudioContentList()
      .then((res) => {
        const data = Array.isArray(res) ? res : res?.data ?? [];
        setList(data);
      })
      .catch(() => setList([]))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <div className="mt-[100px] min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c1a3a]">
            <Volume2 size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Danh sách đã lưu</h1>
            <p className="text-sm text-gray-500">Các đoạn văn bản đã chuyển thành giọng nói</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5">
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-100" />
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="mt-1 h-3 w-2/3 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        ) : list.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center text-sm text-gray-400">
            Chưa có nội dung nào được lưu.
          </div>
        ) : (
          <div className="space-y-3">
            {list.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => router.push(`/studies/text-to-speech/speech-detail?id=${item.id}`)}
                className="w-full rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-1 text-sm font-semibold text-gray-900 group-hover:text-[#0c1a3a]">
                      {item.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs text-gray-500 leading-relaxed">
                      {item.content}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Calendar size={11} />
                        {formatDate(item.created_at)}
                      </span>
                      {item.audios?.length > 0 && (
                        <span className="flex items-center gap-1 text-[11px] text-blue-500">
                          <Volume2 size={11} />
                          {item.audios.length} audio
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
