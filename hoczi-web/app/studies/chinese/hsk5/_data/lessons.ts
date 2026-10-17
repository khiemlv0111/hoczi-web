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

export const HSK5_TOTAL_LESSONS = 36;

// Thêm bài mới: tạo file lesson-XX.ts rồi đăng ký vào đây.
const CONTENT: Lesson[] = [
  lesson01, lesson02, lesson03, lesson04, lesson05, lesson06,
  lesson07, lesson08, lesson09, lesson10, lesson11, lesson12,
];

export const HSK5_LESSONS: LessonMeta[] = Array.from({ length: HSK5_TOTAL_LESSONS }, (_, i) => {
  const no = i + 1;
  return { no, slug: `bai-${no}`, lesson: CONTENT.find(l => l.no === no) };
});

export function getHsk5Lesson(slug: string) {
  return CONTENT.find(l => l.slug === slug);
}

export function getHsk5LessonSlugs() {
  return CONTENT.map(l => l.slug);
}
