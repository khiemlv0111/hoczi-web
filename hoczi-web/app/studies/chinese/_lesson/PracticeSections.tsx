'use client'

import { useState } from "react";
import type { SectionKind, Vocab } from "./types";
import { type AnswerMap, type GradeResult, type SectionOf, essayStats } from "./grading";
import { SpeakButton, inputClass, markClass } from "./ui";
import { endsWithPunctuation, normHan, seededShuffle } from "./utils";

type BodyProps<K extends SectionKind> = {
  section: SectionOf<K>;
  value: AnswerMap[K] | undefined;
  onChange: (v: AnswerMap[K]) => void;
  result: GradeResult | null;
  locked: boolean;
  vocab: Vocab[];
};

function setAt<T>(arr: T[] | undefined, i: number, v: T): T[] {
  const next = [...(arr ?? [])];
  next[i] = v;
  return next;
}

function ItemRow({ n, result, children }: { n: number; result?: boolean | number; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border p-3 sm:p-4 ${markClass(result)}`}>
      <span className="text-sm font-semibold text-gray-500 mr-2">Câu {n}.</span>
      {children}
    </div>
  );
}

const zh = "text-lg leading-relaxed text-gray-900";

/* ---------- Nghe - chọn chữ Hán ---------- */
function ListenPick({ section, value, onChange, result, locked, vocab }: BodyProps<"listen-pick">) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {section.items.map((it, i) => {
        const word = vocab.find(v => v.id === it.vocabId)!;
        const options = seededShuffle([it.vocabId, ...it.distractors], `${section.id}-${i}`)
          .map(id => vocab.find(v => v.id === id)!);
        return (
          <ItemRow key={i} n={i + 1} result={result?.items[i]}>
            <SpeakButton text={word.han} label="Nghe từ" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              {options.map(o => {
                const picked = value?.[i] === o.han;
                const tone = result
                  ? o.han === word.han ? "border-green-500 bg-green-100 text-green-800"
                    : picked ? "border-red-400 bg-red-100 text-red-700" : "border-gray-200 text-gray-400"
                  : picked ? "border-red-400 bg-red-50 text-red-700" : "border-gray-200 hover:border-red-300";
                return (
                  <button key={o.id} type="button" disabled={locked}
                    onClick={() => onChange(setAt(value, i, o.han))}
                    className={`rounded-lg border-2 px-3 py-2 text-lg transition-colors ${tone}`}>
                    {o.han}
                  </button>
                );
              })}
            </div>
          </ItemRow>
        );
      })}
    </div>
  );
}

/* ---------- Điền pinyin ---------- */
function Pinyin({ section, value, onChange, result, locked, vocab }: BodyProps<"pinyin">) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {section.vocabIds.map((id, i) => {
        const w = vocab.find(v => v.id === id)!;
        return (
          <ItemRow key={id} n={i + 1} result={result?.items[i]}>
            <span className="text-2xl mr-2">{w.han}</span>
            <SpeakButton text={w.han} />
            <input className={`${inputClass} mt-2`} placeholder="gõ pinyin, ví dụ: jiāojì" disabled={locked}
              value={value?.[i] ?? ""} onChange={e => onChange(setAt(value, i, e.target.value))} />
            {result && !result.items[i] && <p className="mt-1 text-sm text-green-700">Đáp án: {w.py}</p>}
          </ItemRow>
        );
      })}
    </div>
  );
}

/* ---------- Sắp xếp câu ---------- */
function Order({ section, value, onChange, result, locked }: BodyProps<"order">) {
  return (
    <div className="space-y-3">
      {section.items.map((it, i) => {
        const picked = value?.[i] ?? [];
        const tray = seededShuffle(it.tokens.map((_, ti) => ti), `${section.id}-${i}`);
        const update = (next: number[]) => onChange(setAt(value, i, next));
        return (
          <ItemRow key={i} n={i + 1} result={result?.items[i]}>
            <span className="text-sm text-gray-500 italic">{it.vi}</span>
            <div className="mt-2 min-h-12 flex flex-wrap gap-2 rounded-lg border-2 border-amber-300 bg-amber-50 p-2">
              {picked.map((ti, pi) => (
                <button key={pi} type="button" disabled={locked} title="Bấm để bỏ ra"
                  onClick={() => update(picked.filter((_, x) => x !== pi))}
                  className="rounded-lg bg-white border border-amber-300 px-3 py-1 text-lg">
                  {it.tokens[ti]}
                </button>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tray.map(ti => (
                <button key={ti} type="button" disabled={locked || picked.includes(ti)}
                  onClick={() => update([...picked, ti])}
                  className="rounded-lg border-2 border-purple-200 bg-purple-50 px-3 py-1 text-lg disabled:opacity-30">
                  {it.tokens[ti]}
                </button>
              ))}
            </div>
            {result && !result.items[i] && <p className="mt-2 text-sm text-green-700">Đáp án: {it.answer}</p>}
          </ItemRow>
        );
      })}
    </div>
  );
}

/* ---------- Điền từ vào đoạn văn ---------- */
function FillBlanks({ section, value, onChange, result, locked }: BodyProps<"fill-blanks">) {
  const [active, setActive] = useState<string | null>(null);
  const filled = value ?? {};
  const used = new Set(Object.values(filled));
  const keys = Object.keys(section.answers);

  const clickBlank = (key: string) => {
    if (locked) return;
    if (filled[key] !== undefined) {
      const next = { ...filled };
      delete next[key];
      onChange(next);
      setActive(key);
    } else setActive(active === key ? null : key);
  };
  const clickChip = (ci: number) => {
    // Chưa chọn chỗ trống thì điền vào chỗ trống đầu tiên còn trống
    const key = active ?? keys.find(k => filled[k] === undefined);
    if (!key || locked) return;
    onChange({ ...filled, [key]: ci });
    setActive(keys.find(k => k !== key && filled[k] === undefined) ?? null);
  };

  return (
    <div className="space-y-4">
      {section.passages.map((p, pi) => (
        <div key={pi} className="rounded-xl border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-purple-700 mb-2">{p.title}</h3>
          <p className={`${zh} leading-[2.4]`}>
            {p.text.split(/\{\{(\w+)\}\}/).map((part, idx) => {
              if (idx % 2 === 0) return <span key={idx}>{part}</span>;
              const key = part;
              const ci = filled[key];
              const r = result ? result.items[keys.indexOf(key)] : undefined;
              const tone = r === undefined
                ? ci !== undefined ? "bg-green-50 border-green-400 text-green-800"
                  : active === key ? "bg-purple-100 border-purple-500" : "bg-red-50 border-red-300"
                : r ? "bg-green-100 border-green-500 text-green-800" : "bg-red-100 border-red-500 text-red-700";
              return (
                <button key={idx} type="button" onClick={() => clickBlank(key)}
                  className={`mx-1 inline-block min-w-16 rounded-md border-b-2 px-2 align-baseline font-semibold ${tone}`}>
                  {ci !== undefined ? section.bank[ci] : "?"}
                </button>
              );
            })}
          </p>
        </div>
      ))}
      <div className="flex flex-wrap gap-2 rounded-xl bg-blue-50 p-3">
        {section.bank.map((w, ci) => (
          <button key={ci} type="button" disabled={locked || used.has(ci)} onClick={() => clickChip(ci)}
            className="rounded-full border-2 border-blue-300 bg-white px-4 py-1 text-lg disabled:opacity-30">
            {w}
          </button>
        ))}
      </div>
      {!locked && (
        <button type="button" onClick={() => { onChange({}); setActive(null); }}
          className="text-sm text-gray-500 hover:text-gray-800">↺ Xóa hết, làm lại</button>
      )}
    </div>
  );
}

/* ---------- Dịch Trung → Việt ---------- */
function TranslateZhVi({ section, value, onChange, result, locked }: BodyProps<"translate-zh-vi">) {
  return (
    <div className="space-y-3">
      {section.items.map((it, i) => (
        <ItemRow key={i} n={i + 1} result={result?.items[i]}>
          <span className={zh}>{it.zh}</span> <SpeakButton text={it.zh} />
          <textarea rows={2} className={`${inputClass} mt-2`} placeholder="Dịch sang tiếng Việt..." disabled={locked}
            value={value?.[i] ?? ""} onChange={e => onChange(setAt(value, i, e.target.value))} />
          {result && (
            <p className="mt-1 text-sm text-gray-600">
              Khớp {Math.round((result.items[i] as number) * it.keywords.length)}/{it.keywords.length} từ khóa · Gợi ý: <i>{it.vi}</i>
            </p>
          )}
        </ItemRow>
      ))}
    </div>
  );
}

/* ---------- Dịch Việt → Trung ---------- */
function TranslateViZh({ section, value, onChange, result, locked }: BodyProps<"translate-vi-zh">) {
  return (
    <div className="space-y-3">
      {section.items.map((it, i) => (
        <ItemRow key={i} n={i + 1} result={result?.items[i]}>
          <span className="text-gray-900">{it.vi}</span>
          <input className={`${inputClass} mt-2 text-lg`} placeholder="打字..." disabled={locked}
            value={value?.[i] ?? ""} onChange={e => onChange(setAt(value, i, e.target.value))} />
          {result && !result.items[i] && <p className="mt-1 text-sm text-green-700">Gợi ý: {it.answers[0]}</p>}
        </ItemRow>
      ))}
    </div>
  );
}

/* ---------- Đúng / Sai ---------- */
function TrueFalse({ section, value, onChange, result, locked }: BodyProps<"true-false">) {
  return (
    <div className="space-y-2">
      {section.items.map((it, i) => (
        <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl border p-3 ${markClass(result?.items[i])}`}>
          <p className={`flex-1 ${zh}`}>{i + 1}. {it.q}</p>
          <div className="flex gap-2">
            {([true, false] as const).map(v => (
              <button key={String(v)} type="button" disabled={locked}
                onClick={() => onChange(setAt(value, i, v))}
                className={`w-20 rounded-lg border-2 py-1.5 font-medium transition-colors ${value?.[i] === v
                  ? v ? "border-green-500 bg-green-500 text-white" : "border-red-500 bg-red-500 text-white"
                  : "border-gray-200 text-gray-600 hover:border-gray-400"}`}>
                {v ? "Đúng" : "Sai"}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Nghe - viết ---------- */
function Dictation({ section, value, onChange, result, locked }: BodyProps<"dictation">) {
  return (
    <div className="space-y-3">
      {section.items.map((s, i) => {
        const v = value?.[i] ?? "";
        return (
          <ItemRow key={i} n={i + 1} result={result?.items[i]}>
            <SpeakButton text={s} label="Nghe câu" /> <SpeakButton text={s} rate={0.55} label="Nghe chậm" />
            <input className={`${inputClass} mt-2 text-lg`} placeholder="Gõ lại câu vừa nghe..." disabled={locked}
              value={v} onChange={e => onChange(setAt(value, i, e.target.value))} />
            {result && (
              <p className={`mt-1 text-sm ${result.items[i] ? "text-green-700" : "text-red-600"}`}>
                {result.items[i]
                  ? `✔ Đúng nội dung.${endsWithPunctuation(v) ? "" : " ⚠ Thiếu dấu câu cuối câu."}`
                  : `✘ Đáp án: ${s}`}
              </p>
            )}
          </ItemRow>
        );
      })}
    </div>
  );
}

/* ---------- Viết đoạn văn ---------- */
function Essay({ section, value, onChange, locked, vocab }: BodyProps<"essay">) {
  const text = value ?? "";
  const stats = essayStats(text, vocab, section.grammarMarkers);
  const enough = stats.hanCount >= section.minChars;
  return (
    <div>
      <p className={`${zh} mb-1`}>{section.prompt}</p>
      <p className="mb-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-900">{section.requirement}</p>
      <textarea rows={8} className={`${inputClass} text-lg`} placeholder="在这里写你的作文……" disabled={locked}
        value={text} onChange={e => onChange(e.target.value)} />
      <p className={`mt-2 text-sm font-medium ${enough ? "text-green-700" : "text-gray-500"}`}>
        Số chữ Hán: {stats.hanCount}/{section.minChars} · Từ vựng của bài: {stats.vocabHits}/{section.minVocab} ·
        Điểm ngữ pháp: {stats.grammarHits}/{section.minGrammar}
      </p>
    </div>
  );
}

/* ---------- Ngữ pháp: điền từ ---------- */
function GrammarFill({ section, value, onChange, result, locked }: BodyProps<"grammar-fill">) {
  return (
    <div className="grid gap-3">
      {section.items.map((it, i) => {
        const [before, after] = it.q.split("___");
        return (
          <ItemRow key={i} n={i + 1} result={result?.items[i]}>
            <span className={zh}>
              {before}
              <span className="mx-1 inline-block min-w-12 border-b-2 border-purple-400 text-center font-semibold text-purple-700">
                {value?.[i] || " "}
              </span>
              {after}
            </span>
            {section.options ? (
              <div className="mt-2 flex gap-2">
                {section.options.map(o => (
                  <button key={o} type="button" disabled={locked} onClick={() => onChange(setAt(value, i, o))}
                    className={`rounded-lg border-2 px-4 py-1 text-lg ${value?.[i] === o ? "border-purple-500 bg-purple-100" : "border-gray-200 hover:border-purple-300"}`}>
                    {o}
                  </button>
                ))}
              </div>
            ) : (
              <input className={`${inputClass} mt-2 sm:w-48 text-lg`} placeholder="điền từ..." disabled={locked}
                value={value?.[i] ?? ""} onChange={e => onChange(setAt(value, i, e.target.value))} />
            )}
            {result && !result.items[i] && <p className="mt-1 text-sm text-green-700">Đáp án: {it.answers.join(" / ")}</p>}
          </ItemRow>
        );
      })}
    </div>
  );
}

const BODIES: { [K in SectionKind]: (p: BodyProps<K>) => React.ReactNode } = {
  "listen-pick": ListenPick,
  pinyin: Pinyin,
  order: Order,
  "fill-blanks": FillBlanks,
  "translate-zh-vi": TranslateZhVi,
  "translate-vi-zh": TranslateViZh,
  "true-false": TrueFalse,
  dictation: Dictation,
  essay: Essay,
  "grammar-fill": GrammarFill,
};

export function SectionBody<K extends SectionKind>(props: BodyProps<K>) {
  const Body = BODIES[props.section.kind] as (p: BodyProps<K>) => React.ReactNode;
  return <Body {...props} />;
}

/** Nội dung "💡 Gợi ý đáp án" của từng phần. */
export function AnswerKey({ section, vocab }: { section: SectionOf<SectionKind>; vocab: Vocab[] }) {
  const word = (id: number) => vocab.find(v => v.id === id)!;
  const list = (rows: React.ReactNode[]) => <ol className="list-decimal pl-5 space-y-1">{rows.map((r, i) => <li key={i}>{r}</li>)}</ol>;
  switch (section.kind) {
    case "listen-pick": return list(section.items.map(it => `${word(it.vocabId).han} (${word(it.vocabId).py})`));
    case "pinyin": return list(section.vocabIds.map(id => `${word(id).han} → ${word(id).py}`));
    case "order": return list(section.items.map(it => <>{it.answer} <i className="text-gray-500">({it.vi})</i></>));
    case "fill-blanks": return list(Object.values(section.answers));
    case "translate-zh-vi": return list(section.items.map(it => it.vi));
    case "translate-vi-zh": return list(section.items.map(it => it.answers.join(" / ")));
    case "true-false": return list(section.items.map(it => it.a ? "Đúng" : "Sai"));
    case "dictation": return list(section.items);
    case "grammar-fill": return list(section.items.map(it => it.answers.join(" / ")));
    case "essay": return <p className="text-lg leading-relaxed"><b className="text-sm">Bài văn mẫu: </b>{section.sample}</p>;
  }
}

/** Đếm số câu đã làm để hiện tiến độ. */
export function answeredCount(section: SectionOf<SectionKind>, value: unknown): [number, number] {
  switch (section.kind) {
    case "fill-blanks": return [Object.keys((value ?? {}) as object).length, Object.keys(section.answers).length];
    case "essay": return [normHan((value ?? "") as string) ? 1 : 0, 1];
    default: {
      const total = "items" in section ? section.items.length : section.vocabIds.length;
      const arr = (value ?? []) as unknown[];
      const done = arr.filter(v => v !== null && v !== undefined && v !== "" && !(Array.isArray(v) && !v.length)).length;
      return [done, total];
    }
  }
}
