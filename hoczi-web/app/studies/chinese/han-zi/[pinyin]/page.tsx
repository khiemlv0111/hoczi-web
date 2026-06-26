import { HanziPage } from "./HanziPage";

interface Props {
  params: Promise<{ pinyin: string }>;
}

export default async function Page({ params }: Props) {
  const { pinyin } = await params;
  return <HanziPage pinyin={pinyin} />;
}