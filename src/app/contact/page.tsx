"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Mail, Phone, Send, CheckCircle, Heart,
  Users, Handshake, DollarSign, Globe2
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

const involvementOptions = [
  {
    icon: Heart,
    title: "Volunteer",
    desc: "Join our youth champions network and serve communities across Kenya.",
    color: "bg-rose-50 border-rose-200 hover:border-rose-400",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "Organizations, universities, and health bodies — let's create impact together.",
    color: "bg-kenya-green-light border-kenya-green/30 hover:border-kenya-green",
    iconBg: "bg-kenya-green/15",
    iconColor: "text-kenya-green",
  },
  {
    icon: DollarSign,
    title: "Fund a Program",
    desc: "Support specific programs like maternal health or digital health initiatives.",
    color: "bg-kenya-gold-light border-kenya-gold/30 hover:border-kenya-gold",
    iconBg: "bg-kenya-gold/15",
    iconColor: "text-kenya-gold",
  },
  {
    icon: Globe2,
    title: "WHO & Global Partners",
    desc: "International organizations looking to collaborate on health in Africa.",
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

type FormStatus = "idle" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", organization: "", subject: "", message: "", type: "volunteer",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 gradient-hero overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-kenya-green/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-kenya-gold/15 blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-emerald-200 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-kenya-gold animate-pulse" />
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s Build a <br />
            <span className="text-gradient-gold">Healthier Kenya</span> Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-emerald-100/90 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re a volunteer, partner organization, researcher, or funder —
            we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Involvement options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-kenya-dark">
              How Would You Like to <span className="text-gradient-green">Get Involved?</span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {involvementOptions.map((opt, i) => (
              <FadeIn key={opt.title} delay={i * 0.1}>
                <div className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${opt.color}`}>
                  <div className={`w-12 h-12 rounded-xl ${opt.iconBg} flex items-center justify-center mb-4`}>
                    <opt.icon className={`w-6 h-6 ${opt.iconColor}`} />
                  </div>
                  <h3 className="font-display font-bold text-kenya-dark text-lg mb-2">{opt.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{opt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-10 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-kenya-dark mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  We typically respond within 24–48 hours.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-kenya-green-light flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-kenya-green" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-kenya-dark mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", organization: "", subject: "", message: "", type: "volunteer" }); }}
                      className="text-kenya-green font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organization</label>
                        <input
                          type="text" name="organization" value={form.organization} onChange={handleChange}
                          placeholder="Your organization (optional)"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">I want to…</label>
                        <select
                          name="type" value={form.type} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm bg-white"
                        >
                          <option value="volunteer">Volunteer</option>
                          <option value="partner">Partner with CBK</option>
                          <option value="fund">Fund a Program</option>
                          <option value="research">Research Collaboration</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                      <input
                        type="text" name="subject" value={form.subject} onChange={handleChange} required
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        rows={5}
                        placeholder="Tell us how you'd like to get involved or collaborate…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-kenya-green focus:ring-2 focus:ring-kenya-green/20 transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-kenya-green hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-kenya-green/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact info */}
            <FadeIn delay={0.2} className="lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h3 className="font-display text-xl font-bold text-kenya-dark mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Address",       value: "Nairobi, Kenya\n(Serving all 47 counties)", color: "text-kenya-green", bg: "bg-kenya-green-light", href: undefined },
                    { icon: Mail,   label: "General",       value: "admin@carebora.co.ke",        color: "text-blue-600",    bg: "bg-blue-50",           href: "mailto:admin@carebora.co.ke" },
                    { icon: Mail,   label: "Customer Care", value: "customercare@carebora.co.ke", color: "text-blue-600",    bg: "bg-blue-50",           href: "mailto:customercare@carebora.co.ke" },
                    { icon: Phone,  label: "Phone",         value: "+254 791 390 915",            color: "text-kenya-gold",  bg: "bg-kenya-gold-light",  href: "tel:+254791390915" },
                    { icon: Phone,  label: "Alternate",     value: "+254 757 963 762",            color: "text-kenya-gold",  bg: "bg-kenya-gold-light",  href: "tel:+254757963762" },
                  ].map(({ icon: Icon, label, value, color, bg, href }) => (
                    <div key={value} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} className="text-gray-700 text-sm font-medium hover:text-kenya-green transition-colors whitespace-pre-line">{value}</a>
                        ) : (
                          <div className="text-gray-700 text-sm font-medium whitespace-pre-line">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WHO note */}
              <div className="bg-gradient-to-br from-kenya-green to-emerald-700 rounded-3xl p-7 text-white relative overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-30" />
                <div className="relative">
                  <Globe2 className="w-8 h-8 text-kenya-gold mb-4" />
                  <h4 className="font-display text-xl font-bold mb-3">
                    WHO & International Partners
                  </h4>
                  <p className="text-emerald-100 text-sm leading-relaxed mb-5">
                    Care Bora Kenya welcomes collaborations with global health organizations,
                    international NGOs, and multilateral agencies. We are positioning for
                    WHO Youth Council engagement and global health partnerships.
                  </p>
                  <div className="text-kenya-gold text-sm font-bold">
                    Contact us for partnership proposals →
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-kenya-green" />
                  <div>
                    <div className="text-sm font-bold text-kenya-dark">Quick Response Promise</div>
                    <div className="text-xs text-gray-500">We respond to all messages within 24–48 hours</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-kenya-green-light relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-kenya-green mx-auto mb-3" />
            <p className="font-display text-xl font-bold text-kenya-dark">Nairobi, Kenya</p>
            <p className="text-gray-500">Serving communities across all 47 counties</p>
          </div>
        </div>
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </section>
    </>
  );
}
