'use client'

import {
    Calculator,
    FlaskConical,
    BookOpen,
    Globe,
    Code2,
    Landmark,
    Microscope,
    Zap,
    Atom,
    Palette,
    Languages,
    PenLine,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TOPICS = [
    {
        id: "math",
        label: "Mathematics",
        description: "Algebra, geometry, calculus and problem solving",
        icon: Calculator,
        color: "bg-blue-50 text-blue-600",
        badge: "bg-blue-100 text-blue-700",
    },
    {
        id: "science",
        label: "Science",
        description: "Scientific method, experiments and discoveries",
        icon: FlaskConical,
        color: "bg-green-50 text-green-600",
        badge: "bg-green-100 text-green-700",
    },
    {
        id: "history",
        label: "History",
        description: "World events, civilisations and timelines",
        icon: Landmark,
        color: "bg-yellow-50 text-yellow-600",
        badge: "bg-yellow-100 text-yellow-700",
    },
    {
        id: "literature",
        label: "Literature",
        description: "Reading comprehension, novels and poetry",
        icon: BookOpen,
        color: "bg-purple-50 text-purple-600",
        badge: "bg-purple-100 text-purple-700",
    },
    {
        id: "writing",
        label: "Writing & Grammar",
        description: "Essays, grammar rules and creative writing",
        icon: PenLine,
        color: "bg-pink-50 text-pink-600",
        badge: "bg-pink-100 text-pink-700",
    },
    {
        id: "coding",
        label: "Coding",
        description: "Programming concepts, logic and algorithms",
        icon: Code2,
        color: "bg-gray-50 text-gray-700",
        badge: "bg-gray-100 text-gray-700",
    },
    {
        id: "geography",
        label: "Geography",
        description: "Countries, maps, climate and landforms",
        icon: Globe,
        color: "bg-teal-50 text-teal-600",
        badge: "bg-teal-100 text-teal-700",
    },
    {
        id: "languages",
        label: "Languages",
        description: "Vocabulary, pronunciation and conversation",
        icon: Languages,
        color: "bg-orange-50 text-orange-600",
        badge: "bg-orange-100 text-orange-700",
    },
    {
        id: "biology",
        label: "Biology",
        description: "Living organisms, cells and ecosystems",
        icon: Microscope,
        color: "bg-lime-50 text-lime-600",
        badge: "bg-lime-100 text-lime-700",
    },
    {
        id: "physics",
        label: "Physics",
        description: "Forces, motion, energy and waves",
        icon: Zap,
        color: "bg-sky-50 text-sky-600",
        badge: "bg-sky-100 text-sky-700",
    },
    {
        id: "chemistry",
        label: "Chemistry",
        description: "Elements, reactions and the periodic table",
        icon: Atom,
        color: "bg-red-50 text-red-600",
        badge: "bg-red-100 text-red-700",
    },
    {
        id: "art",
        label: "Art & Creativity",
        description: "Drawing, design principles and art history",
        icon: Palette,
        color: "bg-fuchsia-50 text-fuchsia-600",
        badge: "bg-fuchsia-100 text-fuchsia-700",
    },
] as const;

export function AILearnPage() {
    const router = useRouter();

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-[15px] font-semibold text-gray-900">Learn with AI</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">Pick a topic and start a guided AI session</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {TOPICS.map(({ id, label, description, icon: Icon, color, badge }) => (
                    <button
                        key={id}
                        onClick={() => router.push(`/quizzes/results/ai-learn/${id}`)}
                        className="group bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                        <div className="flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
                                <Icon size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <p className="text-[13px] font-medium text-gray-900">{label}</p>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${badge}`}>
                                        AI
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-400 leading-relaxed">{description}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
