import { cookies } from "next/headers";

import { SessionDetailPage } from "./SessionDetailPage";
import { APP_ACCESS_TOKEN_KEY } from "@/data/http";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get(APP_ACCESS_TOKEN_KEY)?.value;

    console.log("TOKEN", token);
    console.log("IDDDD", id);

    

    return (
        <>
            <SessionDetailPage sessionId={id}/>

        </>
    )
}