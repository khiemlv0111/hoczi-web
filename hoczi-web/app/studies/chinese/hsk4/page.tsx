import { LessonListPage } from "../_lesson/LessonListPage";
import { HSK4_LESSONS } from "./_data/lessons";

const VOLUMES = [
  { title: "Tập 1 · 上册", from: 1, to: 10 },
  { title: "Tập 2 · 下册", from: 11, to: 20 },
];

export default function Page() {
  return <LessonListPage title="HSK 4 · 标准教程" basePath="/studies/chinese/hsk4" lessons={HSK4_LESSONS} volumes={VOLUMES} />;
}
