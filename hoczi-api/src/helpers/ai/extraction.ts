import crypto from 'crypto';
import { PDFDocument } from 'pdf-lib';
import { aiConfig } from '../../config/ai';
import { getOpenAI } from './openaiClient';
import { OCR_INSTRUCTIONS, PROMPT_VERSIONS } from './prompts';
import { recordUsage } from './usage';
import { errorCode } from './errors';

// Import the library file directly: the package entry runs a debug self-test when required.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pdfParse: typeof import('pdf-parse') = require('pdf-parse/lib/pdf-parse.js');

export const SUPPORTED_EXTENSIONS: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.md': 'text/markdown',
    '.txt': 'text/plain',
};

export type SourceFormat = 'pdf' | 'text';

export type ExtractedPage = { page: number | null; text: string; ocr?: boolean };

export type ExtractionReport = {
    format: SourceFormat;
    totalPages: number | null;
    lowTextPages: number[];
    ocrPages: number[];
    ocrFailedPages: number[];
    totalChars: number;
    replacementCharRatio: number;
};

export class ExtractionError extends Error {
    constructor(message: string, public report?: Partial<ExtractionReport>) {
        super(message);
    }
}

export function sha256(data: Buffer | string) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

export function extensionOf(filename: string) {
    const match = /\.[a-z0-9]+$/i.exec(filename);
    return match ? match[0].toLowerCase() : '';
}

// Decide the format from the bytes, not from the filename or browser MIME type.
export function detectFormat(buffer: Buffer, filename: string): SourceFormat {
    const ext = extensionOf(filename);
    if (buffer.subarray(0, 5).toString('latin1') === '%PDF-') {
        if (ext !== '.pdf') throw new ExtractionError(`File content is a PDF but the name ends with "${ext}"`);
        return 'pdf';
    }
    if (ext === '.txt' || ext === '.md') {
        try {
            new TextDecoder('utf-8', { fatal: true }).decode(buffer);
        } catch {
            throw new ExtractionError('Text file is not valid UTF-8');
        }
        if (buffer.includes(0)) throw new ExtractionError('Text file contains binary data');
        return 'text';
    }
    throw new ExtractionError(`Unsupported file content for "${filename}". Supported: ${Object.keys(SUPPORTED_EXTENSIONS).join(', ')}`);
}

async function extractPdfPages(buffer: Buffer): Promise<ExtractedPage[]> {
    const byPage = new Map<number, string>();
    // Pass a standalone copy: pdf.js ignores byteOffset, and small Node Buffers live inside a
    // shared memory pool, so it would read the wrong bytes ("Invalid PDF structure").
    const standalone = new Uint8Array(buffer);
    const result = await pdfParse(standalone as Buffer, {
        pagerender: async (pageData: any) => {
            const content = await pageData.getTextContent({ normalizeWhitespace: false, disableCombineTextItems: false });
            let lastY: number | undefined;
            let text = '';
            for (const item of content.items) {
                const y = item.transform?.[5];
                if (lastY !== undefined && y !== lastY) text += '\n';
                text += item.str;
                lastY = y;
            }
            byPage.set(pageData.pageNumber, text.trim());
            return '';
        },
    });
    // A page that fails to load or render never reaches pagerender: keep it as an empty page
    // so numbering stays correct and it is picked up as a low-text (OCR) page.
    const pages: ExtractedPage[] = [];
    for (let n = 1; n <= result.numpages; n++) {
        pages.push({ page: n, text: byPage.get(n) ?? '' });
    }
    return pages;
}

// Text files may already carry "[page N]" markers (e.g. hand-corrected OCR output).
function extractTextPages(buffer: Buffer): ExtractedPage[] {
    const text = buffer.toString('utf-8').replace(/\r\n/g, '\n');
    const marker = /^\[page (\d+)\]\s*$/gim;
    const matches = [...text.matchAll(marker)];
    if (!matches.length) return [{ page: null, text: text.trim() }];

    const pages: ExtractedPage[] = [];
    matches.forEach((m, i) => {
        const start = (m.index ?? 0) + m[0].length;
        const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
        pages.push({ page: Number(m[1]), text: text.slice(start, end).trim() });
    });
    return pages;
}

async function ocrPdfPage(source: PDFDocument, pageNumber: number, uploaderId: number | null, tenantId: number | null) {
    const single = await PDFDocument.create();
    const [copied] = await single.copyPages(source, [pageNumber - 1]);
    single.addPage(copied);
    const base64 = Buffer.from(await single.save()).toString('base64');

    const model = aiConfig.openai.ocrModel;
    const started = Date.now();
    try {
        const response = await getOpenAI().responses.create({
            model,
            instructions: OCR_INSTRUCTIONS,
            input: [{
                role: 'user',
                content: [{ type: 'input_file', filename: `page-${pageNumber}.pdf`, file_data: `data:application/pdf;base64,${base64}` }],
            }],
            max_output_tokens: 4000,
            store: false,
        });
        await recordUsage({
            userId: uploaderId, tenantId, operation: 'ocr', provider: 'openai', model,
            promptVersion: PROMPT_VERSIONS.ocr, inputTokens: response.usage?.input_tokens,
            outputTokens: response.usage?.output_tokens, latencyMs: Date.now() - started,
            outcome: 'success', providerRequestId: response.id,
        });
        return response.output_text.trim();
    } catch (error) {
        await recordUsage({
            userId: uploaderId, tenantId, operation: 'ocr', provider: 'openai', model,
            promptVersion: PROMPT_VERSIONS.ocr, latencyMs: Date.now() - started,
            outcome: 'error', errorCode: errorCode(error),
        });
        throw error;
    }
}

function replacementRatio(text: string) {
    if (!text.length) return 0;
    const bad = (text.match(/�/g) ?? []).length;
    return bad / text.length;
}

export async function extractDocument(
    buffer: Buffer,
    filename: string,
    ctx: { uploaderId: number | null; tenantId: number | null },
): Promise<{ pages: ExtractedPage[]; report: ExtractionReport }> {
    const cfg = aiConfig.ingestion;
    const format = detectFormat(buffer, filename);
    const pages = format === 'pdf' ? await extractPdfPages(buffer) : extractTextPages(buffer);

    const lowTextPages = pages
        .filter((p) => p.page !== null && p.text.replace(/\s/g, '').length < cfg.minCharsPerPage)
        .map((p) => p.page as number);
    const ocrPages: number[] = [];
    const ocrFailedPages: number[] = [];

    if (format === 'pdf' && lowTextPages.length) {
        if (!cfg.ocrEnabled) {
            throw new ExtractionError(
                `${lowTextPages.length} page(s) have no usable text layer (pages ${summarizePages(lowTextPages)}). `
                + 'This looks like a scan: enable AI_OCR_ENABLED, or upload the extracted text as .md/.txt with "[page N]" markers.',
                { format, totalPages: pages.length, lowTextPages },
            );
        }
        if (lowTextPages.length > cfg.ocrMaxPages) {
            throw new ExtractionError(`OCR needed for ${lowTextPages.length} pages, above AI_OCR_MAX_PAGES (${cfg.ocrMaxPages})`);
        }
        const source = await PDFDocument.load(buffer, { ignoreEncryption: false });
        for (const pageNumber of lowTextPages) {
            const page = pages.find((p) => p.page === pageNumber)!;
            // Transient provider errors propagate so the whole job is retried later.
            const text = await ocrPdfPage(source, pageNumber, ctx.uploaderId, ctx.tenantId);
            if (text.replace(/\s/g, '').length >= cfg.minCharsPerPage) {
                page.text = text;
                page.ocr = true;
                ocrPages.push(pageNumber);
            } else {
                ocrFailedPages.push(pageNumber);
            }
        }
    }

    const allText = pages.map((p) => p.text).join('\n');
    const report: ExtractionReport = {
        format,
        totalPages: format === 'pdf' ? pages.length : (pages[0]?.page === null ? null : pages.length),
        lowTextPages,
        ocrPages,
        ocrFailedPages,
        totalChars: allText.length,
        replacementCharRatio: Number(replacementRatio(allText).toFixed(4)),
    };

    if (!allText.replace(/\s/g, '').length) {
        throw new ExtractionError('No text could be extracted from the file', report);
    }
    if (report.replacementCharRatio > cfg.maxReplacementCharRatio) {
        throw new ExtractionError(
            `Extracted text looks corrupt (${(report.replacementCharRatio * 100).toFixed(1)}% unreadable characters). `
            + 'Upload a corrected .md/.txt version.',
            report,
        );
    }
    // Pages left blank after OCR are allowed (covers, blank pages) but reported for review.
    return { pages, report };
}

export function summarizePages(pages: number[]) {
    if (pages.length <= 12) return pages.join(', ');
    return `${pages.slice(0, 12).join(', ')} … (+${pages.length - 12})`;
}

export type ChunkDraft = {
    index: number;
    pageStart: number | null;
    pageEnd: number | null;
    body: string;
};

// Group pages (PDF) or paragraphs (unpaged text) into chunk files with [page N] markers.
export function buildChunks(pages: ExtractedPage[]): ChunkDraft[] {
    const cfg = aiConfig.ingestion;
    const chunks: ChunkDraft[] = [];
    const usable = pages.filter((p) => p.text.trim().length);

    if (usable.length === 1 && usable[0].page === null) {
        let buffer = '';
        for (const para of usable[0].text.split(/\n{2,}/)) {
            if (buffer && buffer.length + para.length > cfg.textCharsPerChunk) {
                chunks.push({ index: chunks.length, pageStart: null, pageEnd: null, body: buffer.trim() });
                buffer = '';
            }
            buffer += `${para}\n\n`;
        }
        if (buffer.trim()) chunks.push({ index: chunks.length, pageStart: null, pageEnd: null, body: buffer.trim() });
        return chunks;
    }

    for (let i = 0; i < usable.length; i += cfg.pagesPerChunk) {
        const group = usable.slice(i, i + cfg.pagesPerChunk);
        chunks.push({
            index: chunks.length,
            pageStart: group[0].page,
            pageEnd: group[group.length - 1].page,
            body: group.map((p) => `[page ${p.page}]\n${p.text}`).join('\n\n'),
        });
    }
    return chunks;
}

// Header the model is told to cite from (see prompts.ts).
export function chunkFileContent(documentId: string, title: string, pageStart: number | null, pageEnd: number | null, body: string) {
    const pages = pageStart !== null ? ` | pages ${pageStart}-${pageEnd}` : '';
    return `SOURCE documentId=${documentId} | title=${title.replace(/\s+/g, ' ')}${pages}\n\n${body}\n`;
}
