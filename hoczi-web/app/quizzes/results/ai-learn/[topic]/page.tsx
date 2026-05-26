import { TopicPage } from "./TopicPage";

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    return <TopicPage topic={topic} />;
}
