# Sant Shri Odhavram Vaidic Gurukul — website

Trilingual static site for the Gurukul at Bhavanipar, Kutch: English at `/`, Hindi at `/hi/`, Gujarati at `/gu/`. Built with Next.js 14 (static export) and Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out — upload its contents to the web host
```

## Sections

Hero · at a glance · about · inspiration (the five figures on the banner) · vision · learning & activities · science, technology & robotics (videos) · daily dinacharya (full timetable, skill classes, sports rota, PDF) · teachers · gallery (with lightbox) · media & live (YouTube video, live streams, Instagram reels) · news & events · the Trust (registration, 80G, objectives, trustees) · building the future (CSR) · support & donations (QR, bank details with copy buttons) · visit & contact (address, phones, email, directions, Google Form).

## Editing content at /admin

These sections are edited in a browser at **vaidikgurukul.org/admin** (Sveltia CMS), with English, Hindi and Gujarati side by side:

News & events · numbers at a glance · teachers · trustees · gallery · videos (main YouTube video, live streams, Instagram reels, science clips) · CSR figures · contact and bank details.

Saving in the editor commits to `main`, and every push to `main` deploys, so a change is live about 3 minutes later (see Actions → Deploy). English is required; a blank Hindi or Gujarati field shows the English text.

**Signing in.** The editor signs in with a GitHub token (no login server needed):

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token.
2. Repository access: **Only select repositories** → `sjoisher/gurukul-website`.
3. Permissions → Repository permissions → **Contents: Read and write**.
4. Copy the token, open `/admin`, choose **Sign In Using Access Token** and paste it. The browser remembers it; create a new one when it expires.

To add more editors later, set up the [Sveltia CMS GitHub OAuth worker](https://github.com/sveltia/sveltia-cms-auth) and add its URL as `base_url` in `public/admin/config.yml`, so each editor signs in with their GitHub account.

**Photos.** Upload any size; originals are stored in `content/photos/` (never deployed) and `scripts/media.mjs` makes a 600 px and a 1600 px copy in `public/images/generated/` on every build. The hero, about and vision sections use gallery photos 5, 7, 9, 14 and 20 (`/photos/gallery/N.jpg`), so keep those files even if you take them out of the gallery.

**Videos.** Science clips go in `public/videos/` and are served as uploaded: keep each MP4 under about 20 MB.

## Where things live

| What | File |
|---|---|
| Content edited at /admin | `content/*.json`, `content/news/*.json` |
| How those files are read | `lib/content.ts` |
| Editor configuration | `public/admin/config.yml` |
| All other page text, in all three languages | `lib/i18n.ts` |
| Site URL, map link; contact and video settings from `content/` | `lib/site.ts` |
| Page layout | `components/HomePage.tsx` |
| Original photos | `content/photos/` |
| Science videos and their poster frames | `public/videos/` |
| Dinacharya PDF | `public/documents/Dinacharya.pdf` |

## Sources

Content comes from the previous gurukul.joisher.com page (the site now lives at vaidikgurukul.org; it was briefly set up as vedicgurukul.com), the Dinacharya PDF, the Trust letterhead (trustee list) and videos shared on WhatsApp. Text that was new in this version is marked `NEW` in `lib/i18n.ts` and should be read by a native Hindi and Gujarati speaker.

## Deploying to vaidikgurukul.org

The site is hosted on cPanel (`bh-20.webhostbox.net`) and deployed by the **Deploy** GitHub Actions workflow, which builds the site and uploads `out/` over FTPS.

1. In cPanel → **FTP Accounts**, create an account whose directory is vaidikgurukul.org's document root.
2. In GitHub → Settings → Secrets and variables → Actions, add `FTP_HOST` (`bh-20.webhostbox.net`), `FTP_USER` and `FTP_PASSWORD`.
3. Every push to `main` deploys automatically. To test without uploading, run Actions → **Deploy** → Run workflow with `dry_run` = `true`.
4. After uploading, the last step asks the server for vaidikgurukul.org directly, so it works before DNS has moved.
5. Once DNS points at the server and AutoSSL has issued a certificate, turn on cPanel → Domains → **Force HTTPS Redirect**.

`public/.htaccess` ships with the site: www → apex redirect, hidden dotfiles, caching and gzip.
