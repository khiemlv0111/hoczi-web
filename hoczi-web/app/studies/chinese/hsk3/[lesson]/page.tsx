import { notFound } from "next/navigation";
import { LessonPage } from "../../_lesson/LessonPage";
import { getHsk3Lesson, getHsk3LessonSlugs } from "../_data/lessons";

interface Props {
  params: Promise<{ lesson: string }>;
}

export function generateStaticParams() {
  return getHsk3LessonSlugs().map(lesson => ({ lesson }));
}

export async function generateMetadata({ params }: Props) {
  const lesson = getHsk3Lesson((await params).lesson);
  return lesson ? { title: `HSK3 Bài ${lesson.no} · ${lesson.zh} | Hoczi` } : {};
}

export default async function Page({ params }: Props) {
  const lesson = getHsk3Lesson((await params).lesson);
  if (!lesson) notFound();
  return <LessonPage lesson={lesson} backHref="/studies/chinese/hsk3" levelLabel="HSK 3" />;
}
