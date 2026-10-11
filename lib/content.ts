import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  HandHeart,
  Languages,
  Music,
  Palette,
  ScrollText,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

export type Program = {
  slug: string;
  name: string;
  sanskrit?: string;
  ages: string;
  summary: string;
  icon: LucideIcon;
  outcomes: string[];
  format: string;
  description: string[];
};

export const programs: Program[] = [
  {
    slug: "bal-sanskar",
    name: "Bal Sanskar",
    sanskrit: "बाल संस्कार",
    ages: "Ages 5–8",
    icon: Flower2,
    summary:
      "Stories, prayers, games and festival crafts that give young children a joyful first connection with Indian culture.",
    format: "Weekly, 75 minutes · small groups of up to 12",
    outcomes: [
      "Learns 10–15 simple shlokas and prayers by heart",
      "Knows the key stories of the Ramayana, Mahabharata and Panchatantra",
      "Understands why we celebrate the major festivals",
      "Practises daily habits: greeting elders, gratitude, sharing",
    ],
    description: [
      "Bal Sanskar is where most children begin. Every session opens with a short prayer and moves through a story, a shloka, an activity and a closing reflection, so even the youngest children know what to expect and settle quickly.",
      "We teach values through stories rather than lectures. A child who has acted out Shravan Kumar carrying his parents understands respect for elders far better than one who has been told about it.",
    ],
  },
  {
    slug: "shlokas-and-sanskrit",
    name: "Shlokas & Sanskrit",
    sanskrit: "श्लोक एवं संस्कृत",
    ages: "Ages 8–14",
    icon: ScrollText,
    summary:
      "Correct pronunciation, Devanagari reading and the meaning behind the verses, from daily prayers to chapters of the Bhagavad Gita.",
    format: "Weekly, 60 minutes · graded levels",
    outcomes: [
      "Reads and writes Devanagari confidently",
      "Chants with correct uccharan (pronunciation) and rhythm",
      "Can explain the meaning of each verse in their own words",
      "Recites selected chapters of the Bhagavad Gita",
    ],
    description: [
      "Students move through graded levels, starting with the Devanagari script and simple stotras and progressing to Gita chapters and Sanskrit grammar basics.",
      "Meaning always comes with memorisation. Each verse is broken down word by word and connected to something in the child's own life, so chanting becomes understanding rather than recitation.",
    ],
  },
  {
    slug: "indian-languages",
    name: "Indian Languages",
    ages: "Ages 6+",
    icon: Languages,
    summary:
      "Speak, read and write the language of home, so children can talk to grandparents and enjoy stories, songs and films in it.",
    format: "Weekly, 60 minutes · beginner to advanced",
    outcomes: [
      "Holds everyday conversations with family",
      "Reads children's books and simple news",
      "Writes short letters, messages and stories",
      "Builds vocabulary through songs, rhymes and games",
    ],
    description: [
      "Language classes are conversation-first. Children speak from the very first session, through role-play, show-and-tell and games, before formal reading and writing are layered on.",
      "Batches are grouped by ability rather than age, so a child is never held back or left behind.",
    ],
  },
  {
    slug: "yoga-and-mindfulness",
    name: "Yoga & Mindfulness",
    sanskrit: "योग",
    ages: "Ages 6+",
    icon: Sun,
    summary:
      "Asanas, pranayama and short guided meditations that build strength, focus and calm in a fun, age-appropriate way.",
    format: "Weekly, 45 minutes",
    outcomes: [
      "Practises a safe, complete sequence including Surya Namaskar",
      "Uses breathing techniques to manage stress and exam nerves",
      "Improves posture, flexibility and balance",
      "Sits in silent focus for 5–10 minutes",
    ],
    description: [
      "Yoga at Gurukul is playful for the little ones (animal poses, story-yoga) and progressively more structured for older children.",
      "Every class ends with a few minutes of stillness. Parents often tell us this is the part their children ask to do at home.",
    ],
  },
  {
    slug: "music-and-bhajans",
    name: "Music & Bhajans",
    sanskrit: "संगीत",
    ages: "Ages 6+",
    icon: Music,
    summary:
      "Bhajans, devotional songs and the foundations of Indian classical music: swaras, ragas and taal.",
    format: "Weekly, 60 minutes",
    outcomes: [
      "Sings sargam and simple alankars in tune",
      "Recognises common ragas and keeps taal",
      "Leads a bhajan at our festival celebrations",
      "Gains confidence performing in front of an audience",
    ],
    description: [
      "Music classes build the ear before the repertoire, with sargam, rhythm games and call-and-response singing.",
      "Students perform at every major festival celebration, which gives them a real goal to work towards and a lot of pride when they get there.",
    ],
  },
  {
    slug: "arts-and-crafts",
    name: "Arts & Crafts",
    ages: "Ages 5–12",
    icon: Palette,
    summary:
      "Rangoli, mandala, diya painting, rakhi making and other traditional crafts, timed to the festival calendar.",
    format: "Fortnightly, 60 minutes",
    outcomes: [
      "Learns traditional Indian art forms and their stories",
      "Develops fine motor skills and patience",
      "Makes festival decorations and gifts for family",
      "Displays work at our seasonal exhibitions",
    ],
    description: [
      "Each craft is tied to a festival or story, so children learn the why as well as the how: why we light diyas at Diwali, what a rangoli at the doorway means.",
      "Most projects go home with the child, ready for the family's own celebration.",
    ],
  },
  {
    slug: "gita-for-teens",
    name: "Gita for Teens",
    sanskrit: "गीता",
    ages: "Ages 13–18",
    icon: BookOpen,
    summary:
      "Open, discussion-led sessions applying the Bhagavad Gita to real teenage life: exams, friendships, decisions and purpose.",
    format: "Fortnightly, 75 minutes · discussion circle",
    outcomes: [
      "Understands the core ideas of karma, dharma and svadharma",
      "Discusses questions openly in a judgement-free circle",
      "Applies Gita principles to study, stress and relationships",
      "Builds public speaking through short talks",
    ],
    description: [
      "Teenagers ask hard questions, and they deserve real answers. This is a discussion circle, not a lecture. Each session takes one idea from the Gita and works through how it applies to something students are dealing with now.",
      "Older students also mentor in the Bal Sanskar class, which is often where they discover how much they have learned.",
    ],
  },
];

export const pillars = [
  {
    icon: HandHeart,
    title: "Sanskar",
    subtitle: "Values",
    text: "Respect, gratitude, honesty and seva, learned through stories and lived in the classroom.",
  },
  {
    icon: ScrollText,
    title: "Vidya",
    subtitle: "Knowledge",
    text: "Shlokas, scriptures, languages and the meaning behind our traditions, not just the ritual.",
  },
  {
    icon: Sparkles,
    title: "Kala",
    subtitle: "Arts",
    text: "Music, craft and performance that build creativity and confidence on stage.",
  },
  {
    icon: Users,
    title: "Kutumb",
    subtitle: "Community",
    text: "Families who celebrate festivals together and children who grow up with friends who share their roots.",
  },
];

export const approach = [
  {
    title: "Small groups",
    text: "Classes of 12 or fewer, so every child is seen, heard and gently corrected.",
  },
  {
    title: "Meaning before memory",
    text: "Children understand what they chant and why we celebrate. Rote learning alone is never the goal.",
  },
  {
    title: "Joyful, not strict",
    text: "Stories, games, music and movement keep children coming back because they want to.",
  },
  {
    title: "Parents as partners",
    text: "A short weekly note tells you what was covered and how to continue it at home.",
  },
];

// Indicative only — festival dates follow the Hindu lunar calendar and move each year.
export const festivals = [
  { month: "January", name: "Makar Sankranti", note: "Kite-making, til-gud and a talk on Surya, the sun." },
  { month: "Jan / Feb", name: "Vasant Panchami", note: "Saraswati puja. Children bring their books and instruments for blessings." },
  { month: "March", name: "Holi", note: "Story of Prahlad and Holika, with natural-colour play." },
  { month: "Mar / Apr", name: "Ram Navami", note: "Ramayana recitation and a children's play." },
  { month: "July", name: "Guru Purnima", note: "Our most important day: students honour their teachers." },
  { month: "August", name: "Raksha Bandhan", note: "Rakhi-making workshop and the meaning of protection." },
  { month: "Aug / Sep", name: "Janmashtami", note: "Krishna stories, bhajans and dahi-handi for the little ones." },
  { month: "Aug / Sep", name: "Ganesh Chaturthi", note: "Eco-friendly clay Ganesha making." },
  { month: "Sep / Oct", name: "Navratri", note: "Garba evening for families and the story of Durga." },
  { month: "Oct / Nov", name: "Diwali", note: "Diya painting, rangoli competition and our annual showcase." },
];

// A sample 75-minute session; real timings are set per batch.
export const sampleSession = [
  { duration: "10 min", title: "Prarthana", text: "Opening prayer and a moment of stillness" },
  { duration: "15 min", title: "Shloka of the week", text: "Chanting, pronunciation and meaning" },
  { duration: "20 min", title: "Katha", text: "A story from the Itihasa or Puranas, told and discussed" },
  { duration: "15 min", title: "Activity", text: "Craft, game, role-play or music linked to the story" },
  { duration: "10 min", title: "Reflection", text: "What did we learn? How will we use it this week?" },
  { duration: "5 min", title: "Shanti path", text: "Closing prayer" },
];

export const admissionSteps = [
  { title: "Enquire", text: "Send us a message or WhatsApp with your child's age and interests." },
  { title: "Visit or trial class", text: "Come and sit in on a free trial class with your child." },
  { title: "Choose a batch", text: "We'll suggest the right program and level together." },
  { title: "Register", text: "Complete a short form and you're in. Welcome to the Gurukul family." },
];

export const faqs = [
  {
    q: "Does my child need any prior knowledge?",
    a: "No. Every program has a beginner level, and we place children by ability, not age alone. Many of our students start with no Sanskrit or regional language at all.",
  },
  {
    q: "Is Gurukul religious?",
    a: "We teach Indian culture, values, languages and scriptures, including the prayers and festivals of the Hindu tradition. Our focus is on meaning, character and heritage. Children from all backgrounds are welcome.",
  },
  {
    q: "Can I try a class before enrolling?",
    a: "Yes. The first trial class is free. Message us to book a slot and we'll tell you what to bring.",
  },
  {
    q: "How big are the classes?",
    a: "We keep groups to 12 children or fewer so every child gets individual attention.",
  },
  {
    q: "Can parents stay during class?",
    a: "Parents are welcome to stay for the trial class. After that we find children settle and participate more when parents step out, but you're always welcome at festival celebrations.",
  },
  {
    q: "Do you offer online classes?",
    a: "Some programs, such as Shlokas & Sanskrit and Indian Languages, can be joined online. Ask us about current online batches.",
  },
  {
    q: "What does it cost?",
    a: "Fees depend on the program and how often it meets. Contact us for the current fee sheet, including any sibling or multi-program discounts.",
  },
];
