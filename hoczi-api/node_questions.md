# 100 Node.js Questions & Answers — Senior Developer & Tech Lead

---

## Core & Runtime

**1. What is the Node.js event loop and how does it work?**
The event loop is a single-threaded loop that processes I/O callbacks, timers, and other asynchronous operations. It has six phases: timers, pending callbacks, idle/prepare, poll, check (setImmediate), and close callbacks. Each phase has a FIFO queue. After each phase, microtasks (Promises, queueMicrotask) are drained before the next phase begins.

---

**2. What is the difference between `process.nextTick()`, `setImmediate()`, and `Promise.resolve().then()`?**
- `process.nextTick()` runs before the event loop continues to the next phase — highest priority microtask.
- `Promise.resolve().then()` runs in the microtask queue, after `nextTick` callbacks.
- `setImmediate()` runs in the **check** phase of the event loop — after I/O events.

Order: `nextTick` → Promise microtasks → `setImmediate`

---

**3. How does Node.js handle concurrency if it's single-threaded?**
Node.js offloads I/O-heavy operations (file, DNS, network) to libuv's thread pool (default 4 threads) or OS async APIs. The main thread never blocks; callbacks are queued when work completes. CPU-bound work should be moved to Worker Threads.

---

**4. What is libuv and what role does it play?**
libuv is a C library that provides the event loop, async I/O, thread pool, timers, and cross-platform networking. Node.js delegates all non-JS async work to libuv, which notifies the event loop when results are ready.

---

**5. When would you increase `UV_THREADPOOL_SIZE` and what are the risks?**
Increase it when your app uses many concurrent file system, DNS, or `crypto` operations that queue behind the 4-thread default. Risk: each thread consumes memory (~1 MB stack); setting it too high on a constrained host can cause OOM or context-switch overhead. Max useful value is typically the number of CPU cores.

---

**6. What is the difference between `spawn`, `exec`, `execFile`, and `fork` in `child_process`?**
- `exec` — runs a shell command, buffers output, suitable for small output.
- `execFile` — runs a binary directly without a shell, slightly more efficient.
- `spawn` — streams stdout/stderr, no buffering, best for large output or long-running processes.
- `fork` — special spawn for Node.js scripts; creates an IPC channel between parent and child.

---

**7. What are Worker Threads and when should you use them?**
Worker Threads (`worker_threads` module) run JavaScript in parallel OS threads sharing memory via `SharedArrayBuffer`. Use them for CPU-bound tasks (image processing, crypto, data parsing) that would otherwise block the event loop. For I/O-bound work, async I/O is sufficient.

---

**8. What is the `cluster` module and how does it differ from Worker Threads?**
`cluster` forks multiple **processes** (each with its own event loop and memory space) to utilize all CPU cores. The master process distributes incoming connections. Worker Threads share memory within one process. Use `cluster` (or PM2) for HTTP servers; use Worker Threads for CPU-bound parallel computation.

---

**9. Explain the difference between `require` and `import/export` (ESM vs CJS).**
CJS (`require`) is synchronous, evaluated at runtime, and produces a copy of the exported value. ESM (`import`) is static, hoisted, analyzed at parse time, and produces live bindings. CJS and ESM interop: ESM can import CJS with `import`, but CJS cannot `require` ESM (must use dynamic `import()`). ESM requires `.mjs` or `"type":"module"` in `package.json`.

---

**10. What is the V8 engine and how does it affect Node.js performance?**
V8 is Google's JavaScript engine used by Node.js. It compiles JS to machine code via JIT using Ignition (bytecode interpreter) and TurboFan (optimizing compiler). Understanding V8 helps avoid deoptimizations: avoid hidden class changes, keep functions monomorphic, avoid `arguments` object in hot paths, and be aware of GC pause implications.

---

## Async Patterns & Error Handling

**11. What are the main patterns for handling async code in Node.js?**
1. Callbacks (Node.js convention: `(err, result)`)
2. Promises
3. async/await
4. Streams (event-driven)
5. EventEmitter

---

**12. How do you handle unhandled promise rejections in production?**
Listen for `process.on('unhandledRejection', (reason, promise) => { ... })`. In Node.js 15+, unhandled rejections crash the process by default. In production, log the error and optionally perform a graceful shutdown. Always add `.catch()` to top-level promises or use `try/catch` in async functions.

---

**13. What is `Promise.allSettled` vs `Promise.all`?**
`Promise.all` rejects as soon as any promise rejects (fail-fast). `Promise.allSettled` waits for all to complete and returns an array of `{ status: 'fulfilled'|'rejected', value|reason }`. Use `allSettled` when you need results from all operations regardless of individual failures.

---

**14. How do you implement a retry mechanism with exponential backoff?**
```js
async function retry(fn, retries = 3, delay = 100) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay * 2 ** i));
    }
  }
}
```

---

**15. What is the async iterator protocol and when is it useful?**
An async iterator implements `[Symbol.asyncIterator]()` returning an object with `next()` that resolves to `{ value, done }`. Use `for await...of` to consume. Useful for paginated APIs, database cursors, and readable streams — processing large datasets without loading everything into memory.

---

**16. How do you limit concurrency when processing an array of async tasks?**
Use a concurrency-limited queue or `p-limit`:
```js
import pLimit from 'p-limit';
const limit = pLimit(5);
await Promise.all(items.map(item => limit(() => processItem(item))));
```
Without a library, implement a semaphore with a counter and a queue of waiting resolvers.

---

**17. What is the difference between error-first callbacks and EventEmitter error handling?**
Error-first callbacks pass an `Error` as the first argument. EventEmitters emit an `'error'` event; if no listener is attached, Node.js throws the error, potentially crashing the process. Always attach an `'error'` listener to streams and EventEmitters.

---

**18. How do you propagate errors from async functions through Express middleware?**
Call `next(err)` inside the async handler. Since Express doesn't catch async errors automatically, wrap handlers:
```js
const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
```
Or use `express-async-errors` to patch Express globally.

---

**19. What is `AbortController` and how is it used in Node.js?**
`AbortController` provides an `AbortSignal` that can cancel async operations (fetch, file reads, timers). Pass `signal` to `fetch`, `fs.readFile`, or your own logic. Check `signal.aborted` or listen to `'abort'` event. Essential for request cancellation and timeout control.

---

**20. Explain the difference between synchronous and asynchronous `throws` and how to handle each.**
Synchronous throws propagate up the call stack and are caught with `try/catch`. In async functions, `throw` inside an `async` function rejects the returned Promise. In callback-based code, throwing synchronously inside a callback can crash the process if not caught — always use `next(err)` or `callback(err)` instead.

---

## Streams & Buffers

**21. What are the four types of streams in Node.js?**
- **Readable** — source of data (fs.createReadStream, http.IncomingMessage)
- **Writable** — destination (fs.createWriteStream, http.ServerResponse)
- **Duplex** — both readable and writable (net.Socket)
- **Transform** — duplex that transforms data (zlib.createGzip)

---

**22. What is backpressure and how do you handle it?**
Backpressure occurs when a writable stream cannot consume data as fast as a readable produces it. `writable.write()` returns `false` when the internal buffer is full. The readable should pause and listen for the `'drain'` event before resuming. Using `.pipe()` handles this automatically.

---

**23. How does `stream.pipeline()` differ from `.pipe()`?**
`pipeline()` properly propagates errors and calls cleanup callbacks when any stream errors or finishes. `.pipe()` does not destroy streams on error, leading to memory leaks. Always prefer `stream.pipeline()` (or its promisified version) in production.

---

**24. What is object mode in streams?**
By default streams work with `Buffer`/`string`. In object mode (`{ objectMode: true }`), streams can pass any JavaScript value. Used in data transformation pipelines where each chunk is a parsed object rather than raw bytes.

---

**25. How would you stream a large file through a Transform stream to compress and upload it?**
```js
import { createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

await pipeline(
  createReadStream('large.csv'),
  createGzip(),
  uploadStream  // Writable that uploads to S3
);
```

---

## Performance & Scalability

**26. How do you identify and resolve event loop lag in production?**
Measure with `perf_hooks` or libraries like `blocked-at`. Use `--inspect` + Chrome DevTools CPU profiler to find hot functions. Solutions: offload CPU work to Worker Threads, break long synchronous loops with `setImmediate`, optimize hot code paths, use native addons for heavy computation.

---

**27. What is memory leak detection strategy in a Node.js app?**
1. Take heap snapshots with `v8.writeHeapSnapshot()` or `--heapsnapshot-signal`.
2. Compare snapshots over time to find growing object counts.
3. Use `process.memoryUsage()` for monitoring.
4. Common causes: unbounded caches, EventEmitter listeners not removed, closures retaining large objects, global state accumulation.

---

**28. How do you implement graceful shutdown in a Node.js HTTP server?**
```js
process.on('SIGTERM', async () => {
  server.close(async () => {
    await db.disconnect();
    process.exit(0);
  });
  // Force exit after timeout
  setTimeout(() => process.exit(1), 10_000);
});
```
Stop accepting new connections, wait for in-flight requests to finish, close DB/queue connections, then exit.

---

**29. What is the `--max-old-space-size` flag and when do you tune it?**
It sets the V8 heap size limit in MB (default ~1.5 GB on 64-bit). Increase it when your app legitimately needs more heap (large in-memory datasets). Better solutions: stream data, use external caches (Redis), or horizontal scaling. Never increase blindly — it just delays an OOM crash.

---

**30. What is connection pooling and why is it critical in Node.js services?**
Creating a new DB connection per request is expensive. A pool pre-creates and reuses a fixed number of connections. In Node.js (single event loop), a pool size of 10–20 is often sufficient. Tune based on your DB's max connections and query latency. Libraries: `pg`'s built-in pool, `mysql2/promise` pool, `mongoose` poolSize option.

---

**31. How does caching strategy affect Node.js API performance?**
- **In-memory** (Map, LRU): fast, no network, but not shared across instances.
- **Redis**: shared cache for multi-instance deployments, supports TTL and eviction policies.
- **HTTP caching** (Cache-Control, ETags): reduces server load entirely.
- **CDN**: caches at the edge for static/semi-static content.
Choose based on data mutability, sharing requirements, and acceptable staleness.

---

**32. What are the trade-offs of using `JSON.stringify`/`JSON.parse` for deep cloning?**
It's simple but: doesn't handle `undefined`, `Date` (becomes string), `RegExp`, `Map`, `Set`, circular references (throws), or functions. For performance-critical paths, use `structuredClone()` (Node 17+) which handles more types natively, or a specialized library.

---

**33. How do you profile CPU usage in a production Node.js app?**
1. `node --prof app.js` → generates isolate-*.log → `node --prof-process` to process.
2. `clinic.js` (0x, clinic flame) for flame graphs.
3. `--cpu-prof` flag (Node 12+) generates a `.cpuprofile`.
4. Attach Chrome DevTools via `--inspect` in dev/staging.

---

**34. What is RAIL model and how does it apply to Node.js backend services?**
RAIL (Response, Animation, Idle, Load) is a user-centric perf model. For backend: Response < 200 ms for API calls (p99). Use Idle time to prefetch/warm caches. Load: minimize cold-start time. Animation doesn't apply. Track p50/p95/p99 latencies, not just averages.

---

**35. How do you handle CPU-intensive tasks without blocking the event loop?**
1. Worker Threads for parallel JS execution.
2. Child processes for isolated workloads.
3. Native addons (N-API) for performance-critical computation.
4. Offload to a separate microservice or job queue (Bull, BullMQ).
5. Break work into chunks using `setImmediate` to yield between iterations.

---

## Security

**36. What are the most common Node.js security vulnerabilities and mitigations?**
- **Injection** (SQL, NoSQL, command): parameterized queries, avoid `eval`/`exec` with user input.
- **Prototype pollution**: use `Object.create(null)`, validate with JSON schema.
- **ReDoS**: avoid catastrophic regex, use `safe-regex` linter.
- **Path traversal**: `path.resolve` + whitelist, never concatenate user input with file paths.
- **Dependency vulnerabilities**: `npm audit`, Snyk, Dependabot.

---

**37. How do you prevent prototype pollution?**
- Validate and sanitize user-controlled objects with schema validators (Zod, Joi).
- Use `Object.create(null)` for dictionaries.
- Freeze prototypes: `Object.freeze(Object.prototype)` (side effects possible).
- Use `--disable-proto=delete` Node.js flag.
- Avoid `merge`/`extend` functions with untrusted input.

---

**38. What is a timing attack and how do you prevent it in Node.js?**
A timing attack infers secrets by measuring response time differences. Use `crypto.timingSafeEqual(a, b)` for comparing secrets, tokens, or HMACs instead of `===` which short-circuits on first mismatch.

---

**39. How do you securely store and use secrets in a Node.js application?**
- Never hardcode secrets in source code.
- Use environment variables injected at runtime.
- In production: use secrets managers (AWS Secrets Manager, HashiCorp Vault, Doppler).
- Rotate secrets regularly.
- Audit `process.env` access; never log env vars.

---

**40. What HTTP security headers should every Node.js API set?**
Use `helmet`:
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`
Also: disable `X-Powered-By`, set CORS policy explicitly.

---

**41. How do you implement rate limiting and why is it important?**
Rate limiting prevents abuse, brute-force attacks, and DoS. Use `express-rate-limit` for simple cases or Redis-backed limiters (sliding window) for distributed systems. Apply per-IP, per-user, and per-endpoint limits. Return `429 Too Many Requests` with `Retry-After` header.

---

**42. What is CSRF and does it apply to REST APIs?**
CSRF attacks trick authenticated browsers into making unwanted requests. REST APIs using token-based auth (Bearer JWT in Authorization header) are not vulnerable since browsers don't auto-send custom headers. Cookie-based APIs need CSRF tokens (double-submit cookie pattern) or `SameSite=Strict` cookies.

---

**43. How do you audit npm dependencies for security vulnerabilities?**
1. `npm audit` — built-in, checks against npm advisory DB.
2. `npm audit fix` — auto-fixes non-breaking updates.
3. Snyk CLI (`snyk test`) — more detailed, CI integration.
4. Dependabot — automated PRs for outdated/vulnerable deps.
5. Review `package-lock.json` diffs in PRs.

---

**44. What is `npm ci` and why should CI pipelines use it instead of `npm install`?**
`npm ci` installs exactly from `package-lock.json`, fails if lock file is out of sync with `package.json`, never updates the lock file, and is faster (no dependency resolution). Ensures reproducible, deterministic builds in CI.

---

**45. How do you prevent sensitive data from leaking in logs?**
- Structured logging (pino, winston) with log levels.
- Redact sensitive fields: `pino`'s `redact` option, custom serializers.
- Never log passwords, tokens, PII, or full request bodies.
- Audit log pipelines for accidental `console.log(req)`.
- Use a log scrubbing library or middleware.

---

## Architecture & Design

**46. What is the difference between monolith, microservices, and modular monolith?**
- **Monolith**: single deployable unit, simpler ops, but scales as one piece.
- **Microservices**: independently deployable services, fine-grained scaling, but distributed systems complexity (network latency, eventual consistency, service discovery).
- **Modular monolith**: strong internal module boundaries, deployed as one unit, easier to extract to microservices later. Often the best starting point.

---

**47. How do you design a Node.js API for horizontal scalability?**
- Stateless request handling (no in-process sessions).
- Shared state in Redis (sessions, rate limits, pub/sub).
- Sticky sessions only if unavoidable.
- Distributed tracing (OpenTelemetry) across instances.
- Database connection pooling aware of instance count.
- Use a load balancer (nginx, ALB) with health checks.

---

**48. What is the Repository pattern and why use it in a Node.js backend?**
Repository abstracts data access behind an interface, decoupling business logic from the ORM/database. Benefits: testability (mock the repository), ability to swap data sources, and single responsibility. Common in TypeScript projects with TypeORM, Prisma, or MikroORM.

---

**49. How do you structure a large Express/Fastify application?**
By feature/domain (vertical slices), not by layer:
```
src/
  courses/
    course.controller.ts
    course.service.ts
    course.repository.ts
    course.routes.ts
    course.dto.ts
  users/
    ...
  shared/
    middleware/
    utils/
```
Each domain owns its routes, service, and repository. Shared infrastructure (auth, logging) lives in `shared/`.

---

**50. What is the difference between orchestration and choreography in microservices?**
- **Orchestration**: a central service (orchestrator) directs other services step by step (Saga pattern with a controller). Easier to reason about flow, single point of failure.
- **Choreography**: services react to events emitted by others, no central controller (event-driven). More decoupled, harder to trace end-to-end flow.

---

**51. How do you implement the Saga pattern for distributed transactions?**
Since distributed systems lack ACID transactions, use Sagas: a sequence of local transactions, each publishing an event/message. On failure, compensating transactions undo previous steps. Implement with orchestration (a saga orchestrator calls each step) or choreography (event chain). Tools: Temporal, BullMQ, custom state machines.

---

**52. What is CQRS and when does it make sense?**
Command Query Responsibility Segregation separates read and write models. Writes go to a command model (normalized, consistent), reads from a query model (denormalized, optimized for specific views). Overkill for simple CRUD. Valuable when read/write performance needs diverge significantly or when using Event Sourcing.

---

**53. How do you design for idempotency in an API?**
- Accept a client-generated `Idempotency-Key` header.
- Store the key with the response in Redis/DB (TTL-based).
- On duplicate request, return the cached response.
- Ensures safe retries for payment, order, or state-changing operations.

---

**54. What is the strangler fig pattern for migrating a legacy Node.js app?**
Incrementally replace a legacy system by routing new requests to new code while old requests still hit legacy. Use a proxy/router (nginx, API gateway) to direct traffic. Over time, "strangle" the legacy system route by route until it's fully replaced — no big-bang rewrite.

---

**55. How do you implement feature flags in a Node.js service?**
Store flags in a config store (LaunchDarkly, Unleash, or a simple Redis key). Middleware evaluates flags per request based on user, tenant, or percentage rollout. Enables dark launches, A/B tests, and kill switches without deployments. Always clean up stale flags.

---

## Testing

**56. What is the testing pyramid and how does it apply to Node.js?**
- **Unit tests** (base, most): test pure functions, services with mocked dependencies. Fast, isolated.
- **Integration tests** (middle): test service + real DB/cache in a test container. Catch wiring issues.
- **E2E tests** (top, fewest): full HTTP request through the stack. Slow, catch contract issues.
Invert the pyramid at your peril — heavy E2E suites are fragile and slow.

---

**57. How do you test code that depends on the current time?**
Inject a clock dependency or use `sinon.useFakeTimers()` / `jest.useFakeTimers()` to control `Date.now()`, `setTimeout`, and `setInterval`. Avoid calling `new Date()` directly in business logic — use a injected `clock` or `now()` function.

---

**58. What is the difference between a stub, a spy, and a mock?**
- **Stub**: replaces a function with a fixed return value. No assertions.
- **Spy**: wraps the real function, recording calls. Can assert on call count/args.
- **Mock**: a stub + built-in expectations about how it should be called. Fails the test if expectations aren't met.

---

**59. How do you test a function that makes HTTP requests?**
- Use `nock` to intercept `http`/`https` calls and return fixtures.
- Use `msw` (Mock Service Worker) for handler-based mocking.
- Inject an HTTP client as a dependency and mock it in tests.
- Avoid real network calls in unit/integration tests — they're slow and flaky.

---

**60. What is contract testing and why is it valuable for microservices?**
Contract testing verifies that a consumer and provider agree on an API contract, without requiring both to be deployed together. Tools: Pact. The consumer defines expectations; the provider verifies them. Catches breaking API changes before integration — much cheaper than full E2E tests across services.

---

**61. How do you achieve test isolation with a real database?**
- Use Docker (testcontainers) to spin up a fresh DB per test suite.
- Run migrations before tests, truncate tables between tests (faster than re-migrating).
- Never share DB state between parallel test workers.
- Use a separate DB per CI worker.

---

**62. What is mutation testing and when is it useful?**
Mutation testing (Stryker) introduces small code changes ("mutants") and checks if your tests catch them. A mutant that survives means your test suite has a gap. Useful for validating test quality, not just coverage. Run on critical business logic, not the entire codebase — it's slow.

---

## TypeScript in Node.js

**63. What are the benefits of using TypeScript with Node.js in a team environment?**
Type safety catches bugs at compile time, IDE autocompletion improves productivity, refactoring is safer, API contracts are explicit (DTOs, interfaces), and onboarding is faster with self-documenting code. The cost is build step complexity and type overhead.

---

**64. What is the difference between `interface` and `type` in TypeScript?**
Both describe shapes. `interface` is extendable (declaration merging, `extends`), better for OOP-style contracts. `type` supports unions, intersections, mapped types, and conditional types. For objects, prefer `interface`; for complex type algebra, use `type`.

---

**65. What are generics and give a practical Node.js use case?**
Generics create reusable components parameterized by type:
```ts
async function findById<T>(repo: Repository<T>, id: number): Promise<T | null> {
  return repo.findOneBy({ id } as any);
}
```
Used in repository patterns, service layers, response wrappers, and utility functions.

---

**66. What is the `satisfies` operator in TypeScript?**
`satisfies` validates that a value conforms to a type without widening it. Unlike `as`, it doesn't suppress type errors; unlike explicit annotation, it preserves the narrowest inferred type. Useful for config objects where you want type checking but also want to keep literal types.

---

**67. How do you type Express request with custom properties (e.g., `req.user`)?**
Extend the Express namespace:
```ts
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
```
Place in a `.d.ts` file included in `tsconfig.json`. Then `req.user` is typed throughout the app.

---

**68. What is `zod` and how does it complement TypeScript?**
Zod is a runtime schema validation library that infers TypeScript types from schemas. TypeScript only checks at compile time; Zod validates untrusted runtime data (request bodies, env vars, API responses). Use `z.infer<typeof schema>` to get the TypeScript type automatically.

---

## Databases & ORMs

**69. What is the N+1 query problem and how do you solve it with TypeORM?**
N+1: fetching N records and then issuing a separate query for each record's relation (N extra queries). Solve with eager loading via `relations` option or query builder `.leftJoinAndSelect()`. Use `DataLoader` pattern for batching in GraphQL contexts.

---

**70. What is a database migration strategy for zero-downtime deployments?**
1. Expand: add new columns as nullable (backward compatible).
2. Migrate: backfill data, deploy new code that writes to both old and new.
3. Contract: remove old column once all traffic uses new schema.
Never drop columns or rename in a single deployment — always expand-and-contract.

---

**71. What is connection pool exhaustion and how do you detect and fix it?**
When all pool connections are in use and new requests queue indefinitely, response times spike. Detect with `pool.totalCount`, `pool.waitingCount` metrics. Fix: increase pool size (bounded by DB max connections), optimize slow queries, use read replicas for read traffic, add query timeouts.

---

**72. When would you use a NoSQL database over SQL in a Node.js service?**
- **Document DB (MongoDB)**: flexible schema, nested documents, rapid iteration.
- **Redis**: caching, session storage, pub/sub, rate limiting.
- **Cassandra/DynamoDB**: high-write, time-series, wide-column access patterns.
- **Elasticsearch**: full-text search, log aggregation.
SQL is generally preferred for relational, transactional data with ACID requirements.

---

**73. What are database transactions and how do you use them in TypeORM?**
A transaction groups multiple operations into an atomic unit — all succeed or all roll back:
```ts
await dataSource.transaction(async manager => {
  await manager.save(Order, order);
  await manager.save(Payment, payment);
});
```
Use for operations that must remain consistent together. Keep transactions short to minimize lock contention.

---

## APIs & Communication

**74. What are the trade-offs between REST, GraphQL, and gRPC?**
- **REST**: simple, cacheable, widely understood. Verbose for complex queries, potential over/under-fetching.
- **GraphQL**: flexible querying, single endpoint, great for frontend-driven APIs. Complex caching, N+1 risk, schema overhead.
- **gRPC**: binary protocol, strongly typed, streaming support, low latency. Harder to debug, requires HTTP/2, less browser support.

---

**75. How do you version a REST API?**
- **URL versioning** (`/v1/`, `/v2/`): most visible, easy to route, but clutters URLs.
- **Header versioning** (`Accept: application/vnd.api.v2+json`): cleaner URLs, harder to test in browser.
- **Query param** (`?version=2`): easy but unconventional.
Prefer URL versioning for public APIs. Maintain old versions for a deprecation window with sunset headers.

---

**76. What is OpenAPI/Swagger and how do you keep it in sync with a Node.js API?**
OpenAPI is a spec for describing REST APIs. Keep it in sync by: generating spec from code annotations (tsoa, swagger-jsdoc), or generating code from spec (openapi-generator). Code-first is more maintainable for Node.js teams. Validate requests against the spec at runtime with `express-openapi-validator`.

---

**77. How do you implement webhook reliability (at-least-once delivery)?**
- Persist webhook events to DB before sending.
- Retry on failure with exponential backoff.
- Mark events as `delivered` on HTTP 2xx.
- Expose a replay endpoint for consumers to re-request missed events.
- Use a queue (BullMQ) for the retry worker.

---

**78. What is server-sent events (SSE) vs WebSockets? When do you choose each?**
- **SSE**: server-to-client only, uses plain HTTP, auto-reconnect, simple. Good for live feeds, notifications.
- **WebSockets**: full-duplex, requires upgrade handshake, more complex. Good for chat, collaborative editing, gaming.
For most real-time notification use cases, SSE is simpler and sufficient.

---

## DevOps & Deployment

**79. How do you containerize a Node.js application efficiently with Docker?**
```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
USER node
CMD ["node", "dist/index.js"]
```
Key practices: multi-stage build, `npm ci --omit=dev`, non-root user, `.dockerignore`, pin the base image tag.

---

**80. What is a health check endpoint and what should it check?**
`GET /health` returns `200` if the service can handle traffic. A shallow check returns immediately. A deep check verifies DB connectivity, cache, and critical dependencies. Use shallow for load balancer liveness, deep for readiness. Never expose sensitive info.

---

**81. How do you implement structured logging in Node.js?**
Use `pino` (fastest) or `winston`. Log as JSON with fields: `level`, `timestamp`, `requestId`, `userId`, `message`, `error`. Avoid `console.log` in production. Ship logs to a centralized platform (Datadog, ELK, CloudWatch). Use correlation IDs via `AsyncLocalStorage` to trace requests across log lines.

---

**82. What is `AsyncLocalStorage` and how is it used for request context?**
`AsyncLocalStorage` (Node 12.17+) provides a context store that flows through async operations without explicitly passing it:
```js
const store = new AsyncLocalStorage();
app.use((req, res, next) => {
  store.run({ requestId: uuid() }, next);
});
// Anywhere in the call chain:
const { requestId } = store.getStore();
```
Used for logging, tracing, and per-request caching without prop drilling.

---

**83. How do you manage configuration across environments (dev, staging, prod)?**
- Environment variables as the source of truth (12-Factor).
- `.env` files locally (never committed), loaded with `dotenv`.
- Validate all config at startup with `zod` or `envalid` — fail fast on missing required vars.
- Secrets injected at runtime from a secrets manager, not `.env` in prod.

---

**84. What is blue-green deployment and how does it reduce Node.js deployment risk?**
Maintain two identical environments (blue = live, green = new version). Deploy to green, run smoke tests, switch the load balancer to green. Blue becomes the rollback target. Eliminates downtime and provides instant rollback. Requires double infrastructure, managed by Kubernetes or cloud provider tooling.

---

**85. How do you implement distributed tracing in a Node.js microservices architecture?**
Use OpenTelemetry SDK: instrument HTTP clients, DB calls, and message consumers. Export traces to Jaeger, Zipkin, or Datadog. Propagate `traceparent` headers across service boundaries. Each span captures timing, errors, and attributes. Essential for diagnosing latency in multi-hop request chains.

---

## Advanced Topics

**86. What are native addons (N-API) and when would you write one?**
N-API addons are C/C++ modules compiled to `.node` files, loaded with `require`. Use when: a critical algorithm has no efficient JS implementation, you need to integrate a native library, or you need performance beyond what V8 can optimize. N-API is ABI-stable across Node.js versions (unlike older NAN).

---

**87. What is the `vm` module and what are its security implications?**
`vm.runInNewContext()` executes code in an isolated V8 context. It is NOT a security sandbox — crafted code can escape via prototype chains or shared references. Never use `vm` to safely execute untrusted user code. Use isolated processes, `--experimental-vm-modules`, or purpose-built sandboxes (isolated-vm).

---

**88. How does Node.js handle DNS resolution and what are common pitfalls?**
By default, `dns.lookup()` uses the OS resolver (synchronous, uses libuv thread pool, affected by `/etc/hosts`). `dns.resolve()` uses Node's built-in async DNS. Pitfall: DNS caching is controlled by TTL but many apps cache indefinitely — leads to stale IPs after failover. Use `lookup` for hostname resolution, `resolve` for explicit DNS queries.

---

**89. What is `--experimental-permission` (Permission Model) in Node.js?**
Introduced in Node 20, the Permission Model (`--experimental-permission`) restricts what the process can access: `--allow-fs-read`, `--allow-fs-write`, `--allow-child-process`, `--allow-worker`, `--allow-net`. Hardens production deployments by applying least-privilege principles at the runtime level.

---

**90. What is WASM in Node.js and what are its use cases?**
WebAssembly modules can be loaded and executed in Node.js via the WebAssembly global. Use cases: running performance-critical algorithms (cryptography, image processing, parsers) compiled from C/C++/Rust without writing native addons. WASM is sandboxed and portable but has limited Node.js API access without WASI.

---

## Tech Lead / System Design

**91. How do you evaluate whether to adopt a new framework or library?**
Criteria: maturity and community size, maintenance activity (last commit, issue response time), security track record, bundle/runtime cost, migration cost from current solution, team learning curve, license compatibility. Always prototype before committing. Prefer boring technology for infrastructure.

---

**92. How do you manage technical debt in a fast-moving Node.js project?**
- Track debt explicitly in a debt register (Jira, ADR).
- Allocate a fixed percentage of each sprint (20%) to debt reduction.
- Set quality gates: test coverage floor, complexity thresholds in CI.
- Never let debt become a blocker — prioritize by risk and impact.
- Write Architecture Decision Records (ADRs) to capture why decisions were made.

---

**93. How do you design an on-call runbook for a Node.js service?**
Include: service overview, critical dependencies, how to check health/metrics, common failure modes and their symptoms, step-by-step remediation for each, rollback procedure, escalation contacts, and links to dashboards. Keep it short enough to read under pressure. Runbooks rot — review after every incident.

---

**94. What is the 12-Factor App methodology and how does it apply to Node.js?**
12 factors: Codebase, Dependencies (package.json/lockfile), Config (env vars), Backing services (URLs in env), Build/release/run separation, Stateless processes, Port binding, Concurrency (cluster/containers), Disposability (fast start/graceful shutdown), Dev/prod parity, Logs (stdout streams), Admin processes. Node.js naturally fits most factors.

---

**95. How do you design a rate limiting system that works across multiple Node.js instances?**
Use a Redis-backed sliding window counter:
1. On each request, `ZADD` current timestamp to a sorted set keyed by `rate:<userId>`.
2. `ZREMRANGEBYSCORE` to remove entries older than the window.
3. `ZCARD` to get current count.
4. If count >= limit, reject.
Use a Lua script to make steps atomic. Libraries: `rate-limiter-flexible`.

---

**96. How do you approach API backward compatibility when making breaking changes?**
- Add new fields alongside old ones (additive changes are safe).
- Never remove or rename fields in the same version.
- Introduce a new API version for breaking changes.
- Provide a deprecation notice (header + docs) with a sunset date.
- Monitor old-version traffic to know when it's safe to retire.
- Use consumer-driven contract tests to detect breaks early.

---

**97. How do you handle multi-tenancy in a Node.js API?**
Options:
- **Schema-per-tenant** (PostgreSQL schemas): strong isolation, complex migrations.
- **Row-level isolation** (tenant_id column): simpler, requires row-level security or query filters in every query.
- **Database-per-tenant**: strongest isolation, expensive.
Middleware resolves tenant from subdomain/header/JWT claim. Inject `tenantId` into all DB queries via `AsyncLocalStorage` or TypeORM subscriber.

---

**98. What metrics should a Node.js service expose for observability?**
- **RED**: Request rate, Error rate, Duration (latency).
- **USE**: Utilization, Saturation, Errors (for infrastructure).
- Custom: event loop lag, active handles, heap used, GC pause duration, DB pool wait time, queue depth.
Expose via `/metrics` (Prometheus format) using `prom-client`. Dashboard in Grafana.

---

**99. How do you handle schema evolution in an event-driven Node.js system?**
- Use a schema registry (Confluent Schema Registry for Kafka, or custom) to version event schemas.
- Follow compatibility rules: backward-compatible changes (add optional fields), no field removal.
- Consumers must handle unknown fields gracefully (tolerate future versions).
- Use Avro or Protobuf for strong schema contracts; avoid plain JSON for long-lived events.

---

**100. As a Tech Lead, how do you balance shipping speed with code quality?**
Define and automate quality gates (linting, type checking, test coverage, security scan) in CI so they don't require manual policing. Keep PRs small and reviewed within 24 hours. Invest in developer tooling (fast local setup, good test fixtures) so quality doesn't slow the team. Reserve architectural discussions for ADRs, not PR comments. Distinguish between "quick and correct" and "quick and hacky" — only accept the latter consciously, with a tracked ticket to fix it.
