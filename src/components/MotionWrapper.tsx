"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

/* Diagnostic: when ?diag=nomotion is present, force reducedMotion="always" so
   framer-motion skips all transform/layout animations site-wide. This collapses
   the per-element compositing layers created by the dozens of scroll-triggered
   motion elements, the 5s testimonial carousel, and the infinite floating cards.
   If the glitch disappears under this flag, animation layer churn is the cause. */
export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const diag = new URLSearchParams(window.location.search).get("diag") || "";
    if (diag.split(",").map((s) => s.trim()).includes("nomotion")) setReduced(true);
  }, []);
  return <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>;
}
