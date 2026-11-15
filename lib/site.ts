// The one place the site's public address is set. Every canonical tag, the sitemap, robots.txt,
// structured data and share links read it.
//
// alharamaintravels.com.au is on auDA "server hold" (since 10 Nov 2026) and is not attached to the
// Vercel project, so canonicals pointing there told Google to index a dead address. Until the domain
// is restored AND added to the Vercel project, the live vercel.app address is canonical.
// When it is back: set NEXT_PUBLIC_SITE_URL=https://alharamaintravels.com.au in Vercel (Production)
// or change the default below, redeploy, then run `node tools/indexnow.mjs --all`.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://alharamain-travels-six.vercel.app").replace(/\/+$/, "");
export const SITE_HOST = new URL(SITE_URL).host;
