import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiagToggle from "@/components/DiagToggle";
import MotionWrapper from "@/components/MotionWrapper";

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

export const metadata: Metadata = {
  title: "Care Bora Kenya | Advancing Health, Empowering Communities",
  description:
    "Care Bora Kenya is a youth-led non-profit organization dedicated to advancing health, promoting equity, and empowering communities through innovative, evidence-based interventions across Kenya.",
  keywords: [
    "Care Bora Kenya",
    "health Kenya",
    "community health",
    "youth leadership",
    "WHO",
    "non-profit Kenya",
    "health equity",
  ],
  openGraph: {
    title: "Care Bora Kenya | Advancing Health, Empowering Communities",
    description:
      "Youth-led organization advancing health equity and empowering communities across Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <DiagToggle />
        <MotionWrapper>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionWrapper>
      </body>
    </html>
  );
}
