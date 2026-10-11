# Gurukul website

Static site for Gurukul, built with Next.js 14 (static export) and Tailwind CSS.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out — upload its contents to any web host
npm run check:launch # fails if placeholder details are still in the content
```

## Pages

| Path | What's on it |
|---|---|
| `/` | Hero with shloka of the week, four pillars, programs, a typical session, approach, festivals, FAQ, call to action |
| `/about/` | Story, mission/vision/promise, pillars, what we look for in teachers |
| `/programs/` and `/programs/<slug>/` | All seven programs, each with its own page (outcomes, format, enquiry link) |
| `/calendar/` | Weekly class timings, the rhythm of a session, festivals through the year |
| `/admissions/` | Four-step process, free trial enquiry form, full FAQ (with FAQ rich-result markup) |
| `/contact/` | Phone, WhatsApp, email, address, hours, enquiry form, optional map |

## Editing content

- **`lib/site.ts`** holds the gurukul's own details: name, contact details, address, class timings, map and social links. Values marked `PLACEHOLDER` (and the `00000` phone numbers) must be replaced before launch. `npm run build` lists any that remain.
- **`lib/content.ts`** holds programs, pillars, FAQs, festivals, the sample session and admission steps. Adding a program here creates its page, its card, its footer link, its form option and its sitemap entry.

## Enquiry form

With no configuration, the form opens the visitor's email client addressed to `site.email`. To receive submissions directly, set `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.local.example`) to a form service URL such as Formspree, and rebuild.
