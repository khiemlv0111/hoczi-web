import { notFound } from "next/navigation";
import { LessonPage } from "../../_lesson/LessonPage";
import { getHsk5Lesson, getHsk5LessonSlugs } from "../_data/lessons";

interface Props {
  params: Promise<{ lesson: string }>;
}

export function generateStaticParams() {
  return getHsk5LessonSlugs().map(lesson => ({ lesson }));
}

export async function generateMetadata({ params }: Props) {
  const lesson = getHsk5Lesson((await params).lesson);
  return lesson ? { title: `HSK5 Bài ${lesson.no} · ${lesson.zh} | Hoczi` } : {};
}

export default async function Page({ params }: Props) {
  const lesson = getHsk5Lesson((await params).lesson);
  if (!lesson) notFound();
  return <LessonPage lesson={lesson} backHref="/studies/chinese/hsk5" levelLabel="HSK 5" />;
}
