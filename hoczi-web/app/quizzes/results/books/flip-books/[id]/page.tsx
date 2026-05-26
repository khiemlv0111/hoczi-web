import { FlipBookDetailPage } from "./FlipBooksDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <>
            <FlipBookDetailPage id={Number(id)} />
        </>
    )
}