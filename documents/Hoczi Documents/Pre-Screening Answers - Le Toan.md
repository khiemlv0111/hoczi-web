# Pre-Screening Questions — Software Developer
**Scandinavian Software Park, Hanoi**
Candidate: Le Toan

---

## Q1 — Depth of usage

**Which AI coding tools are you currently using in your day-to-day development, and what does your typical workflow look like with them?**

My primary tools are **Claude Code** (CLI) and **GitHub Copilot** (VS Code extension). They serve different roles in my workflow.

**Claude Code** is where I do the heavy lifting — architecture discussions, generating full modules, refactoring across multiple files, and code review. I use it as a CLI directly inside my terminal, which means it has access to the whole repo and can read/write files without me copying-pasting. My workflow usually looks like: describe the feature with context → review the output → ask it to revise specific parts → integrate.

**GitHub Copilot** handles the micro-level stuff — inline completions while typing, finishing repetitive patterns (e.g. entity fields, service handler boilerplate, Tailwind class strings), and autocompleting test cases. It's passive; it just sits there and suggests.

A concrete example of a typical day: I'm building on **tefihub-web**, a LinkedIn-style professional networking platform being built in Hanoi — microservice backend on Node.js, Next.js + TailwindCSS frontend, PostgreSQL underneath. When adding the **job posting module**, I'd describe the data shape and feature intent to Claude Code, get a scaffold of the entity + service handler + Next.js API route + React component, then refine from there. Copilot fills in the gaps while I'm editing — field names, import statements, conditional logic. The combination means I spend most of my time reviewing and deciding, not typing boilerplate.

---

## Q2 — Real impact

**Can you walk me through a specific feature or task where AI assistance made a measurable difference? What did you prompt, what did you get, and how much did you have to change?**

The clearest example is implementing the **connection scoring service** for tefihub-web — the microservice that ranks "people you may want to connect with or follow" on a user's home feed.

The task: a Node.js service that, given a user, returns a ranked list of suggested users and pages. The score combines mutual connections, shared employers/skills, geographic proximity, and recent activity overlap (e.g. attending the same event, engaging with the same posts). It exposes a REST endpoint consumed by the Next.js app and is also called by the feed service when assembling the home feed sidebar. Latency budget: under 200ms p95 for the typical case.

My prompt was roughly: *"Implement a connection-suggestion scoring service in TypeScript for a Node.js microservice. Inputs: a user ID and a candidate set fetched from the user-graph service. Score by mutual-connection count (weight 3), shared skills (weight 2), shared employers (weight 2), same city (weight 1), and recent shared activity (weight 1.5). Return top N sorted, with stable tie-breaking."*

What I got back:
- A `scoreCandidate()` function with the weighted formula and configurable weights
- An aggregator that fetched signals from the user, follow-graph, and activity services
- A `suggestConnections()` endpoint with pagination and a `top N` limit
- Unit tests for each scoring component

What I had to change:
- The aggregator was making one RPC call per candidate to the activity service (an N+1 — more on this in Q3)
- The "shared skills" matcher was doing exact string compare; I added a normalization step (lowercase, trim, alias map for common variants like "JS" / "JavaScript")
- Tie-breaking was nondeterministic; I added a final sort key on user ID for stable ordering
- The candidate set wasn't filtering out users I'd already connected to, blocked, or dismissed — fixed in the pre-aggregation step

Time saved: this would have been 3–4 days of building and tuning. With AI I had a working first cut in a few hours and spent the rest of the time on the parts that actually required judgment — weight tuning against real data, the filter pipeline, and meeting the latency budget.

---

## Q3 — Critical thinking

**Have you ever caught an AI tool introducing a bug, a security issue, or a bad architectural decision into your code? How did you catch it, and what did you do?**

Yes — the N+1 in that same connection-scoring aggregator is a good example.

The AI's first cut iterated over the candidate set and, for each candidate, made an RPC to the activity service to fetch recent shared events and post engagements with the requesting user. For a candidate set of 200 that's 200 round-trips. In dev with synthetic data the endpoint returned in 80ms; against staging with realistic activity volume it took over 3 seconds.

How I caught it: I wired the endpoint up to a staging-sized dataset and watched the latency trace. The p95 was an order of magnitude over budget. Pulling the trace in the observability dashboard immediately showed the fan-out — 200 spans hitting the activity service in a tight loop.

What I did: rewrote the aggregator to do a single batch call — `getSharedActivity(requesterId, candidateIds[])` — and added a batch endpoint to the activity service (it already keyed by `(userA, userB)` pairs, so this became a `WHERE (userA, userB) IN (...)` query). p95 dropped from 3.2s to 140ms. While I was in there I noticed the candidate set was being built without filtering out users the requester had blocked, dismissed, or already connected to — so we were happily computing scores for users who would never be shown. Fixed both in one PR.

The broader lesson: AI-generated service code looks clean because it reads like a clear loop — "for each candidate, fetch X, compute score." That clarity hides the cost. In a microservice architecture where service-to-service calls are cheap-looking function calls in code but expensive over the wire, this pattern is everywhere. Now whenever AI generates aggregator or fan-out code, the first thing I check is whether it's making one DB or RPC call where it should be making one batched call. The bug isn't a logic error — it's an architecture error wearing logic-error clothing.

---

## Q4 — Opinion and judgment

**Where do you think AI coding tools fall short today — and what do you still prefer to do yourself without AI assistance?**

Three areas where I don't trust AI output without significant review:

**1. Schema and service-boundary decisions.** AI will generate a data model that works for the happy path, but it doesn't know your data volume, your query patterns, or your future migration constraints. For tefihub-web, deciding what lives in the user service vs. the follow-graph service vs. the feed service — and which joins happen in PostgreSQL vs. in the aggregator — required thinking about ownership, eventual-consistency boundaries, and how the follow graph would scale. AI gave me a starting point but the partition decisions, the index strategy, and where to denormalize were mine.

**2. Security boundaries.** AI tools consistently underweight authorization checks. When generating API routes, they often omit or simplify ownership and role-based checks. I always review auth logic manually. On tefihub-web I caught a generated route in the job service that let any authenticated user edit any job posting — it verified the requester was logged in but didn't check that they owned the page that posted the job. Anyone could have edited a competitor's listing.

**3. System architecture and module boundaries.** When I'm deciding where a feature lives — does this belong in the feed service or the activity service, is this a server component or client component, should this scoring logic be inline or a separate microservice — AI gives me generic patterns. It doesn't know my team's conventions, the deployment constraints, or what we've already tried and abandoned. I make those calls myself and then use AI to execute within the decided structure.

For everything else — boilerplate, standard algorithms, test cases, documentation — AI is faster and I use it freely.

---

## Q5 — Team & process

**If a teammate on your team wasn't using AI tools yet, how would you introduce it to them — and what would you set as a realistic expectation for the first month?**

I'd start by removing the intimidation factor. Most resistance comes from not knowing where to begin, or from one bad experience where the AI wrote something wrong and they lost trust. So I'd sit down with them and pair on a real task — not a toy example — using Claude Code or Copilot together.

**Week 1–2: Use it for tasks with known answers.** Writing unit tests, generating boilerplate, explaining unfamiliar library APIs. This builds trust because they can immediately verify the output is correct. The goal is to get them comfortable with the tool, not to maximize productivity yet.

**Week 3–4: Use it on real features with review.** Take a feature they're about to build anyway and try prompting AI for a scaffold. Review the output together at first, then let them do it solo. The key message: *treat every output like a code review, not a final answer.* The AI is a fast junior developer — useful, but needs oversight.

**Realistic first-month expectation:** They'll save time on boilerplate and searching docs. They will not double their output. They might hit one or two cases where AI confidently gives them wrong code, which is actually valuable — it teaches calibration. By the end of the month, they should have a mental model of what AI is good at (generation, transformation, explanation) and where to be skeptical (security, architecture, domain-specific logic).

What I'd explicitly tell them to avoid in month one: accepting generated code without reading it, and using AI for decisions that require business context the AI doesn't have.
