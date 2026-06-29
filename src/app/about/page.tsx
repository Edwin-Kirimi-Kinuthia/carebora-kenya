"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Target, Eye } from "lucide-react";

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

const ethicalPrinciples = [
  "Respect for human dignity and human rights",
  "Non-discrimination and inclusivity",
  "Confidentiality and data protection",
  "Evidence-based decision-making",
  "Transparency and accountability",
  "Community participation and ownership",
  "Responsible stewardship of resources",
  "Gender equality and social inclusion",
];

const values = [
  {
    emoji: "⚖️",
    name: "Equity",
    desc: "We believe everyone deserves access to quality healthcare regardless of age, gender, location, or socioeconomic status.",
  },
  {
    emoji: "🤝",
    name: "Integrity",
    desc: "We uphold honesty, transparency, accountability, and ethical conduct in all our actions.",
  },
  {
    emoji: "💚",
    name: "Compassion",
    desc: "We serve communities with empathy, dignity, and respect.",
  },
  {
    emoji: "🌟",
    name: "Excellence",
    desc: "We strive for high-quality, evidence-based programs and continuous improvement.",
  },
  {
    emoji: "💡",
    name: "Innovation",
    desc: "We embrace creative and sustainable solutions to health challenges.",
  },
  {
    emoji: "🤲",
    name: "Collaboration",
    desc: "We work with communities, government, academia, and partners to achieve lasting impact.",
  },
  {
    emoji: "🌱",
    name: "Youth Leadership",
    desc: "We recognize young people as drivers of positive change and community transformation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-kenya-green/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-kenya-gold/15 blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-emerald-200 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            About Care Bora Kenya
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Our <span className="text-gradient-gold">Story,</span>
            <br />Our <span className="text-emerald-300">Purpose</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-emerald-100/90 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A youth-led organization reshaping health outcomes and empowering
            communities across Kenya through evidence, equity, and compassion.
          </motion.p>
        </div>
      </section>

      {/* About story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-5">
                About Us
              </span>
              <h2 className="font-display text-4xl font-bold text-kenya-dark mb-6 leading-tight">
                Youth-Led. Evidence-Based. <span className="text-gradient-green">Community-Centered.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Care Bora Kenya is a youth-led, non-profit organization dedicated to advancing
                health, promoting equity, and empowering communities through innovative,
                evidence-based, and sustainable health interventions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We work alongside communities, health professionals, researchers, policymakers,
                and development partners to improve health outcomes and create lasting social
                impact across Kenya.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This positioning makes us strong candidates for partnerships with bodies such as
                the <strong className="text-kenya-green">World Health Organization Youth Council</strong>,
                global health grants, and public health collaborations worldwide.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative h-[460px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                  alt="Community health workers Kenya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kenya-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-display text-lg italic font-semibold">
                    &ldquo;Healthy Communities, Brighter Futures.&rdquo;
                  </p>
                  <p className="text-emerald-200 text-sm mt-1">— Care Bora Kenya Motto</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Motto */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              Our <span className="text-gradient-green">Guiding Direction</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                color: "bg-blue-50 border-blue-200",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                label: "Vision",
                title: "A Healthy, Equitable Kenya",
                text: "A healthy, empowered, and equitable Kenya where every individual has access to quality healthcare, health information, and opportunities to thrive. Inspired by public-health principles of health promotion, prevention, equity, and community empowerment.",
              },
              {
                icon: Target,
                color: "bg-kenya-green-light border-kenya-green/30",
                iconBg: "bg-kenya-green/15",
                iconColor: "text-kenya-green",
                label: "Mission",
                title: "Improving Health Outcomes",
                text: "To improve health outcomes and community well-being through health education, disease prevention, research, advocacy, youth leadership, and innovative community-based interventions across Kenya.",
              },
              {
                icon: Shield,
                color: "bg-kenya-gold-light border-kenya-gold/30",
                iconBg: "bg-kenya-gold/15",
                iconColor: "text-kenya-gold",
                label: "Motto",
                title: "Healthy Communities, Brighter Futures",
                text: "This motto encapsulates our belief that the foundation of a prosperous, equitable Kenya lies in the health and wellbeing of its communities — especially its youth.",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.15}>
                <div className={`rounded-2xl border p-8 h-full ${item.color}`}>
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${item.iconColor}`}>
                    {item.label}
                  </div>
                  <h3 className="font-display text-xl font-bold text-kenya-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-gold-light text-kenya-gold text-sm font-bold uppercase tracking-widest mb-4">
              Core Values
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              What <span className="text-gradient-gold">Drives Us</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.07}>
                <div className="group bg-gray-50 hover:bg-kenya-green rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
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
          </div>
        </div>
      </section>

      {/* Ethical Principles */}
      <section className="py-24 bg-kenya-dark relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-kenya-green/10 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green/20 text-emerald-400 text-sm font-bold uppercase tracking-widest mb-5">
                Ethical Framework
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-gradient-gold">Ethical Principles</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every program, every intervention, every partnership we undertake is
                grounded in a firm ethical foundation that protects the dignity and
                rights of the communities we serve.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Shield className="w-8 h-8 text-kenya-gold flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  These principles align with the WHO&apos;s global health ethics framework and
                  international human rights standards.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ethicalPrinciples.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-kenya-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white text-sm font-medium leading-snug">{p}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-kenya-dark mb-4">
              Ready to Be Part of the Change?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Explore our programs or reach out to partner with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-kenya-green hover:bg-emerald-700 text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5">
                Our Programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-kenya-green text-kenya-green font-bold hover:bg-kenya-green hover:text-white transition-all hover:-translate-y-0.5">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
