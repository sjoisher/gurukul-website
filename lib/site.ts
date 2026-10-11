// Facts that are the same in every language.

export const site = {
  url: "https://vedicgurukul.com",
  phone: "8305209795",
  phoneIntl: "+918305209795",
  phone2: "9773481979",
  email: "vaidikgurukulbhavanipur@gmail.com",
  postcode: "370650",
  youtubeId: "6ffKm1a-gpU",
  liveStreams: ["wxSy2VXsEjY", "5-KbXu5-Bj8", "aO6_0vZF3-g"],
  reels: ["DeEKOflgAtR", "DcWFfDnSzHI"],
  enquiryFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScb3X70igy6hgxaL_7_wo-KGKDukis0lK3ID9bgjSE202qkqA/viewform",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Sant Shri Odhavram Vaidic Gurukul, Bhavanipar, Abdasa, Kutch, Gujarat 370650"),
  bank: {
    accountNumber: "00801010005422",
    ifsc: "JSBL0000008",
  },
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.phoneIntl.replace("+", "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const gallery = [
  { n: 1, w: 1280, h: 960 },
  { n: 2, w: 1400, h: 931 },
  { n: 3, w: 1280, h: 960 },
  { n: 4, w: 976, h: 732 },
  { n: 5, w: 976, h: 732 },
  { n: 6, w: 1280, h: 960 },
  { n: 7, w: 1280, h: 884 },
  { n: 8, w: 1280, h: 960 },
  { n: 9, w: 960, h: 1280 },
  { n: 10, w: 908, h: 1129 },
  { n: 11, w: 1280, h: 960 },
  { n: 12, w: 1400, h: 1054 },
  { n: 13, w: 1400, h: 1054 },
  { n: 14, w: 1280, h: 960 },
  { n: 15, w: 1200, h: 1600 },
  { n: 16, w: 1326, h: 995 },
  { n: 17, w: 1024, h: 768 },
  { n: 18, w: 1025, h: 769 },
  { n: 19, w: 1025, h: 769 },
  { n: 20, w: 1400, h: 788 },
] as const;

// Science & robotics clips (portrait, 478×850), shared from the Gurukul's WhatsApp.
export const stemVideos = [
  { n: 1, seconds: 16 },
  { n: 2, seconds: 22 },
  { n: 3, seconds: 57 },
  { n: 4, seconds: 37 },
  { n: 5, seconds: 9 },
  { n: 6, seconds: 7 },
  { n: 7, seconds: 47 },
  { n: 8, seconds: 5 },
  { n: 9, seconds: 4 },
  { n: 10, seconds: 54 },
  { n: 11, seconds: 5 },
  { n: 12, seconds: 37 },
  { n: 13, seconds: 35 },
] as const;
