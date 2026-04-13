'use client'

import { QuestionService } from "@/data/services/question.service"
import { UserService } from "@/data/services/user.service"
import { useEffect } from "react"
import QuizSessionTable from "./QuizSessionTable"

export function ResultPage(){
    useEffect(() => {
        QuestionService.getQuizSessions().then((res) => {
            console.log("RESPONSE", res);
            
        })

    },[])
    return (
        <div>
            <QuizSessionTable />
        </div>
    )
}