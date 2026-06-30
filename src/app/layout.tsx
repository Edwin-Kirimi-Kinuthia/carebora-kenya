import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const BASE = "https://carebora.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Care Bora Kenya | Advancing Health, Empowering Communities",
    template: "%s | Care Bora Kenya",
  },
  description:
    "Care Bora Kenya is a youth-led non-profit organization dedicated to advancing health, promoting equity, and empowering communities through innovative, evidence-based interventions across all 47 counties of Kenya.",
  keywords: [
    "Care Bora Kenya",
    "health Kenya",
    "community health Kenya",
    "youth health champions",
    "non-profit Kenya",
    "health equity Kenya",
    "maternal health Kenya",
    "digital health Kenya",
    "youth-led organization Kenya",
    "WHO Kenya",
    "universal health coverage Kenya",
    "Nairobi health NGO",
    "carebora.co.ke",
  ],
  authors: [{ name: "Care Bora Kenya", url: BASE }],
  creator: "Care Bora Kenya",
  publisher: "Care Bora Kenya",

  alternates: {
    canonical: BASE,
  },

  openGraph: {
    type: "website",
    url: BASE,
    siteName: "Care Bora Kenya",
    title: "Care Bora Kenya | Advancing Health, Empowering Communities",
    description:
      "Youth-led non-profit advancing health equity and empowering communities across all 47 counties of Kenya.",
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Care Bora Kenya — Advancing Health, Empowering Communities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Care Bora Kenya | Advancing Health, Empowering Communities",
    description:
      "Youth-led non-profit advancing health equity and empowering communities across Kenya.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  verification: {
    // Add your Google Search Console verification code here after claiming the site:
    // google: "your-verification-code",
    other: {
      "msvalidate.01": "CFD673BE6E5D26009745BEF921E97C4E",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Care Bora Kenya",
    alternateName: "CBK",
    url: BASE,
    logo: `${BASE}/logo.png`,
    image: `${BASE}/logo.png`,
    description:
      "Care Bora Kenya is a youth-led non-profit organization dedicated to advancing health, promoting equity, and empowering communities through innovative, evidence-based interventions across Kenya.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254791390915",
        email: "admin@carebora.co.ke",
        contactType: "customer support",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/1GneyXiB15/",
      "https://www.instagram.com/carebora_ke/",
    ],
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    knowsAbout: [
      "Community Health",
      "Youth Health Advocacy",
      "Maternal Health",
      "Digital Health",
      "Health Equity",
      "Universal Health Coverage",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5DBWFCRZD5" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-5DBWFCRZD5');` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","xevai34p6c");` }} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
