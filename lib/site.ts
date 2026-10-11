// Facts that are the same in every language. Contact details and video links
// are edited at /admin and stored in content/*.json.

import contact from "@/content/contact.json";
import videos from "@/content/videos.json";

const digits = (s: string) => s.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");

export const site = {
  url: "https://vedicgurukul.com",
  phone: digits(contact.phone),
  phoneIntl: `+91${digits(contact.phone)}`,
  phone2: digits(contact.phone2),
  email: contact.email.trim(),
  postcode: "370650",
  youtubeId: videos.featuredYoutubeId,
  liveStreams: videos.liveStreams.map((v) => v.youtubeId),
  reels: videos.reels.map((v) => v.instagramId),
  enquiryFormUrl: contact.enquiryFormUrl,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Sant Shri Odhavram Vaidic Gurukul, Bhavanipar, Abdasa, Kutch, Gujarat 370650"),
  bank: {
    accountNumber: contact.bank.accountNumber.trim(),
    ifsc: contact.bank.ifsc.trim(),
  },
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.phoneIntl.replace("+", "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
