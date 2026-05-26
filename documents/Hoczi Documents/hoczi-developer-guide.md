# Hoczi Developer Guide

A technical reference for developers working on the Hoczi web application. This guide covers environment setup, project structure, development workflow, and integration points.

---

## 1. Introduction

Hoczi is a web-based platform designed to help users manage and interact with their content efficiently. This document is intended for engineers contributing to the codebase or integrating with Hoczi services.

**Audience:** Backend, frontend, and full-stack developers familiar with modern web development.

**Scope:** Local development setup, architecture overview, coding standards, and deployment basics.

---

## 2. Prerequisites

Before getting started, make sure the following tools are installed on your machine:

- **Node.js** v18 or later
- **npm** v9+ or **pnpm** v8+
- **Git** v2.30+
- A code editor (VS Code recommended)
- Access to the Hoczi repository on GitHub/GitLab

Optional but recommended:

- **Docker** for containerized services
- **PostgreSQL** v14+ if running the database locally
- **Redis** v6+ for caching and session storage

---

## 3. Getting Started

### 3.1 Clone the Repository

```bash
git clone https://github.com/your-org/hoczi-web.git
cd hoczi-web
```

### 3.2 Install Dependencies

```bash
npm install
```

### 3.3 Configure Environment Variables

Copy the example environment file and fill in the required values:

```bash
cp .env.example .env.local
```

Key variables:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `NEXT_PUBLIC_API_URL` | Public-facing API base URL |
| `JWT_SECRET` | Secret used to sign auth tokens |

### 3.4 Run the Development Server

```bash
npm run dev
```

The app should now be available at `http://localhost:3000`.

---

## 4. Project Structure

```
hoczi-web/
├── documents/          # Project documentation (you are here)
├── src/
│   ├── app/            # Application routes and pages
│   ├── components/     # Reusable UI components
│   ├── lib/            # Shared utilities and helpers
│   ├── server/         # Backend handlers and services
│   ├── styles/         # Global styles and theme tokens
│   └── types/          # Shared TypeScript types
├── public/             # Static assets
├── tests/              # Unit and integration tests
└── package.json
```

---

## 5. Development Workflow

### 5.1 Branching

- Create feature branches from `main`: `feat/short-description`
- Use `fix/...` for bug fixes and `chore/...` for maintenance
- Open pull requests early and keep them focused

### 5.2 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
feat: add user profile page
fix: resolve login redirect loop
docs: update developer guide
```

### 5.3 Code Style

- Linting is enforced via ESLint (`npm run lint`)
- Formatting handled by Prettier (`npm run format`)
- TypeScript strict mode is enabled — keep types accurate

### 5.4 Pre-commit Checks

Husky runs the following before each commit:

1. ESLint on staged files
2. Prettier formatting
3. Type check via `tsc --noEmit`

---

## 6. Testing

| Command | Purpose |
|---|---|
| `npm test` | Run all unit tests |
| `npm run test:watch` | Watch mode for active development |
| `npm run test:e2e` | Run Playwright end-to-end tests |
| `npm run test:coverage` | Generate coverage report |

Aim for ≥80% coverage on new modules. Place unit tests beside the file under test (`foo.ts` → `foo.test.ts`).

---

## 7. API and Integration

### 7.1 API Routes

REST endpoints live under `src/app/api/`. Each route exports HTTP method handlers (`GET`, `POST`, etc.).

Example:

```ts
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({ status: "ok" });
}
```

### 7.2 Authentication

Hoczi uses JWT-based authentication. Tokens are issued on login and verified server-side via middleware.

### 7.3 Database

Database access is centralized through the ORM client in `src/server/db/`. Run migrations with:

```bash
npm run db:migrate
```

---

## 8. Deployment

### 8.1 Build

```bash
npm run build
```

### 8.2 Production Start

```bash
npm start
```

### 8.3 Environments

| Environment | URL | Branch |
|---|---|---|
| Development | `dev.hoczi.example` | `develop` |
| Staging | `staging.hoczi.example` | `staging` |
| Production | `hoczi.example` | `main` |

CI/CD is handled via GitHub Actions; see `.github/workflows/` for pipeline definitions.

---

## 9. Troubleshooting

**App fails to start:** Verify `.env.local` is present and `DATABASE_URL` is reachable.

**Database connection errors:** Confirm PostgreSQL is running and the credentials match those in your env file.

**Type errors after pulling main:** Run `npm install` again — dependencies may have changed.

**Port already in use:** Set a different port via `PORT=3001 npm run dev`.

---

## 10. Contributing

1. Fork or branch off `main`
2. Make your changes with tests
3. Run `npm run lint && npm test`
4. Open a pull request with a clear description
5. Request review from a code owner

For larger architectural changes, please open a discussion or RFC issue first.

---

## 11. References

- Project repository: *(add link)*
- Issue tracker: *(add link)*
- Internal Slack: *(add channel)*
- Architecture diagrams: `documents/architecture/`

---

*Last updated: April 27, 2026*
