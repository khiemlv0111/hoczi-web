# Hoczi — Business Model

This document describes how Hoczi creates, delivers, and captures value. It is written for founders, early hires, and investors who need to understand the commercial logic of the platform alongside the product description in `hoczi-description.md` and the rollout plan in `hoczi-1year-plan.md`.

---

## Value Proposition

Hoczi gives teachers a single place to design study material, run graded quizzes, assign work, and track student progress, while giving students a low-friction way to learn through assignments, retries, and short games. The multi-tenant model means a school, a tutoring center, or a corporate training team can run their own private Hoczi instance with their own teachers, students, and content, without standing up infrastructure.

For teachers the promise is less time spent on grading and chasing students, and more time spent on actual teaching. For students the promise is clarity — they always know what is due, what they have completed, and how they performed. For tenant owners (school administrators, training managers) the promise is visibility into how their classes are running and a defensible record of student work.

The platform's edge over generic learning management systems is the combination of guest-mode quizzes (lowering the barrier to first use) and the engagement layer of mini-games and schedules, which most LMS products treat as out-of-scope.

---

## Customer Segments

Hoczi serves three primary segments and a long tail of adjacent users.

The first segment is small and mid-size private schools, tutoring centers, and language schools — typically 50 to 2,000 students and 5 to 100 teachers. They want a branded space for their classes, gradebook-style visibility, and they are willing to pay per seat. They are the primary commercial target for the first 12 months.

The second segment is independent teachers and tutors running their own classes outside an institution. They sign up as the tenant owner of a one-person tenant and pay a smaller monthly fee. Volume here is high but revenue per account is lower; this segment is also the funnel that often introduces Hoczi into a school when the teacher recommends it internally.

The third segment is corporate training and onboarding teams that need to run quizzes against compliance material or product knowledge. They value the quiz engine, results dashboards, and the ability to invite hundreds of internal users into a private tenant. This segment typically pays more per seat but requires SSO and audit logging, which is why it becomes a real focus in year two rather than year one.

The long tail includes hobbyist quiz creators, study-group leaders, and content creators who use the guest-quiz feature to share quizzes publicly. They generate awareness and inbound traffic but do not directly pay; they are part of the marketing engine, not the revenue engine.

---

## Revenue Model

Hoczi monetizes primarily through tiered SaaS subscriptions billed per active seat per month, with discounts for annual commitments. A free tier exists to remove the activation barrier, and a small set of usage-based add-ons handles the long tail of edge cases.

The free tier covers a single teacher, up to thirty students, unlimited public quizzes, and the basic assignment types, with Hoczi branding visible. It is intentionally generous on the student side and intentionally limited on the teacher side — adding a second teacher requires upgrading. The goal of the free tier is to seed product-led adoption inside schools, where one teacher's free use becomes the wedge for a school-wide paid plan.

The Pro tier targets independent teachers and small tutoring practices. It removes the student cap, unlocks the games module, custom branding, and basic analytics. Pricing is per-teacher per month, with the per-student cost folded into the teacher seat for simplicity.

The School tier is priced per active student per month and is the primary revenue driver. It includes unlimited teachers, advanced analytics, role-based admin controls, bulk roster import, custom domain, and priority support. Annual contracts unlock a discount and lock in the seat count for the year. Most schools will land here.

The Enterprise tier serves corporate training and large institutions. It adds SSO (SAML, OIDC), audit logs, data residency options, a sandbox tenant for testing, an SLA, and a named customer success contact. Pricing is negotiated per contract rather than self-serve.

Add-ons priced per-use sit on top of any tier: extra storage for assignment file uploads beyond the included quota, AI-assisted question generation metered per generated question, and high-volume webhook delivery for tenants that integrate Hoczi with their own systems.

A small revenue stream from the games module is also possible — sponsored or branded games for B2C tenants — but this is treated as opportunistic rather than core, and only pursued if it does not degrade the student experience.

---

## Cost Structure

Hoczi's costs split into three buckets. Infrastructure is the smallest in the early years: managed Postgres, object storage for files, a CDN for static assets, and compute for the application servers and background workers. The largest cost driver inside infrastructure is the quiz session traffic at peak (a class of 30 students all submitting at once), which informs autoscaling decisions but rarely dominates the monthly bill.

People costs dominate the budget — engineering, product, design, customer success, and sales. The plan in year one keeps the team small and assumes founders cover sales for early tenant deals.

Acquisition costs are mostly content and community in year one (SEO content for teachers, presence in teacher communities, referral incentives) rather than paid ads, since the unit economics of a $5–$15 per-student-per-month product cannot absorb expensive paid acquisition without long payback periods. Paid acquisition becomes viable in year two once payback windows are measured rather than estimated.

A fourth, smaller bucket covers compliance — student data privacy reviews, SOC 2 readiness in year two, and legal review of the terms of service and data processing addendum that schools will require before signing.

---

## Pricing Philosophy

Hoczi prices for clarity rather than for maximum extraction. The pricing page shows three plans plus a contact-sales option, and any teacher can land on it and self-serve into Pro within five minutes. Per-student pricing on the School tier is benchmarked against the local cost of a teacher's hour rather than against US-only LMS pricing, because the early geography is heavily Southeast Asian and Eastern European.

Discounts follow simple rules: annual commitment cuts roughly 17 percent off (two months free), education non-profits get an additional discount on application, and multi-year commitments are reserved for Enterprise. Sales reps cannot discount below those guardrails without founder approval — discount discipline early matters more than closed-deal count.

---

## Go-to-Market

The go-to-market motion blends product-led growth on the teacher side with light-touch sales on the school side. A teacher discovers Hoczi through a search query, a peer recommendation, or a public quiz they took as a student. They sign up free, run a quiz with their class, and within a few weeks either upgrade to Pro themselves or refer the tool to their administration for a school-wide plan.

The sales team's job in year one is to convert school-level interest into signed deals — a short cycle compared to enterprise SaaS, typically two to six weeks from first call to signed contract. The pitch deck leans on case studies from the earliest schools, so the priority in the first two quarters is to land three or four reference tenants who will go on the record.

Marketing focuses on three channels: SEO content aimed at teacher search intent ("how to make a quiz for my class," "free LMS for tutors"), partnerships with teacher-facing communities and associations, and a referral program that gives both the referring teacher and the new tenant a discount on their first paid month.

International expansion follows demand rather than leading it. The platform is built for i18n from Q2 of year one, but localized marketing only spins up in markets where organic signups already cluster.

---

## Competitive Landscape

Hoczi competes against three groups. The first is full LMS suites like Google Classroom, Canvas, and Moodle — these are mature, often free or cheap for schools, but heavy, slow to set up, and weak on engagement features. Hoczi wins on speed-to-value and on the quiz and games experience, and loses on breadth of integrations.

The second is quiz-only tools like Kahoot and Quizizz — these are sharp on engagement but do not handle assignments, lessons, or class management. Hoczi wins on being a single product for the whole teaching loop and loses on the polish of the live-quiz experience, which those tools have refined for years.

The third is generic productivity suites (Notion, Google Docs) repurposed for teaching. They are flexible but not purpose-built; teachers using them spend a lot of time on setup. Hoczi's argument here is simply that a tool built for the job beats a tool bent into the job.

The defensible position over time is the data moat from accumulated assignments, quizzes, and student progress within each tenant. Once a school has a year of content and a year of student records in Hoczi, switching costs are real.

---

## Key Metrics

The business is measured against a small set of metrics that matter at this stage. Activation is measured as the percentage of new tenants that run a real quiz session with at least five students within their first 14 days. Retention is measured as monthly active tenants and as net revenue retention on the School tier. Expansion is tracked by seat growth within existing tenants. Acquisition is tracked by signup volume by channel and by the cost to acquire a paying tenant relative to its first-year revenue.

Two product-health metrics also feed into the business view: quiz session completion rate (a proxy for student engagement) and assignment submission rate (a proxy for teacher trust in the tool). When either drops in a tenant, customer success reaches out before the next billing cycle.

---

## Risks and How They Are Managed

Pricing risk: per-student pricing can scale uncomfortably for very large tenants. Mitigation: a published volume-discount ladder above 1,000 seats and an explicit Enterprise path for anything custom.

Concentration risk: a small number of early tenants could represent an outsized share of revenue. Mitigation: an explicit cap that no single tenant should exceed 15 percent of revenue past month 12 — if it does, sales focus shifts to broadening the base.

Compliance risk: student data is regulated differently across jurisdictions (FERPA in the US, GDPR in the EU, local laws elsewhere). Mitigation: regional data residency on the Enterprise tier, a strict data processing addendum for all paid tiers, and an annual compliance review.

Platform risk: a free or near-free move from a large incumbent (Google, Microsoft) into the same niche could compress prices. Mitigation: lean into the parts of the product they will not copy — the games module, the schedules layer, the experience for non-English-speaking markets — and build deeper than they are willing to.

---

## What Success Looks Like

Twelve months from launch, Hoczi should have crossed 50 paying tenants, with the School tier producing the majority of revenue, an annualized run rate that funds the team without an additional raise, and at least three reference customers willing to go on calls with prospects. The product, by then, will be feature-complete against the description in `hoczi-description.md` and ready for a year-two focus on depth, integrations, and international expansion rather than on filling out the core.
