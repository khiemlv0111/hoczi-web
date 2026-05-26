import { AdminCourseDetailPage } from "./AdminCourseDetailPage";

export default async function Page({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;

    return (
        <div>
            <AdminCourseDetailPage id={Number(id)}/>
        </div>
    )
}