'use client'

import { QuestionService } from "@/data/services/question.service"
import { UserService } from "@/data/services/user.service"
import { useEffect } from "react"
import QuizSessionTable from "./QuizSessionTable"
import { useAppData } from "@/app/context/AppContext"

export function ResultPage(){
    const { handleGetQuizSessions, user } = useAppData();

    useEffect(() => {
        handleGetQuizSessions('free');
        
    },[])


    return (
        <div className="h-[calc(100vh-105px)] overflow-hidden">
            <QuizSessionTable />
        </div>
    )
}