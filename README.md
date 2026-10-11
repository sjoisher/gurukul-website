# Sant Shri Odhavram Vaidic Gurukul — website

Trilingual static site for the Gurukul at Bhavanipar, Kutch: English at `/`, Hindi at `/hi/`, Gujarati at `/gu/`. Built with Next.js 14 (static export) and Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out — upload its contents to the web host
```

## Sections

Hero · at a glance · about · inspiration (the five figures on the banner) · vision · learning & activities · science, technology & robotics (13 videos) · daily dinacharya (full timetable, skill classes, sports rota, PDF) · teachers · gallery (20 photos with lightbox) · media & live (YouTube video, live streams, Instagram reels) · the Trust (registration, 80G, objectives, trustees) · support & donations (QR, bank details with copy buttons) · visit & contact (address, phones, email, directions, Google Form).

## Where things live

| What | File |
|---|---|
| All page text, in all three languages | `lib/i18n.ts` |
| Phone numbers, email, bank numbers, video IDs, gallery list | `lib/site.ts` |
| Page layout | `components/HomePage.tsx` |
| Photos (`N.jpg` full size, `N-sm.jpg` grid) | `public/images/gallery/` |
| Science videos and their poster frames | `public/videos/` |
| Dinacharya PDF | `public/documents/Dinacharya.pdf` |

To add a photo: save it as `public/images/gallery/21.jpg` (about 1400 px wide) and `21-sm.jpg` (600 px wide), add `{ n: 21, w, h }` to `gallery` in `lib/site.ts`, and add a caption at the end of `gallery.captions` for each language in `lib/i18n.ts`.

## Sources

Content comes from the previous gurukul.joisher.com page (the site now lives at vedicgurukul.com), the Dinacharya PDF, the Trust letterhead (trustee list) and videos shared on WhatsApp. Text that was new in this version is marked `NEW` in `lib/i18n.ts` and should be read by a native Hindi and Gujarati speaker.

## Deploying to vedicgurukul.com

The site is hosted on cPanel (`bh-20.webhostbox.net`) and deployed by the **Deploy** GitHub Actions workflow, which builds the site and uploads `out/` over FTPS.

1. In cPanel → **FTP Accounts**, create an account whose directory is vedicgurukul.com's document root.
2. In GitHub → Settings → Secrets and variables → Actions, add `FTP_HOST` (`bh-20.webhostbox.net`), `FTP_USER` and `FTP_PASSWORD`.
3. Actions → **Deploy** → Run workflow, with `dry_run` = `true`. Check the log lists the files you expect.
4. Run it again with `dry_run` = `false`. The last step asks the server for vedicgurukul.com directly, so it works before DNS has moved.
5. Once DNS points at the server and AutoSSL has issued a certificate, turn on cPanel → Domains → **Force HTTPS Redirect**.

`public/.htaccess` ships with the site: www → apex redirect, hidden dotfiles, caching and gzip.
