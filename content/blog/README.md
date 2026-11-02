# Blog posts

Each post is one Markdown file in this folder: `content/blog/<slug>.md`. The file name is the URL (`/blog/<slug>`). Drop a file in, and the blog listing, the post page, the sitemap and the home page "From the blog" section pick it up on the next build. No code changes needed.

## Frontmatter

```yaml
---
title: "Prepare Yourself for Umrah"            # required
excerpt: "One or two sentences shown on cards." # recommended, 120-160 chars
date: 2026-11-02                                # required, yyyy-mm-dd, newest shows first
author: "Al-Haramain Travels Team"              # optional
category: "Umrah Guide"                         # Umrah Guide | Spiritual Guidance | Travel Tips | Ramadan | Makkah | Madinah
readTime: "8 min read"                          # optional, estimated from word count if omitted
image: "/gallery/kaaba.jpg"                     # optional, a photo from public/gallery, public/trips or public/services
metaTitle: ""                                   # optional SEO title override (under 60 chars)
metaDescription: ""                             # optional SEO description override (under 160 chars)
keywords: ["Umrah packages Australia"]          # optional
draft: false                                    # true hides the post everywhere
---
```

## Body

Standard Markdown (GitHub flavoured). Start the body at `##` (the page already renders the title as the h1). Use `###` for sub-sections, `**bold**` for emphasis, lists, and `> quotes`. Keep Islamic references accurate: quote Qur'an with surah and ayah, and only cite hadith from Bukhari or Muslim with the collection named.

## House style

- Australian English (organise, travelling, enquiry).
- No em-dashes or en-dashes; use a comma, full stop or hyphen.
- Target the reader's search intent in the title and first paragraph ("Umrah packages from Australia", "Umrah visa for Australians", "Ramadan Umrah 2027").
- End with a short, natural call to action pointing to `/contact` or `/services/umrah`.
