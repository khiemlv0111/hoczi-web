import { LessonDetailPage } from "./LessonDetailPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="lesson-detail-page">
            <LessonDetailPage id={id} />
        </div>
    )
}