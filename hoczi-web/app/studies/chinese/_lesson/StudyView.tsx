'use client'

import { useState } from "react";
import type { Lesson, Vocab, WordChoiceItem } from "./types";
import { SectionCard, SpeakButton } from "./ui";

function Flashcard({ v }: { v: Vocab }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button type="button" onClick={() => setFlipped(f => !f)} className="h-44 w-full perspective-distant text-left">
      <div className={`relative h-full w-full transition-transform duration-500 transform-3d ${flipped ? "rotate-y-180" : ""}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-red-200 bg-red-50 p-3 backface-hidden">
          <span className="text-3xl text-gray-900">{v.han}</span>
          <span className="text-sm text-red-600">{v.py}</span>
          <SpeakButton text={v.han} label="Nghe" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center gap-1 overflow-y-auto rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 text-sm rotate-y-180 backface-hidden">
          <p><b className="text-emerald-700">{v.pos}</b> {v.meaning}</p>
          <p className="text-base text-gray-900">{v.example}</p>
          <p className="text-gray-500">{v.exampleVi}</p>
        </div>
      </div>
    </button>
  );
}

function VocabSection({ vocab }: { vocab: Vocab[] }) {
  const [filter, setFilter] = useState<"all" | "main" | "extended">("all");
  const [mode, setMode] = useState<"cards" | "list">("cards");
  const main = vocab.filter(v => v.group !== "extended");
  const shown = filter === "all" ? vocab : filter === "main" ? main : vocab.filter(v => v.group === "extended");
  const pill = (active: boolean) =>
    `rounded-full px-3 py-1 text-sm font-medium border ${active ? "border-red-400 bg-red-50 text-red-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`;

  return (
    <SectionCard id="vocab" icon="🗂️" title="Từ vựng"
      subtitle={`${vocab.length} từ (${main.length} từ mới + ${vocab.length - main.length} từ mở rộng). Bấm vào thẻ để lật xem nghĩa và ví dụ.`}>
      <div className="mb-4 flex flex-wrap gap-2">
        <button type="button" className={pill(filter === "all")} onClick={() => setFilter("all")}>Tất cả</button>
        <button type="button" className={pill(filter === "main")} onClick={() => setFilter("main")}>Từ mới</button>
        <button type="button" className={pill(filter === "extended")} onClick={() => setFilter("extended")}>Mở rộng</button>
        <div className="flex-1" />
        <button type="button" className={pill(mode === "cards")} onClick={() => setMode("cards")}>Thẻ</button>
        <button type="button" className={pill(mode === "list")} onClick={() => setMode("list")}>Bảng</button>
      </div>
      {mode === "cards" ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map(v => <Flashcard key={v.id} v={v} />)}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="py-2 pr-3">#</th><th className="pr-3">Từ</th><th className="pr-3">Pinyin</th>
                <th className="pr-3">Loại</th><th className="pr-3">Nghĩa</th><th>Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              {shown.map(v => (
                <tr key={v.id} className="border-b border-gray-100 align-top">
                  <td className="py-2 pr-3 text-gray-400">{v.id}</td>
                  <td className="pr-3 text-lg whitespace-nowrap">{v.han} <SpeakButton text={v.han} /></td>
                  <td className="pr-3 text-red-600 whitespace-nowrap">{v.py}</td>
                  <td className="pr-3 text-gray-500 whitespace-nowrap">{v.pos}</td>
                  <td className="pr-3">{v.meaning}</td>
                  <td><span className="text-base">{v.example}</span><br /><span className="text-gray-500">{v.exampleVi}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </SectionCard>
  );
}

function TextSection({ text }: { text: Lesson["text"] }) {
  const [showVi, setShowVi] = useState(false);
  const full = text.paragraphs.map(p => p.zh).join("");
  return (
    <SectionCard id="text" icon="📖" title={`Bài khóa · ${text.title}`} subtitle="Nghe từng đoạn, đọc to theo, sau đó trả lời câu hỏi gợi ý bên dưới mỗi đoạn.">
      <div className="mb-4 flex flex-wrap gap-2">
        <SpeakButton text={full} label="Nghe cả bài" />
        <button type="button" onClick={() => setShowVi(s => !s)}
          className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50">
          {showVi ? "Ẩn bản dịch" : "Hiện bản dịch tiếng Việt"}
        </button>
      </div>
      <div className="space-y-5">
        {text.paragraphs.map((p, i) => (
          <div key={i} className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">Đoạn {i + 1}</span>
              <SpeakButton text={p.zh} label="Nghe" />
              <SpeakButton text={p.zh} rate={0.6} label="Chậm" />
            </div>
            <p className="indent-8 text-lg leading-loose text-gray-900">{p.zh}</p>
            {showVi && <p className="mt-2 border-l-4 border-emerald-300 pl-3 text-gray-600">{p.vi}</p>}
            {p.questions && (
              <ul className="mt-3 space-y-1 text-sm text-purple-800">
                {p.questions.map(q => <li key={q}>❓ {q}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      {text.notes && (
        <ul className="mt-4 space-y-1 text-sm text-gray-500">
          {text.notes.map(n => <li key={n}>📌 {n}</li>)}
        </ul>
      )}
    </SectionCard>
  );
}

function GrammarSection({ grammar }: { grammar: Lesson["grammar"] }) {
  return (
    <SectionCard id="grammar" icon="🧠" title="Ngữ pháp" subtitle="Các điểm ngữ pháp trọng tâm của bài.">
      <div className="space-y-4">
        {grammar.map(g => (
          <div key={g.word} className="rounded-xl border-l-4 border-purple-400 bg-purple-50/60 p-4">
            <h3 className="mb-2 font-semibold text-purple-800"><span className="text-xl">{g.word}</span> · {g.title}</h3>
            <div className="space-y-3">
              {g.usages.map(u => (
                <div key={u.label}>
                  <p className="text-sm"><b>{u.label}{u.explain && ":"}</b> {u.explain}</p>
                  {u.examples.map(ex => (
                    <p key={ex} className="mt-1 flex items-start gap-2 text-base text-gray-900">
                      <span className="text-purple-400">▸</span><span className="flex-1">{ex}</span><SpeakButton text={ex} />
                    </p>
                  ))}
                </div>
              ))}
            </div>
            {g.note && <p className="mt-3 text-sm text-gray-600">💡 {g.note}</p>}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function WordChoice({ items }: { items: WordChoiceItem[] }) {
  const [picked, setPicked] = useState<Record<number, string>>({});
  const correct = items.filter((it, i) => picked[i] === it.answer).length;
  return (
    <SectionCard id="word-choice" icon="🎯" title="Luyện nhanh · Chọn từ thích hợp"
      subtitle="Phân biệt các từ dễ nhầm. Chọn xong sẽ biết đúng sai ngay (không tính điểm).">
      <div className="space-y-2">
        {items.map((it, i) => {
          const [before, after] = it.sentence.split("___");
          const p = picked[i];
          return (
            <div key={i} className="rounded-xl border border-gray-200 p-3">
              <p className="text-lg text-gray-900">
                {i + 1}. {before}
                <span className={`mx-1 inline-block min-w-12 border-b-2 text-center font-semibold ${p === undefined ? "border-gray-300" : p === it.answer ? "border-green-500 text-green-700" : "border-red-400 text-red-600"}`}>
                  {p ?? " "}
                </span>
                {after}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {it.options.map(o => (
                  <button key={o} type="button" onClick={() => setPicked(s => ({ ...s, [i]: o }))}
                    className={`rounded-lg border-2 px-3 py-0.5 ${p === o ? (o === it.answer ? "border-green-500 bg-green-50" : "border-red-400 bg-red-50") : "border-gray-200 hover:border-gray-400"}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-gray-500">Đúng {correct}/{items.length}</p>
    </SectionCard>
  );
}

export function StudyView({ lesson, onStartPractice }: { lesson: Lesson; onStartPractice: () => void }) {
  return (
    <div className="space-y-5">
      <SectionCard id="goals" icon="🎯" title="Mục tiêu bài học">
        <ul className="list-disc space-y-1 pl-5 text-gray-700">
          {lesson.goals.map(g => <li key={g}>{g}</li>)}
        </ul>
        <div className="mt-4 rounded-xl bg-amber-50 p-4">
          <p className="mb-2 text-sm font-semibold text-amber-800">🔥 Khởi động</p>
          {lesson.warmUp.map(w => (
            <p key={w.zh} className="text-gray-900">
              <span className="text-lg">{w.zh}</span> <SpeakButton text={w.zh} />
              <span className="ml-2 text-sm text-gray-500">{w.vi}</span>
            </p>
          ))}
        </div>
      </SectionCard>
      <VocabSection vocab={lesson.vocab} />
      <TextSection text={lesson.text} />
      <GrammarSection grammar={lesson.grammar} />
      <WordChoice items={lesson.wordChoice} />
      <div className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 p-6 text-center text-white">
        <p className="text-lg font-semibold">Học xong rồi? Làm bài kiểm tra {lesson.durationMinutes} phút để ôn lại nhé!</p>
        <button type="button" onClick={onStartPractice}
          className="mt-3 rounded-xl bg-white px-6 py-2.5 font-semibold text-red-600 hover:bg-red-50">
          ✍️ Bắt đầu luyện tập
        </button>
      </div>
    </div>
  );
}
