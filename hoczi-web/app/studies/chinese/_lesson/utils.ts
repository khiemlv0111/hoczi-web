const TONE_MAP: Record<string, string> = {
  ā: "a", á: "a", ǎ: "a", à: "a",
  ē: "e", é: "e", ě: "e", è: "e",
  ī: "i", í: "i", ǐ: "i", ì: "i",
  ō: "o", ó: "o", ǒ: "o", ò: "o",
  ū: "u", ú: "u", ǔ: "u", ù: "u",
  ǖ: "v", ǘ: "v", ǚ: "v", ǜ: "v", ü: "v",
};

/** So sánh pinyin không phân biệt dấu thanh, khoảng trắng, hoa thường. */
export function normPinyin(s: string) {
  return [...s.toLowerCase()].map(c => TONE_MAP[c] ?? c).join("").replace(/[^a-z]/g, "");
}

/** Bỏ khoảng trắng và dấu câu khi so sánh chữ Hán. */
export function normHan(s: string) {
  return s.replace(/[\s，。！？、；：“”‘’,.!?;:"'…]/g, "");
}

export function endsWithPunctuation(s: string) {
  return /[。！？.!?]\s*$/.test(s);
}

export function countHan(s: string) {
  return (s.match(/[一-鿿]/g) ?? []).length;
}

/**
 * Xáo trộn cố định theo seed: server và client cho ra cùng thứ tự
 * (tránh lỗi hydration do Math.random).
 */
export function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function speak(text: string, rate = 0.85) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = rate;
  const voice = synth.getVoices().find(v => v.lang.toLowerCase().startsWith("zh"));
  if (voice) u.voice = voice;
  synth.speak(u);
}

export function round1(n: number) {
  return Math.round(n * 10) / 10;
}
