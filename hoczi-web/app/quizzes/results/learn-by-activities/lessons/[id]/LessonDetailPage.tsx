'use client'

import { LessonService } from "@/data/services/lesson.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FillBlankContent } from "./content/FillBlankContent";
import { MatchingContent } from "./content/MatchingContent";
import { MultipleChoiceContent } from "./content/MultipleChoiceContent";
import { SentenceOrderContent } from "./content/SentenceOrderContent";
import { Activity } from "./content/types";

const CONTENT_MAP: Record<string, React.ComponentType<{ activities: Activity[] }>> = {
    sentence_order:  SentenceOrderContent,
    fill_blank:      FillBlankContent,
    multiple_choice: MultipleChoiceContent,
    matching:        MatchingContent,
};

export function LessonDetailPage({ id }: { id: number }) {
    const searchParams = useSearchParams();
    const activityType = searchParams.get('activity_type') ?? 'sentence_order';

    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LessonService.getActivitiesByLessonId(id)
            .then((res) => setActivities(res?.data ?? res ?? []))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8">
                <div className="space-y-4 animate-pulse">
                    <div className="h-14 bg-gray-100 rounded-xl" />
                    <div className="h-20 bg-gray-100 rounded-xl" />
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map((i) => <div key={i} className="h-10 w-20 bg-gray-100 rounded-lg" />)}
                    </div>
                </div>
            </div>
        );
    }

    if (activities.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                No activities found for this lesson.
            </div>
        );
    }

    const ContentComponent = CONTENT_MAP[activityType] ?? SentenceOrderContent;

    return <ContentComponent activities={activities} />;
}
