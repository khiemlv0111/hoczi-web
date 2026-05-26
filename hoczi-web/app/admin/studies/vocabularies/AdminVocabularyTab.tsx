'use client'

import { useState } from "react";

type VocabItem = {
    id: number;
    word: string;
    translation: string;
    pinyin?: string;
    example?: string;
};

type Language = 'chinese' | 'english';

const MOCK_CHINESE: VocabItem[] = [
    { id: 1, word: '你好', pinyin: 'nǐ hǎo', translation: 'Hello', example: '你好，你叫什么名字？' },
    { id: 2, word: '谢谢', pinyin: 'xiè xiè', translation: 'Thank you', example: '谢谢你的帮助。' },
    { id: 3, word: '学习', pinyin: 'xué xí', translation: 'Study / Learn', example: '我每天学习中文。' },
];

const MOCK_ENGLISH: VocabItem[] = [
    { id: 1, word: 'Serendipity', translation: 'Tình cờ may mắn', example: 'It was pure serendipity that we met.' },
    { id: 2, word: 'Ephemeral', translation: 'Phù du, ngắn ngủi', example: 'Fame is ephemeral.' },
    { id: 3, word: 'Perseverance', translation: 'Sự kiên trì', example: 'Perseverance is the key to success.' },
];

const LANG_TABS: { key: Language; label: string; flag: string }[] = [
    { key: 'chinese', label: 'Chinese', flag: '🇨🇳' },
    { key: 'english', label: 'English', flag: '🇬🇧' },
];

export function AdminVocabularyTab() {
    const [lang, setLang] = useState<Language>('chinese');

    const items = lang === 'chinese' ? MOCK_CHINESE : MOCK_ENGLISH;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Vocabulary</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Browse vocabulary by language.</p>
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                {LANG_TABS.map(({ key, label, flag }) => (
                    <button
                        key={key}
                        onClick={() => setLang(key)}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            lang === key
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                        }`}
                    >
                        <span>{flag}</span>
                        {label}
                    </button>
                ))}
            </div>

            {items.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No vocabulary found.
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 px-4 py-3 hover:bg-gray-50 transition-colors">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    <span className="text-sm font-semibold text-gray-900">{item.word}</span>
                                    {item.pinyin && (
                                        <span className="text-xs text-blue-500">{item.pinyin}</span>
                                    )}
                                    <span className="text-xs text-gray-400">—</span>
                                    <span className="text-xs text-gray-600">{item.translation}</span>
                                </div>
                                {item.example && (
                                    <p className="text-xs text-gray-400 mt-0.5 italic truncate">{item.example}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
