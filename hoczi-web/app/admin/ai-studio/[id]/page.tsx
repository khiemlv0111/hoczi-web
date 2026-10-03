import { AiDraftDetailPage } from "./AiDraftDetailPage";

export default async function Page({params}: {params: Promise<{ id: string }>}){
    const { id } = await params;
    return (
        <>
        <AiDraftDetailPage id={Number(id)}/>
        </>
    )
}
