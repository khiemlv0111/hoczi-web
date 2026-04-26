'use client'

import {
    BookOpen,
    Play,
    BarChart2,
    Users,
    ChessKing,
    Brain,
    CalendarCheck,
    Mail,
    Building2,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    Lightbulb,
    Star,
    Zap,
} from "lucide-react";
import { useState } from "react";

const sections = [
    {
        id: "getting-started",
        icon: BookOpen,
        color: "blue",
        title: "Getting Started",
        summary: "Create your account and set up your profile",
        steps: [
            { title: "Sign up", desc: "Go to hoczi.com and click Sign Up. Fill in your name, email, and password." },
            { title: "Choose your role", desc: "Select Student, Teacher, or Organization during onboarding. Your role determines which features are visible in the sidebar." },
            { title: "Complete your profile", desc: "Open the user menu (top-right avatar) → Profile to add a display name and preferences." },
            { title: "Explore the sidebar", desc: "All main features — Quizzes, Dashboard, Games, AI Learn, Schedules, and Inbox — are one click away in the left sidebar." },
        ],
    },
    {
        id: "quizzes",
        icon: Play,
        color: "green",
        title: "Taking Quizzes",
        summary: "Start a quiz in seconds with optional filters",
        steps: [
            { title: 'Click "Do a Quiz"', desc: "Use the button in the top-right of any page to open the quiz setup modal." },
            { title: "Pick a Category", desc: "Narrow down questions by subject area (e.g. Mathematics, Science, Language). Leave blank for a mixed quiz." },
            { title: "Choose a Topic", desc: "After selecting a category, an optional Topic dropdown appears to get more specific." },
            { title: "Set Grade & Difficulty", desc: "Filter by school grade and pick Easy / Medium / Hard, or leave both as Any for a default session." },
            { title: "Start & Answer", desc: "Questions appear one at a time. Click your answer and confirm. Results are saved automatically when the session ends." },
        ],
    },
    {
        id: "dashboard",
        icon: BarChart2,
        color: "purple",
        title: "Dashboard & Results",
        summary: "Track your progress and past sessions",
        steps: [
            { title: "Dashboard overview", desc: "Head to Dashboard in the sidebar to see total quizzes taken, average score, best streak, and time spent." },
            { title: "Recent quizzes", desc: "The Recent Quizzes card shows your last sessions with scores color-coded: green ≥ 80%, yellow ≥ 65%, red below that." },
            { title: "Achievements", desc: "Unlock badges for milestones like completing your first quiz, scoring 90%+, and maintaining streaks." },
            { title: "Session history", desc: "The Quizzes page (clock icon in sidebar) lists every session with date, score, and category so you can spot weak areas." },
        ],
    },
    {
        id: "teachers",
        icon: Users,
        color: "orange",
        title: "For Teachers",
        summary: "Create quizzes, manage students, and view class stats",
        steps: [
            { title: "Teacher corner", desc: "Open the user menu → Teacher Corner to access teacher-only tools. Requires a Teacher or higher role." },
            { title: "Manage questions", desc: "Create, edit, and tag questions with category, topic, grade, and difficulty from the Questions panel." },
            { title: "Assign to students", desc: "Schedule a quiz session for a class from the Schedules page and students receive an inbox notification automatically." },
            { title: "View class results", desc: "The Students page shows each student's recent scores and progress so you can intervene early." },
        ],
    },
    {
        id: "games",
        icon: ChessKing,
        color: "red",
        title: "Games",
        summary: "Learn through competitive game-based sessions",
        steps: [
            { title: "Open Games", desc: "Click Games in the sidebar to see available game modes." },
            { title: "Join or create a room", desc: "Create a private room and share the code with classmates, or join a public room for open competition." },
            { title: "Compete live", desc: "Answer questions faster than opponents to climb the leaderboard. Scores are tallied in real-time." },
            { title: "Review after the game", desc: "A post-game summary shows correct answers and how you ranked against other players." },
        ],
    },
    {
        id: "ai-learn",
        icon: Brain,
        color: "indigo",
        title: "AI Learn",
        summary: "Get personalized explanations and study paths",
        steps: [
            { title: "Open AI Learn", desc: "Click AI Learn in the sidebar to start a conversation with the AI tutor." },
            { title: "Ask anything", desc: "Type a question, paste a problem, or upload a concept you're struggling with." },
            { title: "Request a study plan", desc: "Ask the AI to create a week-by-week plan for a topic or upcoming exam." },
            { title: "Practice with AI-generated questions", desc: "The AI can generate practice questions on any topic instantly and give detailed feedback on your answers." },
        ],
    },
    {
        id: "schedules",
        icon: CalendarCheck,
        color: "teal",
        title: "Schedules",
        summary: "Plan quiz sessions in advance",
        steps: [
            { title: "Create a schedule", desc: "Go to Schedules → New Schedule, pick a date/time, quiz settings, and the target group (class or individual)." },
            { title: "Recurring sessions", desc: "Enable repeat to run the same quiz weekly or daily — ideal for daily warm-ups." },
            { title: "Notifications", desc: "Participants get an inbox message and an optional email reminder before the session starts." },
            { title: "Review scheduled vs completed", desc: "The calendar view shows upcoming sessions in blue and completed sessions in green." },
        ],
    },
    {
        id: "inbox",
        icon: Mail,
        color: "yellow",
        title: "Inbox",
        summary: "Messages, quiz invitations, and notifications",
        steps: [
            { title: "Open Inbox", desc: "Click Inbox in the sidebar to see all messages and system notifications." },
            { title: "Quiz invitations", desc: "When a teacher assigns a quiz, it appears here as an invitation with a direct Join button." },
            { title: "Notifications", desc: "Achievement unlocks, score milestones, and schedule reminders all land in the inbox." },
            { title: "Reply to messages", desc: "Use the reply field to respond to teacher feedback or peer messages directly." },
        ],
    },
    {
        id: "organization",
        icon: Building2,
        color: "gray",
        title: "Company / Organization",
        summary: "Manage your school or organization account",
        steps: [
            { title: "Access Company Management", desc: "Open the Settings section in the sidebar → Company Management. Only account owners see this option." },
            { title: "Invite members", desc: "Send email invitations to teachers and students. They join with a pre-assigned role." },
            { title: "Manage tenants", desc: "If you manage multiple schools or departments, each appears as a separate tenant with its own member list and stats." },
            { title: "Billing & plan", desc: "The Owner panel shows your current plan, usage, and upgrade options." },
        ],
    },
];

const colorMap: Record<string, { bg: string; text: string; light: string; badge: string }> = {
    blue:   { bg: "bg-blue-600",   text: "text-blue-600",   light: "bg-blue-50",   badge: "bg-blue-100 text-blue-700" },
    green:  { bg: "bg-green-600",  text: "text-green-600",  light: "bg-green-50",  badge: "bg-green-100 text-green-700" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-50", badge: "bg-purple-100 text-purple-700" },
    orange: { bg: "bg-orange-500", text: "text-orange-500", light: "bg-orange-50", badge: "bg-orange-100 text-orange-700" },
    red:    { bg: "bg-red-500",    text: "text-red-500",    light: "bg-red-50",    badge: "bg-red-100 text-red-700" },
    indigo: { bg: "bg-indigo-600", text: "text-indigo-600", light: "bg-indigo-50", badge: "bg-indigo-100 text-indigo-700" },
    teal:   { bg: "bg-teal-600",   text: "text-teal-600",   light: "bg-teal-50",   badge: "bg-teal-100 text-teal-700" },
    yellow: { bg: "bg-yellow-500", text: "text-yellow-600", light: "bg-yellow-50", badge: "bg-yellow-100 text-yellow-700" },
    gray:   { bg: "bg-gray-600",   text: "text-gray-600",   light: "bg-gray-100",  badge: "bg-gray-100 text-gray-700" },
};

const tips = [
    { icon: Zap, text: "Leave all quiz filters blank to get a random mixed session — great for daily warmups." },
    { icon: Star, text: "Check Achievements on the Dashboard to see which milestones you're closest to unlocking." },
    { icon: Lightbulb, text: "Use AI Learn after a quiz session to get detailed explanations for the questions you missed." },
    { icon: CheckCircle, text: "Teachers: schedule a recurring Monday quiz to keep students consistent without manual effort every week." },
];

function SectionCard({ section }: { section: typeof sections[number] }) {
    const [open, setOpen] = useState(false);
    const c = colorMap[section.color];
    const Icon = section.icon;

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors"
            >
                <div className={`w-8 h-8 rounded-lg ${c.light} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={15} className={c.text} />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-gray-900">{section.title}</p>
                    <p className="text-[11px] text-gray-400 truncate">{section.summary}</p>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full mr-2 ${c.badge}`}>
                    {section.steps.length} steps
                </span>
                {open
                    ? <ChevronUp size={14} className="text-gray-400 flex-shrink-0" />
                    : <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />}
            </button>

            {open && (
                <div className="border-t border-gray-100 px-4 py-3 space-y-3">
                    {section.steps.map((step, i) => (
                        <div key={i} className="flex gap-3">
                            <div className={`w-5 h-5 rounded-full ${c.bg} text-white flex items-center justify-center text-[10px] font-semibold flex-shrink-0 mt-0.5`}>
                                {i + 1}
                            </div>
                            <div>
                                <p className="text-[13px] font-medium text-gray-900">{step.title}</p>
                                <p className="text-[12px] text-gray-500 mt-0.5 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function UserGuidePage() {
    return (
        <div className="max-w-2xl mx-auto space-y-5">
            {/* Header */}
            <div>
                <h1 className="text-[17px] font-semibold text-gray-900">How to use hoczi.com</h1>
                <p className="text-[13px] text-gray-500 mt-0.5">
                    A quick reference for every feature. Click a section to expand the steps.
                </p>
            </div>

            {/* Quick tips */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-[12px] font-medium text-blue-700 mb-2">Quick tips</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tips.map(({ icon: TipIcon, text }, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <TipIcon size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                            <p className="text-[12px] text-blue-800 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-2">
                {sections.map(section => (
                    <SectionCard key={section.id} section={section} />
                ))}
            </div>

            {/* Footer note */}
            <p className="text-center text-[11px] text-gray-400 pb-4">
                Need more help? Use AI Learn in the sidebar to ask anything about hoczi.com.
            </p>
        </div>
    );
}
