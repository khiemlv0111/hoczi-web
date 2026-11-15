'use client'

import { useState } from "react";
import Link from "next/link";
import { useAppData } from "@/app/context/AppContext";
import { t } from "@/messages/locale";
import { DailyExerciseService } from "@/data/services/dailyExercise.service";

const TOKEN_PATTERN = /^[0-9a-f]{64}$/;

export function UnsubscribePage({ token }: { token: string }) {
    const { messages } = useAppData();
    const tr = (key: string) => t(messages, `daily_exercise.${key}`);
    const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>(TOKEN_PATTERN.test(token) ? 'idle' : 'error');
    const [result, setResult] = useState<{ subject_name: string; grade_name: string } | null>(null);

    // Confirmed by a click (POST) so link scanners in mail clients cannot unsubscribe people.
    const confirm = async () => {
        setState('loading');
        try {
            setResult(await DailyExerciseService.unsubscribe(token));
            setState('done');
        } catch {
            setState('error');
        }
    };

    return (
        <main className="flex-1 flex items-center justify-center px-4 py-16 bg-gray-50">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h1 className="text-lg font-semibold text-gray-900 mb-3">{tr('unsubscribe_title')}</h1>

                {state === 'error' && <p className="text-[14px] text-red-600">{tr('unsubscribe_invalid')}</p>}

                {state === 'done' && (
                    <p className="text-[14px] text-gray-700">
                        {tr('unsubscribe_done')}: <strong>{result?.subject_name} – {result?.grade_name}</strong>
                    </p>
                )}

                {(state === 'idle' || state === 'loading') && (
                    <>
                        <p className="text-[14px] text-gray-600 mb-5">{tr('unsubscribe_confirm_text')}</p>
                        <button onClick={confirm} disabled={state === 'loading'}
                            className="px-4 py-2 rounded-md text-[14px] bg-red-600 text-white hover:bg-red-700 disabled:opacity-50">
                            {state === 'loading' ? tr('loading') : tr('unsubscribe_button')}
                        </button>
                    </>
                )}

                <div className="mt-6">
                    <Link href="/" className="text-[13px] text-blue-600 hover:underline">{tr('back_home')}</Link>
                </div>
            </div>
        </main>
    );
}
