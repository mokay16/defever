"use client";

import type { MouseEvent, ReactNode } from "react";

const POPUP_WIDTH = 520;
const POPUP_HEIGHT = 780;

// Opens the ActBlue form in a centered pop-up window over the Donate page,
// so donors never leave the site (ActBlue can't be iframed -- see
// Donate.tsx). If the browser blocks the pop-up, the plain link still
// opens ActBlue in a new tab, so a donation is never lost.
export default function ActBlueLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, new window) behave normally.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    const left = window.screenX + (window.outerWidth - POPUP_WIDTH) / 2;
    const top = window.screenY + (window.outerHeight - POPUP_HEIGHT) / 2;
    const popup = window.open(
      href,
      "actblue-donate",
      `popup,width=${POPUP_WIDTH},height=${POPUP_HEIGHT},left=${Math.max(0, left)},top=${Math.max(0, top)}`,
    );

    if (popup) {
      // Same protection as rel="noopener": ActBlue can't reach this page.
      popup.opener = null;
      popup.focus();
      e.preventDefault();
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
