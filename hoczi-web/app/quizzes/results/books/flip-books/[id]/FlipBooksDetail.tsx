'use client'

import { BookService } from "@/data/services/book.service";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";

const PDFJS_VERSION = '3.11.174';
const RENDER_SCALE = 1.5;

declare global { interface Window { pdfjsLib: any } }

export function FlipBookDetailPage({id}: {id: number}) {
    const [bookUrl, setBookUrl] = useState('');
    const [pages, setPages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [renderProgress, setRenderProgress] = useState(0);
    const [zoom, setZoom] = useState(1.0);
    const [pageInput, setPageInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const flipRef = useRef<any>(null);

    // Step 1: fetch book detail to get book_url
    useEffect(() => {
        BookService.getBookDetail(id)
            .then((res) => {
                const data = res?.data ?? res;
                setBookUrl(data.book_url);
            })
            .catch(() => { setError('Failed to load book.'); setLoading(false); });
    }, []);

    // Step 2: once bookUrl is ready, load PDF.js then render pages
    useEffect(() => {
        if (!bookUrl) return;

        const existing = document.getElementById('pdfjs-script');
        if (existing && window.pdfjsLib) { renderPdf(bookUrl); return; }

        const script = document.createElement('script');
        script.id = 'pdfjs-script';
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
        script.onload = () => renderPdf(bookUrl);
        script.onerror = () => { setError('Failed to load PDF viewer.'); setLoading(false); };
        document.head.appendChild(script);
    }, [bookUrl]);

    async function renderPdf(url: string) {
        const lib = window.pdfjsLib;
        if (!lib) { setError('PDF library unavailable.'); setLoading(false); return; }
        lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

        try {
            const doc = await lib.getDocument({ url }).promise;
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

    function zoomIn() { setZoom((z) => Math.min(2.0, +(z + 0.1).toFixed(1))); }
    function zoomOut() { setZoom((z) => Math.max(0.5, +(z - 0.1).toFixed(1))); }

    function handlePageJump(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key !== 'Enter') return;
        const p = parseInt(pageInput) - 1;
        if (!isNaN(p) && p >= 0 && p < pages.length) {
            flipRef.current?.pageFlip().flip(p);
        }
        setPageInput('');
    }

    const canPrev = currentPage > 0;
    const canNext = currentPage < pages.length - 1;

    return (
        <div className="book-detail-page flex flex-col bg-gray-900" style={{ height: '100dvh' }}>

            {/* ── Toolbar ── */}
            <div className="flex-shrink-0 flex items-center justify-between gap-3 bg-gray-800 px-4 py-2 text-white text-sm">
                {/* Left: zoom */}
                <div className="flex items-center gap-1">
                    <button onClick={zoomOut} disabled={zoom <= 0.5}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 font-bold text-base transition-colors">
                        −
                    </button>
                    <span className="text-xs text-gray-300 w-10 text-center">{Math.round(zoom * 100)}%</span>
                    <button onClick={zoomIn} disabled={zoom >= 2.0}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 font-bold text-base transition-colors">
                        +
                    </button>
                </div>

                {/* Center: page jump */}
                {!loading && pages.length > 0 && (
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span>Page</span>
                        <input
                            type="number"
                            min={1}
                            max={pages.length}
                            value={pageInput}
                            onChange={(e) => setPageInput(e.target.value)}
                            onKeyDown={handlePageJump}
                            placeholder={String(currentPage + 1)}
                            className="w-14 px-2 py-1 rounded bg-gray-700 text-white text-xs text-center focus:outline-none focus:ring-1 focus:ring-blue-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span>/ {pages.length}</span>
                    </div>
                )}

                {/* Right: page counter */}
                <div className="text-xs text-gray-400 min-w-[90px] text-right">
                    {!loading && pages.length > 0 && (
                        <span>{currentPage + 1}–{Math.min(currentPage + 2, pages.length)} of {pages.length}</span>
                    )}
                </div>
            </div>

            {/* ── Loading ── */}
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

            {/* ── Error ── */}
            {error && (
                <div className="flex flex-1 items-center justify-center">
                    <p className="text-red-400 text-sm">{error}</p>
                </div>
            )}

            {/* ── Book area ── */}
            {!loading && !error && pages.length > 0 && (
                <>
                    <div className="flex-1 overflow-auto flex items-center justify-center">
                        <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.2s', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                    </div>

                    {/* ── Bottom nav ── */}
                    <div className="flex-shrink-0 flex items-center justify-center gap-4 bg-gray-800 py-2">
                        <button
                            onClick={() => flipRef.current?.pageFlip().flipPrev()}
                            disabled={!canPrev}
                            className="px-5 py-1.5 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 disabled:opacity-30 transition-colors"
                        >
                            ← Prev
                        </button>
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
