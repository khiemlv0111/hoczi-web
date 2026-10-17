import axios from "axios";
import { getAccessToken, postBlobRequest } from "@/data/http";
import { speakWithBrowser } from "./utils";

// Phát âm tiếng Trung bằng OpenAI qua API của Hoczi (POST /api/ai/tts, server giữ key và cache file).
// Chưa đăng nhập hoặc API lỗi thì dùng giọng đọc của trình duyệt.

const SLOW_RATE = 0.75;

// text+tốc độ → URL audio đã tải trong phiên này
const audioUrls = new Map<string, Promise<string>>();
let player: HTMLAudioElement | null = null;
let latestRequest = 0;
// Sau lỗi không thể tự hết (chưa đăng nhập, API chưa cấu hình) thì không gọi lại API nữa trong phiên.
let browserOnly = false;

function stopAll() {
  player?.pause();
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function loadAudio(text: string, slow: boolean) {
  const key = `${slow ? "slow" : "normal"}|${text}`;
  let url = audioUrls.get(key);
  if (!url) {
    url = postBlobRequest("/api/ai/tts", { text, slow }, true).then(blob => URL.createObjectURL(blob));
    url.catch(() => audioUrls.delete(key));
    audioUrls.set(key, url);
  }
  return url;
}

function isPermanentFailure(error: unknown) {
  const status = axios.isAxiosError(error) ? error.response?.status : undefined;
  // 404: API chưa có endpoint /api/ai/tts (chưa deploy)
  return status === 401 || status === 403 || status === 404 || status === 503;
}

/** Đọc đoạn văn; promise kết thúc khi bắt đầu phát (để nút hiện trạng thái đang tải). */
export async function speak(text: string, rate = 0.85): Promise<void> {
  const request = ++latestRequest;
  stopAll();
  const slow = rate <= SLOW_RATE;

  let token: string | null = null;
  try { token = getAccessToken(); } catch { /* localStorage bị chặn */ }
  if (browserOnly || !token) {
    speakWithBrowser(text, rate);
    return;
  }

  try {
    const url = await loadAudio(text, slow);
    // Người dùng đã bấm nghe câu khác trong lúc chờ tải
    if (request !== latestRequest) return;
    player ??= new Audio();
    player.src = url;
    await player.play();
  } catch (error) {
    if (request !== latestRequest) return;
    if (isPermanentFailure(error)) browserOnly = true;
    console.warn("[tts] OpenAI audio unavailable, using browser voice", error);
    speakWithBrowser(text, rate);
  }
}
