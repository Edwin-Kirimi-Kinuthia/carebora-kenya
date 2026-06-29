import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact | Health Outcomes & Community Transformation in Kenya",
  description:
    "See the measurable impact Care Bora Kenya is making — lives reached, counties served, health outcomes improved, and community success stories across Kenya.",
  alternates: { canonical: "https://carebora.co.ke/impact" },
  openGraph: {
    title: "Our Impact | Care Bora Kenya",
    description:
      "Measurable health outcomes, community reach, and success stories from Care Bora Kenya's programs across all 47 counties.",
    url: "https://carebora.co.ke/impact",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carebora.co.ke/" },
    { "@type": "ListItem", position: 2, name: "Impact", item: "https://carebora.co.ke/impact" },
  ],
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
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
