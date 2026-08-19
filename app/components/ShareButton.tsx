"use client";

import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function ShareButton({
  title,
  className,
  label = "Share on WhatsApp",
  ariaLabel = "Share on WhatsApp",
}: {
  title: string;
  className?: string;
  label?: string;
  ariaLabel?: string;
}) {
  const handleShare = () => {
    const message = `${title} — ${window.location.href}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={className}
      aria-label={ariaLabel}
    >
      <WhatsAppIcon />
      {label}
    </button>
  );
}
