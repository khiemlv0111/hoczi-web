import { LearnByActivityDetailPage } from "./LearnByActivityDetailPage";

export default async function Page({ params }: { params: Promise<{ activity: string }> }){
    const { activity } = await params;
    return (
        <>
            <LearnByActivityDetailPage activity={activity}/>
        </>
    );
}