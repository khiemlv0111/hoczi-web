import { ChatCitation, ChatReply } from "@/data/services/ai.service";
import { BookOpen, Database } from "lucide-react";

// Where an AI chat answer came from, shared by the admin assistant and the AI Learn pages.
export function ChatSourceBadge({ source, queried }: { source: ChatReply['source']; queried?: ChatReply['queried'] }) {
    if (source === 'data') {
        return (
            <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                <Database size={10} />
                From Hoczi database{queried?.length ? `: ${queried.map((q) => q.label).join(', ')}` : ''}
            </span>
        );
    }
    if (source === 'general') {
        return <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">General knowledge</span>;
    }
    return (
        <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-700">
            <BookOpen size={10} />
            {source === 'mixed' ? 'Documents + general knowledge' : 'From your documents'}
        </span>
    );
}

export function ChatCitationList({ citations }: { citations: ChatCitation[] }) {
    if (!citations.length) return null;
    return (
        <ul className="text-[11px] text-gray-500 pl-1">
            {citations.map((c, i) => (
                <li key={i}>
                    · {c.title ?? c.documentId}{c.page ? `, p. ${c.page}` : ''}{c.section ? ` (${c.section})` : ''}
                    <span className="text-gray-300"> [{c.documentId}]</span>
                </li>
            ))}
        </ul>
    );
}
