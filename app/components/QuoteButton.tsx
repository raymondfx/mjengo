"use client";

import { openQuote } from "../lib/quote";

export default function QuoteButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openQuote} className={className}>
      {children}
    </button>
  );
}
