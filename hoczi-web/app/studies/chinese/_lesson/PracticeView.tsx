'use client'

import { useEffect, useState } from "react";
import type { Lesson } from "./types";
import { grade } from "./grading";
import { AnswerKey, SectionBody, answeredCount } from "./PracticeSections";
import { SectionCard } from "./ui";
import { round1 } from "./utils";

function fmt(sec: number) {
  const s = Math.max(0, Math.ceil(sec));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function Countdown({ endsAt, stopped, onTimeUp }: { endsAt: number; stopped: boolean; onTimeUp: () => void }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (stopped) return;
    const t = setInterval(() => {
      const n = Date.now();
      setNow(n);
      if (n >= endsAt) { clearInterval(t); onTimeUp(); }
    }, 1000);
    return () => clearInterval(t);
  }, [endsAt, stopped, onTimeUp]);
  const left = (endsAt - now) / 1000;
  const warn = !stopped && left <= 300;
  return (
    <span className={`rounded-lg px-3 py-1 font-mono text-lg font-bold ${warn ? "bg-red-100 text-red-600 animate-pulse" : "bg-amber-50 text-amber-700"}`}>
      ⏱ {fmt(left)}
    </span>
  );
}

export function PracticeView({ lesson, startedAt, onRestart }: {
  lesson: Lesson;
  startedAt: number | null;
  onRestart: () => void;
}) {
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (set: Set<string>, id: string) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  };

  const results = lesson.practice.map(s => ({
    section: s,
    shown: submitted || checked.has(s.id),
    result: grade(s, answers[s.id], lesson.vocab),
  }));
  const total = results.reduce((sum, r) => sum + (r.shown ? r.result.earned : 0), 0);
  const maxTotal = lesson.practice.reduce((sum, s) => sum + s.points, 0);

  const submit = () => {
    setSubmitted(true);
    document.getElementById("practice-result")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="space-y-5">
      {/* Thanh trạng thái: đồng hồ + điểm + mục lục */}
      <div className="sticky top-[60px] z-20 -mx-1 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
          {startedAt !== null && (
            <Countdown endsAt={startedAt + lesson.durationMinutes * 60_000} stopped={submitted} onTimeUp={submit} />
          )}
          <span className="rounded-lg bg-green-50 px-3 py-1 font-semibold text-green-700">
            Điểm: {round1(total)}/{maxTotal}
          </span>
          <div className="flex-1" />
          {!submitted && (
            <button type="button" onClick={submit}
              className="rounded-lg bg-red-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-red-600">
              Nộp bài
            </button>
          )}
        </div>
        <nav className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
          {results.map(({ section: s, shown, result }) => (
            <a key={s.id} href={`#${s.id}`}
              className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-medium ${shown
                ? "border-green-300 bg-green-50 text-green-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {s.icon} {shown ? `${round1(result.earned)}/${s.points}` : s.title.split("·").pop()?.trim()}
            </a>
          ))}
        </nav>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
        Thời gian làm bài: <b>{lesson.durationMinutes} phút</b>. Mỗi phần có nút <b>Kiểm tra</b> để chấm riêng và
        <b> 💡 Gợi ý đáp án</b>. Khi xong, bấm <b>Nộp bài</b> để tính tổng điểm /{maxTotal}. Hết giờ hệ thống tự nộp.
      </div>

      {results.map(({ section: s, shown, result }) => {
        const [done, count] = answeredCount(s, answers[s.id]);
        return (
          <SectionCard key={s.id} id={s.id} icon={s.icon} title={s.title} subtitle={s.subtitle}
            badge={<span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">{s.points}đ</span>}>
            <SectionBody section={s} value={answers[s.id] as never} vocab={lesson.vocab}
              onChange={v => setAnswers(a => ({ ...a, [s.id]: v }))}
              result={shown ? result : null} locked={submitted} />

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {!submitted && (
                <button type="button" onClick={() => setChecked(c => new Set(c).add(s.id))}
                  className="rounded-lg bg-green-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-green-700">
                  ✅ Kiểm tra phần này
                </button>
              )}
              <button type="button" onClick={() => setRevealed(r => toggle(r, s.id))}
                className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800 hover:bg-amber-100">
                💡 {revealed.has(s.id) ? "Ẩn gợi ý" : "Gợi ý đáp án"}
              </button>
              <span className="text-xs text-gray-400">Đã làm {done}/{count}</span>
            </div>
            {revealed.has(s.id) && (
              <div className="mt-3 rounded-xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-4 text-gray-800">
                <AnswerKey section={s} vocab={lesson.vocab} />
              </div>
            )}
            {shown && (
              <p className={`mt-3 rounded-lg px-3 py-2 text-sm font-semibold ${result.earned >= s.points / 2 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
                Điểm phần này: {round1(result.earned)}/{s.points} {result.earned >= s.points / 2 ? "🎉" : "💪 Cố lên!"}
                {s.kind === "translate-zh-vi" && <span className="font-normal"> (chấm theo từ khóa chính)</span>}
                {s.kind === "essay" && <span className="font-normal"> (chấm sơ bộ độ dài &amp; từ vựng, giáo viên chấm nội dung riêng)</span>}
              </p>
            )}
          </SectionCard>
        );
      })}

      <SectionCard id="practice-result" icon="🏁" title="Nộp bài & kết quả">
        {submitted ? (
          <div className="text-center">
            <p className="text-gray-500">Tổng điểm của bạn</p>
            <p className="text-5xl font-bold text-red-500 my-2">{round1(total)}/{maxTotal}</p>
            <table className="mx-auto mt-4 text-sm">
              <tbody>
                {results.map(({ section: s, result }) => (
                  <tr key={s.id} className="border-b border-gray-100">
                    <td className="py-1.5 pr-6 text-left text-gray-700">{s.icon} {s.title}</td>
                    <td className="py-1.5 text-right font-semibold">{round1(result.earned)}/{s.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={() => { setAnswers({}); setChecked(new Set()); setRevealed(new Set()); setSubmitted(false); onRestart(); }}
              className="mt-6 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              ↺ Làm lại từ đầu
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-3">Khi đã hoàn thành các phần, bấm nút bên dưới để nộp bài và xem điểm chi tiết.</p>
            <button type="button" onClick={submit}
              className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600">
              ✅ NỘP BÀI - XEM ĐIỂM
            </button>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
