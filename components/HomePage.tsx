import {
  ArrowRight,
  BookOpen,
  Clock,
  Cpu,
  Download,
  HandHeart,
  ExternalLink,
  HeartHandshake,
  Instagram,
  Landmark,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Music,
  Phone,
  ScrollText,
  Sparkles,
  Sun,
  Wrench,
  Youtube,
} from "lucide-react";
import { dict, htmlLang, type Lang } from "@/lib/i18n";
import { site, stemVideos, whatsappLink } from "@/lib/site";
import { CopyButton } from "./CopyButton";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Header } from "./Header";
import { Video } from "./Video";

const learningIcons = [ScrollText, Monitor, Sun, Music];
const missionIcons = [BookOpen, Lightbulb, Leaf, Wrench, HandHeart];

function Heading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const tel = (n: string) => `tel:+91${n}`;
  const label = (id: string) => t.nav.find((n) => n.id === id)?.label;

  return (
    <div lang={htmlLang[lang]} id="top">
      <Header lang={lang} t={t} />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-earth-dark text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/14.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
            fetchPriority="high"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-earth-dark via-earth-dark/80 to-earth-dark/20" />
          <div className="container-page py-20 sm:py-28 lg:py-36">
            <p className="text-sm font-semibold tracking-[0.2em] text-saffron-light">{t.motto}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-6xl">{t.name}</h1>
            <p className="mt-3 text-lg text-saffron-light sm:text-xl">{t.place}</p>
            <p className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">{t.hero.slogan}</p>
            <p className="mt-1 text-white/80">{t.hero.subSlogan}</p>
            <p className="mt-5 max-w-2xl font-display text-lg italic text-white/90 sm:text-xl">{t.hero.tagline}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{t.hero.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#visit" className="btn-primary">
                {t.hero.ctaVisit} <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#support" className="btn-light">
                <HeartHandshake className="h-4 w-4" /> {t.hero.ctaSupport}
              </a>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="border-b border-sand bg-white">
          <dl className="container-page grid grid-cols-2 divide-sand py-8 lg:grid-cols-4 lg:divide-x">
            {t.glance.map((g) => (
              <div key={g.label} className="px-4 py-4 text-center">
                <dt className="sr-only">{g.label}</dt>
                <dd className="font-display text-3xl font-semibold text-earth sm:text-4xl">{g.value}</dd>
                <dd className="mt-1 text-sm text-muted">{g.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading eyebrow={label("about")} title={t.about.heading} />
              <p className="lead">{t.about.body}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t.about.infraHeading}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {t.about.infra.map((x) => (
                    <li key={x} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-earth ring-1 ring-sand">{x}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm text-muted">{t.trust.intro}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/7-sm.jpg" alt={t.gallery.captions[6]} width={600} height={414} loading="lazy" className="col-span-2 h-60 w-full rounded-2xl object-cover sm:h-72" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/5-sm.jpg" alt={t.gallery.captions[4]} width={600} height={450} loading="lazy" className="h-40 w-full rounded-2xl object-cover sm:h-48" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gallery/9-sm.jpg" alt={t.gallery.captions[8]} width={600} height={800} loading="lazy" className="h-40 w-full rounded-2xl object-cover sm:h-48" />
            </div>
          </div>
        </section>

        {/* Parampara */}
        <section className="section border-y border-sand bg-white">
          <div className="container-page">
            <Heading center title={t.parampara.heading} intro={t.parampara.intro} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/banner.jpg"
              alt={`${t.name} — ${t.parampara.people.map((p) => p.name).join(", ")}`}
              width={1742}
              height={516}
              loading="lazy"
              className="mx-auto mt-10 w-full max-w-5xl rounded-2xl border border-sand"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {t.parampara.people.map((p) => (
                <li key={p.name} className="rounded-2xl bg-parchment p-5">
                  <p className="font-display text-lg font-semibold text-earth">{p.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="section">
          <div className="container-page">
            <Heading eyebrow={label("vision")} title={t.vision.heading} />
            <blockquote className="mt-8 max-w-4xl border-l-4 border-saffron pl-6 font-display text-2xl leading-snug text-earth sm:text-3xl">
              {t.vision.statement}
            </blockquote>

            <h3 className="mt-14 font-display text-2xl font-semibold">{t.vision.missionHeading}</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {t.vision.mission.map((m, i) => {
                const Icon = missionIcons[i];
                return (
                  <li key={m.title} className="card p-5 text-center">
                    <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-saffron-light text-earth">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 font-display text-lg font-semibold uppercase tracking-wide text-vermilion">{m.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{m.text}</p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-6 text-center font-medium text-earth">{t.vision.missionLine}</p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted">{t.vision.nature}</p>
              <p className="text-lg leading-relaxed text-muted">{t.vision.campusOrganism}</p>
            </div>

            <div className="mt-12 rounded-3xl bg-earth px-6 py-10 text-center text-white sm:px-12">
              <p className="eyebrow !text-saffron-light">{t.vision.philosophyLabel}</p>
              <p className="mt-3 font-display text-3xl font-semibold sm:text-4xl" lang="sa">{t.vision.philosophy}</p>
              <p className="mt-2 text-lg text-white/80">{t.vision.philosophyMeaning}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="card p-7">
                <h3 className="font-display text-xl font-semibold">{t.vision.childHeading}</h3>
                <ul className="mt-5 space-y-3">
                  {t.vision.child.map((c) => (
                    <li key={c} className="flex gap-3 text-muted">
                      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-saffron" /> {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-sand pt-5 text-ink">{t.vision.childLine}</p>
              </div>
              <div className="card p-7">
                <h3 className="font-display text-xl font-semibold">{t.vision.campusHeading}</h3>
                <ul className="mt-5 space-y-3">
                  {t.vision.campus.map((c) => (
                    <li key={c} className="flex gap-3 text-muted">
                      <Sparkles className="mt-1 h-4 w-4 shrink-0 text-leaf" /> {c}
                    </li>
                  ))}
                </ul>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/20-sm.jpg" alt={t.gallery.captions[19]} width={600} height={338} loading="lazy" className="mt-6 h-40 w-full rounded-xl object-cover" />
              </div>
            </div>

            <p className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl font-semibold leading-snug text-earth sm:text-3xl">
              {t.vision.closing}
            </p>
          </div>
        </section>

        {/* Learning */}
        <section id="learning" className="section bg-sand/60">
          <div className="container-page">
            <Heading eyebrow={label("learning")} title={t.learning.heading} intro={t.learning.intro} />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {t.learning.areas.map((a) => (
                <li key={a.title} className="rounded-2xl border border-earth/15 bg-parchment p-5">
                  <p className="font-display text-lg font-semibold text-vermilion">{a.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.points}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.learning.items.map((item, i) => {
                const Icon = learningIcons[i];
                return (
                  <div key={item.title} className="card p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-earth text-saffron-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Science & robotics */}
        <section id="science" className="section">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <Heading eyebrow={label("science")} title={t.stem.heading} intro={t.stem.intro} />
              <ul className="grid grid-cols-2 gap-3">
                {t.stem.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 rounded-xl bg-white p-4 text-sm font-medium shadow-sm ring-1 ring-sand">
                    <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4 xl:grid-cols-5">
              {stemVideos.map((v, i) => (
                <li key={v.n} className="w-[62vw] max-w-[260px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                  <figure>
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={`/videos/stem-${v.n}.jpg`}
                      width={478}
                      height={850}
                      className="aspect-[9/16] w-full rounded-2xl bg-ink object-cover"
                      aria-label={t.stem.captions[i]}
                    >
                      <source src={`/videos/stem-${v.n}.mp4`} type="video/mp4" />
                    </video>
                    <figcaption className="mt-2 text-sm leading-snug text-muted">
                      {t.stem.captions[i]} <span className="text-muted/60">· {v.seconds}s</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dinacharya */}
        <section id="dinacharya" className="section">
          <div className="container-page">
            <Heading eyebrow={label("dinacharya")} title={t.dinacharya.heading} intro={t.dinacharya.intro} />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div className="card overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-earth text-sm text-white">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">{t.dinacharya.timeCol}</th>
                      <th scope="col" className="px-5 py-3 font-semibold">{t.dinacharya.activityCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand">
                    {t.dinacharya.rows.map((r) => (
                      <tr key={r.time + r.activity} className="even:bg-parchment">
                        <td className="whitespace-nowrap px-5 py-3 font-mono text-sm text-saffron-dark">{r.time}</td>
                        <td className="px-5 py-3">{r.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="flex items-start gap-2.5 border-t border-sand bg-saffron-light/50 px-5 py-4 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-saffron-dark" /> {t.dinacharya.contemplation}
                </p>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-display text-lg font-semibold">{t.dinacharya.classesHeading}</h3>
                  <ul className="mt-4 divide-y divide-sand">
                    {t.dinacharya.classes.map((c) => (
                      <li key={c.subject} className="flex justify-between gap-4 py-2.5">
                        <span className="font-medium">{c.subject}</span>
                        <span className="text-right text-muted">{c.days}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card p-6">
                  <h3 className="font-display text-lg font-semibold">{t.dinacharya.sportsHeading}</h3>
                  <table className="mt-4 w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th scope="col">{t.dinacharya.dayCol}</th>
                        <th scope="col">{t.dinacharya.sportCol}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sand">
                      {t.dinacharya.sports.map((s) => (
                        <tr key={s.day}>
                          <td className="py-2.5 pr-4 font-medium">{s.day}</td>
                          <td className="py-2.5 text-right text-muted">{s.sport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a href="/documents/Dinacharya.pdf" target="_blank" rel="noopener" className="btn-secondary w-full">
                  <Download className="h-4 w-4" /> {t.dinacharya.pdf}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section className="section border-y border-sand bg-white">
          <div className="container-page">
            <Heading title={t.teachers.heading} intro={t.teachers.intro} />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {t.teachers.people.map((p) => (
                <li key={p.name} className="flex gap-4 rounded-2xl bg-parchment p-6">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-saffron-light text-earth">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading eyebrow={label("gallery")} title={t.gallery.heading} intro={t.gallery.intro} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary self-start md:self-auto">
                <MessageCircle className="h-4 w-4" /> {t.gallery.more}
              </a>
            </div>
            <div className="mt-10">
              <Gallery captions={t.gallery.captions} labels={t.gallery} />
            </div>
          </div>
        </section>

        {/* Media */}
        <section id="media" className="section bg-earth-dark text-white">
          <div className="container-page">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.media.heading}</h2>
              <p className="mt-4 text-lg text-white/75">{t.media.intro}</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <Video id={site.youtubeId} title={t.video.heading} play={t.video.play} />
                <p className="mt-3 font-medium">{t.video.heading}</p>
              </div>
              <div className="grid gap-4">
                {site.liveStreams.map((id, i) => (
                  <a
                    key={id}
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="" width={160} height={90} loading="lazy" className="w-32 shrink-0 rounded-lg bg-white/10 object-cover" />
                    <span>
                      <span className="block font-medium">{t.media.live} {i + 1}</span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-white">
                        <Youtube className="h-4 w-4" /> {t.media.watchYoutube}
                      </span>
                    </span>
                  </a>
                ))}
                {site.reels.map((id, i) => (
                  <a
                    key={id}
                    href={`https://www.instagram.com/reel/${id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10"
                  >
                    <span className="flex h-[72px] w-32 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-saffron via-vermilion to-earth">
                      <Instagram className="h-7 w-7" />
                    </span>
                    <span>
                      <span className="block font-medium">{t.media.reel} {i + 1}</span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-white">
                        <ExternalLink className="h-4 w-4" /> {t.media.watchInstagram}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="section">
          <div className="container-page">
            <Heading title={t.trust.heading} intro={t.trust.intro} />
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.trust.facts.map((f) => (
                <div key={f.label} className="card p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-earth">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="card p-7">
                <h3 className="font-display text-xl font-semibold">{t.trust.objectivesHeading}</h3>
                <p className="mt-1 text-sm text-saffron-dark">{t.motto}</p>
                <ol className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {t.trust.objectives.map((o, i) => (
                    <li key={o} className="flex gap-3 text-sm text-muted">
                      <span className="w-5 shrink-0 font-semibold text-earth">{i + 1}.</span> {o}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="card p-7">
                <h3 className="font-display text-xl font-semibold">{t.trust.trusteesHeading}</h3>
                <ol className="mt-5 space-y-2.5">
                  {t.trust.trustees.map((name, i) => (
                    <li key={name} className="flex flex-wrap items-baseline gap-x-3 text-sm">
                      <span className="w-5 shrink-0 font-semibold text-earth">{i + 1}.</span>
                      <span className="font-medium">{name}</span>
                      {i === 0 && <span className="rounded-full bg-saffron-light px-2.5 py-0.5 text-xs font-semibold text-earth">{t.trust.founderRole}</span>}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Building the future */}
        <section id="future" className="section bg-earth-dark text-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="eyebrow !text-saffron-light">{label("future")}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t.future.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{t.future.intro}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <h3 className="font-display text-xl font-semibold">{t.future.themesHeading}</h3>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {t.future.themes.map((th, i) => (
                    <li key={th} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                      <span className="font-display text-lg font-semibold text-saffron">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-medium">{th}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3 rounded-xl bg-saffron px-5 py-4 text-white">
                  <span className="text-sm font-semibold uppercase tracking-wider">{t.future.totalLabel}</span>
                  <span className="font-display text-3xl font-semibold">{t.future.total}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <h3 className="font-display text-xl font-semibold">{t.future.planHeading}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.future.plan.map((x) => (
                    <li key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-sm">{x}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-white/60">{t.future.planNote}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 rounded-2xl bg-white p-7 text-ink lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-earth">
                  <Cpu className="h-6 w-6 text-saffron" /> {t.future.centreHeading}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{t.future.centreIntro}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {t.future.centreItems.map((x) => (
                    <li key={x} className="flex gap-2.5 text-sm"><Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> {x}</li>
                  ))}
                </ul>
              </div>
              <dl className="grid content-start gap-3">
                {t.future.centreFacts.map((f) => (
                  <div key={f.label} className="rounded-xl bg-parchment px-5 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-earth">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <h3 className="mt-14 font-display text-2xl font-semibold">{t.future.levelsHeading}</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {t.future.levels.map((l) => (
                <li key={l.title} className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
                  <p className="font-display text-lg font-semibold">{l.title}</p>
                  <p className="mx-auto mt-3 w-fit rounded-lg bg-saffron-light px-4 py-1.5 font-display text-2xl font-semibold text-earth">{l.amount}</p>
                  <p className="mt-3 text-sm text-white/75">{l.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/60">{t.future.levelsNote}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappLink(t.future.cta)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-4 w-4" /> {t.future.cta}
              </a>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("CSR partnership")}`} className="btn-light">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </div>
        </section>

        {/* Support */}
        <section id="support" className="section border-y border-sand bg-sand/60">
          <div className="container-page">
            <Heading eyebrow={label("support")} title={t.support.heading} intro={t.support.intro} />
            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
              <div className="card flex flex-col items-center p-7 text-center">
                <h3 className="font-display text-xl font-semibold">{t.support.qrHeading}</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/donation-qr.png" alt={t.support.qrHeading} width={950} height={690} loading="lazy" className="mt-5 w-full max-w-[280px] rounded-lg" />
                <p className="mt-4 text-sm text-muted">{t.support.qrNote}</p>
              </div>
              <div className="card p-7">
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                  <Landmark className="h-5 w-5 text-saffron" /> {t.support.bankHeading}
                </h3>
                <dl className="mt-5 divide-y divide-sand">
                  {[
                    { label: t.support.bankLabel, value: t.support.bankName },
                    { label: t.support.accountNameLabel, value: t.support.accountName },
                    { label: t.support.accountNumberLabel, value: site.bank.accountNumber, copy: true },
                    { label: t.support.ifscLabel, value: site.bank.ifsc, copy: true },
                  ].map((row) => (
                    <div key={row.label} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                      <dt className="text-sm text-muted">{row.label}</dt>
                      <dd className="flex items-center gap-3 font-medium">
                        <span className={row.copy ? "font-mono tracking-wide" : ""}>{row.value}</span>
                        {row.copy && <CopyButton value={row.value} label={t.support.copy} copied={t.support.copied} />}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 rounded-xl bg-leaf/10 px-4 py-3 text-sm font-medium text-leaf">{t.support.tax}</p>
                <p className="mt-5 text-sm text-muted">{t.support.acknowledge}</p>
                <a
                  href={whatsappLink(t.support.acknowledgeMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4"
                >
                  <MessageCircle className="h-4 w-4" /> {t.support.acknowledgeCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visit & contact */}
        <section id="visit" className="section">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div id="contact">
              <Heading eyebrow={label("contact")} title={t.visit.heading} intro={t.visit.intro} />
              <ul className="mt-8 space-y-4">
                <li className="card flex gap-4 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t.contact.addressLabel}</p>
                    <address className="mt-1 not-italic">
                      {t.contact.address.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </address>
                    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-earth hover:underline">
                      {t.contact.directions} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </li>
                <li className="card flex gap-4 p-5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t.contact.phoneLabel}</p>
                    <p className="mt-1 flex flex-wrap gap-x-4 font-medium">
                      <a href={tel(site.phone)} className="hover:text-earth">{site.phone}</a>
                      <a href={tel(site.phone2)} className="hover:text-earth">{site.phone2}</a>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a href={tel(site.phone)} className="btn-secondary !px-4 !py-2"><Phone className="h-4 w-4" /> {t.contact.call}</a>
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                    </div>
                  </div>
                </li>
                <li className="card flex gap-4 p-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-saffron" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t.contact.emailLabel}</p>
                    <a href={`mailto:${site.email}`} className="mt-1 block break-all font-medium hover:text-earth">{site.email}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-sand px-6 py-4">
                <h3 className="font-display text-xl font-semibold">{t.visit.formHeading}</h3>
                <a href={site.enquiryFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-earth hover:underline">
                  <span className="hidden sm:inline">{t.visit.openForm}</span> <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <iframe
                src={`${site.enquiryFormUrl}?embedded=true`}
                title={t.visit.formHeading}
                loading="lazy"
                className="h-[900px] w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} t={t} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: dict.en.name,
            alternateName: [dict.hi.name, dict.gu.name],
            url: site.url,
            logo: `${site.url}/images/logo.png`,
            image: `${site.url}/images/og.jpg`,
            email: site.email,
            telephone: [`+91${site.phone}`, `+91${site.phone2}`],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bhavanipar, Taluka Abdasa",
              addressLocality: "Kutch (Bhuj)",
              addressRegion: "Gujarat",
              postalCode: site.postcode,
              addressCountry: "IN",
            },
            parentOrganization: { "@type": "NGO", name: "Shri Nityanand Shivanand Saraswati Yog Niketan Trust", foundingDate: "1993" },
          }),
        }}
      />
    </div>
  );
}
