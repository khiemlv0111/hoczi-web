'use client'

import { QuestionService } from "@/data/services/question.service";
import { UserService } from "@/data/services/user.service";
import { useEffect } from "react"

export function SessionDetailPage({sessionId}: any){
    useEffect(() => {

        UserService.getSessionDetail(sessionId).then((res) => {
            console.log("SESSON DEAIL", res);
            
        })

    },[]);
    return (
        <div>
            <h2>Session detail</h2>
        
        </div>
    )
}