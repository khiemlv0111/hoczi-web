import { AdminBooksByCategory } from "./AdminBooksByCategory";

export default async function Page({ params }: { params: Promise<{ categoryId: string }> }) {
    const { categoryId } = await params;

    return (
        <>
            <AdminBooksByCategory categoryId={Number(categoryId)} />
        </>
    )
}