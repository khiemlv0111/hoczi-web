# Hoczi — 1-Year Detailed Roadmap (May 2026 – April 2027)

This roadmap turns the feature description in `hoczi-description.md` into a quarter-by-quarter plan covering product, engineering, QA, and growth. It assumes a small core team and an MVP-first delivery style: ship the core teaching loop first, then layer engagement (games, schedules) and scale (multi-tenant hardening, analytics) on top.

---

## Vision and 12-Month Goals

Hoczi will become a multi-tenant study platform where teachers run classes, assign work, and run live or asynchronous quizzes, while students learn through a mix of structured assignments and lightweight gamified content. Within 12 months we aim to:

1. Reach a stable, production-ready multi-tenant core with isolated data per tenant.
2. Onboard the first 50 paying tenants (schools, tutoring centers, training teams).
3. Deliver a polished quiz engine that supports guest play, scored sessions, and teacher review.
4. Launch the games module with at least 6 mini-games tied to study content.
5. Ship a scheduling feature usable by both teachers and students for daily and weekly planning.
6. Establish the public documentation site for both developers (API, integration) and end-users (how-to guides).

---

## Q1 — May to July 2026: Core Platform and Quiz MVP

The first quarter is about getting the foundation right. Tenant isolation, authentication, and the quiz loop are non-negotiable; everything else in the year depends on them.

The team will finalize the multi-tenant data model, ensuring every domain entity (users, classes, assignments, quizzes, sessions, results) is scoped by `tenant_id` with row-level safeguards. Authentication will support email/password plus social login (Google at minimum), with role resolution returning the user's tenants and roles in a single call. Tenant ownership and member-management flows will be implemented end-to-end so a new tenant owner can sign up, invite teachers and students by email, and assign roles.

In parallel, the quiz MVP will ship: question bank, quiz composition, quiz session creation with optional `due_at` and `available_from` windows, and a guest-mode play flow that does not require login. Logged-in users will see their attempt history and be able to retry where the teacher allows it. Anti-cheat will be minimal at this stage (server-side scoring, basic timing), with deeper measures pushed to Q3.

Key deliverables include the tenant onboarding flow, the question and quiz authoring UI for teachers, the public quiz play page, and a results dashboard for the teacher with per-student and per-question breakdowns. By the end of the quarter we want a teacher to be able to sign up, create a class, build a quiz, send it to a handful of students, and review results — all in production.

Engineering also needs to invest early in CI/CD, automated test coverage on the tenant boundary, and a staging environment seeded with realistic data, since these compound across every later quarter.

## Q2 — August to October 2026: Assignments, Lessons, and Collaboration

With the quiz path stable, Q2 broadens the teaching surface. Teachers will be able to create assignments of four types — lesson, text, file upload, and quiz — and assign them to one student, a subset, or the full class. Students will see assignments in a unified inbox with status (not started, in progress, submitted, graded) and can mark non-quiz assignments complete with optional attachments.

The lesson type deserves dedicated UX work: a structured editor for headings, rich text, embedded media, and inline questions so a lesson can blend reading and self-check questions without becoming a full quiz. File assignments need safe upload, type and size limits, and virus scanning before files are made available to students.

Comments arrive in this quarter as a thread attached to each assignment instance, visible to the assigned student and the teacher, with email notification on reply. This unlocks the back-and-forth feedback loop that turns Hoczi from a quiz tool into a teaching tool.

The teacher experience also gets a class workspace view: roster, assignments overview, quiz session calendar, and aggregate progress. Students get a "today and this week" landing page showing what's due and what's been returned.

QA focus this quarter is on permission edge cases: teachers in multiple classes, students moved between classes mid-term, and assignments shared across classes. We expect a meaningful bug bash before Q3 launches.

## Q3 — November 2026 to January 2027: Games, Engagement, and Mobile Polish

Q3 turns to engagement. The games module launches with an initial set of six mini-games — a mix of pure-fun arcade titles and study-linked games (vocabulary match, math sprint, flashcard duel, etc.). Games will run in a sandboxed iframe with a thin SDK that lets a game report a score back to the platform, so teachers can later use a game as an assignment type.

Alongside games, this quarter delivers the first round of mobile polish. Hoczi has been web-first; in Q3 we ship a fully responsive UI across student-facing pages, install-as-PWA support, push notifications for assignment due dates and new comments, and offline-friendly quiz playback for short network drops. A native mobile shell can be evaluated but is not committed in this plan.

Anti-cheat for quizzes also matures here: per-question timing, randomized question and answer order per attempt, optional session lock so a student cannot leave the tab without invalidating the attempt, and teacher-side flags for suspicious patterns (extreme speed, identical wrong-answer sequences across students). None of this is foolproof, but it's enough to deter casual cheating in graded sessions.

The holiday period in December typically slows tenant activity, so we use that window for an internal hardening sprint: load testing, database tuning, cost review, and a security review. The Q3 feature freeze should land by mid-November to keep December stable.

## Q4 — February to April 2027: Schedules, Analytics, and Scale Readiness

The final quarter brings scheduling and analytics, both of which become valuable only once the platform has accumulated activity.

Schedules give every user a personal weekly view with day-by-day time blocks. Teachers can publish class schedules (lesson at 9:00 Monday, quiz at 14:00 Wednesday) which propagate to the assigned students' calendars. Students can also add personal study blocks. Reminders fire via email and push at configurable lead times. iCal export is included for users who live in another calendar.

Analytics arrives as two surfaces: a student progress page showing trends in quiz scores, completion rate, and time-on-task; and a tenant admin dashboard showing active users, assignment volume, completion rates, and per-class outcomes. The data warehouse for this should be a separate analytics database fed from production via change-data-capture, not direct queries against the OLTP store, to protect production performance.

The quarter closes with scale readiness work: a load test targeting 10x current peak, a failover drill, a documented runbook for the on-call rotation, and a public status page. We also publish v1 of the developer documentation site (REST API reference, webhook catalog, embedding guide for the quiz player) and v1 of the user help center (teacher and student how-tos, video walkthroughs of the most common flows).

---

## Cross-Cutting Workstreams

Several streams run continuously across all quarters and are not tied to any single milestone.

Security and privacy reviews happen quarterly, with a third-party penetration test scheduled for Q3 once the surface area has stabilized. Tenant data isolation is re-audited any time a new cross-tenant feature (templates, marketplace) is proposed.

Internationalization is groundwork-only in Q1 and Q2 (string externalization, locale-aware date and number formatting) and ships its first non-English language in Q3, prioritized based on early tenant geography.

Accessibility targets WCAG 2.1 AA on student-facing pages by end of Q2 and on teacher-facing pages by end of Q4. Every new feature ships with a basic accessibility check before merge.

Customer feedback is collected in a single triage queue from in-app feedback, support email, and tenant calls, and reviewed weekly. A monthly changelog post goes out to all tenant owners.

---

## Risks and Mitigations

The biggest schedule risk is the lesson editor in Q2 — rich-text editors are notorious time sinks. Mitigation: pick an off-the-shelf editor (Tiptap or Lexical) and resist building custom blocks until Q4.

The biggest product risk is the games module in Q3 not driving the engagement we expect. Mitigation: ship two games early in the quarter, instrument them, and let the data decide whether the remaining four are worth the investment or whether the time is better spent on schedules and analytics.

The biggest scale risk is multi-tenant noisy-neighbor effects once a few large tenants are on the platform. Mitigation: per-tenant rate limits from day one, even if generous, so the throttle exists when we need to tighten it.

---

## Success Metrics by End of Year

By April 2027 we will judge the year successful if Hoczi has at least 50 paying tenants with median weekly active usage above 60 percent of seats, quiz session completion rate above 75 percent, p95 page load under 2 seconds on student-facing pages, and a documented uptime above 99.5 percent over the trailing 90 days. Anything short of this triggers a roadmap re-plan rather than a quarter-extension.
