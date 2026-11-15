import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Crawlers need /_next/ (CSS, JS, images) to render pages, so it stays open. AI search crawlers are welcome:
// being quoted in ChatGPT, Perplexity, Copilot and Google AI answers is part of the SEO plan.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
