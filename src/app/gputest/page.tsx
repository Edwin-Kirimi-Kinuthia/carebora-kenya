"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* Faithful reproduction of a REAL page (hero + ethical section) so the actual
   trigger is present. URL params disable one suspect at a time:
     ?noparallax=1  -> hero scroll-linked transforms off
     ?noblur=1      -> backdrop-filter (.glass) off
     ?notext=1      -> background-clip:text gradient text off (solid instead)
     ?noanim=1      -> framer-motion whileInView/animate off
     ?all=1         -> all of the above off
   Visit each variant on the phone; whichever STOPS the glitch is the cause. */

const principles = [
  "Respect for Human Dignity", "Non-Discrimination & Inclusivity",
  "Confidentiality & Data Protection", "Evidence-Based Decisions",
  "Transparency & Accountability", "Community Participation",
  "Responsible Stewardship", "Gender Equality",
];

export default function GpuTestPage() {
  const [params, setParams] = useState("");
  useEffect(() => { setParams(window.location.search); }, []);
  const has = (k: string) => params.includes(`${k}=1`) || params.includes("all=1");

  const noParallax = has("noparallax");
  const noBlur = has("noblur");
  const noText = has("notext");
  const noAnim = has("noanim");

  // Hero parallax (like the real homepage)
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const goldText = noText ? "text-kenya-gold" : "text-gradient-gold";
  const glass = noBlur ? "bg-white/15 border border-white/20" : "glass";

  return (
    <main>
      {/* Status banner */}
      <div className="fixed top-2 left-2 z-50 bg-black/80 text-white text-xs rounded-lg px-3 py-2 font-mono">
        OFF: {[noParallax && "parallax", noBlur && "blur", noText && "text", noAnim && "anim"]
          .filter(Boolean).join(", ") || "nothing (full repro)"}
      </div>

      {/* HERO — faithful copy of homepage hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero"
      >
        <motion.div style={noParallax ? undefined : { y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 orb-green-20" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb-gold-15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orb-dark-30" />
        </motion.div>

        <div className="absolute top-0 inset-x-0 h-1.5 flex overflow-hidden">
          <div className="flex-1 bg-kenya-green" /><div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-red" /><div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-dark" />
        </div>

        <motion.div
          style={noParallax ? undefined : { opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-40"
        >
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${glass} text-emerald-200 text-sm font-semibold mb-8`}>
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Youth-Led · Non-Profit · Nairobi, Kenya
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-[1.05] mb-6">
            Advancing <span className={goldText}>Health,</span><br />
            Empowering <span className="text-emerald-300">Communities.</span>
          </h1>
          <p className="text-emerald-100/90 text-lg max-w-2xl mx-auto mb-10">
            Faithful test reproduction of the real page. Scroll down to the ethical section.
          </p>
          <div className={`mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full ${glass} text-sm text-emerald-200`}>
            Scroll-linked hero · glass badge active
          </div>
        </motion.div>
      </section>

      {/* A few filler sections to match real page depth */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className={`font-display text-4xl font-bold ${noText ? "text-kenya-green" : "text-gradient-green"}`}>
            Filler Section
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                {...(noAnim ? {} : {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.1 },
                })}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-40"
              >
                <p className="text-gray-600">Card {i + 1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICAL section — exact real structure */}
      <section className="py-28 bg-dots-dark relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 orb-green-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-5">
                Our Commitment
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Rooted in <span className={goldText}>Ethical Practice</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our work is grounded in principles that uphold the dignity, rights,
                and wellbeing of every individual and community we serve across Kenya.
              </p>
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kenya-gold text-white font-bold">
                Our Principles <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div ref={ref} className="grid grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p}
                  {...(noAnim ? {} : {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: inView ? { opacity: 1, scale: 1 } : {},
                    transition: { delay: i * 0.05, duration: 0.4 },
                  })}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <p className="text-white text-sm font-medium leading-snug">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-kenya-dark">End of test</h2>
        <p className="text-gray-500 mt-2">Does the ethical section glitch with the current OFF setting (see top-left)?</p>
      </div>
    </main>
  );
}
