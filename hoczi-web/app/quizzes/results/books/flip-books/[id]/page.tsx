import { FlipBooksDetail } from "./FlipBooksDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <>
            <FlipBooksDetail id={Number(id)} />
        </>
    )
}