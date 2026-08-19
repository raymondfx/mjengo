"use client";

import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function ShareButton({
  title,
  className,
}: {
  title: string;
  className?: string;
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
      aria-label="Share this project on WhatsApp"
    >
      <WhatsAppIcon />
      Share on WhatsApp
    </button>
  );
}
