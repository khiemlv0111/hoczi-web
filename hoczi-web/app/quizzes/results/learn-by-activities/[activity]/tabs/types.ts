export type Topic = {
    id: number;
    name: string;
    category_id: number;
    description?: string;
};

export type Lesson = {
    id: number;
    title: string;
    lesson_type: string;
    content: string;
    media_url?: string;
    thumbnail_url?: string;
    created_at: string;
    topic?: Topic;
};

export type TabProps = {
    lessons: Lesson[];
    loading: boolean;
};
