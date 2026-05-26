import { UserDetailPage } from "./UserDetailPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <UserDetailPage userId={Number(id)} />
        </div>
    )
}

