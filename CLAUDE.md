# Hoczi — Agent Guide

Monorepo for the Hoczi teaching & learning platform.

| Path | What | Run |
|------|------|-----|
| `hoczi-api/` | Backend: Express + TypeORM + PostgreSQL, AI workers | `yarn dev`, `yarn worker:dev`, `yarn build` |
| `hoczi-web/` | Frontend: Next.js 16 App Router, React 19, Tailwind 4 | `npm run dev`, `npm run lint`, `npm run build` |
| `documents/` | Business/product docs | — |
| `specs/` | Spec Kit feature specs (created by `/speckit-specify`) | — |

## Rules

- **Constitution**: `.specify/memory/constitution.md` is the source of truth for architecture,
  data, AI-safety and verification rules. Read it before planning or implementing a feature.
- Backend follows Controller → Service → Repository (see `hoczi-api/SKILL.md`); schema changes
  only via TypeORM migrations.
- Frontend: read `hoczi-web/AGENTS.md` — Next.js 16 has breaking changes; check
  `hoczi-web/node_modules/next/dist/docs/` before writing Next-specific code. API calls go
  through `hoczi-web/data/services/*`. Add UI strings to `messages/vi.json` and `messages/en.json`.
- AI keys/config are server-only (`hoczi-api/src/config/ai.ts`).
- Done = `npx tsc --noEmit` (both apps) + `npm run lint` (web) + builds pass + acceptance
  scenarios checked.

## Spec-Driven Workflow (Spec Kit 1.4, skills in `.claude/skills/`)

1. `/speckit-specify <feature description>` — creates branch + `specs/NNN-name/spec.md`
2. `/speckit-clarify` — resolve ambiguities (optional but recommended)
3. `/speckit-plan` — `plan.md`, research, data model, API contracts (Constitution Check)
4. `/speckit-tasks` — `tasks.md`
5. `/speckit-analyze` — cross-artifact consistency check
6. `/speckit-implement` — execute tasks
7. `/speckit-converge` — find remaining unbuilt work

Amend principles with `/speckit-constitution`.
