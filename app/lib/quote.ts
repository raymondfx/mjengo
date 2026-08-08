export const OPEN_QUOTE_EVENT = "open-quote";

/** Opens the global "Request a Quote" modal from anywhere on the client. */
export function openQuote() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_QUOTE_EVENT));
  }
}
