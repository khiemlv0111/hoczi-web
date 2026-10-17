#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- Node CLI script */
// Nhập một bài HSK từ file bài tập HTML ("HSK5 tiêu chuẩn bài N.html") + file nội dung học
// (mục tiêu, bài khóa, bản dịch, luyện nhanh — soạn tay từ slide) thành lesson-XX.ts.
//
//   node scripts/hsk-import/import.js <bài.html> <study.js> <thư mục _data>
//
// Xem scripts/hsk-import/README.md để biết định dạng study.js.
const fs = require('fs');
const path = require('path');

const [, , htmlPath, studyPath, outDir] = process.argv;
if (!htmlPath || !studyPath || !outDir) {
  console.error('Usage: node import.js <lesson.html> <study.js> <outDir>');
  process.exit(1);
}
const study = require(path.resolve(studyPath));
// Bỏ ảnh base64 (logo) cho nhẹ
const html = fs.readFileSync(htmlPath, 'utf8').replace(/data:[^"')]{200,}/g, 'DATAURI');
const n = +((html.match(/<title>[^<]*Bài (\d+)/) || [])[1]);
if (!n) throw new Error('Không tìm thấy số bài trong <title>');

/* ================= 1. Trích dữ liệu bài tập từ HTML ================= */
function extractExercises(s) {
  const script = s.slice(s.indexOf('<script>') + 8, s.lastIndexOf('</script>'));
  const data = script.slice(0, script.indexOf('ENGINE'));
  const extra = ['SCORE', 'AUDIO_DISTRACT'].map(n => {
    const m = script.match(new RegExp(`const ${n} = (\\{[\\s\\S]*?\\n?\\});`));
    return m ? `const ${n} = ${m[1]};` : '';
  }).join('\n');
  const fn = new Function(data.replace(/\/\*\s*=+\s*$/, '') + '\n' + extra + `
  return {VOCAB, AUDIO_IDS, PINYIN_IDS, ORDER_DATA, DIALOGUE_ANSWERS, DIALOGUE_CHIPS, DIALOGUE_PASSAGES, TEXT_ANSWERS, TEXT_CHIPS, TEXT_PASSAGES,
   ZHVI_DATA, VIZH_DATA, TF_DATA, DICTATION_DATA, ESSAY_SAMPLE, GRAM1_INTRO, GRAM1_DATA, GRAM2_INTRO, GRAM2_DATA, GRAM3_INTRO, GRAM3_DATA, SCORE, AUDIO_DISTRACT};`);
  const d = fn();
  const html = s.slice(0, s.indexOf('<script>'));
  const sub = id => { const m = html.match(new RegExp(`id="${id}"[\\s\\S]*?<h2>([\\s\\S]*?)</h2>\\s*<div class="sub">([\\s\\S]*?)</div>`)); return m ? { h2: m[1].replace(/<[^>]+>/g, '').trim(), sub: m[2].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim() } : null; };
  d.SECTIONS = Object.fromEntries(['sec-audio','sec-pinyin','sec-order','sec-dialogue','sec-text','sec-zhvi','sec-vizh','sec-tf','sec-dictation','sec-essay','sec-gram1','sec-gram2','sec-gram3'].map(k => [k, sub(k)]));
  const instr = html.match(/id="sec-essay"[\s\S]*?<div class="instr">([\s\S]*?)<\/div>/);
  d.ESSAY_INSTR = instr ? instr[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim() : '';
  const markers = script.match(/const gramMarkers = (\[[^\]]*\])/);
  d.GRAM_MARKERS = markers ? JSON.parse(markers[1].replace(/'/g, '"')) : [];
  const minc = script.match(/hanCount\/(\d+)/); d.MIN_CHARS = minc ? +minc[1] : 100;
  const minv = script.match(/vocabHits\/(\d+)/); d.MIN_VOCAB = minv ? +minv[1] : 5;
  const ming = script.match(/gramMarkers\/(\d+)/); d.MIN_GRAM = ming ? +ming[1] : 2;
  d.TITLE = (s.match(/<title>(.*?)<\/title>/) || [])[1];
  d.SUBTITLE = (html.match(/class="titlebox">[\s\S]*?<span>(.*?)<\/span>/) || [])[1];
  d.INTRO = (html.match(/Giới thiệu bài học[\s\S]*?<div class="instr">([\s\S]*?)<\/div>/) || [])[1];
    return d;
}
let d = extractExercises(html);

// Sửa lỗi trong dữ liệu gốc (study.fixes = [[chuỗi sai, chuỗi đúng], ...])
let raw = JSON.stringify(d);
for (const [from, to] of study.fixes ?? []) {
  const enc = x => JSON.stringify(x).slice(1, -1);
  if (!raw.includes(enc(from))) throw new Error(`lesson ${n}: fix not found: ${from}`);
  raw = raw.split(enc(from)).join(enc(to));
}
d = JSON.parse(raw);

/* ================= 2. Sinh lesson-XX.ts ================= */

const strip = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/\s+/g, ' ').trim();

/* ---------- vocab ---------- */
const m = html.match(/TỪ VỰNG \((\d+) từ chính \+ (\d+) từ mở rộng/);
const mainCount = m ? +m[1] : d.VOCAB.length;
const vocab = d.VOCAB.map((v, i) => ({
  id: v.id, han: v.han, py: v.py, pos: v.loai, meaning: v.nghia, example: v.vd, exampleVi: v.vi,
  ...(i >= mainCount ? { group: 'extended' } : {}),
}));

/* ---------- grammar (from GRAMx_INTRO tables) ---------- */
function parseGrammar(intro, sub) {
  const ths = [...intro.matchAll(/<th>([\s\S]*?)<\/th>/g)].map(x => strip(x[1]));
  const rows = [...intro.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(x => x[1]).filter(r => r.includes('<td'));
  const usages = rows.map(r => {
    const cells = [...r.matchAll(/<td( class="zh")?>([\s\S]*?)<\/td>/g)].map(c => ({ zh: !!c[1], text: strip(c[2]) }));
    const examples = cells.filter(c => c.zh).flatMap(c => c.text.split(/\s*\/\s*/)).filter(Boolean);
    const plain = cells.filter(c => !c.zh);
    const label = plain[0]?.text ?? '';
    const explain = plain.slice(1).map((c, i) => (ths.length > 2 && plain.length > 2 ? `${ths[i + 1]}: ` : '') + c.text).join(' · ');
    return { label, explain, examples };
  });
  const note = strip((intro.match(/<div class="word-meta">([\s\S]*?)<\/div>/) || [, ''])[1]).replace(/^💡\s*/, '');
  const title = sub.replace(/\s*\(\d+ câu\)\s*$/, '').replace(/\s+/g, ' ').trim();
  // word: "如何 so với 怎么" → "如何 / 怎么"; "靠 - 3 nghĩa..." → "靠"
  const word = title.includes('so với') ? title.split(/\s*so với\s*/).map(s => s.trim()).join(' / ') : title.split(/\s+[-–]\s+/)[0].replace(/\s*\(.*$/, '').trim();
  const desc = title.includes('so với') ? `Phân biệt ${word}` : (title.split(/\s+[-–]\s+/).slice(1).join(' - ') || title);
  return { word, title: desc.charAt(0).toUpperCase() + desc.slice(1), usages, ...(note ? { note } : {}) };
}
const grams = [1, 2, 3].map(i => ({
  data: d[`GRAM${i}_DATA`], sub: d.SECTIONS[`sec-gram${i}`].sub, intro: d[`GRAM${i}_INTRO`], points: d.SCORE[`gram${i}`].max,
}));
const grammar = grams.map(g => parseGrammar(g.intro, g.sub));

/* ---------- practice ---------- */
const sec = k => d.SECTIONS[k];
const name = k => sec(k).h2.replace(/^\S+\s+Phần \d+\s*·\s*/, '').replace(/\s*\d+đ.*$/, '').trim();
let no = 0;
const base = (id, icon, k, scoreKey, subtitle) => ({ id, icon, title: `Phần ${++no} · ${name(k)}`, points: d.SCORE[scoreKey].max, subtitle: subtitle ?? sec(k).sub });
const fillText = p => p.html.replace(/<[^>]+>/g, '');

const essaySub = sec('sec-essay').sub;
const prompt = (essaySub.match(/(请[^()（]*?。)/) || [, essaySub])[1];
const promptVi = (essaySub.match(/\((Hãy[^)]*)\)/) || [, ''])[1];

const practice = [
  { ...base('listen', '🎧', 'sec-audio', 'audio'), kind: 'listen-pick',
    items: d.AUDIO_IDS.map(id => ({ vocabId: id, distractors: d.AUDIO_DISTRACT[id] })) },
  { ...base('pinyin', '✍️', 'sec-pinyin', 'pinyin'), kind: 'pinyin', vocabIds: d.PINYIN_IDS },
  { ...base('order', '🧩', 'sec-order', 'order', 'Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.'), kind: 'order',
    items: d.ORDER_DATA.map(o => ({ tokens: o.ws, answer: o.ans, vi: o.vi })) },
  { ...base('fill-1', '💬', 'sec-dialogue', 'dialogue', 'Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.'), kind: 'fill-blanks',
    passages: d.DIALOGUE_PASSAGES.map(p => ({ title: p.title, text: fillText(p) })), answers: d.DIALOGUE_ANSWERS, bank: d.DIALOGUE_CHIPS },
  { ...base('fill-2', '📄', 'sec-text', 'text'), kind: 'fill-blanks',
    passages: d.TEXT_PASSAGES.map(p => ({ title: p.title, text: fillText(p) })), answers: d.TEXT_ANSWERS, bank: d.TEXT_CHIPS },
  { ...base('zh-vi', '🇨🇳', 'sec-zhvi', 'zhvi', 'Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.'), kind: 'translate-zh-vi',
    items: d.ZHVI_DATA.map(z => ({ zh: z.zh, vi: z.vi, keywords: z.keywords })) },
  { ...base('vi-zh', '🇻🇳', 'sec-vizh', 'vizh'), kind: 'translate-vi-zh', items: d.VIZH_DATA.map(z => ({ vi: z.vi, answers: z.zh })) },
  { ...base('true-false', '✅', 'sec-tf', 'tf', 'Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.'), kind: 'true-false', items: d.TF_DATA.map(t => ({ q: t.q, a: t.a })) },
  { ...base('dictation', '🎙️', 'sec-dictation', 'dictation', 'Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.'), kind: 'dictation', items: d.DICTATION_DATA },
  { ...base('essay', '📝', 'sec-essay', 'essay', 'Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.'), kind: 'essay',
    prompt: prompt + (promptVi ? ` (${promptVi})` : ''),
    requirement: d.ESSAY_INSTR.replace(/^Yêu cầu:\s*/, 'Yêu cầu: ').replace(/\s*Giáo viên sẽ chấm[\s\S]*$/, '').replace(/\s*\(theo đúng yêu cầu gốc của giáo trình\)/, ''),
    minChars: d.MIN_CHARS, minVocab: d.MIN_VOCAB, grammarMarkers: d.GRAM_MARKERS, minGrammar: d.MIN_GRAM, sample: d.ESSAY_SAMPLE },
  ...grams.map((g, i) => {
    const set = [...new Set(g.data.flatMap(x => x.a))];
    // Chỉ cho chọn khi đáp án thực sự phân biệt (không phải câu nào cũng đúng với mọi lựa chọn)
    const options = set.length >= 2 && set.length <= 4 && g.data.some(x => x.a.length < set.length) ? set : [];
    const subText = g.sub.replace(/\s*\(\d+ câu\)/, '').replace(/\s+/g, ' ');
    const gp = grammar[i];
    return {
      id: `gram-${i + 1}`, icon: '🧠', title: `Phần ${++no} · Ngữ pháp: ${gp.word}`, points: g.points,
      subtitle: options.length ? `Chọn từ thích hợp cho mỗi chỗ trống (${subText}).` : `Điền từ vào chỗ trống (${subText}).`,
      kind: 'grammar-fill', grammarWord: gp.word,
      ...(options.length ? { options } : {}),
      items: g.data.map(x => ({ q: x.q, answers: x.a })),
    };
  }),
];
const total = practice.reduce((a, s) => a + s.points, 0);
if (total !== 100) throw new Error(`lesson ${n}: total points ${total}`);

/* ---------- emit ---------- */
const pad = String(n).padStart(2, '0');
const lesson = {
  level: 'hsk5', no: n, slug: `bai-${n}`,
  zh: study.zh, pinyin: study.pinyin, vi: study.vi, en: study.en, topic: study.topic,
  durationMinutes: 60,
  goals: study.goals, warmUp: study.warmUp, vocab, text: study.text,
  grammar: [...grammar, ...(study.extraGrammar ?? [])],
  wordChoice: study.wordChoice, practice,
};
const body = JSON.stringify(lesson, null, 2)
  // mảng ngắn gồm giá trị đơn giản viết trên một dòng
  .replace(/\[\n\s*((?:(?:"(?:[^"\\\n]|\\.)*"|-?\d+|true|false),?\n\s*)+)\]/g, (all, inner) => {
    const one = '[' + inner.split('\n').map(x => x.trim()).filter(Boolean).join(' ') + ']';
    return one.length <= 110 ? one : all;
  })
  .replace(/^(\s*)"([A-Za-z_]\w*)":/gm, '$1$2:');
const ts = `import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第${n}课 ${study.zh} (${study.en})
// Nguồn: slide bài ${n} và bộ bài tập "HSK5 tiêu chuẩn bài ${n}" trong hsk5/docs.
export const lesson${pad}: Lesson = ${body};
`;
fs.writeFileSync(path.join(outDir, `lesson-${pad}.ts`), ts);
console.log(`lesson-${pad}.ts`, 'vocab', vocab.length, `(main ${mainCount})`, 'grammar', grammar.map(g => g.word).join(' | '), 'options', practice.filter(p => p.options).map(p => p.options.join('/')).join(' ; '));
