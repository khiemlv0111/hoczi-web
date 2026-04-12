"use client";

interface FullScreenLoadingProps {
  message?: string;
}

export function FullScreenLoading({ message = "Loading..." }: FullScreenLoadingProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      {/* Spinner */}
      <div className="relative w-12 h-12">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
        {/* Spinning arc */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#0a66c2] animate-spin" />
      </div>

      {/* Message */}
      {message && (
        <p className="mt-4 text-[14px] font-medium text-slate-500">{message}</p>
      )}
    </div>
  );
}
