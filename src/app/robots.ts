import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://carebora.co.ke/sitemap.xml",
    host: "https://carebora.co.ke",
  };
}
