"use client"

import { APP_ACCESS_TOKEN_KEY } from "@/data/http";
import { QuestionService } from "@/data/services/question.service";
import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react"
// import { cookies } from "next/headers";
import Cookies from "js-cookie";
type User = {
    id: number,
    email: string,
    username: string,
    name: string,
    role?: string,
}
export type LoginPayload = {
    email: string,
    password: string,
}
type Quiz = {
    id: number,
    category_id?: number;
    topic_id?: number;
    grade_id?: number;
    title?: string,
    description?: string,
    score: string,
    status: string,
    total_questions?: string,
    correct_answers?: string,
    end_time?: string,
    user_id: number,
}

type QuizSession = {
    id: number,
    score: string,
    status: string,
    total_questions?: string,
    correct_answers?: string,
    end_time?: string,
    user_id: number,
    quiz_id: number,
}


type AppContextType = {
    data: any,
    user: User | undefined,
    quiz: Quiz | undefined,
    quizSession: QuizSession | undefined,
    quizSessions: any[] | undefined,

    login: (loginData: LoginPayload) => void;
    // handleStartQuiz: () => Promise;

    handleStartQuiz: (data?: any) => Promise<any>;

    getUserProfile: () => void;
    handleGetQuizSessions: () => void;
    handleRetryQuiz: (quizId: number) => void;
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {

    const [data, setData] = useState<any>({ name: "Toan Le", email: "toan@Gmail.com" });
    const [user, setUser] = useState<User | undefined>(undefined);
    const [quiz, setQuiz] = useState<Quiz | undefined>(undefined);
    const [quizSession, setQuizSession] = useState<QuizSession | undefined>(undefined);
    const [quizSessions, setQuizSessions] = useState<any[] | undefined>(undefined);
    const router = useRouter();

    const login = ({ email, password }: LoginPayload) => {
        UserService.login({ email, password }).then((res) => {
            if (res.access_token) {
                setUser(res.user);
                localStorage.setItem(APP_ACCESS_TOKEN_KEY, res.access_token);
                Cookies.set(APP_ACCESS_TOKEN_KEY, res.access_token, {
                    expires: 7,
                    path: "/",
                });
                // console.log(res.user);
                if (res.user?.role == 'admin') {
                    router.push("/");

                } else {
                    router.push("/");
                }

            }
        })
    }

    const getUserProfile = () => {
        UserService.getUserInfo().then((res) => {
            console.log('RESSSssss', res);

            setUser(res?.user);

        })
    }

    const handleGetQuizSessions = () => {
        QuestionService.getQuizSessions().then((res) => {
            console.log("RESPONSE=====quizzesssion", res);
            setQuizSessions(res);
        })
    }

    const handleRetryQuiz = (quizId: number) => {
        QuestionService.retryQuiz(quizId).then((res) => {
            console.log("RESPONSE=====quiz", res);
            // setQuizSessions(res);
        })
    }

    const handleStartQuiz = async (data?: any) => {
        const payload = {
            title: 'Do free quiz',
            description: 'Student do free quizz',
            category_id: data?.categoryId,
            topic_id: data?.topicId,
            grade_id: data?.gradeId,
            duration_minutes: 15,
            total_questions: 15,
            quiz_type: 'free',
            created_by: user?.id,

        }
        const quizData = await QuestionService.startQuiz(payload);

        setQuiz(quizData.quiz);
        setQuizSession(quizData.quizSession);

        return quizData;

    }



    return (
        <AppContext.Provider value={{
            data, user, quizSession, quizSessions, quiz,
            handleStartQuiz, handleGetQuizSessions,
            handleRetryQuiz,
            login, getUserProfile
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppData() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("App Data must be used inside PageProvider")
    }
    return context
}