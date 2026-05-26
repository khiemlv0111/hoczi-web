"use client";

import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface CreateQuizFormProps {
    onClose?: () => void;
    onBack?: () => void;
    onDone?: (data: QuizData) => void;
}

interface QuizData {
    explanation: string;
    code: string;
    category: string;
    topic: string;
    question: string;
    options: string[];
}

const CATEGORIES: Record<string, string[]> = {
    "": [],
    Grade: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
    Science: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Biology", "Chemistry", "Physics", "Astronomy", "Earth Science"],
    Mathematics: ["Algebra", "Geometry", "Calculus", "Statistics", "Number Theory"],
    Technology: ["Programming", "Networking", "AI & ML", "Cybersecurity", "Web Development"],
    History: ["Ancient History", "Modern History", "World Wars", "Asian History", "European History"],
    Language: ["Grammar", "Vocabulary", "Literature", "Writing", "Reading Comprehension"],
    Arts: ["Music", "Painting", "Cinema", "Theater", "Photography"],
};

export default function QuizzesPage({ onClose, onBack, onDone }: CreateQuizFormProps) {
    const [explanation, setExplanation] = useState("");
    const [code, setCode] = useState("");
    const [category, setCategory] = useState("");
    const [topic, setTopic] = useState("");
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);

     const router = useRouter();

    const MAX_EXPLANATION = 3000;
    const MAX_QUESTION = 140;
    const MAX_OPTION = 30;

    const addOption = () => {
        if (options.length < 6) setOptions([...options, ""]);
    };

    const removeOption = (index: number) => {
        if (options.length <= 2) return;
        setOptions(options.filter((_, i) => i !== index));
    };

    const updateOption = (index: number, value: string) => {
        const updated = [...options];
        updated[index] = value.slice(0, MAX_OPTION);
        setOptions(updated);
    };

    const handleDone = () => {
        console.log({ explanation, category, topic, question, options, code });
        
        onDone?.({ explanation, category, topic, question, options, code });
    };

    const topics = CATEGORIES[category] ?? [];

    return (
        <div className="">
            
            <div>
                <h3>Quizz Page</h3>
            </div>
        </div>
    );
}
