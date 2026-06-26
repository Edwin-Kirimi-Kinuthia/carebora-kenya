import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Globe2, Share2, MessageCircle, ExternalLink, Rss } from "lucide-react";

const footerLinks = {
  Organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Programs", href: "/programs" },
    { label: "Impact", href: "/impact" },
  ],
  "Get Involved": [
    { label: "Volunteer", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Donate", href: "/contact" },
    { label: "Internships", href: "/contact" },
  ],
  Resources: [
    { label: "Health Education", href: "/programs" },
    { label: "Research", href: "/programs" },
    { label: "Publications", href: "/impact" },
    { label: "News & Updates", href: "/impact" },
  ],
};

const socials = [
  { icon: Globe2, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Twitter/X" },
  { icon: MessageCircle, href: "#", label: "Instagram" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Rss, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-kenya-dark text-white">
      {/* Top CTA strip */}
      <div className="bg-kenya-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to Make a Difference?
            </h3>
            <p className="text-emerald-100 mt-1">
              Join thousands of youth champions advancing health across Kenya.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-kenya-gold hover:bg-amber-500 text-white font-bold rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Involved
            </Link>
            <Link
              href="/programs"
              className="px-6 py-3 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-full transition-all"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kenya-green to-emerald-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Care Bora Kenya
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A youth-led non-profit dedicated to advancing health, promoting equity,
              and empowering communities through innovative, evidence-based interventions
              across Kenya.
            </p>
            <p className="text-kenya-gold font-display italic text-lg mb-6">
              &ldquo;Healthy Communities, Brighter Futures.&rdquo;
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-kenya-green flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-kenya-gold text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: MapPin, text: "Nairobi, Kenya" },
            { icon: Mail, text: "info@careborakenyza.org" },
            { icon: Phone, text: "+254 700 000 000" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-gray-400 text-sm">
              <Icon className="w-4 h-4 text-kenya-green flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Care Bora Kenya. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          </div>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-kenya-red fill-kenya-red" /> for Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
