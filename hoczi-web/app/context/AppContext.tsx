"use client"

import { APP_ACCESS_TOKEN_KEY } from "@/data/http";
import { QuestionService } from "@/data/services/question.service";
import { UserService } from "@/data/services/user.service";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, ReactNode } from "react"

type User = {
    id: number,
    email: string,
    username: string,
    name: string,
}
export type LoginPayload = {
    email: string,
    password: string,
}
type Quiz = {
    id: number,
    score: string,
    status: string,
    total_questions?: string,
    correct_answers?: string,
    end_time?: string,
    user_id: number,
}


type AppContextType = {
    data: any,
    user: User | undefined,
    quiz: Quiz | undefined,
    
    login: (loginData: LoginPayload) => void;
    // handleStartQuiz: () => Promise;

     handleStartQuiz: () => Promise<any>;

    getUserProfile: () => void;
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {

        const [data, setData] = useState<any>({name: "Toan Le", email: "toan@Gmail.com"});
        const [user, setUser] = useState<User|undefined>(undefined);
        const [quiz, setQuiz] = useState<Quiz|undefined>(undefined);
        const router = useRouter();

        const login = ({email, password}: LoginPayload) => {
            UserService.login({email, password}).then((res) => {
                setUser(res.user);
                localStorage.setItem(APP_ACCESS_TOKEN_KEY, res.access_token);
                router.push(`/`)
            })

        }

        const getUserProfile = () => {
            UserService.getUserInfo().then((res) =>{
                setUser(res.user);
                
            })
        }

        const handleStartQuiz = async () => {
           const quizSession = await  QuestionService.startQuiz();

            setQuiz(quizSession.data);

            return quizSession.data

        }
    


    return (
        <AppContext.Provider value={{ data, user, handleStartQuiz, quiz, login, getUserProfile }}>
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