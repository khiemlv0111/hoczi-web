import { LessonListPage } from "../_lesson/LessonListPage";
import { HSK2_LESSONS } from "./_data/lessons";

const VOLUMES = [{ title: "Giáo trình chuẩn HSK 2 · 标准教程2", from: 1, to: 15 }];

export default function Page() {
  return <LessonListPage title="HSK 2 · 标准教程" basePath="/studies/chinese/hsk2" lessons={HSK2_LESSONS} volumes={VOLUMES} />;
}
