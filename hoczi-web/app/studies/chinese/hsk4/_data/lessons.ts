import type { Lesson, LessonMeta } from "../../_lesson/types";
import { lesson01 } from "./lesson-01";
import { lesson02 } from "./lesson-02";
import { lesson03 } from "./lesson-03";
import { lesson04 } from "./lesson-04";
import { lesson05 } from "./lesson-05";
import { lesson06 } from "./lesson-06";
import { lesson07 } from "./lesson-07";
import { lesson08 } from "./lesson-08";
import { lesson09 } from "./lesson-09";
import { lesson10 } from "./lesson-10";
import { lesson11 } from "./lesson-11";
import { lesson12 } from "./lesson-12";
import { lesson13 } from "./lesson-13";
import { lesson14 } from "./lesson-14";
import { lesson15 } from "./lesson-15";
import { lesson16 } from "./lesson-16";
import { lesson17 } from "./lesson-17";
import { lesson18 } from "./lesson-18";
import { lesson19 } from "./lesson-19";
import { lesson20 } from "./lesson-20";

// HSK标准教程4: 20 bài (上册 bài 1–10, 下册 bài 11–20), soạn tay từ bản scan trong docs/hsk4.
export const HSK4_TOTAL_LESSONS = 20;

// Thêm bài mới: tạo file lesson-XX.ts rồi đăng ký vào đây.
const CONTENT: Lesson[] = [
  lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09, lesson10,
  lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, lesson18, lesson19, lesson20,
];

export const HSK4_LESSONS: LessonMeta[] = Array.from({ length: HSK4_TOTAL_LESSONS }, (_, i) => {
  const no = i + 1;
  return { no, slug: `bai-${no}`, lesson: CONTENT.find(l => l.no === no) };
});

export function getHsk4Lesson(slug: string) {
  return CONTENT.find(l => l.slug === slug);
}

export function getHsk4LessonSlugs() {
  return CONTENT.map(l => l.slug);
}
