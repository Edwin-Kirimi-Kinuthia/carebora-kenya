"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg =
    scrolled || !isHome
      ? "bg-white/96 backdrop-blur-xl shadow-lg border-b border-gray-100"
      : "bg-transparent";

  const textColor =
    scrolled || !isHome ? "text-kenya-dark" : "text-white";

  const logoTextColor =
    scrolled || !isHome ? "text-kenya-green" : "text-emerald-300";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-kenya-green to-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-kenya-green/40 transition-shadow duration-300 pulse-dot">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div
                className={`font-display font-bold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                  scrolled || !isHome ? "text-kenya-dark" : "text-white"
                }`}
              >
                Care Bora Kenya
              </div>
              <div className={`text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 ${logoTextColor}`}>
                Health · Equity · Community
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active
                      ? scrolled || !isHome
                        ? "text-kenya-green"
                        : "text-white"
                      : scrolled || !isHome
                      ? "text-gray-600 hover:text-kenya-green"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-0 rounded-full ${
                        scrolled || !isHome
                          ? "bg-kenya-green-light"
                          : "bg-white/15"
                      }`}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-kenya-gold text-white text-sm font-bold shadow-lg hover:shadow-kenya-gold/40 hover:bg-amber-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-kenya-dark hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <nav className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold transition-colors ${
                    pathname === link.href
                      ? "bg-kenya-green-light text-kenya-green"
                      : "text-gray-700 hover:bg-gray-50 hover:text-kenya-green"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center mt-3 px-4 py-3 rounded-xl bg-kenya-gold text-white font-bold hover:bg-amber-600 transition-colors"
              >
                Get Involved
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
