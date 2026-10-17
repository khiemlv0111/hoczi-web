import { notFound } from "next/navigation";
import { LessonPage } from "../../_lesson/LessonPage";
import { getHsk4Lesson, getHsk4LessonSlugs } from "../_data/lessons";

interface Props {
  params: Promise<{ lesson: string }>;
}

export function generateStaticParams() {
  return getHsk4LessonSlugs().map(lesson => ({ lesson }));
}

export async function generateMetadata({ params }: Props) {
  const lesson = getHsk4Lesson((await params).lesson);
  return lesson ? { title: `HSK4 Bài ${lesson.no} · ${lesson.zh} | Hoczi` } : {};
}

export default async function Page({ params }: Props) {
  const lesson = getHsk4Lesson((await params).lesson);
  if (!lesson) notFound();
  return <LessonPage lesson={lesson} backHref="/studies/chinese/hsk4" levelLabel="HSK 4" />;
}
