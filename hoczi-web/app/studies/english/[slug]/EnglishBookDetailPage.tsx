'use client'

import { Caveat } from "next/font/google";
import { useRouter } from "next/navigation";

const caveat = Caveat({ subsets: ['latin'] });

interface Props {
  slug: string;
}

export function EnglishBookDetailPage({ slug }: Props) {
  const router = useRouter();

  return (
    <main
      className="min-h-screen px-6"
      style={{}}
    >
      <button
        onClick={() => router.back()}
        className="text-white/60 hover:text-white text-sm mb-8 flex items-center gap-1 transition-colors"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-semibold text-white mb-2">{slug}</h1>
      <div>
        <p className={`${caveat.className} text-2xl text-green-700`}>This is hand writing content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, optio libero accusantium aliquid distinctio similique modi eaque possimus deserunt autem eligendi delectus architecto, ea ut aut, inventore repellat corrupti neque?</p>
        <h1 className="text-2xl text-green-700" style={{ fontFamily: "'Ma Shan Zheng', cursive" }}>{`你说什么， 我听不懂`}</h1>
      </div>
      <p className="text-white/50 text-sm">Book detail coming soon.</p>
    </main>
  );
}
