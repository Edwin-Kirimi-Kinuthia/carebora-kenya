"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Globe2, Shield, Activity, TrendingUp, Quote } from "lucide-react";

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

function useCountUp(target: number, running: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!running) return;
    let raf: number;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, running, duration]);
  return value;
}

function BigStat({ value, suffix, label, sub, icon: Icon, delay, color }: {
  value: number; suffix?: string; label: string; sub: string;
  icon: React.ElementType; delay: number; color: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform"
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-5`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="font-display text-5xl sm:text-6xl font-bold text-kenya-dark">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-bold text-kenya-dark text-lg mt-2">{label}</div>
      <div className="text-gray-500 text-sm mt-1">{sub}</div>
    </motion.div>
  );
}

const stories = [
  {
    img: "https://cdn.standardmedia.co.ke/images/tuesday/wxkra0ityjozmri85b852157d2e94.jpg",
    county: "Kisumu County",
    title: "Maternal Health Breakthrough",
    story:
      "Through our community health champions program, maternal mortality in our pilot communities dropped by 35% in 18 months. Traditional birth attendants partnered with trained youth volunteers to ensure every expectant mother received antenatal care.",
    stat: "35% reduction in maternal mortality",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Health_camp_%40UG.jpg/960px-Health_camp_%40UG.jpg",
    county: "Nairobi County",
    title: "Youth Health Champions Network",
    story:
      "Over 2,000 university students became certified health champions, conducting 400+ health education sessions in urban informal settlements. They reached over 50,000 community members with life-saving health information.",
    stat: "50K+ community members reached",
  },
  {
    img: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=600&q=80",
    county: "Turkana County",
    title: "Digital Health in Remote Areas",
    story:
      "Our digital health pilot connected remote Turkana communities with telemedicine services, reducing the travel burden for basic consultations. Healthcare workers trained in mHealth tools now serve 15 previously unreached villages.",
    stat: "15 villages newly connected",
  },
];

const milestones = [
  { year: "2024", title: "Organization Founded", desc: "Care Bora Kenya established with a founding team of 12 youth health advocates in Nairobi." },
  { year: "2024", title: "First Community Programs", desc: "Launched health education campaigns in 5 Nairobi sub-counties, reaching 8,000+ residents." },
  { year: "2025", title: "National Expansion", desc: "Expanded to 15 counties, trained 500 youth health champions, and launched research partnerships." },
  { year: "2025", title: "WHO Partnership Talks", desc: "Began positioning for WHO Youth Council engagement and global health partnership applications." },
  { year: "2026", title: "Scale-Up Phase", desc: "Operating in 47 counties with 5,000+ active youth champions and 120K+ lives impacted." },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 gradient-hero overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 orb-green-20" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 orb-gold-15" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-emerald-200 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Our Impact
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Real Change, <br />
            <span className="text-gradient-gold">Measurable Impact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-emerald-100/90 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Every number represents a life touched, a community strengthened,
            and a healthier Kenya brought closer to reality.
          </motion.p>
        </div>
      </section>

      {/* Key stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              The Numbers <span className="text-gradient-green">Behind Our Work</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BigStat value={47} suffix="" label="Counties Covered" sub="All 47 counties of Kenya" icon={Globe2} delay={0} color="bg-kenya-green" />
            <BigStat value={5000} suffix="+" label="Youth Champions" sub="Trained and active in field" icon={Users} delay={0.1} color="bg-kenya-gold" />
            <BigStat value={120000} suffix="+" label="Lives Impacted" sub="Directly reached with services" icon={Heart} delay={0.2} color="bg-rose-500" />
            <BigStat value={200} suffix="+" label="Health Campaigns" sub="Successfully completed" icon={Activity} delay={0.3} color="bg-blue-600" />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BigStat value={35} suffix="%" label="Maternal Mortality Drop" sub="In pilot communities" icon={TrendingUp} delay={0.1} color="bg-emerald-600" />
            <BigStat value={400} suffix="+" label="Education Sessions" sub="Community health seminars" icon={Shield} delay={0.2} color="bg-purple-600" />
            <BigStat value={15} suffix="" label="Research Projects" sub="Active or completed" icon={Activity} delay={0.3} color="bg-cyan-600" />
            <BigStat value={8} suffix="" label="Counties (Pilot)" sub="Deep-impact sites" icon={Globe2} delay={0.4} color="bg-amber-600" />
          </div>
        </div>
      </section>

      {/* Impact stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-4">
              Impact Stories
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              From Data to <span className="text-gradient-green">Human Stories</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Behind every statistic is a community transformed, a life saved, or a future made brighter.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <FadeIn key={story.title} delay={i * 0.15}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={story.img}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kenya-dark/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-kenya-green text-white text-xs font-bold">
                        {story.county}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold text-kenya-dark mb-3">{story.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{story.story}</p>
                    <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-kenya-green" />
                      <span className="text-kenya-green text-sm font-bold">{story.stat}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-gold-light text-kenya-gold text-sm font-bold uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl font-bold text-kenya-dark">
              Milestones & <span className="text-gradient-gold">Growth</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kenya-green via-kenya-gold to-kenya-green" />

            {milestones.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.12}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`hidden sm:flex flex-1 ${i % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 max-w-xs">
                      <div className="text-xs font-bold text-kenya-gold uppercase tracking-widest mb-1.5">{m.year}</div>
                      <h4 className="font-display font-bold text-kenya-dark mb-2">{m.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 w-6 h-6 rounded-full bg-kenya-green border-4 border-white shadow-lg z-10" />

                  {/* Mobile card */}
                  <div className="sm:hidden ml-14 bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex-1">
                    <div className="text-xs font-bold text-kenya-gold uppercase tracking-widest mb-1">{m.year}</div>
                    <h4 className="font-display font-bold text-kenya-dark mb-2">{m.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  <div className="hidden sm:flex flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-kenya-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <Quote className="w-12 h-12 text-kenya-gold mx-auto mb-6" />
            <p className="font-display text-2xl sm:text-3xl text-white italic leading-relaxed mb-6">
              &ldquo;We do not just measure impact in numbers — we measure it in the mothers who survive childbirth,
              the children who grow up healthy, and the young people who discover their power to heal communities.&rdquo;
            </p>
            <div className="text-kenya-gold font-semibold">Care Bora Kenya Leadership</div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-kenya-dark mb-4">
              Help Us Create More Impact
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Every partnership, volunteer hour, and contribution amplifies our reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-kenya-green hover:bg-emerald-700 text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5">
                Get Involved <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-kenya-green text-kenya-green font-bold hover:bg-kenya-green hover:text-white transition-all hover:-translate-y-0.5">
                Our Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
