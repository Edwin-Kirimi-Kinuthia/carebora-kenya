"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Each TEST block isolates ONE suspect CSS feature so we can identify which
   one triggers the Android GPU pixel-garbage corruption. Scroll through on the
   phone and note which letters glitch. */

function Label({ letter, title, hint }: { letter: string; title: string; hint: string }) {
  return (
    <div className="mb-8 text-center">
      <div className="inline-block text-7xl font-black text-white mb-3 bg-black/40 px-6 py-2 rounded-2xl">
        {letter}
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-white/70 text-sm mt-1 max-w-md mx-auto">{hint}</p>
    </div>
  );
}

const cards = Array.from({ length: 10 }, (_, i) => `Principle item number ${i + 1}`);

function StaticCards() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
      {cards.map((c) => (
        <div key={c} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-white text-sm font-medium">{c}</p>
        </div>
      ))}
    </div>
  );
}

function AnimatedCards() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
      {cards.map((c, i) => (
        <motion.div
          key={c}
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
        >
          <p className="text-white text-sm font-medium">{c}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Block({ children, className = "", style }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center py-20 overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

export default function GpuTestPage() {
  // Full reproduction of the real Ethical section for TEST G
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <main className="bg-black">
      {/* A — Control: solid dark, static, no effects */}
      <Block className="bg-kenya-dark">
        <Label letter="A" title="Control — plain solid background" hint="Solid bg-kenya-dark, static cards, no effects. Should NEVER glitch." />
        <StaticCards />
      </Block>

      {/* B — backdrop-filter: blur (.glass) */}
      <Block className="bg-kenya-dark">
        <Label letter="B" title="backdrop-filter: blur()" hint="The .glass effect. If THIS glitches, backdrop-filter is a cause." />
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
          {cards.map((c) => (
            <div key={c} className="glass rounded-xl p-4">
              <p className="text-white text-sm font-medium">{c}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* C — background-clip: text gradient text */}
      <Block className="bg-kenya-dark">
        <Label letter="C" title="background-clip: text (gradient text)" hint="Many gradient-clipped headings. If THIS glitches, gradient text is a cause." />
        <div className="space-y-4 text-center px-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <h3 key={i} className="text-gradient-gold text-4xl font-bold font-display">
              Ethical Practice Heading {i + 1}
            </h3>
          ))}
        </div>
      </Block>

      {/* D — framer-motion whileInView animations */}
      <Block className="bg-kenya-dark">
        <Label letter="D" title="framer-motion whileInView animations" hint="Animated card grid on plain solid bg. If THIS glitches, the animations are a cause." />
        <AnimatedCards />
      </Block>

      {/* E — baked dots background (current fix) */}
      <Block className="bg-dots-dark">
        <Label letter="E" title="Baked dot background (current fix)" hint="bg-dots-dark with STATIC cards. If THIS glitches, the baked dots themselves are a cause." />
        <StaticCards />
      </Block>

      {/* F — filter: blur() orb (original suspect) */}
      <Block className="bg-kenya-dark">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: "rgba(0,107,63,0.5)", filter: "blur(120px)" }}
        />
        <Label letter="F" title="filter: blur() orb" hint="A blurred orb (the old style). If THIS glitches, filter:blur is a cause." />
        <StaticCards />
      </Block>

      {/* G — FULL reproduction of the real Ethical Principles section */}
      <Block className="bg-dots-dark">
        <div className="absolute -top-32 -right-32 w-96 h-96 orb-green-10" />
        <Label letter="G" title="FULL real section reproduction" hint="Baked dots + orb + gradient text + animated cards — everything together, exactly like the live site." />
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-white mb-6 text-center">
            Our <span className="text-gradient-gold">Ethical Principles</span>
          </h2>
          <div ref={ref} className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {cards.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <p className="text-white text-sm font-medium">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Block>

      <div className="bg-white text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-kenya-dark">End of test</h2>
        <p className="text-gray-500 mt-2">Note which letters (A–G) showed the pixel-garbage glitch.</p>
      </div>
    </main>
  );
}
