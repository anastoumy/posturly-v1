"use client";

import { useToast } from "@/context/ToastContext";

export function ToastViewport() {
  const { toasts, dismissToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-[120] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-8 sm:left-auto sm:right-8 sm:translate-x-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          style={{ animation: "toastIn 0.35s var(--ease-out-quart) forwards" }}
          className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 shadow-[0_20px_50px_-10px_rgba(26,26,26,0.25)]"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint)] text-[var(--color-charcoal)]">
            <svg width="11" height="11" viewBox="0 0 12 9" fill="none">
              <path d="M1 4.5L4.2 7.5L11 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[var(--color-ink)]">{toast.title}</p>
            {toast.description && (
              <p className="mt-0.5 truncate text-xs text-[var(--color-ink-muted)]">
                {toast.description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => dismissToast(toast.id)}
            aria-label="Dismiss notification"
            className="ml-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-mint-pale)] hover:text-[var(--color-ink)]"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
