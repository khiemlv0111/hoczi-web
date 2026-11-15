import { BadRequestError } from '../errors/api-erros';
import { escapeHtml } from './emailLayout';

/**
 * Rich text for admin emails. The web editor (TipTap) sends its JSON document; we never accept HTML.
 * validateRichDoc() keeps only allow-listed nodes/marks/attributes and returns a clean copy;
 * renderRichHtml()/renderRichText() build the email body from that clean copy, escaping all text.
 */

export type RichMark =
    | { type: 'bold' | 'italic' | 'underline' | 'strike' }
    | { type: 'link'; attrs: { href: string } };

export type RichNode = {
    type: string;
    content?: RichNode[];
    text?: string;
    marks?: RichMark[];
    attrs?: Record<string, number | string>;
};

export const RICH_TEXT_MAX_CHARS = 20_000;
const MAX_DEPTH = 10;
const MAX_NODES = 5_000;
const MAX_HREF = 2_000;

const INLINE = ['text', 'hardBreak'];
const BLOCK = ['paragraph', 'heading', 'bulletList', 'orderedList', 'blockquote', 'horizontalRule'];

// Which children each node may contain
const CHILDREN: Record<string, string[]> = {
    doc: BLOCK,
    paragraph: INLINE,
    heading: INLINE,
    bulletList: ['listItem'],
    orderedList: ['listItem'],
    listItem: ['paragraph', 'bulletList', 'orderedList', 'blockquote'],
    blockquote: ['paragraph', 'heading', 'bulletList', 'orderedList'],
    horizontalRule: [],
    hardBreak: [],
    text: [],
};

const SIMPLE_MARKS = ['bold', 'italic', 'underline', 'strike'];
const LINK_PROTOCOLS = ['http:', 'https:', 'mailto:'];

function fail(message: string): never {
    throw new BadRequestError(`Invalid content: ${message}`);
}

function cleanHref(value: unknown): string {
    if (typeof value !== 'string' || !value.trim() || value.length > MAX_HREF) fail('link address is missing or too long');
    const href = value.trim();
    let url: URL;
    try {
        url = new URL(href);
    } catch {
        fail(`link "${href.slice(0, 100)}" is not a valid absolute URL`);
    }
    if (!LINK_PROTOCOLS.includes(url.protocol)) fail('links must start with http://, https:// or mailto:');
    return href;
}

function cleanMarks(marks: unknown): RichMark[] | undefined {
    if (marks === undefined) return undefined;
    if (!Array.isArray(marks)) fail('marks must be a list');
    const out: RichMark[] = [];
    for (const m of marks) {
        const type = (m as any)?.type;
        if (SIMPLE_MARKS.includes(type)) out.push({ type });
        else if (type === 'link') out.push({ type: 'link', attrs: { href: cleanHref((m as any)?.attrs?.href) } });
        else fail(`formatting "${String(type).slice(0, 40)}" is not allowed`);
    }
    return out.length ? out : undefined;
}

export function validateRichDoc(input: unknown): RichNode {
    let nodes = 0;
    let chars = 0;

    const walk = (raw: unknown, parent: string | null, depth: number): RichNode => {
        if (depth > MAX_DEPTH) fail('content is nested too deeply');
        if (++nodes > MAX_NODES) fail('content is too large');
        if (!raw || typeof raw !== 'object' || Array.isArray(raw)) fail('malformed document');
        const type = (raw as any).type;
        if (typeof type !== 'string' || !(type in CHILDREN)) fail(`element "${String(type).slice(0, 40)}" is not allowed`);
        if (parent === null ? type !== 'doc' : !CHILDREN[parent].includes(type)) {
            fail(`"${type}" is not allowed inside "${parent ?? 'root'}"`);
        }

        const node: RichNode = { type };
        if (type === 'text') {
            const text = (raw as any).text;
            if (typeof text !== 'string' || !text.length) fail('empty text node');
            chars += text.length;
            node.text = text;
            const marks = cleanMarks((raw as any).marks);
            if (marks) node.marks = marks;
            return node;
        }
        if (type === 'heading') {
            const level = Number((raw as any).attrs?.level);
            if (level !== 2 && level !== 3) fail('only heading levels 2 and 3 are allowed');
            node.attrs = { level };
        }
        if (type === 'orderedList') {
            const start = Number((raw as any).attrs?.start ?? 1);
            node.attrs = { start: Number.isInteger(start) && start >= 1 && start <= 10_000 ? start : 1 };
        }
        const content = (raw as any).content;
        if (content !== undefined) {
            if (!Array.isArray(content)) fail('content must be a list');
            if (!CHILDREN[type].length && content.length) fail(`"${type}" cannot contain other elements`);
            node.content = content.map((child: unknown) => walk(child, type, depth + 1));
        }
        return node;
    };

    const doc = walk(input, null, 0);
    if (chars > RICH_TEXT_MAX_CHARS) fail(`text is longer than ${RICH_TEXT_MAX_CHARS} characters`);
    if (!renderRichText(doc).trim()) fail('content is empty');
    return doc;
}

// ------------------------------------------------------------------ HTML

const STYLE = {
    p: 'margin:0 0 12px;',
    h2: 'font-size:20px;line-height:1.35;margin:20px 0 10px;',
    h3: 'font-size:17px;line-height:1.35;margin:16px 0 8px;',
    list: 'margin:0 0 12px;padding-left:24px;',
    li: 'margin:0 0 4px;',
    blockquote: 'margin:0 0 12px;padding:4px 0 4px 14px;border-left:4px solid #d4d4d8;color:#52525b;',
    hr: 'border:none;border-top:1px solid #e4e4e7;margin:16px 0;',
    a: 'color:#2563eb;text-decoration:underline;',
};

function renderText(node: RichNode) {
    let html = escapeHtml(node.text ?? '');
    let href: string | null = null;
    for (const mark of node.marks ?? []) {
        if (mark.type === 'bold') html = `<strong>${html}</strong>`;
        else if (mark.type === 'italic') html = `<em>${html}</em>`;
        else if (mark.type === 'underline') html = `<u>${html}</u>`;
        else if (mark.type === 'strike') html = `<s>${html}</s>`;
        else if (mark.type === 'link') href = mark.attrs.href;
    }
    return href
        ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" style="${STYLE.a}">${html}</a>`
        : html;
}

function renderHtmlNode(node: RichNode): string {
    const inner = () => (node.content ?? []).map(renderHtmlNode).join('');
    switch (node.type) {
        case 'doc': return inner();
        case 'text': return renderText(node);
        case 'hardBreak': return '<br>';
        case 'horizontalRule': return `<hr style="${STYLE.hr}">`;
        case 'paragraph': return `<p style="${STYLE.p}">${inner() || '&nbsp;'}</p>`;
        case 'heading': {
            const tag = node.attrs?.level === 3 ? 'h3' : 'h2';
            return `<${tag} style="${STYLE[tag]}">${inner()}</${tag}>`;
        }
        case 'bulletList': return `<ul style="${STYLE.list}">${inner()}</ul>`;
        case 'orderedList': {
            const start = Number(node.attrs?.start ?? 1);
            return `<ol style="${STYLE.list}"${start > 1 ? ` start="${start}"` : ''}>${inner()}</ol>`;
        }
        // Paragraph margins inside list items look too loose in email clients
        case 'listItem': return `<li style="${STYLE.li}">${inner().replace(new RegExp(`<p style="${STYLE.p}">`, 'g'), '<p style="margin:0;">')}</li>`;
        case 'blockquote': return `<blockquote style="${STYLE.blockquote}">${inner()}</blockquote>`;
        default: return '';
    }
}

// Input must come from validateRichDoc().
export function renderRichHtml(doc: RichNode) {
    return renderHtmlNode(doc);
}

// ------------------------------------------------------------------ text

function inlineText(nodes: RichNode[] = []) {
    return nodes.map((n) => {
        if (n.type === 'hardBreak') return '\n';
        const text = n.text ?? '';
        const link = n.marks?.find((m) => m.type === 'link') as { attrs: { href: string } } | undefined;
        if (!link) return text;
        const href = link.attrs.href.replace(/^mailto:/, '');
        return text.trim() === href ? text : `${text} (${link.attrs.href})`;
    }).join('');
}

function blockText(node: RichNode, prefix = ''): string[] {
    switch (node.type) {
        case 'paragraph':
        case 'heading':
            return [prefix + inlineText(node.content).replace(/\n/g, `\n${prefix}`)];
        case 'horizontalRule':
            return [prefix + '----------'];
        case 'blockquote':
            return (node.content ?? []).flatMap((c) => blockText(c, `${prefix}> `));
        case 'bulletList':
        case 'orderedList': {
            const start = Number(node.attrs?.start ?? 1);
            return (node.content ?? []).flatMap((item, i) => {
                const bullet = node.type === 'bulletList' ? '- ' : `${start + i}. `;
                const lines = (item.content ?? []).flatMap((c) => blockText(c, ''));
                return lines.map((line, j) => prefix + (j === 0 ? bullet : ' '.repeat(bullet.length)) + line.replace(/\n/g, `\n${prefix}${' '.repeat(bullet.length)}`));
            });
        }
        default:
            return [];
    }
}

export function renderRichText(doc: RichNode) {
    return (doc.content ?? []).flatMap((block) => blockText(block)).join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}
