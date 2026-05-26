import { MathBookDetailPage } from "./MathBookDetailPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <MathBookDetailPage slug={slug} />;
}
