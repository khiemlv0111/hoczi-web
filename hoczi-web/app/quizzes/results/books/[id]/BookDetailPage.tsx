'use client'

import { BookService } from "@/data/services/book.service";
import { useEffect, useRef, useState } from "react";

const PDFJS_VERSION = '3.11.174';

declare global {
    interface Window { pdfjsLib: any; }
}

function PageCanvas({ pdf, pageNum, scale }: { pdf: any; pageNum: number; scale: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const renderTask = useRef<any>(null);

    useEffect(() => {
        if (!pdf || !canvasRef.current) return;
        if (pageNum < 1 || pageNum > pdf.numPages) return;

        let cancelled = false;
        pdf.getPage(pageNum).then((page: any) => {
            if (cancelled) return;
            const viewport = page.getViewport({ scale });
            const canvas = canvasRef.current!;
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d')!;

            if (renderTask.current) renderTask.current.cancel();
            renderTask.current = page.render({ canvasContext: ctx, viewport });
            renderTask.current.promise.catch(() => {});
        });

        return () => {
            cancelled = true;
            if (renderTask.current) renderTask.current.cancel();
        };
    }, [pdf, pageNum, scale]);

    return (
        <canvas
            ref={canvasRef}
            className="shadow-md rounded-sm"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
}

type Book = { title: string; book_url: string; cover_image_url?: string };

export function BookDetailPage({id}: {id: number}) {
    const [book, setBook] = useState<Book | null>(null);
    const [bookUrl, setBookUrl] = useState('');
    const [pdf, setPdf] = useState<any>(null);
    const [numPages, setNumPages] = useState(0);
    const [pageNum, setPageNum] = useState(1);
    const [scale, setScale] = useState(1.2);
    const [spread, setSpread] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [pickerOpen, setPickerOpen] = useState(false);

    function goToPage(p: number) {
        setPageNum(p);
        setPickerOpen(false);
    }

    // set spread based on screen width
    useEffect(() => {
        function update() { setSpread(window.innerWidth >= 768); }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // fetch book detail then kick off PDF load
    useEffect(() => {
        BookService.getBookDetail(id)
            .then((res) => {
                const data = res?.data ?? res;
                setBook({ title: data.title, book_url: data.book_url, cover_image_url: data.cover_image_url });
                setBookUrl(data.book_url);
            })
            .catch(() => { setError('Failed to load book.'); setLoading(false); });
    }, []);

    // load PDF.js then load the document once bookUrl is ready
    useEffect(() => {
        if (!bookUrl) return;

        const existing = document.getElementById('pdfjs-script');
        if (existing && window.pdfjsLib) { loadPdf(bookUrl); return; }

        const script = document.createElement('script');
        script.id = 'pdfjs-script';
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
        script.onload = () => loadPdf(bookUrl);
        script.onerror = () => { setError('Failed to load PDF viewer.'); setLoading(false); };
        document.head.appendChild(script);
    }, [bookUrl]);

    function loadPdf(url: string) {
        const lib = window.pdfjsLib;
        if (!lib) { setError('PDF library unavailable.'); setLoading(false); return; }
        lib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

        lib.getDocument({ url }).promise
            .then((doc: any) => {
                setPdf(doc);
                setNumPages(doc.numPages);
                setLoading(false);
            })
            .catch(() => { setError('Failed to load PDF.'); setLoading(false); });
    }

    const step = spread ? 2 : 1;
    const canPrev = pageNum > 1;
    const canNext = spread ? pageNum + 1 < numPages : pageNum < numPages;

    function prev() { setPageNum((p) => Math.max(1, p - step)); }
    function next() { setPageNum((p) => Math.min(numPages, p + step)); }
    function zoomIn() { setScale((s) => Math.min(3, +(s + 0.2).toFixed(1))); }
    function zoomOut() { setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(1))); }

    const rightPage = spread && pageNum + 1 <= numPages ? pageNum + 1 : null;

    return (
        <div className="book-detail-page flex flex-col bg-gray-700 overflow-hidden" style={{ height: '92dvh' }}>
            {/* Toolbar */}
            <div className="flex-shrink-0 flex items-center justify-between gap-3 bg-gray-800 px-4 py-2 text-white text-sm">
                {/* Left: title + page info + picker toggle */}
                <div className="flex items-center gap-2 text-gray-300 text-xs min-w-[90px]">
                    {book?.title && (
                        <span className="hidden sm:block text-gray-400 text-[11px] truncate max-w-[160px]" title={book.title}>{book.title}</span>
                    )}
                    <button
                        onClick={() => setPickerOpen((v) => !v)}
                        disabled={loading}
                        title="Jump to page"
                        className={`flex items-center gap-1.5 px-2 py-1 rounded transition-colors disabled:opacity-30 ${pickerOpen ? 'bg-blue-500 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
                    >
                        <span>☰</span>
                        <span>{loading ? '—' : `${pageNum}${rightPage ? `–${rightPage}` : ''} / ${numPages}`}</span>
                    </button>
                </div>

                {/* Center: nav */}
                <div className="flex items-center gap-1">
                    <button onClick={prev} disabled={!canPrev || loading}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 transition-colors text-lg">
                        ‹
                    </button>
                    <button onClick={next} disabled={!canNext || loading}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 transition-colors text-lg">
                        ›
                    </button>
                </div>

                {/* Right: zoom + spread toggle */}
                <div className="flex items-center gap-1 min-w-[160px] justify-end">
                    <button onClick={zoomOut} disabled={scale <= 0.5}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 transition-colors font-bold text-base">
                        −
                    </button>
                    <span className="text-xs text-gray-300 w-10 text-center">{Math.round(scale * 100)}%</span>
                    <button onClick={zoomIn} disabled={scale >= 3}
                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-700 disabled:opacity-30 transition-colors font-bold text-base">
                        +
                    </button>
                    <button
                        onClick={() => setSpread((v) => !v)}
                        title={spread ? 'Single page' : 'Double page'}
                        className={`ml-2 w-8 h-8 flex items-center justify-center rounded transition-colors text-xs font-medium ${spread ? 'bg-blue-500 text-white' : 'hover:bg-gray-700 text-gray-400'}`}
                    >
                        {spread ? '⧉' : '▭'}
                    </button>
                </div>
            </div>

            {/* Page picker panel */}
            {pickerOpen && (
                <div className="flex-shrink-0 bg-gray-900 border-t border-gray-700 overflow-y-auto" style={{ maxHeight: '40%' }}>
                    <div className="p-3 flex flex-wrap gap-1.5">
                        {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => {
                            const isActive = p === pageNum || (rightPage !== null && p === rightPage);
                            return (
                                <button
                                    key={p}
                                    onClick={() => goToPage(p)}
                                    className={`w-9 h-9 text-xs font-medium rounded-lg transition-colors ${
                                        isActive
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                                    }`}
                                >
                                    {p}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Page area — overflow-auto on outer, min-width: max-content on inner fixes the left-clip bug */}
            <div className="flex-1 overflow-auto">
                <div className="flex items-start justify-center p-6" style={{ minWidth: 'max-content' }}>
                    {error ? (
                        <div className="text-red-400 text-sm mt-20">{error}</div>
                    ) : loading ? (
                        <div className="flex gap-4 mt-10">
                            {[0, 1].map((i) => (
                                <div key={i} className="bg-white rounded-sm shadow-md animate-pulse"
                                    style={{ width: 420, height: 594 }} />
                            ))}
                        </div>
                    ) : (
                        <div className="relative">
                            {/* Pages */}
                            <div className="flex gap-0.5 items-start">
                                <PageCanvas pdf={pdf} pageNum={pageNum} scale={scale} />
                                {rightPage && (
                                    <PageCanvas pdf={pdf} pageNum={rightPage} scale={scale} />
                                )}
                            </div>

                            {/* Overlay arrows */}
                            <button
                                onClick={prev} disabled={!canPrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 disabled:opacity-0 transition-all text-xl shadow-lg"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next} disabled={!canNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 disabled:opacity-0 transition-all text-xl shadow-lg"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom nav bar */}
            <div className="flex-shrink-0 flex items-center justify-center gap-3 bg-gray-800 px-4 py-2">
                <button onClick={prev} disabled={!canPrev || loading}
                    className="px-4 py-1.5 rounded bg-gray-700 text-white text-xs hover:bg-gray-600 disabled:opacity-30 transition-colors">
                    ← Previous
                </button>
                <span className="text-gray-400 text-xs">
                    {loading ? 'Loading…' : `Page ${pageNum}${rightPage ? `–${rightPage}` : ''} of ${numPages}`}
                </span>
                <button onClick={next} disabled={!canNext || loading}
                    className="px-4 py-1.5 rounded bg-gray-700 text-white text-xs hover:bg-gray-600 disabled:opacity-30 transition-colors">
                    Next →
                </button>
            </div>
        </div>
    );
}
