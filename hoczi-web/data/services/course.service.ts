import { getRequest, postRequest } from "../http";

export type CourseItem = {
    id: number;
    title: string;
    description?: string;
    course_url: string;
    cover_image_url?: string;
    status: string;
    is_public: boolean;
    subject_code: string;
    category_id: number;
    topic_id: number;
    created_at?: string;
    subjectCode?: string; // for backward compatibility
};


export class CourseService {
    static async getCoursesBySubjectCode(subjectCode: string) {
        const response = await getRequest(`/api/courses/get-courses-by-subject-code/${subjectCode}`, true);
        return response;
    }

    static async createCourse(payload: CourseItem) {
        const response = await postRequest('/api/courses/create-course', payload, true);
        return response;
    }

    static async getCourseDetail(courseId: number) {
        const response = await getRequest(`/api/courses/get-course-detail/${courseId}`, true);
        return response;
    }

    static async createModule(payload: { courseId: string; title: string; slug: string; description?: string; status: string; orderIndex: number }) {
        const response = await postRequest('/api/courses/create-course-module', payload, true);
        return response;
    }

    static async addLessonToModule(payload: { courseModuleId: string; lessonId: number; orderIndex: number; isPreview: boolean }) {
        const response = await postRequest('/api/courses/add-lesson-to-module', payload, true);
        return response;
    }

}