'use client'

import { QuestionService } from "@/data/services/question.service"
import { UserService } from "@/data/services/user.service"
import { useEffect } from "react"

export function ResultPage(){
    useEffect(() => {
        QuestionService.getQuizSessions().then((res) => {
            console.log("RESPONSE", res);
            
        })

    },[])
    return (
        <div>
            <h1>Result Page</h1>
        </div>
    )
}