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
import { ClassService } from "@/data/services/class.service";
import { getMessages } from "@/messages/locale";
export type User = {
    id: number,
    email: string,
    username: string,
    name: string,
    role?: string,
    quiz_sessions?: any[] | undefined,
    tenant?: { id: number; name: string; code?: string }

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

type ClassDetailData = {
    id: number;
    name: string,
    code: string,
    description: string,
    school_name: string,
    status: string,
    grade_id: number
    members: any[]

}


type AppContextType = {
    data: any,
    user: User | undefined,
    loading: boolean,
    users: User[] | undefined,
    quiz: Quiz | undefined,
    quizSession: QuizSession | undefined,
    quizSessions: any[] | undefined,
    listQuestions: Question[] | undefined,
    myAssignments: StudentAssignment[] | undefined,
    errorMessage: string | undefined,
    classDetail: ClassDetailData | undefined;
    messages: any;
    login: (loginData: LoginPayload) => void;
    setLoading: (isLoading: boolean) => void;
    // handleStartQuiz: () => Promise;

    handleStartQuiz: (data?: any) => Promise<any>;

    getUserProfile: () => Promise<any>;
    handleGetQuizSessions: (type?: 'free' | 'assignment') => void;
    handleRetryQuiz: (quizId: number) => Promise<any>;
    handleDoQuizAssignment: (quizId: number) => Promise<any>;
    handleGetQuestionList: (payload: any) => Promise<any>;
    handleGetUsers: ({ page, limit }: PaginationPayload) => Promise<any>;
    handleGetMyAssignments: (page: number, limit: number) => void;
    handleGetClassDetail: (id: number) => void;

    handleSetMessages: () => void;

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
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const [classDetail, setClassDetail] = useState<ClassDetailData | undefined>(undefined);



    const [messages, setMessages] = useState<any>(undefined);

    const handleSetMessages = () => {
        const locale =
            document.cookie
                .split('; ')
                .find((row) => row.startsWith('locale='))
                ?.split('=')[1] || 'vi';

        const msg = getMessages(locale);
        setMessages(msg)

    }









    const [users, setUsers] = useState<User[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);






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
                if (res.user?.role == 'admin') {
                    router.push("/");

                } else {
                    router.push("/");
                }

            }
        }).catch((err) => {
            setErrorMessage(`Login failed`)
            setLoading(v => !v)
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
    const handleGetQuizSessions = (type?: 'free' | 'assignment') => {
        QuestionService.getQuizSessions(type).then((res) => {
            setQuizSessions(res);
        })
    }

    const handleGetClassDetail = (id: number) => {
        ClassService.getMyClassDetail(id).then((res) => {
            console.log('CLASS DETIAILLL', res.data);

            setClassDetail(res.data);
        })
    }

    const handleGetMyAssignments = (page: number, limit: number) => {
        LessonService.getMyAssignments(page, limit).then((res) => {
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

    const handleDoQuizAssignment = async (quizId: number) => {
        const quizData = await QuestionService.doQuizAssignment(quizId);
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
            errorMessage,
            user,
            loading,
            messages,
            users,
            classDetail,
            quizSession,
            quizSessions,
            quiz,
            listQuestions,
            myAssignments,
            setLoading,
            handleStartQuiz,
            handleGetQuizSessions,
            handleRetryQuiz,
            login,
            getUserProfile,
            handleGetQuestionList,
            handleGetUsers,
            handleGetMyAssignments,
            handleGetClassDetail,
            handleSetMessages,
            handleDoQuizAssignment
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