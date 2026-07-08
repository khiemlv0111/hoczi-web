import SpeechDetailPage from "./SpeechDetailPage";

interface Props { searchParams: Promise<{ id?: string }> }

export default async function Page({ searchParams }: Props) {
  const { id } = await searchParams;
  return <SpeechDetailPage id={id ?? ""} />;
}
