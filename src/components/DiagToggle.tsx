"use client";

import { useEffect, useState } from "react";

/* Diagnostic-only: reads ?diag=... from the URL and toggles body classes so we
   can strip GPU-heavy features on the REAL (glitching) pages to find the cause.
   e.g. ?diag=noblur, ?diag=cv, ?diag=flat,nodots,nomotion
   Renders a visible banner so we can CONFIRM the flags actually registered.
   Has no effect unless the diag param is present. Remove once fixed. */
export default function DiagToggle() {
  const [flags, setFlags] = useState<string[]>([]);
  useEffect(() => {
    const diag = new URLSearchParams(window.location.search).get("diag");
    if (!diag) return;
    const fs = diag.split(",").map((s) => s.trim()).filter(Boolean);
    fs.forEach((f) => document.body.classList.add(`diag-${f}`));
    setFlags(fs);
    return () => fs.forEach((f) => document.body.classList.remove(`diag-${f}`));
  }, []);

  if (flags.length === 0) return null;
  return (
    <div
      style={{
        position: "fixed", top: 8, left: 8, zIndex: 9999,
        background: "#dc2626", color: "white", fontFamily: "monospace",
        fontSize: 12, padding: "6px 10px", borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      DIAG ON: {flags.join(", ")}
    </div>
  );
}
