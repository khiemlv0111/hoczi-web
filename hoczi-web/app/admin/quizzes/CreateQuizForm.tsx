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

export function CreateQuizForm({ onClose, onBack, onDone }: CreateQuizFormProps) {
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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-semibold text-gray-900">Create A Quizz</h2>
                    <button
                        onClick={onClose}
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={16} className="text-gray-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
                    {/* Explanation */}

                    {/* Question */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">
                            Question<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value.slice(0, MAX_QUESTION))}
                            placeholder="E.g., How do you commute to work?"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <p className="text-right text-xs text-gray-400 mt-1">
                            {question.length}/{MAX_QUESTION}
                        </p>
                    </div>


                    {/* Category & Topic */}
                    <div className="grid grid-cols-2 gap-3">

                        <div>
                            <label className="block text-sm text-gray-700 mb-1.5">
                                Category<span className="text-red-500">*</span>
                            </label>
                            <select
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); setTopic(""); }}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
                            >
                                <option value="">Select category</option>
                                {Object.keys(CATEGORIES).filter(Boolean).map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1.5">
                                Topic<span className="text-red-500">*</span>
                            </label>
                            <select
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                disabled={!category}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="">Select topic</option>
                                {topics.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>



                    {/* Options */}
                    {options.map((option, index) => (
                        <div key={index}>
                            <label className="block text-sm text-gray-700 mb-1.5">
                                Option {index + 1}<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => updateOption(index, e.target.value)}
                                    placeholder={
                                        index === 0
                                            ? "E.g., Public transportation"
                                            : index === 1
                                                ? "E.g., Drive myself"
                                                : `Option ${index + 1}`
                                    }
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 pr-9 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                {options.length > 2 && (
                                    <button
                                        onClick={() => removeOption(index)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                )}
                            </div>

                            <p className="text-right text-xs text-gray-400 mt-1">
                                {option.length}/{MAX_OPTION}
                            </p>
                        </div>
                    ))}

                    {/* Add option */}
                    {options.length < 6 && (
                        <button
                            onClick={addOption}
                            className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-300 rounded-full text-sm text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                            <Plus size={14} />
                            Add option
                        </button>
                    )}

                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Explanation</label>
                        <textarea
                            value={explanation}
                            onChange={(e) => setExplanation(e.target.value.slice(0, MAX_EXPLANATION))}
                            placeholder="Share some context about your poll (optional)..."
                            rows={4}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <p className="text-right text-xs text-gray-400 mt-1">
                            {explanation.length}/{MAX_EXPLANATION}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Code</label>
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value.slice(0, MAX_EXPLANATION))}
                            placeholder="Share some context about your poll (optional)..."
                            rows={4}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        <p className="text-right text-xs text-gray-400 mt-1">
                            {explanation.length}/{MAX_EXPLANATION}
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-500">
                        We don't allow requests for political opinions, medical information or other sensitive data.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
                    <button
                        onClick={() => {
                           
                            router.back();
                        }}
                        className="px-5 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleDone}
                        disabled={!category || !topic || !question.trim() || options.some((o) => !o.trim())}
                        className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
