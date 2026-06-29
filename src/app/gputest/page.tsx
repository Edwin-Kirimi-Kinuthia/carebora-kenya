"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart, Globe2 } from "lucide-react";

/* Faithful reproduction of a REAL page including next/image + rounded-clipped
   image layer + infinite floating cards (the elements common to the glitching
   pages that earlier tests lacked). URL params disable one suspect at a time:
     ?noparallax=1  hero scroll transforms off
     ?noblur=1      backdrop-filter (.glass) off
     ?notext=1      gradient-clipped text off
     ?noanim=1      whileInView animations off
     ?noimg=1       remove the next/image entirely
     ?noround=1     image WITHOUT rounded-corner clipping (straight corners, no overflow-hidden)
     ?nofloat=1     disable the infinite floating-card animations
     ?all=1         everything off
   Whichever param STOPS the glitch is the cause. */

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
  const noImg = has("noimg");
  const noRound = has("noround");
  const noFloat = has("nofloat");

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const goldText = noText ? "text-kenya-gold" : "text-gradient-gold";
  const glass = noBlur ? "bg-white/15 border border-white/20" : "glass";
  const imgWrap = noRound ? "absolute inset-4" : "absolute inset-4 rounded-3xl overflow-hidden shadow-2xl";
  const floatTransition = (d: number, delay = 0) =>
    noFloat ? { duration: 0 } : { duration: d, repeat: Infinity, ease: "easeInOut" as const, delay };

  return (
    <main>
      <div className="fixed top-2 left-2 z-50 bg-black/80 text-white text-xs rounded-lg px-3 py-2 font-mono">
        OFF: {[noParallax && "parallax", noBlur && "blur", noText && "text", noAnim && "anim",
          noImg && "img", noRound && "round", noFloat && "float"].filter(Boolean).join(", ") || "nothing (full repro)"}
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
        <motion.div style={noParallax ? undefined : { y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 orb-green-20" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb-gold-15" />
        </motion.div>
        <div className="absolute top-0 inset-x-0 h-1.5 flex overflow-hidden">
          <div className="flex-1 bg-kenya-green" /><div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-red" /><div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-dark" />
        </div>
        <motion.div style={noParallax ? undefined : { opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-40">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${glass} text-emerald-200 text-sm font-semibold mb-8`}>
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" /> Youth-Led · Nairobi, Kenya
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white leading-[1.05] mb-6">
            Advancing <span className={goldText}>Health,</span><br />Empowering <span className="text-emerald-300">Communities.</span>
          </h1>
          <p className="text-emerald-100/90 text-lg max-w-2xl mx-auto">Scroll down through the image section to the ethical section.</p>
        </motion.div>
      </section>

      {/* WHO WE ARE — next/image with rounded clipping + infinite floating cards */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`font-display text-4xl font-bold mb-4 ${noText ? "text-kenya-green" : "text-gradient-green"}`}>
              A Movement for Health Equity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This section mirrors the real homepage: a fill image clipped by rounded
              corners with a gradient overlay, plus floating cards that animate forever.
            </p>
          </div>
          {!noImg && (
            <div className="relative h-[540px]">
              <div className={imgWrap}>
                <Image
                  src="https://www.comesa.int/wp-content/uploads/2021/08/CDC-pic-1024x598.jpg"
                  alt="test"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kenya-dark/50 via-transparent to-transparent" />
              </div>
              <motion.div animate={noFloat ? undefined : { y: [-6, 6, -6] }} transition={floatTransition(4)}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-kenya-green-light flex items-center justify-center">
                  <Heart className="w-6 h-6 text-kenya-green" />
                </div>
                <div><div className="font-bold text-kenya-dark text-sm">Est. 2024</div><div className="text-xs text-gray-500">Nairobi</div></div>
              </motion.div>
              <motion.div animate={noFloat ? undefined : { y: [6, -6, 6] }} transition={floatTransition(3.5, 0.5)}
                className="absolute -bottom-4 -left-4 bg-kenya-gold rounded-2xl shadow-xl p-5 text-white">
                <div className="font-display text-3xl font-bold">120K+</div><div className="text-sm text-amber-100">Lives Impacted</div>
              </motion.div>
              <motion.div animate={noFloat ? undefined : { y: [-4, 4, -4] }} transition={floatTransition(5, 1)}
                className="absolute bottom-20 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-1"><Globe2 className="w-4 h-4 text-kenya-green" /><span className="text-xs font-bold text-kenya-dark">47 Counties</span></div>
                <div className="text-xs text-gray-500">Nationwide</div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* ETHICAL section */}
      <section className="py-28 bg-dots-dark relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 orb-green-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-5">Our Commitment</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Rooted in <span className={goldText}>Ethical Practice</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">Principles that uphold the dignity, rights, and wellbeing of every community we serve.</p>
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kenya-gold text-white font-bold">Our Principles <ArrowRight className="w-4 h-4" /></span>
            </div>
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <motion.div key={p}
                  {...(noAnim ? {} : { initial: { opacity: 0, scale: 0.9 }, animate: inView ? { opacity: 1, scale: 1 } : {}, transition: { delay: i * 0.05, duration: 0.4 } })}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <p className="text-white text-sm font-medium leading-snug">{p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-kenya-dark">End of test</h2>
        <p className="text-gray-500 mt-2">Does anything glitch with the current OFF setting (top-left)?</p>
      </div>
    </main>
  );
}
