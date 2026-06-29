import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Care Bora Kenya | Our Story, Mission & Values",
  description:
    "Learn about Care Bora Kenya — a youth-led non-profit advancing health equity across all 47 counties of Kenya. Our mission, vision, core values, and ethical principles.",
  alternates: { canonical: "https://carebora.co.ke/about" },
  openGraph: {
    title: "About Care Bora Kenya | Our Story, Mission & Values",
    description:
      "A youth-led non-profit advancing health equity across Kenya. Discover our mission, vision, core values, and ethical framework.",
    url: "https://carebora.co.ke/about",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carebora.co.ke/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://carebora.co.ke/about" },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
