import { TenantDetailPage } from "./TenantDetailPage";

export default async function Page({params}: {params: Promise<{ id: string }>}){
    const { id } = await params;
    return (
        <>
        <TenantDetailPage id={Number(id)}/>
        </>
    )
}

