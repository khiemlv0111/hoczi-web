'use client'

import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";

const PDFJS_VERSION = '3.11.174';
const RENDER_SCALE = 1.5;
const BOOK_URL = 'https://d1y3v0ou093g3m.cloudfront.net/books/f9bb002f-42a9-4009-9f13-3df9e75181cf.pdf';

declare global { interface Window { pdfjsLib: any } }

export function FlipBooksPage() {
    const [pages, setPages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [renderProgress, setRenderProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const flipRef = useRef<any>(null);

    useEffect(() => {
        const existing = document.getElementById('pdfjs-script');
        if (existing && window.pdfjsLib) { renderPdf(); return; }

        const script = document.createElement('script');
        script.id = 'pdfjs-script';
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
        script.onload = () => renderPdf();
        script.onerror = () => { setError('Failed to load PDF viewer.'); setLoading(false); };
        document.head.appendChild(script);
    }, []);

    async function renderPdf() {
        const lib = window.pdfjsLib;
        if (!lib) { setError('PDF library unavailable.'); setLoading(false); return; }
        lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

        try {
            const doc = await lib.getDocument({ url: BOOK_URL }).promise;
            const count: number = doc.numPages;
            setTotalPages(count);

            const rendered: string[] = [];
            for (let i = 1; i <= count; i++) {
                const page = await doc.getPage(i);
                const viewport = page.getViewport({ scale: RENDER_SCALE });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                await page.render({ canvasContext: canvas.getContext('2d')!, viewport }).promise;
                rendered.push(canvas.toDataURL('image/jpeg', 0.85));
                setRenderProgress(i);
            }

            setPages(rendered);
            setLoading(false);
        } catch {
            setError('Failed to render PDF.');
            setLoading(false);
        }
    }

    const canPrev = currentPage > 0;
    const canNext = currentPage < pages.length - 1;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 py-6 px-4">
            {/* Loading state */}
            {loading && (
                <div className="flex flex-col items-center gap-4 mt-24">
                    <p className="text-gray-400 text-sm">
                        {totalPages > 0
                            ? `Rendering pages… ${renderProgress} / ${totalPages}`
                            : 'Loading book…'}
                    </p>
                    {totalPages > 0 && (
                        <div className="w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-150"
                                style={{ width: `${(renderProgress / totalPages) * 100}%` }}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Error state */}
            {error && <p className="text-red-400 text-sm mt-24">{error}</p>}

            {/* Flip book */}
            {!loading && !error && pages.length > 0 && (
                <div className="flex flex-col items-center gap-5">
                    <HTMLFlipBook
                        ref={flipRef}
                        width={420}
                        height={594}
                        size="stretch"
                        minWidth={260}
                        maxWidth={700}
                        minHeight={360}
                        maxHeight={980}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={700}
                        usePortrait={true}
                        startZIndex={0}
                        autoSize={true}
                        maxShadowOpacity={0.4}
                        showCover={true}
                        mobileScrollSupport={false}
                        clickEventForward={true}
                        useMouseEvents={true}
                        swipeDistance={20}
                        showPageCorners={true}
                        disableFlipByClick={false}
                        className=""
                        style={{}}
                        onFlip={(e: any) => setCurrentPage(e.data)}
                    >
                        {pages.map((src, i) => (
                            <div key={i} style={{ background: '#fff', width: '100%', height: '100%' }}>
                                <img
                                    src={src}
                                    alt={`Page ${i + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => flipRef.current?.pageFlip().flipPrev()}
                            disabled={!canPrev}
                            className="px-5 py-2 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 disabled:opacity-30 transition-colors"
                        >
                            ← Prev
                        </button>
                        <span className="text-gray-400 text-sm min-w-[80px] text-center">
                            {currentPage + 1} / {pages.length}
                        </span>
                        <button
                            onClick={() => flipRef.current?.pageFlip().flipNext()}
                            disabled={!canNext}
                            className="px-5 py-2 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 disabled:opacity-30 transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
