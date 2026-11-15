import { getAllPosts } from "@/lib/blog";
import { contactInfo, umrahTrips } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

// /llms.txt: a plain summary of the site for AI assistants. Built from the same data as the pages,
// so trips, prices and guides never drift from what the site says.
export const dynamic = "force-static";

export function GET() {
  const trips = umrahTrips.filter((t) => !t.expired);
  const posts = getAllPosts();
  const lines = [
    "# Al-Haramain Travels (Australia)",
    "",
    "> Guided group Umrah trips from Australia, led by Shaykhs and Ustadhs. Packages cover flights, the Umrah visa, hotels near Masjid al-Haram and Masjid an-Nabawi, ground transport, ziyarah and 24/7 group support. Groups usually depart from Sydney and Melbourne; a land-only package is available for pilgrims who book their own flights.",
    "",
    `- Offices: ${contactInfo.addresses.map((a) => a.location).join("; ")}`,
    `- Contact: ${contactInfo.phone} (${contactInfo.hours})`,
    "- Deposits and payment by instalments are available on every trip",
    "",
    "## Pages",
    `- [Home](${SITE_URL}/)`,
    `- [Umrah trips and packages from Australia](${SITE_URL}/services/umrah)`,
    `- [About Al-Haramain Travels](${SITE_URL}/about)`,
    `- [Contact and enquiries](${SITE_URL}/contact)`,
    `- [Blog: Umrah guides for Australian pilgrims](${SITE_URL}/blog)`,
    "",
    "## Current Umrah trips",
    ...trips.map(
      (t) =>
        `- [${t.name}](${SITE_URL}/umrah/${t.slug}): ${[t.duration, t.dates, t.price].filter(Boolean).join(", ")}`,
    ),
    "",
    "## Guides",
    ...posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
