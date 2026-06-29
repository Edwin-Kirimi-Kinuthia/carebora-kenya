import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Care Bora Kenya | Get Involved, Partner or Donate",
  description:
    "Get in touch with Care Bora Kenya. Volunteer, partner with us, donate, or inquire about our programs. Email admin@carebora.co.ke or call +254 791 390 915.",
  alternates: { canonical: "https://carebora.co.ke/contact" },
  openGraph: {
    title: "Contact Care Bora Kenya | Get Involved",
    description:
      "Volunteer, partner, donate, or get in touch. Email admin@carebora.co.ke or call +254 791 390 915.",
    url: "https://carebora.co.ke/contact",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://carebora.co.ke/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://carebora.co.ke/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
