// Data model for one HSK textbook lesson (study content + scored practice).
// A lesson file only contains data; all rendering/grading lives in _lesson/.

export type Vocab = {
  id: number;
  han: string;
  py: string;
  /** Loại từ: dt., đg., tt., p. ... */
  pos: string;
  meaning: string;
  example: string;
  exampleVi: string;
  /** "extended" = từ mở rộng (không thuộc danh sách từ mới chính) */
  group?: "main" | "extended";
};

export type TextParagraph = {
  /** Tiêu đề đoạn, vd. "课文一 · 在学校" (HSK4: mỗi bài có nhiều bài khóa ngắn) */
  heading?: string;
  /** Hội thoại: mỗi lượt lời một dòng "小夏：……" (ngăn cách bằng \n) */
  zh: string;
  vi: string;
  questions?: string[];
};

export type GrammarPoint = {
  word: string;
  title: string;
  /** Mỗi dòng: cách dùng + câu ví dụ */
  usages: { label: string; explain: string; examples: string[] }[];
  note?: string;
};

export type WordChoiceItem = {
  sentence: string; // dùng ___ cho chỗ trống
  options: string[];
  answer: string;
};

type SectionBase = {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  points: number;
};

export type PracticeSection =
  | (SectionBase & { kind: "listen-pick"; items: { vocabId: number; distractors: number[] }[] })
  | (SectionBase & { kind: "pinyin"; vocabIds: number[] })
  | (SectionBase & { kind: "order"; items: { tokens: string[]; answer: string; vi: string }[] })
  | (SectionBase & {
      kind: "fill-blanks";
      /** Đoạn văn, chỗ trống viết {{key}} */
      passages: { title: string; text: string }[];
      answers: Record<string, string>;
      bank: string[];
    })
  | (SectionBase & { kind: "translate-zh-vi"; items: { zh: string; vi: string; keywords: string[] }[] })
  | (SectionBase & { kind: "translate-vi-zh"; items: { vi: string; answers: string[] }[] })
  | (SectionBase & { kind: "true-false"; items: { q: string; a: boolean }[] })
  | (SectionBase & { kind: "dictation"; items: string[] })
  | (SectionBase & {
      kind: "essay";
      prompt: string;
      requirement: string;
      minChars: number;
      minVocab: number;
      grammarMarkers: string[];
      minGrammar: number;
      sample: string;
    })
  | (SectionBase & {
      kind: "grammar-fill";
      grammarWord: string;
      /** Có options → chọn đáp án, không có → tự gõ */
      options?: string[];
      items: { q: string; answers: string[] }[];
    });

export type SectionKind = PracticeSection["kind"];

export type Lesson = {
  level: string; // "hsk4", "hsk5"
  no: number;
  slug: string; // "bai-9"
  zh: string;
  pinyin: string;
  vi: string;
  en: string;
  topic: string;
  durationMinutes: number;
  goals: string[];
  warmUp: { zh: string; vi: string }[];
  vocab: Vocab[];
  text: { title: string; paragraphs: TextParagraph[]; notes?: string[] };
  grammar: GrammarPoint[];
  wordChoice: WordChoiceItem[];
  practice: PracticeSection[];
};

/** Thông tin hiển thị ở danh sách bài; `lesson` có khi bài đã có nội dung. */
export type LessonMeta = {
  no: number;
  slug: string;
  lesson?: Lesson;
};
