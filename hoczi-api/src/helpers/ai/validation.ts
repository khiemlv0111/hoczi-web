import { RetrievedChunk } from './retrieval';

export type Citation = { documentId: string; page: number | null; section: string | null };

function citationIsSupported(c: Citation, retrieved: RetrievedChunk[]) {
    return retrieved.some((r) => {
        if (r.documentId !== c.documentId) return false;
        if (c.page === null || c.page === undefined) return true;
        if (r.pageStart === null || r.pageEnd === null) return false;
        return c.page >= r.pageStart && c.page <= r.pageEnd;
    });
}

// Model-written citations are claims. Keep only those matching a retrieved chunk.
export function filterCitations(citations: Citation[] | undefined, retrieved: RetrievedChunk[]) {
    const valid: Citation[] = [];
    const rejected: Citation[] = [];
    for (const c of citations ?? []) {
        (citationIsSupported(c, retrieved) ? valid : rejected).push(c);
    }
    return { valid, rejected };
}

function validateItem(item: any, index: number): string[] {
    const label = `Item ${index + 1}`;
    const issues: string[] = [];
    const options: string[] = Array.isArray(item.options) ? item.options : [];

    if (!item.prompt?.trim()) issues.push(`${label}: empty prompt`);
    if (!item.explanation?.trim()) issues.push(`${label}: missing explanation`);

    switch (item.type) {
        case 'multiple_choice':
        case 'true_false': {
            const min = item.type === 'true_false' ? 2 : 3;
            if (options.length < min) issues.push(`${label}: needs at least ${min} options`);
            const idx = item.correctOptionIndex;
            if (typeof idx !== 'number' || idx < 0 || idx >= options.length) {
                issues.push(`${label}: correctOptionIndex does not point to an option`);
            }
            if (new Set(options.map((o) => o.trim())).size !== options.length) {
                issues.push(`${label}: duplicate options`);
            }
            break;
        }
        case 'fill_in_blank':
            if (!item.correctAnswer?.trim()) issues.push(`${label}: missing correctAnswer`);
            break;
        case 'sentence_ordering': {
            const order: number[] = Array.isArray(item.correctOrder) ? item.correctOrder : [];
            const isPermutation = order.length === options.length
                && [...order].sort((a, b) => a - b).every((v, i) => v === i);
            if (options.length < 2 || !isPermutation) {
                issues.push(`${label}: correctOrder must list every segment exactly once`);
            }
            break;
        }
        default:
            issues.push(`${label}: unknown type "${item.type}"`);
    }
    return issues;
}

export type ValidationResult = {
    issues: string[];
    citations: Citation[];
};

// Mutates `output`: unsupported citations are removed so reviewers only see verifiable ones.
export function validateGeneration(
    output: any,
    retrieved: RetrievedChunk[],
    expected: { hskStandard: string; hskLevel: number; script: string; itemCount?: number },
): ValidationResult {
    const issues: string[] = [];

    if (output.hskStandard !== expected.hskStandard || output.hskLevel !== expected.hskLevel) {
        issues.push(`Output level ${output.hskStandard} ${output.hskLevel} does not match the request (${expected.hskStandard} ${expected.hskLevel})`);
    }
    if (output.script !== expected.script) {
        issues.push(`Output script "${output.script}" does not match the request ("${expected.script}")`);
    }
    if (!retrieved.length) {
        issues.push('No source passages were retrieved for this scope');
    }

    const top = filterCitations(output.citations, retrieved);
    output.citations = top.valid;
    if (top.rejected.length) {
        issues.push(`${top.rejected.length} citation(s) removed: not found in retrieved sources (${top.rejected.map((c) => `${c.documentId}${c.page ? ` p.${c.page}` : ''}`).join(', ')})`);
    }

    const items: any[] = Array.isArray(output.items) ? output.items : [];
    if (output.insufficientEvidence) {
        if (items.length) issues.push('Model reported insufficient evidence but still returned items');
    } else if (expected.itemCount && items.length !== expected.itemCount) {
        issues.push(`Expected ${expected.itemCount} items, got ${items.length}`);
    }

    const allCitations = [...top.valid];
    items.forEach((item, i) => {
        issues.push(...validateItem(item, i));
        const res = filterCitations(item.citations, retrieved);
        item.citations = res.valid;
        allCitations.push(...res.valid);
        if (!res.valid.length) issues.push(`Item ${i + 1}: no verifiable citation`);
    });

    const unique = new Map(allCitations.map((c) => [`${c.documentId}|${c.page}|${c.section}`, c]));
    return { issues, citations: [...unique.values()] };
}
