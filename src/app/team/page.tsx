"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Link2, Share2, Mail, Star, Heart, Globe2, Users } from "lucide-react";

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

const leadership = [
  {
    name: "Dr. Amina Ochieng",
    role: "Executive Director & Co-Founder",
    bio: "Public health physician and community health advocate with 8+ years in health systems strengthening across East Africa. Former WHO consultant.",
    img: "https://randomuser.me/api/portraits/women/28.jpg",
    badge: "Founder",
    badgeColor: "bg-kenya-gold text-white",
  },
  {
    name: "Samuel Kiprotich",
    role: "Director of Programs",
    bio: "Youth development specialist with deep expertise in community mobilization and health education. MSc Public Health, University of Nairobi.",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    badge: "Co-Founder",
    badgeColor: "bg-kenya-green text-white",
  },
  {
    name: "Grace Wambui",
    role: "Head of Research & Innovation",
    bio: "Epidemiologist and digital health innovator. Leads CBK's community-based research and technology programs. PhD candidate.",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
    badge: "Research Lead",
    badgeColor: "bg-blue-600 text-white",
  },
  {
    name: "David Mwangi",
    role: "Director of Advocacy & Policy",
    bio: "Policy advocate and UHC champion who has worked with Kenya's Ministry of Health and regional health bodies on health equity.",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
    badge: "Policy Expert",
    badgeColor: "bg-purple-600 text-white",
  },
  {
    name: "Fatuma Hassan",
    role: "Youth Programs Coordinator",
    bio: "Award-winning youth advocate who has mobilized 2,000+ young health champions across Nairobi and Coast provinces.",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    badge: "Youth Lead",
    badgeColor: "bg-rose-500 text-white",
  },
  {
    name: "Kevin Njoroge",
    role: "Emergency Health Lead",
    bio: "Emergency response specialist with experience in outbreak management and humanitarian health programs in crisis contexts.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    badge: "Emergency Lead",
    badgeColor: "bg-kenya-red text-white",
  },
];

const champions = [
  { name: "Lydia Achieng", county: "Kisumu", focus: "Maternal Health", img: "https://randomuser.me/api/portraits/women/61.jpg" },
  { name: "James Mutua", county: "Machakos", focus: "Youth Mental Health", img: "https://randomuser.me/api/portraits/men/15.jpg" },
  { name: "Zainab Omar", county: "Mombasa", focus: "NCD Prevention", img: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Peter Kamau", county: "Nakuru", focus: "Health Advocacy", img: "https://randomuser.me/api/portraits/men/58.jpg" },
  { name: "Caroline Chepchirchir", county: "Eldoret", focus: "Child Health", img: "https://randomuser.me/api/portraits/women/76.jpg" },
  { name: "Ali Abdi", county: "Garissa", focus: "Community Outreach", img: "https://randomuser.me/api/portraits/men/72.jpg" },
];

const values_team = [
  { icon: Heart, text: "Driven by compassion for communities" },
  { icon: Star, text: "Excellence in everything we do" },
  { icon: Globe2, text: "Representing all of Kenya's diversity" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 gradient-hero overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-kenya-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-kenya-green/20 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-emerald-200 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Our Team
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            The People Behind <br />
            <span className="text-gradient-gold">Kenya&apos;s Health Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-emerald-100/90 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A diverse team of youth health champions, researchers, advocates, and
            community leaders united by a single mission.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 mt-10"
          >
            {values_team.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-emerald-200 text-sm">
                <Icon className="w-4 h-4 text-kenya-gold" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-green-light text-kenya-green text-sm font-bold uppercase tracking-widest mb-4">
              Leadership Team
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              Meet Our <span className="text-gradient-green">Core Team</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Experienced, passionate, and deeply committed to transforming health in Kenya.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Photo */}
                  <div className="relative h-64 bg-gradient-to-br from-kenya-green-light to-emerald-100 overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kenya-dark/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${member.badgeColor}`}>
                        {member.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-kenya-dark">{member.name}</h3>
                    <p className="text-kenya-green text-sm font-semibold mt-0.5 mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>

                    <div className="flex gap-2">
                      {[Link2, Share2, Mail].map((Icon, j) => (
                        <button
                          key={j}
                          aria-label="Social link"
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-kenya-green flex items-center justify-center transition-colors group/btn"
                        >
                          <Icon className="w-3.5 h-3.5 text-gray-500 group-hover/btn:text-white" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Champions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-kenya-gold-light text-kenya-gold text-sm font-bold uppercase tracking-widest mb-4">
              Youth Champions
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-kenya-dark">
              Health Champions <span className="text-gradient-gold">Across Kenya</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              5,000+ youth champions driving change in every corner of Kenya.
              Here&apos;s a snapshot of our incredible network.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {champions.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="64px"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-kenya-green border-2 border-white flex items-center justify-center">
                      <span className="text-white text-[8px]">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-kenya-dark text-sm">{c.name}</h4>
                    <p className="text-kenya-green text-xs font-semibold">{c.county}</p>
                    <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-kenya-green-light text-kenya-green text-[11px] font-semibold">
                      {c.focus}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-10">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-6 h-6 text-kenya-green" />
              <span className="text-kenya-dark font-bold text-lg">5,000+ Champions</span>
              <span className="text-gray-400">active across all 47 counties</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Join team CTA */}
      <section className="py-24 bg-kenya-green relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-kenya-gold/10 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Become a <span className="text-kenya-gold">Health Champion</span>
            </h2>
            <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our growing network of 5,000+ youth health champions. No experience needed —
              just passion for community health and a desire to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-kenya-gold hover:bg-amber-500 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-kenya-gold/40 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/programs" className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-full text-lg hover:bg-white/10 hover:border-white/80 transition-all hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

