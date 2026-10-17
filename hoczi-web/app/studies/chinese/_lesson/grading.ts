import type { PracticeSection, SectionKind, Vocab } from "./types";
import { countHan, normHan, normPinyin } from "./utils";

/** Kiểu dữ liệu câu trả lời của học viên cho từng loại bài tập. */
export type AnswerMap = {
  "listen-pick": (string | null)[];
  pinyin: string[];
  order: number[][]; // thứ tự index các mảnh đã bấm
  "fill-blanks": Record<string, number>; // key chỗ trống → index từ trong ngân hàng
  "translate-zh-vi": string[];
  "translate-vi-zh": string[];
  "true-false": (boolean | null)[];
  dictation: string[];
  essay: string;
  "grammar-fill": string[];
};

export type SectionOf<K extends SectionKind> = Extract<PracticeSection, { kind: K }>;

export type EssayStats = { hanCount: number; vocabHits: number; grammarHits: number };

export type GradeResult = {
  earned: number;
  /** Mỗi câu: true/false, hoặc tỉ lệ 0..1 (dịch Trung-Việt chấm theo từ khóa) */
  items: (boolean | number)[];
  essay?: EssayStats;
};

const all = <T>(n: number, fn: (i: number) => T) => Array.from({ length: n }, (_, i) => fn(i));

function byItems(points: number, items: (boolean | number)[]): GradeResult {
  const per = items.length ? points / items.length : 0;
  const earned = items.reduce<number>((sum, r) => sum + per * (typeof r === "number" ? r : r ? 1 : 0), 0);
  return { earned, items };
}

export function essayStats(text: string, vocab: Vocab[], markers: string[]): EssayStats {
  return {
    hanCount: countHan(text),
    vocabHits: vocab.filter(v => text.includes(v.han)).length,
    grammarHits: markers.filter(m => text.includes(m)).length,
  };
}

export function grade(section: PracticeSection, answer: unknown, vocab: Vocab[]): GradeResult {
  const vocabById = (id: number) => vocab.find(v => v.id === id);

  switch (section.kind) {
    case "listen-pick": {
      const a = (answer ?? []) as AnswerMap["listen-pick"];
      return byItems(section.points, all(section.items.length, i => a[i] === vocabById(section.items[i].vocabId)?.han));
    }
    case "pinyin": {
      const a = (answer ?? []) as AnswerMap["pinyin"];
      return byItems(section.points, section.vocabIds.map((id, i) =>
        !!a[i] && normPinyin(a[i]) === normPinyin(vocabById(id)?.py ?? "")));
    }
    case "order": {
      const a = (answer ?? []) as AnswerMap["order"];
      return byItems(section.points, section.items.map((it, i) =>
        (a[i] ?? []).map(t => it.tokens[t]).join("") === it.answer));
    }
    case "fill-blanks": {
      const a = (answer ?? {}) as AnswerMap["fill-blanks"];
      return byItems(section.points, Object.entries(section.answers).map(([key, word]) =>
        a[key] !== undefined && section.bank[a[key]] === word));
    }
    case "translate-zh-vi": {
      const a = (answer ?? []) as AnswerMap["translate-zh-vi"];
      return byItems(section.points, section.items.map((it, i) => {
        const val = (a[i] ?? "").toLowerCase();
        return it.keywords.filter(k => val.includes(k.toLowerCase())).length / it.keywords.length;
      }));
    }
    case "translate-vi-zh": {
      const a = (answer ?? []) as AnswerMap["translate-vi-zh"];
      return byItems(section.points, section.items.map((it, i) =>
        !!a[i] && it.answers.some(ans => normHan(ans) === normHan(a[i]))));
    }
    case "true-false": {
      const a = (answer ?? []) as AnswerMap["true-false"];
      return byItems(section.points, section.items.map((it, i) => a[i] === it.a));
    }
    case "dictation": {
      const a = (answer ?? []) as AnswerMap["dictation"];
      return byItems(section.points, section.items.map((s, i) => !!a[i] && normHan(a[i]) === normHan(s)));
    }
    case "grammar-fill": {
      const a = (answer ?? []) as AnswerMap["grammar-fill"];
      return byItems(section.points, section.items.map((it, i) =>
        !!a[i] && it.answers.some(ans => normHan(ans) === normHan(a[i]))));
    }
    case "essay": {
      const stats = essayStats((answer ?? "") as string, vocab, section.grammarMarkers);
      // 40% độ dài, 30% từ vựng, 30% ngữ pháp — giáo viên chấm nội dung riêng
      const earned = section.points * (
        0.4 * Math.min(stats.hanCount / section.minChars, 1) +
        0.3 * Math.min(stats.vocabHits / section.minVocab, 1) +
        0.3 * Math.min(stats.grammarHits / section.minGrammar, 1)
      );
      return { earned, items: [], essay: stats };
    }
  }
}
