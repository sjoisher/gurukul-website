/**
 * Everything specific to this gurukul lives here.
 *
 * Values marked PLACEHOLDER were not available when the site was built and
 * must be replaced with the real details before launch. `npm run build`
 * lists every placeholder still in use (scripts/check-placeholders.mjs).
 */

export const site = {
  name: "Gurukul",
  tagline: "Rooted in tradition. Growing with confidence.",
  description:
    "A gurukul for children and families: Indian values, languages, shlokas, music, yoga and the arts, taught with warmth in small groups.",
  url: "https://gurukul.joisher.com",

  // PLACEHOLDER — contact details
  email: "hello@gurukul.joisher.com",
  phone: "+91 00000 00000",
  whatsapp: "910000000000", // digits only, with country code
  address: {
    line1: "PLACEHOLDER — building / street",
    line2: "PLACEHOLDER — area",
    city: "PLACEHOLDER — city",
    postcode: "000000",
    country: "India",
  },
  // A Google Maps "share → embed" URL. Leave empty to hide the map.
  mapEmbedUrl: "",

  // PLACEHOLDER — when classes run
  sessions: [
    { day: "Saturday", time: "4:00 pm – 6:30 pm" },
    { day: "Sunday", time: "9:30 am – 12:30 pm" },
  ],

  founded: "PLACEHOLDER — year",

  social: {
    instagram: "",
    youtube: "",
    facebook: "",
  },
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/programs/", label: "Programs" },
  { href: "/calendar/", label: "Calendar" },
  { href: "/admissions/", label: "Admissions" },
  { href: "/contact/", label: "Contact" },
];

export function whatsappLink(message = "Namaste! I'd like to know more about Gurukul classes.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function fullAddress() {
  const a = site.address;
  return [a.line1, a.line2, `${a.city} ${a.postcode}`, a.country].join(", ");
}
