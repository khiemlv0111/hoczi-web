import { QuestionDetailPage } from "./QuestionDetailPage";

export default async function Page({params}: {params: Promise<{ id: string }>}){
   const { id } = await params;

    return (
        <>
            <QuestionDetailPage id={id}/>
        </>
    )
}