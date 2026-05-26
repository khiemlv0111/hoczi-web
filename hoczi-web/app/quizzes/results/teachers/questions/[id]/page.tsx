import { TeacherQuestionDetailPage } from "./TeacherQuestionDetailPage";

export default async function Page({params}: {params: Promise<{ id: string }>}){
   const { id } = await params;

    return (
        <>
            <TeacherQuestionDetailPage id={id}/>
        </>
    )
}