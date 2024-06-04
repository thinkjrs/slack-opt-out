"use client";
import { useEffect } from "react";

export default function Favicon({ emoji }: { emoji?: string }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${
      emoji || "👎️"
    }</text></svg>`;
    document.head.appendChild(link);
  }, [emoji]);
  return null;
}
