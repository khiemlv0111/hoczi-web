"use client"

import { APP_ACCESS_TOKEN_KEY } from "@/data/http";
import { QuestionService } from "@/data/services/question.service";
import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react"
// import { cookies } from "next/headers";
import Cookies from "js-cookie";
import { PaginationPayload, StudentAssignment } from "@/data/types";
import { LessonService } from "@/data/services/lesson.service";
export type User = {
    id: number,
    email: string,
    username: string,
    name: string,
    role?: string,
    quiz_sessions?: any[] | undefined

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

type Question = {
    id: number;
    content?: string;
    type?: string;
    difficulty?: string;
    category_id?: number;
    topic_id?: number;
    grade_id?: number;
    code?: any;
    explanation?: string;
    created_by?: number;
}


type AppContextType = {
    data: any,
    user: User | undefined,
    users: User[] | undefined,
    quiz: Quiz | undefined,
    quizSession: QuizSession | undefined,
    quizSessions: any[] | undefined,
    listQuestions: Question[] | undefined,
    myAssignments: StudentAssignment[] | undefined,

    login: (loginData: LoginPayload) => void;
    // handleStartQuiz: () => Promise;

    handleStartQuiz: (data?: any) => Promise<any>;

    getUserProfile: () => Promise<any>;
    handleGetQuizSessions: () => void;
    handleRetryQuiz: (quizId: number) => Promise<any>;
    handleGetQuestionList: (payload: any) => Promise<any>;
    handleGetUsers: ({ page, limit }: PaginationPayload) => Promise<any>;
    handleGetMyAssignments: () => void;

}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {

    const [data, setData] = useState<any>({ name: "Toan Le", email: "toan@Gmail.com" });
    const [user, setUser] = useState<User | undefined>(undefined);
    const [quiz, setQuiz] = useState<Quiz | undefined>(undefined);
    const [quizSession, setQuizSession] = useState<QuizSession | undefined>(undefined);
    const [quizSessions, setQuizSessions] = useState<any[] | undefined>(undefined);
    const [listQuestions, setListQuestions] = useState<Question[] | undefined>(undefined);
    const [myAssignments, setMyAssignments] = useState<any[] | undefined>(undefined);

    

    const [users, setUsers] = useState<User[] | undefined>(undefined);



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

    const getUserProfile = async () => {
        let response = await UserService.getUserInfo();
        if (response) {
            setUser(response?.user);
        }
        return response

    }

    // get my quiz session results
    const handleGetQuizSessions = () => {
        QuestionService.getQuizSessions().then((res) => {
            setQuizSessions(res);
        })
    }

    const handleGetMyAssignments = () => {
        LessonService.getMyAssignments().then((res) => {
            setMyAssignments(res.data);
            
        })
    }

    // get my quiz session results
    const handleGetUsers = async ({ page, limit }: PaginationPayload) => {
        const response = await UserService.getAllUsers({ page, limit });
        return response
    }


    // get 15 question list
    const handleGetQuestionList = async (payload: any) => {
        const res = await QuestionService.getQuestionList(payload);

        setListQuestions(res.data);

        return res;



    }

    const handleRetryQuiz = async (quizId: number) => {
        const quizData = await QuestionService.retryQuiz(quizId);
        // setQuiz(quizData.quiz);
        // setQuizSession(quizData.quizSession);
        console.log('quizData', quizData);

        setQuiz(quizData.quiz);
        setQuizSession(quizData.quizSession);

        setListQuestions(quizData.questions);

        return quizData

    }

    const handleStartQuiz = async (data?: any) => {
        const payload = {
            title: `${user?.name} Do free quiz`,
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

        console.log('quizData: =====', quizData);


        return quizData;

    }


    return (
        <AppContext.Provider value={{
            data,
            user,
            users,
            quizSession,
            quizSessions,
            quiz,
            listQuestions,
            myAssignments,
            handleStartQuiz,
            handleGetQuizSessions,
            handleRetryQuiz,
            login,
            getUserProfile,
            handleGetQuestionList,
            handleGetUsers,
            handleGetMyAssignments,
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