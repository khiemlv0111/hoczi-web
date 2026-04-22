"use client";

import { useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Clock,
    CheckCircle2,
    AlertCircle,
    Circle,
    X,
    Trophy,
    CalendarDays,
    Plus,
    StickyNote,
    GraduationCap,
    Pencil,
    Save,
} from "lucide-react";
import { useAppData } from "@/app/context/AppContext";
import { StudentAssignment } from "@/data/types";

// ─── Types ────────────────────────────────────────────────────────────────────

type ItemType = "assignment" | "quiz" | "note" | "study";

type ScheduleItem = {
    id: string;
    type: ItemType;
    title: string;
    status: string;
    due_date?: string;
    score?: number;
    notes?: string;
    raw: StudentAssignment | null;
};

type ModalState =
    | { mode: "create"; day: Date; hour: number | null }
    | { mode: "edit"; item: ScheduleItem };

type FormDraft = {
    title: string;
    type: ItemType;
    status: string;
    notes: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const DAY_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOUR_START = 7;
const HOUR_END = 21;
const HOURS = Array.from({ length: HOUR_END - HOUR_START }, (_, i) => HOUR_START + i);

const TYPE_META: Record<ItemType, { label: string; icon: any; pill: string }> = {
    assignment: { label: "Assignment", icon: BookOpen,      pill: "bg-blue-100 text-blue-800" },
    quiz:       { label: "Quiz",       icon: Trophy,        pill: "bg-amber-100 text-amber-800" },
    note:       { label: "Note",       icon: StickyNote,    pill: "bg-yellow-100 text-yellow-800" },
    study:      { label: "Study",      icon: GraduationCap, pill: "bg-violet-100 text-violet-800" },
};

// status → { display label, pill classes, block bg/text/accent }
const STATUS_CFG: Record<string, {
    label: string; icon: any;
    pill: string;
    bg: string; text: string; accent: string;
}> = {
    pending:     { label: "Pending",     icon: Circle,       pill: "bg-gray-100 text-gray-600",     bg: "bg-blue-50",    text: "text-blue-900",    accent: "border-l-blue-400" },
    in_progress: { label: "In Progress", icon: Clock,        pill: "bg-sky-100 text-sky-700",       bg: "bg-sky-50",     text: "text-sky-900",     accent: "border-l-sky-400" },
    submitted:   { label: "Submitted",   icon: CheckCircle2, pill: "bg-emerald-100 text-emerald-700", bg: "bg-emerald-50", text: "text-emerald-900", accent: "border-l-emerald-500" },
    completed:   { label: "Completed",   icon: CheckCircle2, pill: "bg-emerald-100 text-emerald-700", bg: "bg-emerald-50", text: "text-emerald-900", accent: "border-l-emerald-500" },
    overdue:     { label: "Overdue",     icon: AlertCircle,  pill: "bg-rose-100 text-rose-700",     bg: "bg-rose-50",    text: "text-rose-900",    accent: "border-l-rose-500" },
    failed:      { label: "Failed",      icon: AlertCircle,  pill: "bg-rose-100 text-rose-700",     bg: "bg-rose-50",    text: "text-rose-900",    accent: "border-l-rose-500" },
};

// ordered list for the status picker
const STATUS_OPTIONS = ["pending", "in_progress", "submitted", "completed", "overdue", "failed"] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMondayOf(d: Date): Date {
    const c = new Date(d);
    c.setDate(c.getDate() - ((c.getDay() + 6) % 7));
    c.setHours(0, 0, 0, 0);
    return c;
}
function addDays(d: Date, n: number): Date {
    const c = new Date(d); c.setDate(c.getDate() + n); return c;
}
function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function weekLabel(monday: Date) {
    const sun = addDays(monday, 6);
    const mo = (d: Date) => d.toLocaleString("en-US", { month: "short" });
    return monday.getMonth() === sun.getMonth()
        ? `${mo(monday)} ${monday.getDate()} – ${sun.getDate()}, ${sun.getFullYear()}`
        : `${mo(monday)} ${monday.getDate()} – ${mo(sun)} ${sun.getDate()}, ${sun.getFullYear()}`;
}
function fmt12(h: number) {
    if (h === 0) return "12 AM";
    if (h === 12) return "12 PM";
    return h < 12 ? `${h} AM` : `${h - 12} PM`;
}
function resolveStatus(item: ScheduleItem, today: Date): string {
    if (item.status === "pending" && item.due_date && new Date(item.due_date) < today) return "overdue";
    return item.status ?? "pending";
}
function slotColors(status: string) {
    return STATUS_CFG[status] ?? STATUS_CFG["pending"];
}
function makeDatetimeLocal(day: Date, hour: number): string {
    const d = new Date(day);
    d.setHours(hour, 0, 0, 0);
    return d.toISOString().slice(0, 16);
}

// ─── EventBlock ───────────────────────────────────────────────────────────────

function EventBlock({
    item, today, onClick,
}: { item: ScheduleItem; today: Date; onClick: () => void }) {
    const status = resolveStatus(item, today);
    const c = slotColors(status);
    const Icon = TYPE_META[item.type]?.icon ?? BookOpen;
    return (
        <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            title={item.title}
            className={`group w-full text-left border-l-[3px] rounded-r-md px-1.5 py-1 transition-all hover:brightness-95 active:scale-[0.98] ${c.bg} ${c.text} ${c.accent}`}
        >
            <div className="flex items-center gap-1 text-[11px] font-semibold leading-tight truncate">
                <Icon size={10} className="flex-shrink-0 opacity-60" />
                <span className="truncate flex-1">{item.title}</span>
                <Pencil size={9} className="flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            {item.due_date && (
                <p className="text-[10px] opacity-50 mt-0.5">
                    {new Date(item.due_date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                </p>
            )}
        </button>
    );
}

// ─── SlotCell ─────────────────────────────────────────────────────────────────

function SlotCell({
    items, day, hour, today, isToday, onItemClick, onAddClick,
}: {
    items: ScheduleItem[]; day: Date; hour: number | null; today: Date;
    isToday: boolean; onItemClick: (item: ScheduleItem) => void; onAddClick: () => void;
}) {
    void day; void hour; // consumed by parent via closure
    return (
        <div
            onClick={items.length === 0 ? onAddClick : undefined}
            className={`group relative border-r border-gray-100 last:border-r-0 p-1 flex flex-col gap-0.5 cursor-pointer ${isToday ? "bg-blue-50/30" : "hover:bg-gray-50/60"} transition-colors`}
        >
            {items.map((item) => (
                <EventBlock key={item.id} item={item} today={today} onClick={() => onItemClick(item)} />
            ))}
            {items.length === 0 && (
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={12} className="text-gray-300" />
                </span>
            )}
        </div>
    );
}

// ─── ItemModal ────────────────────────────────────────────────────────────────

function ItemModal({
    modal, today, onClose, onSave,
}: {
    modal: ModalState;
    today: Date;
    onClose: () => void;
    onSave: (draft: FormDraft & { id?: string; due_date?: string }) => void;
}) {
    const isEdit = modal.mode === "edit";
    const existingItem = isEdit ? modal.item : null;
    const existingStatus = existingItem ? resolveStatus(existingItem, today) : "pending";

    const defaultDatetime = isEdit
        ? existingItem?.due_date?.slice(0, 16) ?? ""
        : modal.hour !== null
            ? makeDatetimeLocal(modal.day, modal.hour)
            : `${modal.day.toISOString().slice(0, 10)}T00:00`;

    const [draft, setDraft] = useState<FormDraft>({
        title:  isEdit ? existingItem?.title ?? "" : "",
        type:   isEdit ? existingItem?.type ?? "note" : "note",
        status: isEdit ? existingStatus : "pending",
        notes:  isEdit ? existingItem?.notes ?? "" : "",
    });
    const [datetime, setDatetime] = useState(defaultDatetime);
    const titleRef = useRef<HTMLInputElement>(null);

    useEffect(() => { titleRef.current?.focus(); }, []);

    const isReadonly = isEdit && existingItem?.raw !== null; // API items: title is readonly

    function handleSave() {
        if (!draft.title.trim()) return;
        onSave({ ...draft, id: existingItem?.id, due_date: datetime || undefined });
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100">
                    <h2 className="text-[15px] font-semibold text-gray-900">
                        {isEdit ? "Edit item" : "Add to schedule"}
                    </h2>
                    <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                        <X size={15} className="text-gray-400" />
                    </button>
                </div>

                <div className="px-5 py-4 space-y-4 overflow-y-auto">

                    {/* Title */}
                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1">Title</label>
                        <input
                            ref={titleRef}
                            value={draft.title}
                            onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))}
                            readOnly={isReadonly}
                            placeholder="e.g. Math homework, Biology quiz…"
                            className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 ${isReadonly ? "bg-gray-50 text-gray-500 cursor-default" : "bg-white"}`}
                        />
                    </div>

                    {/* Type */}
                    {!isReadonly && (
                        <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-1.5">Type</label>
                            <div className="flex flex-wrap gap-2">
                                {(Object.keys(TYPE_META) as ItemType[]).map((t) => {
                                    const { label, icon: Icon, pill } = TYPE_META[t];
                                    const active = draft.type === t;
                                    return (
                                        <button
                                            key={t}
                                            onClick={() => setDraft((p) => ({ ...p, type: t }))}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${active ? `${pill} border-transparent` : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                                        >
                                            <Icon size={11} />
                                            {label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Status */}
                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">Status</label>
                        <div className="grid grid-cols-3 gap-1.5">
                            {STATUS_OPTIONS.map((s) => {
                                const { label, icon: Icon, pill } = STATUS_CFG[s];
                                const active = draft.status === s;
                                return (
                                    <button
                                        key={s}
                                        onClick={() => setDraft((p) => ({ ...p, status: s }))}
                                        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-[12px] font-medium border transition-all ${active ? `${pill} border-transparent shadow-sm scale-[1.02]` : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}
                                    >
                                        <Icon size={11} className="flex-shrink-0" />
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Date & time */}
                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1">Date & time</label>
                        <input
                            type="datetime-local"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-[12px] font-medium text-gray-600 mb-1">Notes</label>
                        <textarea
                            value={draft.notes}
                            onChange={(e) => setDraft((p) => ({ ...p, notes: e.target.value }))}
                            rows={3}
                            placeholder="Optional notes…"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex gap-3 px-5 py-4 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2.5 rounded-xl border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!draft.title.trim()}
                        className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <Save size={13} />
                        {isEdit ? "Save changes" : "Add to schedule"}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function SchedulesPage() {
    const { myAssignments, quizSessions, handleGetMyAssignments, handleGetQuizSessions } = useAppData();
    const [mondayAnchor, setMondayAnchor] = useState<Date>(() => getMondayOf(new Date()));
    const [modal, setModal] = useState<ModalState | null>(null);

    // local items created by the user in this session
    const [localItems, setLocalItems] = useState<ScheduleItem[]>([]);
    // status overrides for API items (id → new status)
    const [statusOverrides, setStatusOverrides] = useState<Record<string, string>>({});

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    useEffect(() => {
        handleGetMyAssignments(1, 50);
        handleGetQuizSessions();
    }, []);

    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(mondayAnchor, i));

    // Merge API data + local items
    const apiItems: ScheduleItem[] = [
        ...(myAssignments ?? []).map((a) => ({
            id: `a-${a.id}`,
            type: "assignment" as const,
            title: a.assignment?.title ?? "Untitled Assignment",
            status: statusOverrides[`a-${a.id}`] ?? a.status ?? "pending",
            due_date: a.assignment?.due_date,
            score: a.score,
            notes: a.assignment?.description,
            raw: a,
        })),
        ...(quizSessions ?? []).map((q) => ({
            id: `q-${q.id}`,
            type: "quiz" as const,
            title: q.quiz?.title ?? "Quiz Session",
            status: statusOverrides[`q-${q.id}`] ?? q.status ?? "completed",
            due_date: q.start_time,
            score: Number(q.score),
            raw: q,
        })),
    ];

    const allItems = [...apiItems, ...localItems];

    function slotItems(day: Date, hour: number): ScheduleItem[] {
        return allItems.filter((item) => {
            if (!item.due_date) return false;
            const d = new Date(item.due_date);
            return isSameDay(d, day) && d.getHours() === hour;
        });
    }
    function allDayItemsFor(day: Date): ScheduleItem[] {
        return allItems.filter((item) => {
            if (!item.due_date) return false;
            const d = new Date(item.due_date);
            if (!isSameDay(d, day)) return false;
            const h = d.getHours();
            return h < HOUR_START || h >= HOUR_END;
        });
    }
    const undatedItems = allItems.filter((i) => !i.due_date);

    // Stats
    const totalItems = allItems.length;
    const doneItems  = allItems.filter((i) => ["submitted", "completed"].includes(resolveStatus(i, today))).length;
    const overdueItems = allItems.filter((i) => resolveStatus(i, today) === "overdue").length;
    const pendingItems = totalItems - doneItems - overdueItems;

    // Modal handlers
    function openCreate(day: Date, hour: number | null) {
        setModal({ mode: "create", day, hour });
    }
    function openEdit(item: ScheduleItem) {
        setModal({ mode: "edit", item });
    }

    function handleSave(draft: FormDraft & { id?: string; due_date?: string }) {
        if (modal?.mode === "edit" && draft.id) {
            // For API items, only override status (title is readonly)
            const isApi = apiItems.some((i) => i.id === draft.id);
            if (isApi) {
                setStatusOverrides((prev) => ({ ...prev, [draft.id!]: draft.status }));
            } else {
                // local item — full edit
                setLocalItems((prev) =>
                    prev.map((i) =>
                        i.id === draft.id
                            ? { ...i, title: draft.title, type: draft.type, status: draft.status, notes: draft.notes, due_date: draft.due_date }
                            : i
                    )
                );
            }
        } else if (modal?.mode === "create") {
            const newItem: ScheduleItem = {
                id: `local-${Date.now()}`,
                type: draft.type,
                title: draft.title,
                status: draft.status,
                due_date: draft.due_date,
                notes: draft.notes,
                raw: null,
            };
            setLocalItems((prev) => [...prev, newItem]);
        }
        setModal(null);
    }

    return (
        <div className="space-y-4">

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: "Total",     value: totalItems,   color: "text-gray-900" },
                    { label: "Completed", value: doneItems,    color: "text-emerald-600" },
                    { label: "Pending",   value: pendingItems, color: "text-amber-600" },
                    { label: "Overdue",   value: overdueItems, color: "text-rose-600" },
                ].map(({ label, value, color }) => (
                    <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-xs text-gray-400 mb-1">{label}</p>
                        <p className={`text-2xl font-semibold ${color}`}>{value}</p>
                    </div>
                ))}
            </div>

            {/* Timetable */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

                {/* Week nav */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={14} className="text-blue-600" />
                        <span className="text-[13px] font-semibold text-gray-800">{weekLabel(mondayAnchor)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={() => setMondayAnchor(getMondayOf(addDays(mondayAnchor, -7)))} className="p-1.5 rounded hover:bg-gray-200 transition-colors">
                            <ChevronLeft size={14} className="text-gray-500" />
                        </button>
                        <button onClick={() => setMondayAnchor(getMondayOf(new Date()))} className="px-3 py-1 text-[12px] font-medium text-blue-600 rounded hover:bg-blue-50 transition-colors">
                            Today
                        </button>
                        <button onClick={() => setMondayAnchor(getMondayOf(addDays(mondayAnchor, 7)))} className="p-1.5 rounded hover:bg-gray-200 transition-colors">
                            <ChevronRight size={14} className="text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div style={{ minWidth: 560 }}>

                        {/* Day headers */}
                        <div className="grid border-b border-gray-200" style={{ gridTemplateColumns: "52px repeat(7, 1fr)" }}>
                            <div className="bg-gray-50 border-r border-gray-200" />
                            {weekDays.map((day, i) => {
                                const isToday = isSameDay(day, today);
                                return (
                                    <div key={i} className={`py-2 px-1 text-center border-r border-gray-200 last:border-r-0 ${isToday ? "bg-blue-50" : "bg-gray-50"}`}>
                                        <p className={`text-[10px] font-bold uppercase tracking-widest ${isToday ? "text-blue-500" : "text-gray-400"}`}>{DAY_SHORT[i]}</p>
                                        <p className={`text-[15px] font-semibold mt-0.5 leading-none ${isToday ? "text-blue-600" : "text-gray-700"}`}>{day.getDate()}</p>
                                        <p className={`text-[10px] mt-0.5 ${isToday ? "text-blue-400" : "text-gray-400"}`}>{day.toLocaleString("en-US", { month: "short" })}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* All-day row */}
                        <div className="grid border-b border-gray-200 bg-gray-50/40" style={{ gridTemplateColumns: "52px repeat(7, 1fr)" }}>
                            <div className="border-r border-gray-200 flex items-center justify-center py-1.5">
                                <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider text-center leading-tight">All<br />day</span>
                            </div>
                            {weekDays.map((day, i) => {
                                const items = allDayItemsFor(day);
                                return (
                                    <SlotCell
                                        key={i}
                                        items={items}
                                        day={day}
                                        hour={null}
                                        today={today}
                                        isToday={isSameDay(day, today)}
                                        onItemClick={openEdit}
                                        onAddClick={() => openCreate(day, null)}
                                    />
                                );
                            })}
                        </div>

                        {/* Time rows */}
                        {HOURS.map((hour) => (
                            <div key={hour} className="grid border-b border-gray-100 last:border-b-0" style={{ gridTemplateColumns: "52px repeat(7, 1fr)", minHeight: 56 }}>
                                <div className="border-r border-gray-200 flex items-start justify-end pr-2 pt-1.5 bg-gray-50/40">
                                    <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap">{fmt12(hour)}</span>
                                </div>
                                {weekDays.map((day, i) => (
                                    <SlotCell
                                        key={i}
                                        items={slotItems(day, hour)}
                                        day={day}
                                        hour={hour}
                                        today={today}
                                        isToday={isSameDay(day, today)}
                                        onItemClick={openEdit}
                                        onAddClick={() => openCreate(day, hour)}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Undated items */}
            {undatedItems.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-3">No due date</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {undatedItems.map((item) => {
                            const status = resolveStatus(item, today);
                            const c = slotColors(status);
                            const Icon = TYPE_META[item.type]?.icon ?? BookOpen;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => openEdit(item)}
                                    className={`group text-left border-l-[3px] rounded-r-lg px-3 py-2 transition-all hover:brightness-95 ${c.bg} ${c.text} ${c.accent}`}
                                >
                                    <div className="flex items-center gap-1.5 text-[12px] font-semibold truncate">
                                        <Icon size={11} className="flex-shrink-0 opacity-60" />
                                        <span className="truncate flex-1">{item.title}</span>
                                        <Pencil size={10} className="flex-shrink-0 opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </div>
                                    <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full mt-1 ${STATUS_CFG[status]?.pill ?? ""}`}>
                                        {STATUS_CFG[status]?.label ?? status}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Modal */}
            {modal && (
                <ItemModal
                    modal={modal}
                    today={today}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}
