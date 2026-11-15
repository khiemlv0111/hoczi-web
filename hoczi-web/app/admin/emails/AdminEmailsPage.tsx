'use client'

import { useState } from "react";
import { ComposeEmail } from "./ComposeEmail";
import { EmailHistory } from "./EmailHistory";
import { BroadcastDetail } from "./BroadcastDetail";
import { useTr } from "./shared";

type Tab = 'compose' | 'history';

export function AdminEmailsPage() {
    const tr = useTr();
    const [tab, setTab] = useState<Tab>('compose');
    // Broadcast being viewed (opened after sending or from history)
    const [openId, setOpenId] = useState<number | null>(null);

    const switchTab = (next: Tab) => {
        setOpenId(null);
        setTab(next);
    };

    return (
        <div>
            <h1 className="text-lg font-semibold text-gray-900">{tr('title')}</h1>
            <p className="text-[13px] text-gray-500 mt-1 mb-4">{tr('description')}</p>

            <div className="flex gap-1 border-b border-gray-200 mb-4">
                {(['compose', 'history'] as const).map((key) => (
                    <button key={key} onClick={() => switchTab(key)}
                        className={`px-4 py-2 text-[13px] -mb-px border-b-2 transition-colors ${tab === key && openId === null
                            ? 'border-blue-600 text-blue-700 font-medium'
                            : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
                        {tr(`tab_${key}`)}
                    </button>
                ))}
            </div>

            {openId !== null ? (
                <BroadcastDetail id={openId} onBack={() => setOpenId(null)} />
            ) : tab === 'compose' ? (
                <ComposeEmail onSent={(b) => { setTab('history'); setOpenId(b.id); }} />
            ) : (
                <EmailHistory onOpen={setOpenId} />
            )}
        </div>
    );
}
