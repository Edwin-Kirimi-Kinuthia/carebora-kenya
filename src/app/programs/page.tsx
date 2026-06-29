"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Heart, Microscope, Star, Globe2, AlertTriangle,
  ArrowRight, ChevronDown, CheckCircle, Users, BookOpen, Stethoscope, Activity, Shield
} from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.45, 0.15, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    id: "community-health",
    icon: Heart,
    emoji: "❤️",
    number: "01",
    color: "from-kenya-green to-emerald-600",
    lightBg: "bg-kenya-green-light",
    iconColor: "text-kenya-green",
    borderColor: "border-kenya-green",
    title: "Community Health",
    tagline: "Promoting wellness from the ground up",
    description:
      "Our community health pillar focuses on prevention, promotion, and primary care access. We work directly in communities to reduce disease burden and improve quality of life for all Kenyans.",
    programs: [
      {
        icon: Stethoscope,
        title: "Health Promotion & Prevention",
        desc: "Community outreach campaigns on hygiene, nutrition, and preventive care practices.",
      },
      {
        icon: Heart,
        title: "Maternal & Child Health",
        desc: "Maternal, newborn, child, and adolescent health programs improving survival rates.",
      },
      {
        icon: Activity,
        title: "NCD Awareness",
        desc: "Education and screening campaigns for diabetes, hypertension, and cancer prevention.",
      },
    ],
  },
  {
    id: "research-innovation",
    icon: Microscope,
    emoji: "🔬",
    number: "02",
    color: "from-blue-600 to-cyan-500",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-400",
    title: "Research & Innovation",
    tagline: "Evidence-based solutions for lasting impact",
    description:
      "We conduct rigorous community-based research and develop digital health innovations to strengthen health systems and inform policy at local, national, and international levels.",
    programs: [
      {
        icon: BookOpen,
        title: "Community-Based Research",
        desc: "Participatory research that centers community knowledge and lived health experiences.",
      },
      {
        icon: Globe2,
        title: "Health Systems Strengthening",
        desc: "Programs to improve the capacity, efficiency, and equity of Kenya's health systems.",
      },
      {
        icon: Microscope,
        title: "Digital Health Solutions",
        desc: "Technology-driven tools for health data collection, telemedicine, and mHealth.",
      },
    ],
  },
  {
    id: "youth-leadership",
    icon: Star,
    emoji: "⭐",
    number: "03",
    color: "from-kenya-gold to-amber-500",
    lightBg: "bg-kenya-gold-light",
    iconColor: "text-kenya-gold",
    borderColor: "border-kenya-gold",
    title: "Youth Engagement & Leadership",
    tagline: "Young people driving lasting change",
    description:
      "We believe young people are not just beneficiaries of health systems — they are the most powerful agents of change. Our youth programs build health champions who transform their communities.",
    programs: [
      {
        icon: Star,
        title: "Youth Health Champions",
        desc: "Training youth to become certified community health advocates and educators.",
      },
      {
        icon: Users,
        title: "Capacity Building & Mentorship",
        desc: "Skills development, leadership training, and mentorship by health professionals.",
      },
      {
        icon: Heart,
        title: "Volunteer Development",
        desc: "Structured volunteering pathways connecting youth to meaningful health work.",
      },
    ],
  },
  {
    id: "advocacy-policy",
    icon: Globe2,
    emoji: "🌍",
    number: "04",
    color: "from-purple-600 to-violet-500",
    lightBg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-400",
    title: "Advocacy & Policy",
    tagline: "Amplifying community voices in health policy",
    description:
      "We advocate for health equity and Universal Health Coverage by translating evidence into policy and amplifying community voices in health decision-making at all levels of government.",
    programs: [
      {
        icon: Globe2,
        title: "Health Equity Advocacy",
        desc: "Campaigns and coalitions pushing for equitable access to quality health services.",
      },
      {
        icon: Activity,
        title: "Universal Health Coverage (UHC)",
        desc: "Policy engagement and public education on UHC implementation across Kenya.",
      },
      {
        icon: BookOpen,
        title: "Evidence-Informed Policy",
        desc: "Bridging research findings and policymaker engagement for better health laws.",
      },
    ],
  },
  {
    id: "emergency-health",
    icon: AlertTriangle,
    emoji: "🚨",
    number: "05",
    color: "from-kenya-red to-rose-500",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-400",
    title: "Emergency & Humanitarian Health",
    tagline: "Prepared, resilient, and ready to respond",
    description:
      "We prepare communities to respond rapidly to health emergencies and build long-term resilience through training, resources, and community-level preparedness systems.",
    programs: [
      {
        icon: AlertTriangle,
        title: "Outbreak Preparedness & Response",
        desc: "Rapid response systems and community surveillance for infectious disease outbreaks.",
      },
      {
        icon: Shield,
        title: "Community Resilience Initiatives",
        desc: "Building community capacity to withstand and recover from health emergencies.",
      },
      {
        icon: Heart,
        title: "Crisis Health Support",
        desc: "Psychosocial support and essential health services during humanitarian crises.",
      },
    ],
  },
];


export default function ProgramsPage() {
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 gradient-hero overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 orb-gold-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 orb-green-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-emerald-200 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Our Programs & Strategic Pillars
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Five Pillars of <br />
            <span className="text-gradient-gold">Transformative Health</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-emerald-100/90 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Our five strategic pillars form an integrated approach to improving health
            outcomes across every county in Kenya.
          </motion.p>

          {/* Pillar nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="px-4 py-2 rounded-full glass text-sm text-white/80 hover:text-white hover:bg-white/20 transition-all font-medium"
              >
                {p.emoji} {p.title.split(" ")[0]}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-16">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.id} delay={0.05}>
              <div
                id={pillar.id}
                className={`rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
                  openPillar === pillar.id
                    ? `${pillar.borderColor} shadow-2xl`
                    : "border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Header (always visible) */}
                <button
                  onClick={() => setOpenPillar(openPillar === pillar.id ? null : pillar.id)}
                  className="w-full text-left p-8 flex items-center gap-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-16 h-16 rounded-2xl ${pillar.lightBg} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl">{pillar.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-widest ${pillar.iconColor}`}>
                        Pillar {pillar.number}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-kenya-dark">
                      {pillar.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">{pillar.tagline}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: openPillar === pillar.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 ${pillar.iconColor}`} />
                  </motion.div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {openPillar === pillar.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`px-8 pb-8 border-t ${pillar.lightBg}`}>
                        <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-8 max-w-3xl">
                          {pillar.description}
                        </p>
                        <div className="grid sm:grid-cols-3 gap-5">
                          {pillar.programs.map((prog) => (
                            <div
                              key={prog.title}
                              className="bg-white rounded-2xl p-5 shadow-sm border border-white"
                            >
                              <div className={`w-10 h-10 rounded-xl ${pillar.lightBg} flex items-center justify-center mb-4`}>
                                <prog.icon className={`w-5 h-5 ${pillar.iconColor}`} />
                              </div>
                              <h4 className="font-bold text-kenya-dark text-sm mb-2">{prog.title}</h4>
                              <p className="text-gray-500 text-xs leading-relaxed">{prog.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="py-16 bg-kenya-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { n: "5", label: "Strategic Pillars" },
            { n: "47", label: "Counties Active" },
            { n: "15+", label: "Active Programs" },
            { n: "2024", label: "Founded" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-bold text-kenya-gold">{s.n}</div>
              <div className="text-emerald-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-kenya-dark mb-4">
              Want to Support Our Programs?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Partner with us, volunteer your expertise, or fund a program that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-kenya-green hover:bg-emerald-700 text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/team" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-kenya-green text-kenya-green font-bold hover:bg-kenya-green hover:text-white transition-all hover:-translate-y-0.5">
                Meet Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
