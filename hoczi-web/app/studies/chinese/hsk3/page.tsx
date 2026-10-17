import { LessonListPage } from "../_lesson/LessonListPage";
import { HSK3_LESSONS } from "./_data/lessons";

const VOLUMES = [{ title: "Giáo trình chuẩn HSK 3 · 标准教程3", from: 1, to: 20 }];

export default function Page() {
  return <LessonListPage title="HSK 3 · 标准教程" basePath="/studies/chinese/hsk3" lessons={HSK3_LESSONS} volumes={VOLUMES} />;
}
