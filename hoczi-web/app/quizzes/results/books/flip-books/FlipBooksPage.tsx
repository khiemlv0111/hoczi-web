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
        <div className="book-detail-page flex flex-col bg-gray-900" style={{ height: '100dvh' }}>

            {/* Loading state */}
            {loading && (
                <div className="flex flex-1 flex-col items-center justify-center gap-4">
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
            {error && (
                <div className="flex flex-1 items-center justify-center">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            {/* Flip book */}
            {!loading && !error && pages.length > 0 && (
                <>
                    {/* Book area fills remaining height */}
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                        <HTMLFlipBook
                            ref={flipRef}
                            width={550}
                            height={733}
                            size="stretch"
                            minWidth={300}
                            maxWidth={900}
                            minHeight={400}
                            maxHeight={1200}
                            startPage={0}
                            drawShadow={true}
                            flippingTime={700}
                            usePortrait={false}
                            startZIndex={0}
                            autoSize={true}
                            maxShadowOpacity={0.5}
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
                                        style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
                                    />
                                </div>
                            ))}
                        </HTMLFlipBook>
                    </div>

                    {/* Bottom nav bar */}
                    <div className="flex-shrink-0 flex items-center justify-center gap-4 bg-gray-800 py-2">
                        <button
                            onClick={() => flipRef.current?.pageFlip().flipPrev()}
                            disabled={!canPrev}
                            className="px-5 py-1.5 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 disabled:opacity-30 transition-colors"
                        >
                            ← Prev
                        </button>
                        <span className="text-gray-400 text-sm min-w-[90px] text-center">
                            {currentPage + 1}–{Math.min(currentPage + 2, pages.length)} / {pages.length}
                        </span>
                        <button
                            onClick={() => flipRef.current?.pageFlip().flipNext()}
                            disabled={!canNext}
                            className="px-5 py-1.5 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 disabled:opacity-30 transition-colors"
                        >
                            Next →
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
