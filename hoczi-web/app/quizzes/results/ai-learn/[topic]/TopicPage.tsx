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
    ArrowLeft,
    Send,
    Bot,
    User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const TOPIC_CONFIG = {
    math: {
        label: "Mathematics",
        description: "Algebra, geometry, calculus and problem solving",
        icon: Calculator,
        color: "bg-blue-50 text-blue-600",
        accent: "text-blue-600",
        border: "border-blue-200",
        starters: [
            "Explain the quadratic formula",
            "What is the Pythagorean theorem?",
            "How do I solve systems of equations?",
        ],
    },
    science: {
        label: "Science",
        description: "Scientific method, experiments and discoveries",
        icon: FlaskConical,
        color: "bg-green-50 text-green-600",
        accent: "text-green-600",
        border: "border-green-200",
        starters: [
            "What is the scientific method?",
            "Explain Newton's laws of motion",
            "How does photosynthesis work?",
        ],
    },
    history: {
        label: "History",
        description: "World events, civilisations and timelines",
        icon: Landmark,
        color: "bg-yellow-50 text-yellow-600",
        accent: "text-yellow-600",
        border: "border-yellow-200",
        starters: [
            "What caused World War I?",
            "Tell me about ancient Egypt",
            "Explain the French Revolution",
        ],
    },
    literature: {
        label: "Literature",
        description: "Reading comprehension, novels and poetry",
        icon: BookOpen,
        color: "bg-purple-50 text-purple-600",
        accent: "text-purple-600",
        border: "border-purple-200",
        starters: [
            "What are the main themes of Romeo and Juliet?",
            "How do I analyse a poem?",
            "Explain narrative perspective in fiction",
        ],
    },
    writing: {
        label: "Writing & Grammar",
        description: "Essays, grammar rules and creative writing",
        icon: PenLine,
        color: "bg-pink-50 text-pink-600",
        accent: "text-pink-600",
        border: "border-pink-200",
        starters: [
            "How do I write a strong thesis statement?",
            "Explain the difference between active and passive voice",
            "Tips for writing a persuasive essay",
        ],
    },
    coding: {
        label: "Coding",
        description: "Programming concepts, logic and algorithms",
        icon: Code2,
        color: "bg-gray-50 text-gray-700",
        accent: "text-gray-700",
        border: "border-gray-200",
        starters: [
            "What is a loop and how does it work?",
            "Explain the difference between arrays and objects",
            "What is recursion?",
        ],
    },
    geography: {
        label: "Geography",
        description: "Countries, maps, climate and landforms",
        icon: Globe,
        color: "bg-teal-50 text-teal-600",
        accent: "text-teal-600",
        border: "border-teal-200",
        starters: [
            "What causes earthquakes?",
            "How do ocean currents affect climate?",
            "Explain the water cycle",
        ],
    },
    languages: {
        label: "Languages",
        description: "Vocabulary, pronunciation and conversation",
        icon: Languages,
        color: "bg-orange-50 text-orange-600",
        accent: "text-orange-600",
        border: "border-orange-200",
        starters: [
            "Teach me common English phrases",
            "How do I improve my vocabulary?",
            "Explain past tense in English",
        ],
    },
    biology: {
        label: "Biology",
        description: "Living organisms, cells and ecosystems",
        icon: Microscope,
        color: "bg-lime-50 text-lime-600",
        accent: "text-lime-600",
        border: "border-lime-200",
        starters: [
            "What is DNA and how does it work?",
            "Explain the process of mitosis",
            "How do ecosystems maintain balance?",
        ],
    },
    physics: {
        label: "Physics",
        description: "Forces, motion, energy and waves",
        icon: Zap,
        color: "bg-sky-50 text-sky-600",
        accent: "text-sky-600",
        border: "border-sky-200",
        starters: [
            "What is the difference between speed and velocity?",
            "Explain how electricity works",
            "What is the law of conservation of energy?",
        ],
    },
    chemistry: {
        label: "Chemistry",
        description: "Elements, reactions and the periodic table",
        icon: Atom,
        color: "bg-red-50 text-red-600",
        accent: "text-red-600",
        border: "border-red-200",
        starters: [
            "How do I balance a chemical equation?",
            "What is the periodic table?",
            "Explain acids and bases",
        ],
    },
    art: {
        label: "Art & Creativity",
        description: "Drawing, design principles and art history",
        icon: Palette,
        color: "bg-fuchsia-50 text-fuchsia-600",
        accent: "text-fuchsia-600",
        border: "border-fuchsia-200",
        starters: [
            "What are the principles of design?",
            "Tell me about the Impressionist movement",
            "How do I use colour theory?",
        ],
    },
} as const;

type TopicKey = keyof typeof TOPIC_CONFIG;

type Message = {
    role: "user" | "assistant";
    content: string;
};

export function TopicPage({ topic }: { topic: string }) {
    const router = useRouter();
    const config = TOPIC_CONFIG[topic as TopicKey];
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    if (!config) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <p className="text-[13px]">Topic not found.</p>
                <button
                    onClick={() => router.back()}
                    className="mt-3 text-[12px] text-blue-600 hover:underline"
                >
                    Go back
                </button>
            </div>
        );
    }

    const Icon = config.icon;

    const sendMessage = async (text: string) => {
        const trimmed = text.trim();
        if (!trimmed || loading) return;
        setInput("");
        const next: Message[] = [...messages, { role: "user", content: trimmed }];
        setMessages(next);
        setLoading(true);

        try {
            const res = await fetch("/api/ai-learn/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic: config.label, messages: next }),
            });
            const data = await res.json();
            setMessages([...next, { role: "assistant", content: data.reply ?? "Sorry, I couldn't answer that." }]);
        } catch {
            setMessages([...next, { role: "assistant", content: "Something went wrong. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    const isEmpty = messages.length === 0;

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                <button
                    onClick={() => router.back()}
                    className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                    <ArrowLeft size={16} />
                </button>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${config.color}`}>
                    <Icon size={15} />
                </div>
                <div>
                    <p className="text-[14px] font-semibold text-gray-900">{config.label}</p>
                    <p className="text-[11px] text-gray-400">{config.description}</p>
                </div>
            </div>

            {/* Chat area */}
            <div className="flex-1 overflow-y-auto bg-white border border-gray-200 rounded-xl p-4 space-y-4 min-h-0">
                {isEmpty && (
                    <div className="flex flex-col items-center justify-center h-full gap-5 py-8">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${config.color}`}>
                            <Icon size={24} />
                        </div>
                        <div className="text-center">
                            <p className="text-[13px] font-medium text-gray-900">Start learning {config.label} with AI</p>
                            <p className="text-[11px] text-gray-400 mt-1">Ask anything or pick a starter below</p>
                        </div>
                        <div className="flex flex-col gap-2 w-full max-w-sm">
                            {config.starters.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => sendMessage(s)}
                                    className={`text-left text-[12px] px-4 py-2.5 rounded-lg border ${config.border} hover:bg-gray-50 text-gray-700 transition-colors`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {msg.role === "assistant" && (
                            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Bot size={13} className="text-gray-500" />
                            </div>
                        )}
                        <div
                            className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-wrap ${
                                msg.role === "user"
                                    ? "bg-blue-600 text-white rounded-br-sm"
                                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                            }`}
                        >
                            {msg.content}
                        </div>
                        {msg.role === "user" && (
                            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <User size={13} className="text-blue-600" />
                            </div>
                        )}
                    </div>
                ))}

                {loading && (
                    <div className="flex gap-2.5 justify-start">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot size={13} className="text-gray-500" />
                        </div>
                        <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="mt-3 flex gap-2 flex-shrink-0">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
                    placeholder={`Ask about ${config.label}…`}
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || loading}
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                >
                    <Send size={14} />
                </button>
            </div>
        </div>
    );
}
