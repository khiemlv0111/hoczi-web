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

// HSK标准教程2: 15 bài (một quyển), soạn tay từ bản scan trong docs/hsk2.
export const HSK2_TOTAL_LESSONS = 15;

// Thêm bài mới: tạo file lesson-XX.ts rồi đăng ký vào đây.
const CONTENT: Lesson[] = [
  lesson01, lesson02, lesson03, lesson04, lesson05, lesson06, lesson07, lesson08, lesson09, lesson10,
  lesson11, lesson12, lesson13, lesson14, lesson15,
];

export const HSK2_LESSONS: LessonMeta[] = Array.from({ length: HSK2_TOTAL_LESSONS }, (_, i) => {
  const no = i + 1;
  return { no, slug: `bai-${no}`, lesson: CONTENT.find(l => l.no === no) };
});

export function getHsk2Lesson(slug: string) {
  return CONTENT.find(l => l.slug === slug);
}

export function getHsk2LessonSlugs() {
  return CONTENT.map(l => l.slug);
}
