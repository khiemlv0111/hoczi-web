'use client'

import { useState } from "react";
import { SubscriptionsTab } from "./SubscriptionsTab";
import { SetsTab } from "./SetsTab";
import { DeliveriesTab } from "./DeliveriesTab";
import { useDx } from "./shared";

const TABS = ['subscriptions', 'sets', 'deliveries'] as const;
type Tab = typeof TABS[number];

export function DailyExercisesPage() {
    const tr = useDx();
    const [tab, setTab] = useState<Tab>('subscriptions');

    return (
        <div className="max-w-6xl">
            <h1 className="text-lg font-semibold text-gray-900">{tr('admin_title')}</h1>
            <p className="text-[13px] text-gray-500 mt-1 mb-4">{tr('admin_description')}</p>

            <div className="flex gap-1 border-b border-gray-200 mb-4">
                {TABS.map((key) => (
                    <button key={key} onClick={() => setTab(key)}
                        className={`px-4 py-2 text-[13px] -mb-px border-b-2 transition-colors ${tab === key
                            ? 'border-blue-600 text-blue-700 font-medium'
                            : 'border-transparent text-gray-500 hover:text-gray-900'}`}>
                        {tr(`tab_${key}`)}
                    </button>
                ))}
            </div>

            {tab === 'subscriptions' && <SubscriptionsTab />}
            {tab === 'sets' && <SetsTab />}
            {tab === 'deliveries' && <DeliveriesTab />}
        </div>
    );
}
