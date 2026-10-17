/* eslint-disable @typescript-eslint/no-require-imports -- Node CLI script */
// Kiểm tra tính nhất quán dữ liệu các bài: node scripts/hsk-import/check.js <thư mục _data>
const ts = require('typescript');
const fs = require('fs'), path = require('path');
const dir = process.argv[2];
let problems = 0;
const bad = (n, msg) => { problems++; console.log(`bài ${n}: ${msg}`); };
for (const f of fs.readdirSync(dir).filter(f => /^lesson-\d+\.ts$/.test(f)).sort()) {
  const js = ts.transpileModule(fs.readFileSync(path.join(dir, f), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const mod = { exports: {} }; new Function('module', 'exports', 'require', js)(mod, mod.exports, () => ({}));
  const L = Object.values(mod.exports)[0], n = L.no;
  const ids = new Set(L.vocab.map(v => v.id));
  if (ids.size !== L.vocab.length) bad(n, 'trùng id từ vựng');
  const hans = L.vocab.map(v => v.han); if (new Set(hans).size !== hans.length) bad(n, 'trùng chữ trong từ vựng: ' + hans.filter((h, i) => hans.indexOf(h) !== i));
  L.vocab.forEach(v => { if (!v.py || !v.meaning || !v.example) bad(n, `từ ${v.han} thiếu dữ liệu`); });
  const total = L.practice.reduce((a, s) => a + s.points, 0); if (total !== 100) bad(n, 'tổng điểm ' + total);
  if (new Set(L.practice.map(s => s.id)).size !== L.practice.length) bad(n, 'trùng id phần');
  for (const s of L.practice) {
    if (s.kind === 'listen-pick') s.items.forEach(it => { [it.vocabId, ...it.distractors].forEach(id => ids.has(id) || bad(n, `${s.id}: id ${id} không tồn tại`)); if (new Set([it.vocabId, ...it.distractors].map(id => L.vocab.find(v => v.id === id)?.han)).size !== 4) bad(n, `${s.id}: lựa chọn trùng`); });
    if (s.kind === 'pinyin') s.vocabIds.forEach(id => ids.has(id) || bad(n, `${s.id}: id ${id}`));
    if (s.kind === 'order') s.items.forEach((it, i) => { if (it.tokens.join('') !== it.answer) bad(n, `${s.id} câu ${i + 1}: mảnh ghép "${it.tokens.join('')}" ≠ đáp án "${it.answer}"`); });
    if (s.kind === 'fill-blanks') {
      const keys = s.passages.flatMap(p => [...p.text.matchAll(/\{\{(\w+)\}\}/g)].map(m => m[1]));
      const ak = Object.keys(s.answers);
      if (keys.sort().join() !== ak.slice().sort().join()) bad(n, `${s.id}: chỗ trống ${keys} ≠ đáp án ${ak}`);
      Object.values(s.answers).forEach(w => s.bank.includes(w) || bad(n, `${s.id}: "${w}" không có trong ngân hàng từ`));
      const cnt = {}; Object.values(s.answers).forEach(w => cnt[w] = (cnt[w] || 0) + 1);
      Object.entries(cnt).forEach(([w, c]) => { if (s.bank.filter(b => b === w).length < c) bad(n, `${s.id}: "${w}" cần ${c} lần trong ngân hàng`); });
    }
    if (s.kind === 'grammar-fill') s.items.forEach((it, i) => {
      if (it.q.split('___').length !== 2) bad(n, `${s.id} câu ${i + 1}: cần đúng 1 chỗ trống: ${it.q}`);
      if (s.options) it.answers.forEach(a => s.options.includes(a) || bad(n, `${s.id} câu ${i + 1}: đáp án ${a} không có trong lựa chọn`));
    });
    if (s.kind === 'true-false') s.items.forEach((it, i) => typeof it.a === 'boolean' || bad(n, `${s.id} câu ${i + 1}`));
    if (s.kind === 'translate-zh-vi') s.items.forEach((it, i) => it.keywords.forEach(k => it.vi.toLowerCase().includes(k.toLowerCase()) || bad(n, `${s.id} câu ${i + 1}: từ khóa "${k}" không có trong bản dịch gợi ý`)));
  }
  L.wordChoice.forEach((w, i) => { if (!w.options.includes(w.answer)) bad(n, `luyện nhanh ${i + 1}: đáp án ngoài lựa chọn`); if (w.sentence.split('___').length !== 2) bad(n, `luyện nhanh ${i + 1}: cần 1 chỗ trống`); });
  L.grammar.forEach(g => g.usages.forEach(u => u.examples.length || bad(n, `ngữ pháp ${g.word}/${u.label}: không có ví dụ`)));
  console.log(`bài ${n} ${L.zh}: ${L.vocab.length} từ, ${L.text.paragraphs.length} đoạn, ${L.grammar.length} NP, ${L.wordChoice.length} luyện nhanh, ${L.practice.length} phần`);
}
console.log(problems ? `${problems} vấn đề` : 'OK');
process.exit(problems ? 1 : 0);
