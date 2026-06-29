"use client";

import { useEffect } from "react";

/* Diagnostic-only: reads ?diag=... from the URL and toggles body classes so we
   can strip GPU-heavy features on the REAL (glitching) pages to find the cause.
   e.g. ?diag=noblur, ?diag=notext, ?diag=flat, ?diag=noblur,notext
   Has zero effect unless the diag param is present. Remove once fixed. */
export default function DiagToggle() {
  useEffect(() => {
    const diag = new URLSearchParams(window.location.search).get("diag");
    if (!diag) return;
    const flags = diag.split(",").map((s) => s.trim()).filter(Boolean);
    flags.forEach((f) => document.body.classList.add(`diag-${f}`));
    return () => flags.forEach((f) => document.body.classList.remove(`diag-${f}`));
  }, []);
  return null;
}
