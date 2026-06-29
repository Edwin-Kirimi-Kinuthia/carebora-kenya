import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Meet the Leaders of Care Bora Kenya",
  description:
    "Meet the passionate team behind Care Bora Kenya — public health professionals, researchers, youth advocates, and community health champions driving health equity across Kenya.",
  alternates: { canonical: "https://carebora.co.ke/team" },
  openGraph: {
    title: "Our Team | Care Bora Kenya",
    description:
      "Public health professionals, researchers, and youth advocates leading Care Bora Kenya's mission across Kenya.",
    url: "https://carebora.co.ke/team",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carebora.co.ke/" },
    { "@type": "ListItem", position: 2, name: "Our Team", item: "https://carebora.co.ke/team" },
  ],
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
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
