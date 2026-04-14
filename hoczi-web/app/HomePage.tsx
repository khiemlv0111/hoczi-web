'use client'
import { QuestionService } from "@/data/services/question.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppData } from "./context/AppContext";
import Cookies from "js-cookie";
import { APP_ACCESS_TOKEN_KEY } from "@/data/http";
import { UserService } from "@/data/services/user.service";
import { FullScreenLoading } from "./components/FullScreenLoading";
import { CommonModal } from "./components/modal/CommonModal";

const DIFFICULTY_OPTIONS = [
  { value: '', label: 'Any difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

export default function HomePage() {
  const { handleStartQuiz, getUserProfile, user, handleGetQuestionList } = useAppData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [gradeList, setGradeList] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [topicList, setTopicList] = useState<any[]>([]);

  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  useEffect(() => {
    const token = Cookies.get(APP_ACCESS_TOKEN_KEY);
    if (token) {
      getUserProfile();
    }
  }, [])

  const prepareQuiz = () => {
    setOpenModal(true);
    Promise.all([
      QuestionService.getGradeList(),
      QuestionService.getCategoryList(),
    ]).then(([grades, categories]) => {
      setGradeList(grades ?? []);
      setCategoryList(categories ?? []);
    });
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedTopic('');
    setTopicList([]);
    if (categoryId) {
      QuestionService.getTopicList(Number(categoryId)).then((topics) => {
        setTopicList(topics ?? []);
      });
    }
  }

  const startQuiz = () => {
    const quizOptions = {
      gradeId: selectedGrade ? Number(selectedGrade) : undefined,
      categoryId: selectedCategory ? Number(selectedCategory) : undefined,
      topicId: selectedTopic ? Number(selectedTopic) : undefined,
      difficulty: selectedDifficulty || undefined,
    };
    

    setOpenModal(false);

    if (!user) {
      setLoading(true);
      handleGetQuestionList(quizOptions).then(() => {
        router.push(`/quizzes`);
        setLoading(false);
      });
    } else {
      handleStartQuiz(quizOptions).then(() => {
        handleGetQuestionList(quizOptions).then((res) => {
          console.log('RESSSSSS============', res)
          router.push(`/quizzes`);
        });
      });
    }


  }



  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #3D0E5E 0%, #8B1A6A 40%, #C0382A 70%, #D4561C 100%)",
        }}
      />

      {/* Ripple rings */}
      <div className="absolute inset-0 overflow-hidden">
        {[580, 480, 380, 290, 210, 140, 80].map((r, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/[0.07]"
            style={{
              width: r * 2,
              height: r * 1.9,
              left: "20%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              borderWidth: `${38 - i * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">

        {/* Logo badge */}
        <div
          className="w-24 h-24 rounded-3xl mb-9 flex items-center justify-center relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #8B3080 0%, #C84B30 100%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
          <span className="relative text-white font-bold text-3xl tracking-tight font-serif">
            HZ<sup className="text-lg font-normal"></sup>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-5 tracking-tight">
          {"Hoczi.com"}
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-base leading-relaxed max-w-sm mb-11">
          From basic to advanced: Learn with Hoczi.com
        </p>

        {
          loading && <FullScreenLoading />
        }

        {
          user ? (
            <>
              <button onClick={() => prepareQuiz()} className="w-80 max-w-full mt-2 py-4 bg-white rounded-xl text-gray-900 font-medium text-lg hover:bg-gray-100 active:scale-95 transition-all duration-150">
                Do a quiz
              </button>
              <Link href={`/quizzes/results`} className="w-80 max-w-full py-4 bg-blue-400 text-white mt-2 rounded-xl text-gray-900 font-medium text-lg hover:bg-blue-300 active:scale-95 transition-all duration-150">
                Go to results
              </Link>
            </>
          ) : (
            <>
              <Link href={`/auth/signin`} className="w-80 max-w-full py-4 bg-white rounded-xl text-gray-900 font-medium text-lg hover:bg-gray-100 active:scale-95 transition-all duration-150">
                Login to start
              </Link>

              <button onClick={() => prepareQuiz()} className="w-80 max-w-full mt-2 py-4 bg-blue-400 text-white cursor-pointer rounded-xl text-gray-900 font-medium text-lg hover:bg-blue-300 active:scale-95 transition-all duration-150">
                Start as Anonymous
              </button>

            </>
          )
        }



      </div>
      <CommonModal title="Select to do quiz" open={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col gap-5 py-2">

          {/* Grade */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Grade</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any grade</option>
              {gradeList.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any category</option>
              {categoryList.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Topic */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Topic</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              disabled={!selectedCategory}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
            >
              <option value="">Any topic</option>
              {topicList.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {DIFFICULTY_OPTIONS.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => startQuiz()}
            className="mt-2 py-3 bg-blue-600 text-white rounded-xl font-medium text-base hover:bg-blue-500 active:scale-95 transition-all duration-150"
          >
            Start Quiz
          </button>

        </div>
      </CommonModal>
    </main>
  );
}
