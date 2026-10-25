import axios from "axios";
import { getAccessToken, postRequest } from "@/data/http";
import { speakWithBrowser } from "./utils";

// Phát âm tiếng Trung bằng giọng ElevenLabs (LinTeacher) qua API của Hoczi (POST /api/ai/tts).
// Lần đầu một câu được bấm, server tạo audio và lưu lên S3; các lần sau chỉ trả lại link có sẵn.
// Trình duyệt cũng nhớ link (localStorage) nên bấm lại sẽ phát ngay, không gọi API.
// Chưa đăng nhập hoặc API lỗi thì dùng giọng đọc của trình duyệt.

const SLOW_RATE = 0.75;
const STORAGE_KEY = "hoczi-tts-urls-v1";
const MAX_STORED = 2000;

// text+tốc độ → link audio
const urls = new Map<string, Promise<string>>();
let stored: Record<string, string> | null = null;
let player: HTMLAudioElement | null = null;
let latestRequest = 0;
// Đoạn đang phát (owner do nút truyền vào) để hiện nút tạm dừng/tiếp tục đúng chỗ
export type Playback = { owner: string; paused: boolean } | null;
let playback: Playback = null;
let playbackSource: "audio" | "browser" = "audio";
const listeners = new Set<() => void>();
// Sau lỗi không thể tự hết (chưa đăng nhập, API chưa có/chưa cấu hình) thì không gọi API nữa trong phiên.
let browserOnly = false;

function storedUrls(): Record<string, string> {
  if (stored) return stored;
  try {
    stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") ?? {};
  } catch {
    stored = {};
  }
  return stored!;
}

function rememberUrl(key: string, url: string) {
  const all = storedUrls();
  all[key] = url;
  const keys = Object.keys(all);
  if (keys.length > MAX_STORED) keys.slice(0, keys.length - MAX_STORED).forEach(k => delete all[k]);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch { /* hết dung lượng / bị chặn */ }
}

function forgetUrl(key: string) {
  urls.delete(key);
  const all = storedUrls();
  if (all[key]) {
    delete all[key];
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); } catch { /* bỏ qua */ }
  }
}

function getAudioUrl(text: string, slow: boolean) {
  const key = `${slow ? "slow" : "normal"}|${text}`;
  let url = urls.get(key);
  if (!url) {
    const known = storedUrls()[key];
    url = known
      ? Promise.resolve(known)
      : postRequest("/api/ai/tts", { text, slow }, true).then((res: { url: string }) => {
          rememberUrl(key, res.url);
          return res.url;
        });
    url.catch(() => forgetUrl(key));
    urls.set(key, url);
  }
  return { key, url };
}

function setPlayback(next: Playback) {
  playback = next;
  listeners.forEach(l => l());
}

export function subscribePlayback(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export const getPlayback = () => playback;

export function pausePlayback() {
  if (!playback || playback.paused) return;
  if (playbackSource === "audio") player?.pause();
  else window.speechSynthesis.pause();
  setPlayback({ ...playback, paused: true });
}

export function resumePlayback() {
  if (!playback?.paused) return;
  if (playbackSource === "audio") player?.play().catch(() => setPlayback(null));
  else window.speechSynthesis.resume();
  setPlayback({ ...playback, paused: false });
}

function getPlayer() {
  if (!player) {
    player = new Audio();
    player.addEventListener("ended", () => { if (playbackSource === "audio") setPlayback(null); });
  }
  return player;
}

function playInBrowser(text: string, rate: number, owner: string, request: number) {
  playbackSource = "browser";
  setPlayback({ owner, paused: false });
  // cancel() của lần phát trước cũng gọi onend → chỉ xóa trạng thái nếu vẫn là lần phát này
  speakWithBrowser(text, rate, () => { if (request === latestRequest) setPlayback(null); });
}

function stopAll() {
  player?.pause();
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function isPermanentFailure(error: unknown) {
  const status = axios.isAxiosError(error) ? error.response?.status : undefined;
  // 404: API chưa có endpoint /api/ai/tts (chưa deploy)
  return status === 401 || status === 403 || status === 404 || status === 503;
}

/** Đọc đoạn văn; promise kết thúc khi bắt đầu phát (để nút hiện trạng thái đang tải). */
export async function speak(text: string, rate = 0.85, owner = text): Promise<void> {
  const request = ++latestRequest;
  stopAll();
  setPlayback(null);
  const slow = rate <= SLOW_RATE;

  let token: string | null = null;
  try { token = getAccessToken(); } catch { /* localStorage bị chặn */ }
  if (browserOnly || !token) {
    playInBrowser(text, rate, owner, request);
    return;
  }

  const { key, url } = getAudioUrl(text, slow);
  try {
    const src = await url;
    // Người dùng đã bấm nghe câu khác trong lúc chờ
    if (request !== latestRequest) return;
    const audio = getPlayer();
    audio.src = src;
    playbackSource = "audio";
    await audio.play();
    if (request === latestRequest) setPlayback({ owner, paused: false });
  } catch (error) {
    if (request !== latestRequest) return;
    // Link đã lưu không phát được (file bị xóa…) → lần sau xin link mới
    forgetUrl(key);
    if (isPermanentFailure(error)) browserOnly = true;
    console.warn("[tts] lesson audio unavailable, using browser voice", error);
    playInBrowser(text, rate, owner, request);
  }
}
