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


export default function HomePage() {
  const { handleStartQuiz, getUserProfile, user, handleGetQuestionList } = useAppData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const token = Cookies.get(APP_ACCESS_TOKEN_KEY);
    // console.log('USSSER', user);
    // console.log('USSSER token', token);
    if (token) {
      getUserProfile();

    }



  }, [])

  const startQuiz = () => {
    setOpenModal(true)

  }


  const startQuizzzzz = () => {
    if (!user) {
      setLoading(true)

      handleGetQuestionList();
      setTimeout(() => {
        router.push(`/quizzes`)
        setLoading(false)
      }, 1000);


    } else {
      // start do quiz
      handleStartQuiz().then((res) => {

        // get question list, set to global state
        handleGetQuestionList().then((res) => {
          router.push(`/quizzes`)

        })

      })

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
              <button onClick={() => startQuiz()} className="w-80 max-w-full mt-2 py-4 bg-white rounded-xl text-gray-900 font-medium text-lg hover:bg-gray-100 active:scale-95 transition-all duration-150">
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

              <button onClick={() => startQuiz()} className="w-80 max-w-full mt-2 py-4 bg-blue-400 text-white cursor-pointer rounded-xl text-gray-900 font-medium text-lg hover:bg-blue-300 active:scale-95 transition-all duration-150">
                Start as Anonymous
              </button>

            </>
          )
        }



      </div>
      <CommonModal title="Select to do quiz" open={openModal} onClose={() => setOpenModal(false)}>
        <div className="min-h-[500px]">
          <h1>Select options to start a quiz</h1>
        </div>
      </CommonModal>
    </main>
  );
}
