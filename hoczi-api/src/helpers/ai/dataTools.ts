import { AppDataSource } from '../../data-source';
import { FunctionTool } from './retrieval';

// Read-only, aggregate statistics the chat assistant may query for admins.
// Rules: fixed parameterized SQL only (the model never writes SQL), counts and totals only
// (no names, emails or other personal data), small result sets.

class ToolInputError extends Error {
    expose = true;
}

const DATE = /^\d{4}-\d{2}-\d{2}$/;

function dateArg(value: unknown, name: string): string | null {
    if (value === null || value === undefined || value === '') return null;
    if (typeof value !== 'string' || !DATE.test(value) || Number.isNaN(Date.parse(value))) {
        throw new ToolInputError(`${name} must be a date in YYYY-MM-DD format`);
    }
    return value;
}

function intArg(value: unknown, name: string, min = 1, max = 1_000_000_000): number | null {
    if (value === null || value === undefined) return null;
    if (typeof value !== 'number' || !Number.isInteger(value) || value < min || value > max) {
        throw new ToolInputError(`${name} must be an integer between ${min} and ${max}`);
    }
    return value;
}

const nullableDate = (description: string) => ({ type: ['string', 'null'], description: `${description} (YYYY-MM-DD), or null` });

function params(properties: Record<string, unknown>) {
    return { type: 'object', properties, required: Object.keys(properties), additionalProperties: false };
}

const n = (v: unknown) => Number(v ?? 0);

// "to" is inclusive: created_at < to + 1 day.
const RANGE = (col: string, fromIdx: number, toIdx: number) =>
    `($${fromIdx}::date IS NULL OR ${col} >= $${fromIdx}::date) AND ($${toIdx}::date IS NULL OR ${col} < $${toIdx}::date + 1)`;

export const ADMIN_DATA_TOOLS: FunctionTool[] = [
    {
        name: 'get_user_stats',
        description: 'Count Hoczi users: total, by role, optionally for one tenant and/or users created in a date range.',
        parameters: params({
            tenant_id: { type: ['integer', 'null'], description: 'Only users of this tenant, or null for all users' },
            created_from: nullableDate('Only users created on or after this date'),
            created_to: nullableDate('Only users created on or before this date'),
        }),
        run: async (args) => {
            const tenantId = intArg(args.tenant_id, 'tenant_id');
            const from = dateArg(args.created_from, 'created_from');
            const to = dateArg(args.created_to, 'created_to');
            const rows = await AppDataSource.query(
                `SELECT COALESCE(NULLIF(role, ''), '(no role)') AS role, count(*) AS count
                   FROM users
                  WHERE ($1::int IS NULL OR tenant_id = $1) AND ${RANGE('created_at', 2, 3)}
                  GROUP BY 1 ORDER BY 2 DESC`,
                [tenantId, from, to],
            );
            const withoutTenant = tenantId === null ? await AppDataSource.query(
                `SELECT count(*) AS count FROM users WHERE tenant_id IS NULL AND ${RANGE('created_at', 1, 2)}`, [from, to],
            ) : null;
            return {
                filters: { tenant_id: tenantId, created_from: from, created_to: to },
                total: rows.reduce((sum: number, r: any) => sum + n(r.count), 0),
                by_role: rows.map((r: any) => ({ role: r.role, count: n(r.count) })),
                ...(withoutTenant ? { users_without_tenant: n(withoutTenant[0]?.count) } : {}),
            };
        },
    },
    {
        name: 'get_tenant_stats',
        description: 'Count tenants (organizations/schools) by status and plan, and list the largest tenants by number of users.',
        parameters: params({
            top_n: { type: ['integer', 'null'], description: 'How many of the largest tenants to list (1-20), or null for 5' },
        }),
        run: async (args) => {
            const top = intArg(args.top_n, 'top_n', 1, 20) ?? 5;
            const [byStatus, byPlan, largest] = await Promise.all([
                AppDataSource.query(`SELECT status::text AS status, count(*) AS count FROM tenants WHERE deleted_at IS NULL GROUP BY 1 ORDER BY 2 DESC`),
                AppDataSource.query(`SELECT plan_type::text AS plan, count(*) AS count FROM tenants WHERE deleted_at IS NULL GROUP BY 1 ORDER BY 2 DESC`),
                AppDataSource.query(
                    `SELECT t.id, t.name, count(u.id) AS users
                       FROM tenants t LEFT JOIN users u ON u.tenant_id = t.id
                      WHERE t.deleted_at IS NULL
                      GROUP BY t.id, t.name ORDER BY users DESC, t.id LIMIT $1`, [top]),
            ]);
            return {
                total: byStatus.reduce((sum: number, r: any) => sum + n(r.count), 0),
                by_status: byStatus.map((r: any) => ({ status: r.status, count: n(r.count) })),
                by_plan: byPlan.map((r: any) => ({ plan: r.plan, count: n(r.count) })),
                largest_by_users: largest.map((r: any) => ({ id: n(r.id), name: r.name, users: n(r.users) })),
            };
        },
    },
    {
        name: 'get_content_stats',
        description: 'Count learning content in Hoczi: questions (system vs tenant, active), quizzes, lessons, courses, books, classes.',
        parameters: params({}),
        run: async () => {
            const [q] = await AppDataSource.query(
                `SELECT count(*) AS total,
                        count(*) FILTER (WHERE is_system) AS system,
                        count(*) FILTER (WHERE NOT is_system) AS tenant_or_teacher,
                        count(*) FILTER (WHERE is_active) AS active
                   FROM questions`);
            const [c] = await AppDataSource.query(
                `SELECT (SELECT count(*) FROM quizzes) AS quizzes,
                        (SELECT count(*) FROM lessons) AS lessons,
                        (SELECT count(*) FROM courses) AS courses,
                        (SELECT count(*) FROM books) AS books,
                        (SELECT count(*) FROM classes) AS classes`);
            return {
                questions: { total: n(q.total), system: n(q.system), tenant_or_teacher: n(q.tenant_or_teacher), active: n(q.active) },
                quizzes: n(c.quizzes), lessons: n(c.lessons), courses: n(c.courses), books: n(c.books), classes: n(c.classes),
            };
        },
    },
    {
        name: 'get_quiz_activity',
        description: 'Quiz-taking activity: number of quiz sessions by status, distinct learners, average score of finished sessions, most-taken quizzes. Optional date range on session start.',
        parameters: params({
            from: nullableDate('Sessions started on or after this date'),
            to: nullableDate('Sessions started on or before this date'),
        }),
        run: async (args) => {
            const from = dateArg(args.from, 'from');
            const to = dateArg(args.to, 'to');
            const range = RANGE('qs.start_time', 1, 2);
            const [byStatus, [summary], topQuizzes] = await Promise.all([
                AppDataSource.query(`SELECT qs.status, count(*) AS count FROM quiz_sessions qs WHERE ${range} GROUP BY 1 ORDER BY 2 DESC`, [from, to]),
                AppDataSource.query(
                    `SELECT count(*) AS sessions, count(DISTINCT qs.user_id) AS learners,
                            round(avg(qs.score) FILTER (WHERE qs.end_time IS NOT NULL)::numeric, 2) AS avg_score_finished
                       FROM quiz_sessions qs WHERE ${range}`, [from, to]),
                AppDataSource.query(
                    `SELECT q.id, q.title, count(*) AS sessions
                       FROM quiz_sessions qs JOIN quizzes q ON q.id = qs.quiz_id
                      WHERE ${range} GROUP BY q.id, q.title ORDER BY sessions DESC LIMIT 5`, [from, to]),
            ]);
            return {
                filters: { from, to },
                sessions: n(summary?.sessions),
                distinct_learners: n(summary?.learners),
                avg_score_finished: summary?.avg_score_finished === null ? null : Number(summary?.avg_score_finished),
                by_status: byStatus.map((r: any) => ({ status: r.status, count: n(r.count) })),
                most_taken_quizzes: topQuizzes.map((r: any) => ({ id: n(r.id), title: r.title, sessions: n(r.sessions) })),
            };
        },
    },
    {
        name: 'get_ai_stats',
        description: 'AI feature statistics: knowledge documents by status, AI drafts by status, AI requests and estimated cost by operation in a date range (default: current month).',
        parameters: params({
            from: nullableDate('Usage on or after this date; null = first day of current month'),
            to: nullableDate('Usage on or before this date; null = today'),
        }),
        run: async (args) => {
            const now = new Date();
            const from = dateArg(args.from, 'from') ?? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
            const to = dateArg(args.to, 'to');
            const [docs, drafts, usage] = await Promise.all([
                AppDataSource.query(`SELECT status, count(*) AS count FROM knowledge_documents GROUP BY 1 ORDER BY 2 DESC`),
                AppDataSource.query(`SELECT status, count(*) AS count FROM ai_drafts GROUP BY 1 ORDER BY 2 DESC`),
                AppDataSource.query(
                    `SELECT operation, count(*) AS requests, count(*) FILTER (WHERE outcome = 'error') AS errors,
                            round(sum(estimated_cost_usd)::numeric, 4) AS estimated_cost_usd
                       FROM ai_usage_logs WHERE ${RANGE('created_at', 1, 2)} GROUP BY 1 ORDER BY 2 DESC`, [from, to]),
            ]);
            return {
                knowledge_documents_by_status: docs.map((r: any) => ({ status: r.status, count: n(r.count) })),
                ai_drafts_by_status: drafts.map((r: any) => ({ status: r.status, count: n(r.count) })),
                usage: { from, to, by_operation: usage.map((r: any) => ({ operation: r.operation, requests: n(r.requests), errors: n(r.errors), estimated_cost_usd: Number(r.estimated_cost_usd ?? 0) })) },
                note: 'Costs are estimates from configured prices; 0 if AI_PRICE_* is not set.',
            };
        },
    },
];

// Shown in the chat UI so admins can see what was queried.
export const DATA_TOOL_LABELS: Record<string, string> = {
    get_user_stats: 'User statistics',
    get_tenant_stats: 'Tenant statistics',
    get_content_stats: 'Content statistics',
    get_quiz_activity: 'Quiz activity',
    get_ai_stats: 'AI usage statistics',
};
