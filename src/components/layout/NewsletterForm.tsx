"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-4 flex items-center gap-2 rounded-full border border-[#4a4d47] bg-[#262a26] p-1.5"
    >
      <input
        type="email"
        required
        placeholder={submitted ? "You're on the list!" : "you@email.com"}
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#e9e6de] outline-none placeholder:text-[#7d7a72]"
      />
      <button
        type="submit"
        className="min-h-[38px] shrink-0 cursor-pointer rounded-full bg-[var(--color-mint)] px-4 text-xs font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-mint-dark)]"
      >
        {submitted ? "Joined" : "Join"}
      </button>
    </form>
  );
}
