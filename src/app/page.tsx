"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Shield, Microscope, Users, Globe2, AlertTriangle,
  ChevronDown, ArrowRight, Quote, CheckCircle, Star
} from "lucide-react";

/* ─── count-up hook ──────────────────────────────────────────── */
function useCountUp(target: number, running: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!running) return;
    let raf: number;
    let start = -1;
    const step = (now: number) => {
      if (start < 0) start = now; // use rAF timestamp to avoid negative p
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, running, duration]);
  return value;
}

/* ─── fade-in wrapper ────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.45, 0.15, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── pillars data ───────────────────────────────────────────── */
const pillars = [
  {
    icon: Heart,
    color: "from-kenya-green to-emerald-600",
    bg: "bg-kenya-green-light",
    iconColor: "text-kenya-green",
    title: "Community Health",
    bullets: [
      "Health promotion & disease prevention",
      "Maternal, newborn & child health",
      "Non-communicable disease awareness",
    ],
  },
  {
    icon: Microscope,
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Research & Innovation",
    bullets: [
      "Community-based research",
      "Health systems strengthening",
      "Digital health solutions",
    ],
  },
  {
    icon: Star,
    color: "from-kenya-gold to-amber-500",
    bg: "bg-kenya-gold-light",
    iconColor: "text-kenya-gold",
    title: "Youth Leadership",
    bullets: [
      "Youth health champions program",
      "Capacity building & mentorship",
      "Volunteer development",
    ],
  },
  {
    icon: Globe2,
    color: "from-purple-600 to-violet-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Advocacy & Policy",
    bullets: [
      "Health equity advocacy",
      "Universal Health Coverage (UHC)",
      "Evidence-informed policy",
    ],
  },
  {
    icon: AlertTriangle,
    color: "from-kenya-red to-rose-500",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    title: "Emergency & Humanitarian",
    bullets: [
      "Outbreak preparedness & response",
      "Community resilience initiatives",
      "Crisis health support",
    ],
  },
];

/* ─── core values ────────────────────────────────────────────── */
const values = [
  { emoji: "⚖️", name: "Equity", desc: "Quality healthcare for all, regardless of status." },
  { emoji: "🤝", name: "Integrity", desc: "Honesty, transparency, and accountability." },
  { emoji: "💚", name: "Compassion", desc: "Serving with empathy, dignity and respect." },
  { emoji: "🌟", name: "Excellence", desc: "Evidence-based programs and continuous improvement." },
  { emoji: "💡", name: "Innovation", desc: "Creative, sustainable solutions to health challenges." },
  { emoji: "🤲", name: "Collaboration", desc: "Partnerships for lasting community impact." },
  { emoji: "🌱", name: "Youth Leadership", desc: "Young people as drivers of positive change." },
];

/* ─── testimonials ───────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Care Bora Kenya transformed our village's understanding of maternal health. The youth health champions were incredible mentors.",
    name: "Aisha Wanjiru",
    role: "Community Health Volunteer, Kisumu",
    img: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "The research programs opened my eyes to evidence-based health interventions. I'm now pursuing a career in public health thanks to CBK.",
    name: "Brian Otieno",
    role: "Youth Health Champion, Nairobi",
    img: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=100&h=100&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "Their advocacy work has been pivotal in pushing for UHC policy changes at county level. A model for youth-led health organizations.",
    name: "Dr. Grace Muthoni",
    role: "Public Health Officer, Nakuru",
    img: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=100&h=100&fit=crop&crop=face&q=80",
  },
];

/* ─── impact stats section ───────────────────────────────────── */
function ImpactStats() {
  const stats = [
    { value: 47, suffix: "", label: "Counties Covered", sub: "Across Kenya", icon: Globe2 },
    { value: 5000, suffix: "+", label: "Youth Champions", sub: "Trained & Active", icon: Users },
    { value: 120000, suffix: "+", label: "Lives Impacted", sub: "Directly Reached", icon: Heart },
    { value: 200, suffix: "+", label: "Health Campaigns", sub: "Successfully Run", icon: Shield },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
      ))}
    </div>
  );
}

function StatCard({
  stat, delay,
}: {
  stat: { value: number; suffix: string; label: string; sub: string; icon: React.ElementType };
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
    >
      <stat.icon className="w-8 h-8 text-kenya-gold mx-auto mb-3" />
      <div className="font-display text-4xl sm:text-5xl font-bold text-white">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white font-semibold mt-1">{stat.label}</div>
      <div className="text-emerald-300 text-xs mt-0.5">{stat.sub}</div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero"
      >
        {/* Atmospheric orbs */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-kenya-green/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-kenya-gold/15 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-900/30 blur-[140px]" />
        </motion.div>

        {/* Kenya flag accent stripe */}
        <div className="absolute top-0 inset-x-0 h-1.5 flex overflow-hidden">
          <div className="flex-1 bg-kenya-green" />
          <div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-red" />
          <div className="w-12 bg-white" />
          <div className="flex-1 bg-kenya-dark" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-56"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-emerald-200 text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Youth-Led · Non-Profit · Nairobi, Kenya
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.45, 0.15, 1.0] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Advancing{" "}
            <span className="text-gradient-gold">Health,</span>
            <br />
            Empowering{" "}
            <span className="relative inline-block">
              <span className="text-emerald-300">Communities.</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-kenya-gold origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Care Bora Kenya is a youth-led non-profit improving health outcomes through
            education, research, advocacy, and community-based interventions across Kenya.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/programs"
              className="group px-8 py-4 rounded-full bg-kenya-gold hover:bg-amber-500 text-white font-bold text-lg shadow-2xl shadow-kenya-gold/30 hover:shadow-kenya-gold/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 hover:border-white/70 transition-all duration-300 hover:-translate-y-1"
            >
              Learn Our Story
            </Link>
          </motion.div>

          {/* WHO tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full glass text-sm text-emerald-200"
          >
            <Globe2 className="w-4 h-4 text-kenya-gold flex-shrink-0" />
            Positioning for WHO Youth Council &amp; Global Health Partnerships
          </motion.div>
        </motion.div>

        {/* Hero stats overlay */}
        <div className="absolute bottom-0 inset-x-0 pb-10">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: 47, suffix: "", label: "Counties Reached", icon: Globe2 },
              { value: 5000, suffix: "+", label: "Youth Champions", icon: Users },
              { value: 120, suffix: "K+", label: "Lives Impacted", icon: Heart },
              { value: 200, suffix: "+", label: "Campaigns Run", icon: Shield },
            ].map((s, i) => {
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.1, duration: 0.6 }}
                  className="glass rounded-2xl p-4 text-center text-white"
                >
                  <s.icon className="w-5 h-5 text-kenya-gold mx-auto mb-1.5" />
                  <div className="font-display text-2xl font-bold">{s.value.toLocaleString()}{s.suffix}</div>
                  <div className="text-emerald-200 text-xs mt-0.5">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[200px] left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* ══ ABOUT PREVIEW ════════════════════════════════════════ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-5">
                Who We Are
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark mb-6 leading-tight">
                A Movement for{" "}
                <span className="text-gradient-green">Health Equity</span> in Kenya
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Care Bora Kenya is a youth-led, non-profit organization dedicated to advancing
                health, promoting equity, and empowering communities through innovative,
                evidence-based, and sustainable health interventions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We work alongside communities, health professionals, researchers, policymakers,
                and development partners to improve health outcomes and create lasting social
                impact across Kenya.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    label: "Our Vision",
                    text: "A healthy, empowered, and equitable Kenya where every individual has access to quality healthcare, information, and opportunities to thrive.",
                    border: "border-kenya-green",
                    bg: "bg-kenya-green-light",
                  },
                  {
                    label: "Our Mission",
                    text: "To improve health outcomes and community well-being through health education, disease prevention, research, advocacy, youth leadership, and innovative community-based interventions.",
                    border: "border-kenya-gold",
                    bg: "bg-kenya-gold-light",
                  },
                ].map((item) => (
                  <div key={item.label} className={`p-5 rounded-xl border-l-4 ${item.border} ${item.bg}`}>
                    <div className="font-bold text-xs text-kenya-dark uppercase tracking-widest mb-1.5">
                      {item.label}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kenya-green hover:bg-emerald-700 text-white font-bold transition-all duration-200 hover:shadow-lg hover:shadow-kenya-green/30 hover:-translate-y-0.5"
              >
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            {/* Photo collage */}
            <FadeIn delay={0.2} className="relative">
              <div className="relative h-[540px]">
                <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://www.comesa.int/wp-content/uploads/2021/08/CDC-pic-1024x598.jpg"
                    alt="COMESA Africa CDC vaccination initiative"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kenya-dark/50 via-transparent to-transparent" />
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-kenya-green-light flex items-center justify-center">
                    <Heart className="w-6 h-6 text-kenya-green fill-kenya-green" />
                  </div>
                  <div>
                    <div className="font-bold text-kenya-dark text-sm">Est. 2024</div>
                    <div className="text-xs text-gray-500">Nairobi, Kenya</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-kenya-gold rounded-2xl shadow-xl p-5 text-white"
                >
                  <div className="font-display text-3xl font-bold">120K+</div>
                  <div className="text-sm text-amber-100 mt-0.5">Lives Impacted</div>
                </motion.div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Globe2 className="w-4 h-4 text-kenya-green" />
                    <span className="text-xs font-bold text-kenya-dark">47 Counties</span>
                  </div>
                  <div className="text-xs text-gray-500">Nationwide reach</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ STRATEGIC PILLARS ════════════════════════════════════ */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              Our <span className="text-gradient-green">Strategic Pillars</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Five interconnected pillars guide our work to transform health outcomes across Kenya.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-5`}>
                    <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-kenya-dark mb-4">{pillar.title}</h3>
                  <ul className="space-y-2.5 flex-1">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-kenya-green flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programs"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-kenya-green hover:text-emerald-600 transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-kenya-green hover:bg-emerald-700 text-white font-bold shadow-lg hover:shadow-kenya-green/30 transition-all hover:-translate-y-0.5"
            >
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══ IMPACT NUMBERS ═══════════════════════════════════════ */}
      <section className="py-28 bg-kenya-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-kenya-gold/10 blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-emerald-200 text-sm font-bold uppercase tracking-widest mb-4">
              Our Impact
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Numbers That Tell <span className="text-kenya-gold">Our Story</span>
            </h2>
          </FadeIn>
          <ImpactStats />
        </div>
      </section>

      {/* ══ CORE VALUES ══════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-gold-light text-kenya-gold text-sm font-bold uppercase tracking-widest mb-4">
              Our Foundation
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              The Values That <span className="text-gradient-gold">Guide Us</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Seven core values underpin everything we do — from the communities we serve
              to the partners we work with.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.07}>
                <div className="group bg-gray-50 hover:bg-kenya-green rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-kenya-green/20 hover:-translate-y-1 cursor-default h-full">
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3 className="font-display font-bold text-kenya-dark group-hover:text-white text-xl mb-2 transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-emerald-100 text-sm leading-relaxed transition-colors">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <Link
                href="/about"
                className="group bg-kenya-green rounded-2xl p-6 flex flex-col justify-between hover:bg-emerald-700 transition-colors duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
              >
                <div>
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    Ethical Principles
                  </h3>
                  <p className="text-emerald-200 text-sm leading-relaxed">
                    Human dignity, non-discrimination, data protection, and more.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-kenya-gold font-semibold text-sm">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════════ */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-4">
              Community Voices
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              Stories of <span className="text-gradient-green">Transformation</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (t, i) =>
                  i === activeTestimonial && (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100"
                    >
                      <Quote className="w-10 h-10 text-kenya-gold mb-6" />
                      <p className="font-display text-xl sm:text-2xl text-kenya-dark leading-relaxed mb-8 italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-4 border-kenya-green-light"
                        />
                        <div>
                          <div className="font-bold text-kenya-dark">{t.name}</div>
                          <div className="text-kenya-green text-sm">{t.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "bg-kenya-green w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2.5"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ETHICAL COMMITMENT ═══════════════════════════════════ */}
      <section className="py-28 bg-kenya-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-kenya-green/10 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-5">
                Our Commitment
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Rooted in <span className="text-gradient-gold">Ethical Practice</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our work is grounded in principles that uphold the dignity, rights,
                and wellbeing of every individual and community we serve across Kenya.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-kenya-gold hover:bg-amber-500 text-white font-bold transition-all hover:shadow-lg hover:shadow-kenya-gold/30 hover:-translate-y-0.5"
              >
                Our Principles <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Respect for Human Dignity",
                  "Non-Discrimination & Inclusivity",
                  "Confidentiality & Data Protection",
                  "Evidence-Based Decisions",
                  "Transparency & Accountability",
                  "Community Participation",
                  "Responsible Stewardship",
                  "Gender Equality",
                ].map((principle, i) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-kenya-gold mb-2" />
                    <p className="text-white text-sm font-medium leading-snug">{principle}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="bg-gradient-to-br from-kenya-green via-emerald-700 to-kenya-dark rounded-3xl p-12 sm:p-16 relative overflow-hidden">
              <div className="absolute inset-0 pattern-dots" />
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-kenya-gold/20 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-emerald-400/10 blur-[80px]" />
              <div className="relative z-10">
                <div className="text-5xl mb-6">🌍</div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
                  Join the Movement
                </h2>
                <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Together, we can build healthier, more equitable communities across Kenya.
                  Volunteer, partner, or advocate — every action matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-kenya-gold hover:bg-amber-500 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-kenya-gold/40 transition-all hover:-translate-y-1"
                  >
                    Get Involved Today
                  </Link>
                  <Link
                    href="/impact"
                    className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full text-lg hover:bg-white/10 hover:border-white/70 transition-all hover:-translate-y-1"
                  >
                    See Our Impact
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
