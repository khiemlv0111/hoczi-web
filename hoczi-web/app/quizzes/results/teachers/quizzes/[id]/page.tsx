import { QuizDetailPage } from "./QuizDetailPage";


export default async function Page({params}: {params: Promise<{ id: string }>}){
   const { id } = await params;

    return (
        <>
            <QuizDetailPage id={Number(id)}/>
        </>
    )
}