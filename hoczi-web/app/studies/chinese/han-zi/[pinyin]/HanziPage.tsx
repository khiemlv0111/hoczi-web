'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Volume2,
  Heart,
  Download,
  Share2,
  Hash,
  BookText,
} from "lucide-react";
import { WriteHanzi } from "./WriteHanzi";

const TABS = [
  "Bút thuận",
  "Cấu tạo",
  "Nghĩa & cách dùng",
  "Bản đồ",
  "Hán-Việt",
  "Tự nguyên",
  "Từ ghép",
  "Dễ nhầm",
  "Mẹo cộng đồng",
  "Đặt tên",
];

type RadicalComponent = { char: string; name: string; role: string; desc: string };

type HanziDetail = {
  character: string;
  pinyin: string;
  tone: number;
  meaningVi: string;
  strokeCount: number;
  charCount: number;
  usage: { pinyin: string; meaning: string };
  level: { label: string; type: string };
  composition: {
    components: RadicalComponent[];
    explanation: string;
  };
  linkMap: {
    compounds: string[];
    components: string[];
    relatedLeft: string[];
    relatedRight: string[];
  };
  hanViet: {
    reading: string;
    memoryTip: string;
    example: string;
    unlock: string;
  };
};

const HANZI_DATA: Record<string, HanziDetail> = {
  wo: {
    character: "握",
    pinyin: "wò",
    tone: 4,
    meaningVi: "cầm, nắm",
    strokeCount: 12,
    charCount: 1,
    usage: { pinyin: "/wò/", meaning: "nắm; giữ" },
    level: { label: "New HSK 5", type: "Động từ" },
    composition: {
      components: [
        { char: "扌", name: "Thủ", role: "biểu nghĩa", desc: "bộ tay" },
        { char: "屋", name: "Ốc", role: "biểu âm", desc: "nhà – cho âm wò" },
      ],
      explanation:
        "握 = 扌 (Thủ, biểu nghĩa: tay) + 屋 (Ốc, biểu âm); chữ hình thanh. 扌 chỉ động tác của tay, 屋 cho âm — sinh nghĩa 'cầm chắc, nắm trong tay'.",
    },
    linkMap: {
      compounds: ["把握", "掌握", "握手"],
      components: ["扌", "屋"],
      relatedLeft: ["把", "提", "打", "报"],
      relatedRight: ["接", "指", "幄", "渥"],
    },
    hanViet: {
      reading: "ác",
      memoryTip:
        "Hán-Việt 'Ác': dùng tay (扌) bao trùm như mái nhà (屋) — nắm chặt trong lòng bàn tay, đó là 'ác', 'nắm'.",
      example:
        "Âm HV 'ác' này ít gặp trong tiếng Việt phổ thông; thường thấy trong từ Hán-Việt 'ác thủ' (nắm tay), 'bả ác' (把握 – nắm bắt).",
      unlock:
        "Nhận diện âm 'ác' giúp đọc đúng các từ Hán-Việt cổ chứa chữ 握 trong văn bản chữ Nôm và tên Hán-Việt.",
    },
  },
};

const FALLBACK: HanziDetail = HANZI_DATA.wo;

function spread(count: number, start: number, end: number): number[] {
  if (count <= 1) return [(start + end) / 2];
  return Array.from({ length: count }, (_, i) => start + (i * (end - start)) / (count - 1));
}

type MapVariant = "center" | "compound" | "component" | "related";

const NODE_STYLES: Record<MapVariant, string> = {
  center: "h-14 w-14 bg-[#0c1a3a] text-white text-xl font-bold shadow-md",
  compound: "h-12 w-12 border border-gray-300 bg-white text-gray-700 text-sm hover:border-[#0c1a3a] hover:text-[#0c1a3a]",
  component: "h-12 w-12 border border-amber-400 bg-amber-50 text-amber-700 text-sm hover:border-amber-600",
  related: "h-11 w-11 border border-gray-200 bg-white text-gray-500 text-sm hover:border-[#0c1a3a] hover:text-[#0c1a3a]",
};

function MapNode({
  x,
  y,
  char,
  variant,
  onClick,
}: {
  x: number;
  y: number;
  char: string;
  variant: MapVariant;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={!onClick}
      onClick={onClick}
      style={{ left: `${x}%`, top: `${y}%` }}
      className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-serif transition-colors ${NODE_STYLES[variant]}`}
    >
      {char}
    </button>
  );
}

interface Props {
  pinyin: string;
}

export function HanziPage({ pinyin }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Bản đồ");
  const data = HANZI_DATA[pinyin] ?? FALLBACK;

  const mapNodes: { char: string; x: number; y: number; variant: MapVariant }[] = [
    ...spread(data.linkMap.compounds.length, 12, 88).map((x, i) => ({
      char: data.linkMap.compounds[i],
      x,
      y: 13,
      variant: "compound" as MapVariant,
    })),
    ...spread(data.linkMap.components.length, 30, 70).map((x, i) => ({
      char: data.linkMap.components[i],
      x,
      y: 92,
      variant: "component" as MapVariant,
    })),
    ...spread(data.linkMap.relatedLeft.length, 26, 78).map((y, i) => ({
      char: data.linkMap.relatedLeft[i],
      x: 9,
      y,
      variant: "related" as MapVariant,
    })),
    ...spread(data.linkMap.relatedRight.length, 26, 78).map((y, i) => ({
      char: data.linkMap.relatedRight[i],
      x: 91,
      y,
      variant: "related" as MapVariant,
    })),
  ];

  return (
    <main className="mt-[100px] min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1a3a] to-[#15234a] p-8 text-white">
          {/* watermark character */}
          <span className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[280px] font-bold leading-none text-white/5">
            {data.character}
          </span>

          <div className="relative flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
              <BookText size={13} />
              Từ vựng tiếng Trung
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-bold shadow-md">
              印
            </div>
          </div>

          <div className="relative mt-4 flex items-start justify-between gap-6">
            <div>
              <p className="text-lg font-medium text-blue-400">{data.pinyin}</p>

              <div className="mt-1 flex items-center gap-4">
                <h1 className="font-serif text-8xl font-bold leading-none">
                  {data.character}
                </h1>
                <button
                  type="button"
                  aria-label="Phát âm"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <Volume2 size={18} />
                </button>
              </div>

              <div className="mt-5 max-w-sm rounded-xl bg-white/10 px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Nghĩa tiếng Việt
                </p>
                <p className="mt-1 text-lg font-semibold">{data.meaningVi}</p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-gray-300">
                  <BookText size={13} />
                  {data.charCount} chữ
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-gray-300">
                  <Hash size={13} />
                  {data.strokeCount} nét
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-gray-300">
                  Thanh điệu:
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-500 text-[10px] font-bold text-white">
                    {data.tone}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-shrink-0 flex-col items-end gap-2">
              <button
                type="button"
                aria-label="Yêu thích"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-white/20 hover:text-red-400"
              >
                <Heart size={16} />
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:bg-white/20"
              >
                <Download size={13} />
                Tải GIF
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 transition-colors hover:bg-white/20"
              >
                <Share2 size={13} />
                Chia sẻ
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#0c1a3a] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 p-6 rounded-3xl">
          {/* Stroke order + composition */}
          <div className="flex flex-col gap-6 ">
            <WriteHanzi key={data.character} character={data.character} strokeCount={data.strokeCount} />

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-800">
                Bộ thủ & thành phần
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {data.composition.components.map((c) => (
                  <div key={c.char} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 font-serif text-lg text-gray-800">
                      {c.char}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{c.name}</p>
                      <p className="text-xs text-gray-400">{c.role}</p>
                      <p className="text-xs text-gray-400">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {data.composition.explanation}
              </p>
            </div>
          </div>

          {/* Usage + map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-800">
                Nghĩa & cách dùng như một từ
              </h2>

              <div className="mt-3 rounded-xl bg-gray-50 px-4 py-3">
                <p className="text-sm text-gray-400">{data.usage.pinyin}</p>
                <p className="mt-1 text-base text-gray-900">{data.usage.meaning}</p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-800">
                  Xuất hiện trong lộ trình
                </p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  New HSK
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
                  {data.level.label} · {data.level.type}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-gray-800">
                Bản đồ liên kết
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Sơ đồ trực quan các chữ/từ liên kết với chữ này. Bấm vào một nút
                bất kỳ để mở trang chi tiết của chữ/từ đó.
              </p>

              <div className="relative mt-5 h-[420px] w-full">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {mapNodes.map((n) => (
                    <line
                      key={n.char}
                      x1={50}
                      y1={52}
                      x2={n.x}
                      y2={n.y}
                      stroke="#e2e2ea"
                      strokeWidth={0.4}
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>

                <MapNode x={50} y={52} char={data.character} variant="center" />
                {mapNodes.map((n) => (
                  <MapNode
                    key={n.char}
                    x={n.x}
                    y={n.y}
                    char={n.char}
                    variant={n.variant}
                    onClick={() => router.push(`/studies/chinese/han-zi/${n.char}`)}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-400">
                <span><span className="font-medium text-gray-600">Trung tâm</span> - chữ/từ đang xem</span>
                <span><span className="font-medium text-amber-600">Bộ phận cấu thành</span> - ở phía dưới</span>
                <span><span className="font-medium text-gray-600">Từ ghép chứa chữ</span> - ở phía trên</span>
                <span><span className="font-medium text-gray-500">Chữ liên quan</span> - ở hai bên</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hán-Việt */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-base font-semibold text-gray-800">
            Hán-Việt: {data.hanViet.reading}
          </h2>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">Mẹo nhớ</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{data.hanViet.memoryTip}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Gương Hán-Việt</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{data.hanViet.example}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">Mở khoá kiến thức</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{data.hanViet.unlock}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
