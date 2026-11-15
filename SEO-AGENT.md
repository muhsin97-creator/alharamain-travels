# Al-Haramain Travels (Australia): weekly SEO article playbook

Read by the scheduled task `alharamain-weekly-blog-au` every run. Adapted from the Vitality playbook
(`vitality-site/SEO-AGENT.md`), rewritten for a Next.js site and for Umrah.

**Goal.** Make Al-Haramain Travels the site Australians find first when they search for Umrah packages,
Umrah groups and Umrah trips, on Google and in AI answers (ChatGPT, Gemini, Perplexity, Copilot, Google
AI Overviews). The baseline on 14 Nov 2026 was 0 of 4 priority Australian terms in Google's top 20 and
0 of 8 AI answers naming us. One strong article a week, every week, is how that changes.

## The facts you work with

| Thing | Where |
|---|---|
| Site repo | `C:\Users\61422\Downloads\Coding Project\alharamain-travels` (GitHub `muhsin97-creator/alharamain-travels`, branch `main`) |
| Deploy | Push to `main`. Vercel builds and publishes by itself in about 1 minute. There is no deploy command. |
| Live address | The value of `SITE_URL` in `lib/site.ts`. Today: `https://alharamain-travels-six.vercel.app` |
| Posts | `content/blog/<slug>.md`, one Markdown file each. Format: `content/blog/README.md` |
| Trips, prices, dates, hotels, phone | `lib/data.ts`. The only source for anything about our trips. Never state a price, date, hotel or inclusion that is not there. |
| Keyword plan and article queue | `C:\Users\61422\Downloads\Coding Project\alharamain-geo\SEO-KEYWORDS.md` (section "Australia queue") |
| Verified Umrah facts with sources | `alharamain-geo\research\umrah-fact-sheet-2026-11.md`. Re-verify anything older than 60 days before using it: visa and Nusuk rules change. |
| Competitor and US research | `alharamain-geo\research\au-uk-competitor-gaps-2026-11.md`, `us-umrah-companies-2026-11.md` |
| Rank and AI tracking | `alharamain-geo\ranks.mjs`, `track.mjs`, `keywords.json`, `questions.json` |

**The domain.** `alharamaintravels.com.au` has been suspended by the .au registry ("server hold") since
10 Nov 2026, so the site lives on the vercel.app address and that is what canonicals, the sitemap and
structured data point to. At the start of every run check it:
`curl -s https://rdap.cctld.au/rdap/domain/alharamaintravels.com.au` and look at `status`. While it says
`server hold`, change nothing. If the hold is gone, say so at the top of your report and stop there:
switching the site back (Vercel domain, `NEXT_PUBLIC_SITE_URL`, redirects, `node tools/indexnow.mjs --all`)
is a one-off job Muhsin should start, not something to do inside a weekly run.

## Who we are (use only these claims)

Al-Haramain Travels runs guided group Umrah trips from Australia, led by Shaykhs and Ustadhs, with
flights, visa, hotels near the Haram, ground transport, ziyarah and 24/7 group support. Groups usually
leave from Sydney and Melbourne; pilgrims from other cities connect or take the land-only package.
Offices: Preston VIC and Lakemba NSW. Deposit and instalments are available. Group names such as
"Yeah The Boys" and "Bridge to Blessings" are real trips in `lib/data.ts`.

Do not claim: "best", "number one", "cheapest", "guaranteed", awards, licences, accreditations, pilgrim
counts or review scores unless the exact claim is already on the live site. Do not name or criticise
competitors. Do not promise visa approval, flight times or Rawdah access.

## Weekly workflow

### 0. Start clean
`cd` to the repo. `git status` must be clean and `git pull --ff-only` must succeed. If there are
uncommitted changes someone else made, do not touch them: write the article in a way that only adds your
new file, and say so in the report. Run the domain check above.

### 1. Pick the topic (do not ask; decide)
1. Read every file in `content/blog/` (titles, `keywords[0]`) so you never target a search twice.
2. Open `SEO-KEYWORDS.md`, "Australia queue". Take the top item that is not ticked. Queue items marked
   `REFRESH` mean rewrite an existing thin post in place (same slug, set `updated:` to today, keep `date:`).
3. Override the queue only when something time-critical beats it: a Saudi rule change (visa, Nusuk,
   vaccination), a new trip in `lib/data.ts` that has no supporting article, or a seasonal window opening
   (Ramadan, December school holidays) within 10 weeks. Say in the report why you overrode.
4. Web-search the exact phrase and read the top 5 results and the "People also ask" questions. Note what
   they cover, how long they are and what they leave out. Your article has to be the most useful answer
   for an Australian reader: specific cities, airports, school holidays, Australian dollars, Smartraveller.

### 2. Research and verify
- Every factual claim about visas, Nusuk, vaccinations, flights, dates and costs needs a source you opened
  this run. Prefer primary sources: nusuk.sa, visa.visitsaudi.com, haj.gov.sa, smartraveller.gov.au,
  health.gov.au, airline sites. Link at least 2 of them in the body.
- Qur'an: cite surah and ayah number and link the ayah on quran.com. Hadith: Sahih al-Bukhari or Sahih
  Muslim only, with the collection and number, and open the hadith on sunnah.com to confirm the wording
  before you quote it. If you cannot confirm it, leave it out.
- You are a travel company, not a mufti. Describe the well-known steps of Umrah; where schools of thought
  differ or a ruling is needed (women's travel, missed steps, medical exemptions), say that the group's
  Shaykh will advise and do not issue a ruling.
- Prices: our own come from `lib/data.ts`, always written "from $X per person". Market ranges come from the
  fact sheet or from pages you opened, described as typical ranges with the month you checked.

### 3. Write `content/blog/<slug>.md`
- 1,200 to 2,000 words including the FAQ. Aim for about 1,700. Australian English. No em or en dashes.
- Slug: the search phrase in hyphens, short (`umrah-packages-from-melbourne`). No year in the slug.
- Frontmatter: everything in `content/blog/README.md`, including `metaTitle` (60 chars or fewer, search
  phrase first), `metaDescription` (120 to 155 chars, a plain answer), `keywords` (primary first), `image`
  (a real file under `public/`), and `faq` (3 to 5 questions people actually ask, each answered in 30 to 70
  words that make sense on their own).
- First paragraph: answer the search in two or three sentences, with the primary phrase in it. AI answers
  and Google's featured snippets lift this paragraph, so it must stand alone.
- Body starts at `##`. At least 4 H2s, written as the questions or phrases people search. Use a table
  when comparing (months, costs, hotel classes, flight routes) and a numbered list for steps.
- Write like a person who has taken groups: concrete details (which gate, how long the walk is, what the
  group does on day 3), short paragraphs, no filler, no hype. One idea per paragraph.
- Links: at least 3 internal (`/services/umrah`, the most relevant `/umrah/<slug>` trip that is not
  expired, `/contact`, and one or two related `/blog/<slug>` posts) and at least 2 external primary sources.
- End with a short, natural call to action to `/contact` or the relevant trip. No "In conclusion".
- Do not write an FAQ section in the body. The page renders the `faq` frontmatter and the FAQ structured
  data from it.

### 4. Gate (must pass before anything is committed)
```
node tools/check-post.mjs content/blog/<slug>.md --keyword "<primary phrase>"
```
Fix every FAIL and re-run until it prints PASS. Read each WARN and fix it unless you have a reason.
Then re-read the article once as a pilgrim's family member would: is anything wrong, vague, or something
our team could not stand behind? Fix it.

Also do the internal-link pass: add one link to the new post from the most related existing post (one
sentence, natural anchor text), so the new page is not an orphan.

### 5. Build, publish, verify
1. `npx next build` (run it from PowerShell; the build needs network access for fonts). It must finish with
   the new route listed under `/blog/[slug]`. A failed build is never pushed.
2. `git add content/blog/<slug>.md` plus any post you linked from, and commit:
   `Blog: <headline>`. Never `git add -A`: commit only the files you changed.
3. `git push origin main`. Publishing is hands-off (Muhsin asked for articles to be posted automatically every week); do not stop to ask.
4. Wait for Vercel (check every 30 seconds, up to 6 minutes) until `<SITE_URL>/blog/<slug>` returns 200.
   Then confirm on the live page: the H1, the FAQ heading, `"@type":"FAQPage"` in the HTML, the canonical
   tag pointing at the live URL, every internal link returns 200, and `/sitemap.xml` lists the new URL.
5. If the build fails on Vercel or a check fails and you cannot fix it in one further commit:
   `git revert --no-edit HEAD && git push origin main`, and report what broke.

### 6. Tell search engines, record rankings
1. `node tools/indexnow.mjs` (submits blog URLs dated today to Bing, which also feeds Copilot and ChatGPT
   search). If it says the key file is not live, wait one minute and retry once.
2. Rankings: in `alharamain-geo` run `node ranks.mjs report` and quote the Australian lines. Do not make
   any rank or search-volume calls here: the monthly dashboard task does the one live check a month for both
   countries (credits are limited to about 1,000 a month, shared with Vitality).

### 7. Keep the plan current
In `SEO-KEYWORDS.md`: tick the queue item with today's date and the live URL. If your research showed a
better phrase or a new question worth an article, add it to the queue with one line of reasoning.

### 8. Report
Write `alharamain-geo\reports\<YYYY-MM-DD>-au.md` and end the run with the same summary as your final
message: headline, target phrase and its monthly searches, live URL, word count, gate result, the live
checks, IndexNow result, latest rank lines, anything Muhsin should look at (facts you could not verify
and left out, trip details in `lib/data.ts` that look out of date, the domain status).

## Rhythm (so the blog covers everything a customer searches)
Four-week cycle; the queue in SEO-KEYWORDS.md is already ordered this way:
1. **Packages and cities**: "Umrah packages from Sydney / Melbourne / Perth / Brisbane", "Umrah groups from Australia".
2. **Planning**: visa, Nusuk, cost, flights, packing, health, travelling with children or parents.
3. **Season and trips**: Ramadan 2027, December school holidays, Easter, the next departures in `lib/data.ts`.
4. **Worship and guidance**: how to perform Umrah, ihram, duas, Madinah ziyarah, spiritual preparation.
Every fourth week, also refresh one older post (update facts, add FAQ, set `updated:`).

## What an article cannot do (tell Muhsin when these hold us back)
Ranking first also needs things outside the blog: the .com.au domain restored, a verified Google Business
Profile for Preston and Lakemba with steady reviews, links from mosques, Islamic organisations and
scholars who travel with us, and city landing pages. Note in the report when a competitor outranks us on
one of these rather than on content.
