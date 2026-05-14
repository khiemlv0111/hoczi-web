import { BookDetailPage } from "./BookDetailPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <>
            <BookDetailPage id={Number(id)}/>
        </>
    )
}