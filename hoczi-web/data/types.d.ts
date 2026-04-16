export type Notification = {
    user_id: number;
    notification_type: string,
    actor_user_id: number,
    entity_type: string,
    entity_id: number,
    data_json: any
}


export type CreateJobPayload = {
    company_id: number,
    title: string,
    description: string,
    slug?: string,
    job_type: string,
    employment_mode: string,
    experience_level?: string,
    published_at?: string,
    closed_at?: string,
    salary_min?: number,
    salary_max?: number,
    currency: string,

    is_salary_hidden: boolean,

    status: string,

    views_count?: number,
    applications_count?: number,

}

export type JoinGroupDto = {
    group_id: number;
    role: string,
}


export type ReactionOnPostDto = {
    post_id: number;
    reaction_type: string,
}


export type CreateEventPayload = {
    company_id: number,
    title: string,
    description: string,
    slug?: string,
    job_type: string,
    employment_mode: string,
    experience_level?: string,
    published_at?: string,
    closed_at?: string,
    salary_min?: number,
    salary_max?: number,
    currency: string,

    is_salary_hidden: boolean,

    status: string,

    views_count?: number,
    applications_count?: number,

}

export type InviteMembersGroup = {
    group_id: number,
    user_ids: number[],
}

export type ApplyJobPayload = {
    job_id: number,
    company_id: number,
    resume_url: string,
    cover_letter?: string,
    expected_salary?: string,
    note?: string,
    currency?: string,
}


export type CommentPostPayload = {
    post_id: number,
    parent_comment_id?: number,
    content_text: string,
}


export interface Question {
    id: string | number;
    title: string;
    content?: string;
    explanation?: string;
    status?: string;
    answers?: any[] | undefined;
    created_at?: string;
    type?: string;
    [key: string]: unknown;
}

export interface Category {
    id: number,
    name: string,

}

export interface Topic {
    id: number,
    name: string,

}

export interface Grade {
    id: number,
    name: string,

}


export type PaginationPayload = {
    page?: number;
    limit?: number;
}

export type Lesson = {
    title: string;
    content?: string;
    subjectId?: number;
    lesson_type?: string;
    media_url: string;
    estimated_minutes
    topicId?: number
    description?: string;
    gradeId?: number;


}

export type Grade = {
    id: number;
    name: string;
    code: string;
}

export type Subject = {
    code :string;
    description: string;
    name: string;
    status: string;
}


export type ClassSubject = {
    id?: number
    class_id: number
    subject_id: number
    created_at?: string
}

export type Assignment = {
    id?: number
    title: string
    description?: string
    class_subject_id?: number;
    lesson_id?: number;
    due_date?: string
    class_id: number
    student_id?: number
    created_at?: string
}

export type StudentAssignment = {
    id: number,
    student_id: number,
    status: string,
    started_at?: string,
    score: number,
    feedback?: string,
    assignment_id: number,
    assigned_at?: string,
    assignment: Assignment

}