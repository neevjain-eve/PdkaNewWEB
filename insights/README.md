# Insights articles

Everything shown under **Insights** (the Insights page, the four cards on the home page and the
"Latest Articles" column in the menu) is driven by two things:

1. `../insights-data.js`: one entry per article (title, date, summary, category, status).
2. `insights/<id>.html`: the article text itself (plain HTML: `<h3>`, `<p>`, `<ul>`).

## Add an article by hand
1. Create `insights/<id>.html` (id = lowercase letters/numbers, e.g. `gstcouncil55`).
2. Add an entry to `PDKA_INSIGHTS` in `insights-data.js`:
   ```js
   {
     "id": "gstcouncil55",
     "category": "GST",            // one of the keys in PDKA_CATEGORIES
     "topic": "GST",               // short label shown on the card
     "date": "2026-10-12",         // YYYY-MM-DD
     "title": "…",
     "summary": "One or two plain sentences.",
     "readMins": 4,
     "status": "published",        // published | hold | draft
     "sources": [{ "label": "CBIC Notification 12/2026", "url": "https://…" }]
   }
   ```
3. Commit. The site updates by itself a minute or two later.

`status: "hold"` or `"draft"` keeps an article in the repository but hides it from the site.

## Weekly drafts
A weekly automatic task prepares one draft as a **pull request** (status `draft`). Nothing goes live until
the pull request is reviewed and merged. Before merging, change `"status": "draft"` to `"published"`.

## ICAI rules for every article
Informational only. No client names, testimonials, fees, comparisons or claims of being best/leading,
no promotion of the firm or its services, no calls to action. Cite official sources. A partner should approve
each article before it is published.
