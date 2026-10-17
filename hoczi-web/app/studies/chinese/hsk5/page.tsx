import { LessonListPage } from "../_lesson/LessonListPage";
import { HSK5_LESSONS } from "./_data/lessons";

const VOLUMES = [
  { title: "Tập 1 · 上册", from: 1, to: 18 },
  { title: "Tập 2 · 下册", from: 19, to: 36 },
];

export default function Page() {
  return <LessonListPage title="HSK 5 · 标准教程" basePath="/studies/chinese/hsk5" lessons={HSK5_LESSONS} volumes={VOLUMES} />;
}
