import { DoQuizzesPage } from "./DoQuizzesPage";

export default async function Page({ params }: { params: Promise<{ activity: string }> }) {
    const { activity } = await params;
    return (
        <>
            <DoQuizzesPage activity={activity} />
        </>
    )
}