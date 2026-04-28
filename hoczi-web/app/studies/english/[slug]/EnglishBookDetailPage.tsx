'use client'

import { useRouter } from "next/navigation";

interface Props {
  slug: string;
}

export function EnglishBookDetailPage({ slug }: Props) {
  const router = useRouter();

  return (
    <main
      className="min-h-screen px-6 py-14"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #3D0E5E 0%, #8B1A6A 40%, #C0382A 70%, #D4561C 100%)",
      }}
    >
      <button
        onClick={() => router.back()}
        className="text-white/60 hover:text-white text-sm mb-8 flex items-center gap-1 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-semibold text-white mb-2">{slug}</h1>
      <p className="text-white/50 text-sm">Book detail coming soon.</p>
    </main>
  );
}
