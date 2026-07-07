// import { LessonDetailPage } from "./LessonDetailPage";

import { MyListPage } from "./MyListPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="my-list-page">
            <MyListPage />
        </div>
    )
}