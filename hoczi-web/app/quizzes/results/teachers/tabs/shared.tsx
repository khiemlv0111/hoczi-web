'use client'

import React from "react"
import { User } from "@/app/context/AppContext"

export type Member = {
    id: number
    class_id: number
    status: string
    student: User
}

export type Lesson = {
    id: number
    title: string
    description?: string
    content?: string
    class_id: number
    grade_id?: number
    topic_id?: number
    subject_id?: number
    lesson_type?: string
    created_at?: string
}

export type AssignmentStudent = {
    id: number
    assignment_id: number
    student_id: number
    status?: string
    submitted_at?: string
    due_at?: string
    feedback?: string
    score?: number
    started_at?: string
    total_points?: number
    student?: User
}

export type Assignment = {
    id?: number
    title: string
    description?: string
    due_date?: string
    class_id: number
    student_id?: number
    class_subject_id?: number
    lesson_id?: number
    created_at?: string
    detail?: Assignment
    assignment_students?: AssignmentStudent[]
}

export type AssignTarget =
    | { type: 'class'; classId: number; className: string }
    | { type: 'student'; classId: number; studentId: number; studentName: string }

export type Quiz = {
    id?: number
    title: string
    description?: string
    class_id?: number
    question_count?: number
    difficulty?: string
    created_at?: string
}

export type SubjectOption = { id: number; name: string }

export function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            {children}
        </div>
    )
}

export const INPUT = "w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
