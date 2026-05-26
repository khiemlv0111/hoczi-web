export type Activity = {
    id: string;
    activity_type: string;
    instruction: string;
    lesson_id: number;
    config: Record<string, any>;
};

export type ContentProps = {
    activities: Activity[];
};
