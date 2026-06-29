import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Community Health, Research & Youth Leadership",
  description:
    "Explore Care Bora Kenya's health programs — community health, maternal & child health, NCD prevention, research & innovation, and youth leadership development across Kenya's 47 counties.",
  alternates: { canonical: "https://carebora.co.ke/programs" },
  openGraph: {
    title: "Our Programs | Care Bora Kenya",
    description:
      "Community health, maternal care, disease prevention, digital health, and youth leadership programs across Kenya.",
    url: "https://carebora.co.ke/programs",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carebora.co.ke/" },
    { "@type": "ListItem", position: 2, name: "Programs", item: "https://carebora.co.ke/programs" },
  ],
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
