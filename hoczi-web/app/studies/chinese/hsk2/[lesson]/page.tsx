import { notFound } from "next/navigation";
import { LessonPage } from "../../_lesson/LessonPage";
import { getHsk2Lesson, getHsk2LessonSlugs } from "../_data/lessons";

interface Props {
  params: Promise<{ lesson: string }>;
}

export function generateStaticParams() {
  return getHsk2LessonSlugs().map(lesson => ({ lesson }));
}

export async function generateMetadata({ params }: Props) {
  const lesson = getHsk2Lesson((await params).lesson);
  return lesson ? { title: `HSK2 Bài ${lesson.no} · ${lesson.zh} | Hoczi` } : {};
}

export default async function Page({ params }: Props) {
  const lesson = getHsk2Lesson((await params).lesson);
  if (!lesson) notFound();
  return <LessonPage lesson={lesson} backHref="/studies/chinese/hsk2" levelLabel="HSK 2" />;
}
