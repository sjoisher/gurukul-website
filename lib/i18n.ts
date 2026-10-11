// All page copy, in English, Hindi and Gujarati.
//
// Text carried over from the original site is kept word for word, apart from
// three script slips fixed in passing (a Gujarati word inside the Hindi
// learning list, a Devanagari "वास्" inside the Gujarati "Vastu", and
// "જીવોય" → "જીવો"). Text new to this version is marked NEW and should be read
// by a native speaker before launch.

export const langs = ["en", "hi", "gu"] as const;
export type Lang = (typeof langs)[number];

export const langPath: Record<Lang, string> = { en: "/", hi: "/hi/", gu: "/gu/" };
export const langLabel: Record<Lang, string> = { en: "English", hi: "हिंदी", gu: "ગુજરાતી" };
export const langShort: Record<Lang, string> = { en: "EN", hi: "हिं", gu: "ગુ" };
export const htmlLang: Record<Lang, string> = { en: "en-IN", hi: "hi-IN", gu: "gu-IN" };

type Row = { time: string; activity: string };

export type Dict = {
  name: string;
  shortName: string;
  place: string;
  meta: { title: string; description: string };
  nav: { id: string; label: string }[];
  donate: string;
  menu: { open: string; close: string };
  hero: { tagline: string; intro: string; ctaVisit: string; ctaSupport: string };
  glance: { value: string; label: string }[];
  about: { heading: string; body: string };
  parampara: { heading: string; intro: string; people: { name: string; note: string }[] };
  teachers: { heading: string; intro: string; people: { name: string; note: string }[] };
  vision: {
    heading: string;
    statement: string;
    nature: string;
    philosophyLabel: string;
    philosophy: string;
    philosophyMeaning: string;
    campusOrganism: string;
    childHeading: string;
    child: string[];
    childLine: string;
    campusHeading: string;
    campus: string[];
    closing: string;
  };
  learning: { heading: string; items: { title: string; text: string }[] };
  dinacharya: {
    heading: string;
    intro: string;
    timeCol: string;
    activityCol: string;
    rows: Row[];
    contemplation: string;
    classesHeading: string;
    classes: { subject: string; days: string }[];
    sportsHeading: string;
    dayCol: string;
    sportCol: string;
    sports: { day: string; sport: string }[];
    pdf: string;
  };
  gallery: { heading: string; intro: string; more: string; close: string; prev: string; next: string; captions: string[] };
  video: { heading: string; intro: string; play: string };
  support: {
    heading: string;
    intro: string;
    qrHeading: string;
    qrNote: string;
    bankHeading: string;
    bankLabel: string;
    bankName: string;
    accountNameLabel: string;
    accountName: string;
    accountNumberLabel: string;
    ifscLabel: string;
    copy: string;
    copied: string;
    tax: string;
    acknowledge: string;
    acknowledgeCta: string;
    acknowledgeMessage: string;
  };
  motto: string;
  trust: {
    heading: string;
    intro: string;
    facts: { label: string; value: string }[];
    objectivesHeading: string;
    objectives: string[];
    trusteesHeading: string;
    founderRole: string;
    trustees: string[];
  };
  stem: { heading: string; intro: string; highlights: string[]; captions: string[] };
  media: { heading: string; intro: string; live: string; reel: string; watchYoutube: string; watchInstagram: string };
  visit: { heading: string; intro: string; formHeading: string; openForm: string };
  contact: {
    heading: string;
    addressLabel: string;
    address: string[];
    phoneLabel: string;
    emailLabel: string;
    call: string;
    directions: string;
  };
  footer: string;
};

const times = [
  "05:00 – 05:15",
  "05:15 – 05:45",
  "05:45 – 06:30",
  "06:30 – 08:00",
  "08:00 – 08:30",
  "08:30 – 12:00",
  "12:00 – 13:00",
  "13:00 – 14:00",
  "14:00 – 16:00",
  "16:00 – 16:30",
  "16:30 – 18:00",
  "18:00 – 19:15",
  "19:15 – 20:00",
  "20:00 – 21:30",
  "21:00 – 05:00",
];
const rows = (activities: string[]): Row[] => activities.map((activity, i) => ({ time: times[i], activity }));

const en: Dict = {
  name: "Sant Shri Odhavram Vaidic Gurukul",
  shortName: "Odhavram Vaidic Gurukul",
  place: "Bhavanipar, Kutch",
  meta: {
    title: "Sant Shri Odhavram Vaidic Gurukul – Bhavanipar, Kutch",
    // NEW
    description:
      "A residential Vedic gurukul in Bhavanipar, Kutch, combining Vedic chanting, Sanskrit and scriptures with modern education, yoga, sports and nature-based living.",
  },
  nav: [
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "learning", label: "Learning" },
    { id: "science", label: "Science" },
    { id: "dinacharya", label: "Dinacharya" },
    { id: "gallery", label: "Gallery" },
    { id: "support", label: "Support" },
    { id: "contact", label: "Contact" },
  ],
  donate: "Donate",
  menu: { open: "Open menu", close: "Close menu" },
  hero: {
    tagline: "A Vedic Gurukul rooted in Dharma and Nature",
    // NEW
    intro:
      "A residential gurukul in Bhavanipar, Kutch, where brahmacharis study the Vedas, Sanskrit and modern subjects while living by the rhythms of nature.",
    ctaVisit: "Visit or enquire",
    ctaSupport: "Support the Gurukul",
  },
  // NEW — figures taken from the Dinacharya PDF
  glance: [
    { value: "05:00", label: "The day begins in Brahma Muhurta" },
    { value: "2×", label: "Sandhya and havan every day" },
    { value: "7", label: "Sports and martial arts across the week" },
    { value: "1993", label: "Serving since the Trust was founded" },
  ],
  about: {
    heading: "About the Gurukul",
    body: "Sant Shri Odhavram Vaidic Gurukul, Bhavanipar, is dedicated to the creation of character-driven and capable brahmacharis through Vedic education combined with modern learning, discipline, and cultural values. The Gurukul follows the traditional Gurukulam system where learning is integrated with daily life, service, and spiritual practice.",
  },
  // NEW — names taken from the Gurukul banner
  parampara: {
    heading: "Our inspiration",
    intro:
      "The Gurukul walks in the footsteps of the teachers and reformers who revived Vedic learning and served the nation.",
    people: [
      { name: "Maharshi Dayanand Saraswati", note: "Founder of the Arya Samaj, who called India back to the Vedas" },
      { name: "Swami Shraddhanand Saraswati", note: "Founder of Gurukul Kangri, who revived the gurukul tradition" },
      { name: "Shyamji Krishna Varma", note: "Sanskrit scholar and freedom fighter, born in Mandvi, Kutch" },
      { name: "Sant Odhavram ji", note: "The saint in whose name the Gurukul stands" },
      { name: "Shri Nityanand Shivanand Saraswati", note: "Founder of the Gurukul" },
    ],
  },
  // NEW — names and duties taken from the Dinacharya PDF
  teachers: {
    heading: "Our teachers",
    intro: "From morning prayer to evening sandhya, the brahmacharis' day is guided by their teachers.",
    people: [
      { name: "Acharya Gaurav Arya", note: "Morning prayer, havan, shramdaan and sports" },
      { name: "Upacharya Vivek Shastri", note: "Exercise and pranayama, classes and evening sandhya" },
      { name: "Adhyapak Sagar Arya", note: "Breakfast, meals and the evening walk" },
    ],
  },
  vision: {
    heading: "Our Vision",
    statement:
      "To nurture children as conscious, compassionate, and ecologically rooted human beings by integrating Vedic wisdom, regenerative living, and a deep connection with land, water, food, and community.",
    nature:
      "This Gurukul is not a school separated from nature—it is nature as teacher. Children learn by living the rhythms of the sun, seasons, soil, animals, and self.",
    philosophyLabel: "Core Philosophy",
    philosophy: "Jeevo Jeevasya Jeevanam",
    philosophyMeaning: "All life is sustained by life.",
    campusOrganism:
      "The campus functions as a living organism where spirituality, ecology, education, and daily life are inseparable.",
    childHeading: "Child-Centric Learning Intent",
    child: [
      "Learning through observation, participation, and service",
      "Emotional safety, simplicity, and belonging",
      "Curiosity-led, non-competitive education",
      "Integration of body, mind, heart, and spirit",
    ],
    childLine: "Children grow food, harvest water, care for animals, chant, sing, question, play, and sit in silence.",
    campusHeading: "The Campus as a Living Mandala",
    campus: [
      "Vastu-aligned planning with Brahmasthan as the spiritual core",
      "Permaculture zoning",
      "Local ecology of Kutch",
      "Safe, walkable, circular child-friendly movement",
    ],
    closing: "This Gurukul is not preparing children for the world. It is preparing the world through children.",
  },
  learning: {
    heading: "Learning & Activities",
    // titles from the original site; descriptions NEW, from the Dinacharya PDF
    items: [
      {
        title: "Vedic chanting, Sanskrit, and scriptures",
        text: "Sandhya and havan every morning and evening, with Vedic chanting, Sanskrit and the study of scriptures in daily classes.",
      },
      {
        title: "Modern education and computer training",
        text: "Regular classroom study through the morning and afternoon, with computer classes every Monday and Thursday.",
      },
      {
        title: "Yoga, Ayurveda, and physical discipline",
        text: "Exercise and pranayama every morning from 05:45, a balanced daily routine, and shramdaan: hands-on work for the campus.",
      },
      {
        title: "Music, arts, sports, and personality development",
        text: "Music on Tuesdays and Fridays, drawing on Wednesdays and Saturdays, and a different sport every evening, from football to mallakhamb and archery.",
      },
    ],
  },
  dinacharya: {
    heading: "Daily Dinacharya",
    intro: "The Gurukul follows a disciplined daily routine beginning from Brahma Muhurta.",
    timeCol: "Time",
    activityCol: "Activity",
    rows: rows([
      "Waking and morning prayer",
      "Morning ablutions",
      "Exercise and pranayama",
      "Bath, sandhya and havan",
      "Breakfast",
      "Prayer and classes",
      "Lunch and rest",
      "Computer, music and drawing class",
      "Classes",
      "Shramdaan (service through work)",
      "Sports and personal tasks",
      "Bath, sandhya and havan",
      "Dinner and evening walk",
      "Svadhyaya (self-study)",
      "Prayer and sleep",
    ]),
    contemplation: "Every night, 21:00 – 21:10: ātmachintan, ten minutes of self-contemplation.",
    classesHeading: "Skill classes · 13:00 – 14:00",
    classes: [
      { subject: "Computer", days: "Monday, Thursday" },
      { subject: "Music", days: "Tuesday, Friday" },
      { subject: "Drawing", days: "Wednesday, Saturday" },
    ],
    sportsHeading: "Evening sports · 16:30 – 18:00",
    dayCol: "Day",
    sportCol: "Sport",
    sports: [
      { day: "Monday", sport: "Football, volleyball" },
      { day: "Tuesday", sport: "Badminton" },
      { day: "Wednesday", sport: "Air gun" },
      { day: "Thursday", sport: "Akhada, mallakhamb" },
      { day: "Friday", sport: "Lathi and sword training" },
      { day: "Saturday", sport: "Archery" },
      { day: "Sunday", sport: "Cricket" },
    ],
    pdf: "Download the Dinacharya (PDF, Hindi)",
  },
  gallery: {
    heading: "Gallery",
    intro: "Moments from daily life, learning, and spiritual practices at the Gurukul.",
    more: "For more photos, please contact us on WhatsApp.",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    // NEW
    captions: [
      "Independence Day assembly",
      "A human pyramid by the brahmacharis",
      "With visiting schoolchildren",
      "Class in the open pavilion",
      "Music practice in the pavilion",
      "Mealtime in the dining hall",
      "Mantra recitation in the hall",
      "A lesson on the night sky",
      "Stargazing through a telescope",
      "Brahmacharis with their new books",
      "With their new books",
      "Visit to a wrestling akhada",
      "Meeting wrestlers at the akhada",
      "The Gurukul family at the pavilion",
      "An outing in the countryside",
      "Republic Day flag hoisting",
      "Republic Day: assembly in formation",
      "Republic Day: salute to the flag",
      "Republic Day celebrations",
      "A mural on the campus walls",
    ],
  },
  video: { heading: "Gurukul Video", intro: "A glimpse of life at the Gurukul.", play: "Play video" },
  support: {
    heading: "Support & Donations",
    intro: "Your support strengthens the Gurukul’s educational, spiritual, and ecological initiatives.",
    qrHeading: "Donate via QR",
    qrNote: "Scan with any UPI app. You can also send by UPI to 8305209795.",
    bankHeading: "Bank Details",
    bankLabel: "Bank",
    bankName: "Jankalyan Sahakari Bank Ltd",
    accountNameLabel: "Account Name",
    accountName: "Shree Nityanand Shivanand Saraswati Yog",
    accountNumberLabel: "Account Number",
    ifscLabel: "IFSC Code",
    copy: "Copy",
    copied: "Copied",
    tax: "Donations are eligible for tax exemption under Section 80G.",
    acknowledge: "After donating, please send us the details on WhatsApp so we can acknowledge your gift.",
    acknowledgeCta: "Send details on WhatsApp",
    acknowledgeMessage: "Namaste. I have made a donation to the Gurukul. Details:",
  },
  // NEW
  // From the Trust letterhead (trustee list)
  motto: "Sanskriti · Sanskrit · Sanskar",
  trust: {
    heading: "The Trust",
    intro: "The Gurukul is run by the Shri Nityanand Shivanand Saraswati Yog Niketan Trust.",
    facts: [
      { label: "Established", value: "1993" },
      { label: "Registration No.", value: "A-1441/Kutch" },
      { label: "Income Tax exemption", value: "80G, No. 4/5 80G(5), dated 27-10-1992" },
    ],
    objectivesHeading: "Objectives of the Trust",
    objectives: [
      "Spread Vedic education",
      "Provide education rooted in sanskar",
      "Preserve Indian culture",
      "Build students of strong character",
      "Foster spiritual and moral growth",
      "Develop discipline and self-reliance",
      "Awaken the spirit of social service",
      "Strengthen the gurukul tradition",
      "Bring modern and Vedic education together",
      "Work for the nation and the welfare of humanity",
      "Promote care for the environment and cow protection",
      "Spread knowledge, service and sanskar",
    ],
    trusteesHeading: "Trustees",
    founderRole: "Founder Trustee",
    trustees: [
      "Shri Bhailal Lakhamshi Mange (Mangalbhai)",
      "Shri Shankarlal Devji Bhanushali",
      "Shri Shankarlal Lakhamshi Joisher",
      "Shri Mathuradas Monji Bhanushali",
      "Shri Mathurabhai Paragji Joisher",
      "Shri Suresh Hansraj Dama",
      "Shri Vadilal Parbat Pokar",
      "Shri Jagdish Ishwarlal Kesrani",
      "Shri Amrutkumar Kanji Dama",
      "Shri Premal Pratap Joisher",
      "Shri Vishal Mahindra Gada",
    ],
  },
  // NEW — from the Gurukul's WhatsApp videos
  stem: {
    heading: "Science, technology & robotics",
    intro: "Alongside the Vedas, the brahmacharis design, wire and code their own projects in the computer lab and out on the grounds.",
    highlights: ["Arduino circuits and sensors", "Smart walking stick for the visually impaired", "Automatic plant watering", "Robot car and drone"],
    captions: [
      "A smart walking stick for the visually impaired",
      "Flying a drone on the grounds",
      "Programming in the computer lab",
      "A smart house model",
      "Building circuits with an Arduino",
      "Testing a water sensor",
      "An automatic plant-watering system",
      "Programming an LCD display",
      "A class in the computer lab",
      "Driving a robot car from a tablet",
      "A hand-gesture sensor project",
      "Presenting the smart stick",
      "Learning together at the computer",
    ],
  },
  media: {
    heading: "In the media & live",
    intro: "Watch live streams and short films from the Gurukul.",
    live: "Live stream",
    reel: "Reel",
    watchYoutube: "Watch on YouTube",
    watchInstagram: "Watch on Instagram",
  },
  visit: {
    heading: "Visit or enquire",
    intro:
      "Parents considering the Gurukul for their child, and well-wishers who would like to visit, are welcome to get in touch. Fill in the enquiry form, call, or send a WhatsApp message.",
    formHeading: "Enquiry form",
    openForm: "Open the form in a new tab",
  },
  contact: {
    heading: "Contact Us",
    addressLabel: "Address",
    address: ["Sant Shri Odhavram Vaidic Gurukul,", "Bhavanipar, Taluka Abdasa,", "District Kutch (Bhuj), Gujarat – 370650"],
    phoneLabel: "Phone / UPI",
    emailLabel: "Email",
    call: "Call",
    directions: "Get directions",
  },
  footer: "© Sant Shri Odhavram Vaidic Gurukul, Bhavanipar",
};

const hi: Dict = {
  name: "संत श्री ओधवराम वैदिक गुरुकुल",
  shortName: "ओधवराम वैदिक गुरुकुल",
  place: "भवानीपर, कच्छ",
  meta: {
    title: "संत श्री ओधवराम वैदिक गुरुकुल – भवानीपर, कच्छ",
    description:
      "कच्छ के भवानीपर में स्थित आवासीय वैदिक गुरुकुल — वैदिक मंत्रोच्चार, संस्कृत और शास्त्रों के साथ आधुनिक शिक्षा, योग, खेल और प्रकृति के साथ जीवन।",
  },
  nav: [
    { id: "about", label: "परिचय" },
    { id: "vision", label: "दृष्टि" },
    { id: "learning", label: "शिक्षा" },
    { id: "science", label: "विज्ञान" },
    { id: "dinacharya", label: "दिनचर्या" },
    { id: "gallery", label: "गैलरी" },
    { id: "support", label: "सहयोग" },
    { id: "contact", label: "संपर्क" },
  ],
  donate: "दान करें",
  menu: { open: "मेनू खोलें", close: "मेनू बंद करें" },
  hero: {
    tagline: "धर्म और प्रकृति में निहित वैदिक गुरुकुल",
    intro:
      "कच्छ के भवानीपर में स्थित एक आवासीय गुरुकुल, जहाँ ब्रह्मचारी प्रकृति की लय के साथ जीते हुए वेद, संस्कृत और आधुनिक विषयों का अध्ययन करते हैं।",
    ctaVisit: "भ्रमण या पूछताछ",
    ctaSupport: "गुरुकुल को सहयोग दें",
  },
  glance: [
    { value: "05:00", label: "ब्रह्म मुहूर्त में दिन का आरंभ" },
    { value: "2×", label: "प्रतिदिन संध्या एवं हवन" },
    { value: "7", label: "सप्ताह भर खेल एवं युद्धकला" },
    { value: "1993", label: "ट्रस्ट की स्थापना से सेवारत" },
  ],
  about: {
    heading: "गुरुकुल परिचय",
    body: "संत श्री ओधवराम वैदिक गुरुकुल, भवानीपर, वैदिक शिक्षा को आधुनिक शिक्षा, अनुशासन और सांस्कृतिक मूल्यों के साथ जोड़कर चरित्रवान और सक्षम ब्रह्मचारियों के निर्माण के लिए समर्पित है। यह गुरुकुल पारंपरिक गुरुकुलम प्रणाली का अनुसरण करता है, जहाँ शिक्षा दैनिक जीवन, सेवा और आध्यात्मिक साधना के साथ एकीकृत होती है।",
  },
  parampara: {
    heading: "हमारी प्रेरणा",
    intro: "गुरुकुल उन आचार्यों और सुधारकों के पदचिह्नों पर चलता है जिन्होंने वैदिक शिक्षा को पुनर्जीवित किया और राष्ट्र की सेवा की।",
    people: [
      { name: "महर्षि दयानन्द सरस्वती", note: "आर्य समाज के संस्थापक, जिन्होंने ‘वेदों की ओर लौटो’ का आह्वान किया" },
      { name: "स्वामी श्रद्धानन्द सरस्वती", note: "गुरुकुल कांगड़ी के संस्थापक, जिन्होंने गुरुकुल परंपरा को पुनर्जीवित किया" },
      { name: "श्यामजी कृष्ण वर्मा", note: "संस्कृत विद्वान और स्वतंत्रता सेनानी, कच्छ के मांडवी में जन्मे" },
      { name: "संत ओधवराम जी", note: "वे संत जिनके नाम पर यह गुरुकुल स्थापित है" },
      { name: "श्री नित्यानन्द शिवानन्द सरस्वती", note: "गुरुकुल संस्थापक" },
    ],
  },
  teachers: {
    heading: "हमारे आचार्य",
    intro: "प्रातः प्रार्थना से सायं संध्या तक ब्रह्मचारियों की दिनचर्या का मार्गदर्शन उनके आचार्य करते हैं।",
    people: [
      { name: "आचार्य गौरव आर्य", note: "प्रातः प्रार्थना, हवन, श्रमदान और खेल" },
      { name: "उपाचार्य विवेक शास्त्री", note: "व्यायाम-प्राणायाम, कक्षाएँ और सायं संध्या" },
      { name: "अध्यापक सागर आर्य", note: "प्रातराश, भोजन और भ्रमण" },
    ],
  },
  vision: {
    heading: "हमारी दृष्टि",
    statement:
      "भूमि, जल, भोजन और समुदाय के साथ गहरे संबंध के माध्यम से वैदिक ज्ञान और पुनर्योजी जीवन पद्धति को एकीकृत कर बच्चों को जागरूक, करुणामय और पर्यावरण से जुड़े मानव के रूप में विकसित करना।",
    nature:
      "यह गुरुकुल प्रकृति से अलग कोई विद्यालय नहीं है—यहाँ प्रकृति ही शिक्षक है। बच्चे सूर्य, ऋतुओं, मिट्टी, पशुओं और स्वयं के साथ जीवन जीकर सीखते हैं।",
    philosophyLabel: "मूल दर्शन",
    philosophy: "जीवो जीवस्य जीवनम्",
    philosophyMeaning: "समस्त जीवन जीवन से ही पोषित है।",
    campusOrganism:
      "यह परिसर एक जीवंत जीव की भांति कार्य करता है जहाँ आध्यात्म, पारिस्थितिकी, शिक्षा और दैनिक जीवन अविभाज्य हैं।",
    childHeading: "बाल-केंद्रित शिक्षण उद्देश्य",
    child: [
      "अवलोकन, सहभागिता और सेवा के माध्यम से शिक्षा",
      "भावनात्मक सुरक्षा, सरलता और अपनापन",
      "जिज्ञासा आधारित, गैर-प्रतिस्पर्धी शिक्षा",
      "शरीर, मन, हृदय और आत्मा का समन्वय",
    ],
    childLine: "बच्चे भोजन उगाते हैं, जल संचित करते हैं, पशुओं की सेवा करते हैं, जप, गायन, प्रश्न, खेल और मौन का अभ्यास करते हैं।",
    campusHeading: "जीवंत मंडल के रूप में परिसर",
    campus: [
      "ब्रह्मस्थान को आध्यात्मिक केंद्र मानते हुए वास्तु आधारित योजना",
      "परमाकल्चर ज़ोनिंग",
      "कच्छ की स्थानीय पारिस्थितिकी",
      "सुरक्षित, पैदल चलने योग्य और वृत्ताकार बाल-अनुकूल व्यवस्था",
    ],
    closing: "यह गुरुकुल बच्चों को दुनिया के लिए तैयार नहीं करता, बल्कि बच्चों के माध्यम से दुनिया को तैयार करता है।",
  },
  learning: {
    heading: "शिक्षा और गतिविधियाँ",
    items: [
      {
        title: "वैदिक मंत्रोच्चार, संस्कृत और शास्त्र अध्ययन",
        text: "प्रतिदिन प्रातः और सायं संध्या एवं हवन, तथा दैनिक कक्षाओं में वैदिक मंत्रोच्चार, संस्कृत और शास्त्रों का अध्ययन।",
      },
      {
        title: "आधुनिक शिक्षा और कंप्यूटर प्रशिक्षण",
        text: "प्रातः और अपराह्न में नियमित कक्षाएँ, तथा प्रत्येक सोमवार और गुरुवार को कम्प्यूटर कक्षा।",
      },
      {
        title: "योग, आयुर्वेद और शारीरिक अनुशासन",
        text: "प्रतिदिन प्रातः 05:45 से व्यायाम और प्राणायाम, संतुलित दिनचर्या और परिसर के लिए श्रमदान।",
      },
      {
        title: "संगीत, कला, खेल और व्यक्तित्व विकास",
        text: "मंगलवार और शुक्रवार को संगीत, बुधवार और शनिवार को चित्रकला, और प्रतिदिन संध्या को अलग खेल — फुटबॉल से लेकर मलखंभ और धनुर्विद्या तक।",
      },
    ],
  },
  dinacharya: {
    heading: "दैनिक दिनचर्या",
    intro: "गुरुकुल में ब्रह्म मुहूर्त से प्रारंभ होने वाली अनुशासित दिनचर्या का पालन किया जाता है।",
    timeCol: "समय",
    activityCol: "दिनचर्या",
    // From the Dinacharya PDF
    rows: rows([
      "प्रातः जागरण एवं प्रार्थना",
      "शौचादि से निवृत्ति",
      "व्यायाम प्राणायाम",
      "स्नान एवं संध्या हवन",
      "प्रातराश",
      "प्रार्थना एवं कक्षा",
      "भोजन एवं विश्राम",
      "कम्प्यूटर, संगीत, चित्रकला कक्षा",
      "कक्षा",
      "श्रमदान",
      "खेल एवं व्यक्तिगत कार्य",
      "स्नान एवं संध्या हवन",
      "भोजन एवं भ्रमण",
      "स्वाध्याय",
      "प्रार्थना एवं शयन",
    ]),
    contemplation: "प्रतिदिन रात्रि 21:00 – 21:10: आत्मचिंतन।",
    classesHeading: "कौशल कक्षाएँ · 13:00 – 14:00",
    classes: [
      { subject: "कम्प्यूटर कक्षा", days: "सोमवार, गुरुवार" },
      { subject: "संगीत कक्षा", days: "मंगलवार, शुक्रवार" },
      { subject: "चित्रकला कक्षा", days: "बुधवार, शनिवार" },
    ],
    sportsHeading: "खेल दिनचर्या · 16:30 – 18:00",
    dayCol: "वार",
    sportCol: "खेल",
    sports: [
      { day: "सोमवार", sport: "फुटबॉल, वॉलीबॉल" },
      { day: "मंगलवार", sport: "बैडमिंटन" },
      { day: "बुधवार", sport: "एयरगन" },
      { day: "गुरुवार", sport: "अखाड़ा, मलखंभ" },
      { day: "शुक्रवार", sport: "लाठी, तलवार प्रशिक्षण" },
      { day: "शनिवार", sport: "धनुष बाण" },
      { day: "रविवार", sport: "क्रिकेट" },
    ],
    pdf: "दिनचर्या PDF डाउनलोड करें",
  },
  gallery: {
    heading: "गैलरी",
    intro: "गुरुकुल के दैनिक जीवन, अध्ययन और आध्यात्मिक साधना की झलकियाँ।",
    more: "अधिक चित्रों के लिए कृपया व्हाट्सएप पर संपर्क करें।",
    close: "बंद करें",
    prev: "पिछला चित्र",
    next: "अगला चित्र",
    captions: [
      "स्वतंत्रता दिवस सभा",
      "ब्रह्मचारियों द्वारा मानव पिरामिड",
      "अतिथि विद्यालय के बच्चों के साथ",
      "खुले मंडप में कक्षा",
      "मंडप में संगीत अभ्यास",
      "भोजनालय में भोजन",
      "सभागार में मंत्र पाठ",
      "रात्रि आकाश पर एक पाठ",
      "दूरबीन से तारों का अवलोकन",
      "नई पुस्तकों के साथ ब्रह्मचारी",
      "अपनी नई पुस्तकों के साथ",
      "कुश्ती अखाड़े का भ्रमण",
      "अखाड़े में पहलवानों से भेंट",
      "मंडप पर गुरुकुल परिवार",
      "ग्रामीण क्षेत्र में भ्रमण",
      "गणतंत्र दिवस ध्वजारोहण",
      "गणतंत्र दिवस: पंक्तिबद्ध सभा",
      "गणतंत्र दिवस: ध्वज को वंदन",
      "गणतंत्र दिवस समारोह",
      "परिसर की दीवार पर भित्तिचित्र",
    ],
  },
  video: { heading: "गुरुकुल वीडियो", intro: "गुरुकुल जीवन की एक झलक।", play: "वीडियो चलाएँ" },
  support: {
    heading: "सहयोग और दान",
    intro: "आपका सहयोग गुरुकुल की शैक्षणिक, आध्यात्मिक और पर्यावरणीय पहलों को सशक्त बनाता है।",
    qrHeading: "क्यूआर द्वारा दान",
    qrNote: "किसी भी यूपीआई ऐप से स्कैन करें। आप 8305209795 पर यूपीआई द्वारा भी भेज सकते हैं।",
    bankHeading: "बैंक विवरण",
    bankLabel: "बैंक",
    bankName: "जनकल्याण सहकारी बैंक लिमिटेड",
    accountNameLabel: "खाता नाम",
    accountName: "श्री नित्यानंद शिवानंद सरस्वती योग",
    accountNumberLabel: "खाता संख्या",
    ifscLabel: "आईएफएससी कोड",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया",
    tax: "दान आयकर अधिनियम की धारा 80G के अंतर्गत कर छूट के पात्र हैं।",
    acknowledge: "दान के बाद कृपया व्हाट्सएप पर विवरण भेजें, ताकि हम आपका आभार व्यक्त कर सकें।",
    acknowledgeCta: "व्हाट्सएप पर विवरण भेजें",
    acknowledgeMessage: "नमस्ते। मैंने गुरुकुल को दान किया है। विवरण:",
  },
  // From the Trust letterhead (trustee list)
  motto: "संस्कृति, संस्कृत, संस्कार",
  trust: {
    heading: "ट्रस्ट",
    intro: "गुरुकुल का संचालन श्री नित्यानन्द शिवानन्द सरस्वती योग निकेतन ट्रस्ट द्वारा किया जाता है।",
    facts: [
      { label: "स्थापना सन्", value: "1993" },
      { label: "रजि. नं.", value: "ए-1441/कच्छ" },
      { label: "आयकर छूट", value: "80G, नं. 4/5 80G(5), दिनांक 27-10-1992" },
    ],
    objectivesHeading: "उद्देश्य",
    objectives: [
      "वैदिक शिक्षा का प्रसार करना",
      "संस्कारयुक्त शिक्षा प्रदान करना",
      "भारतीय संस्कृति का संरक्षण करना",
      "चरित्रवान विद्यार्थियों का निर्माण करना",
      "आध्यात्मिक एवं नैतिक विकास करना",
      "अनुशासन एवं आत्मनिर्भरता विकसित करना",
      "समाजसेवा की भावना जागृत करना",
      "गुरुकुल परंपरा को सशक्त बनाना",
      "आधुनिक एवं वैदिक शिक्षा का समन्वय करना",
      "राष्ट्रहित एवं मानव कल्याण हेतु कार्य करना",
      "पर्यावरण एवं गौसंरक्षण को बढ़ावा देना",
      "ज्ञान, सेवा और संस्कार का प्रसार करना",
    ],
    trusteesHeading: "ट्रस्टीगण",
    founderRole: "फाउंडर ट्रस्टी",
    trustees: [
      "श्री भाईलाल लखमशी मंगे (मंगलभाई)",
      "श्री शंकरलाल देवजी भानुशाली",
      "श्री शंकरलाल लखमशी जोईसर",
      "श्री मथुरादास मोनजी भानुशाली",
      "श्री मथुराभाई परागजी जोईसर",
      "श्री सुरेश हंसराज दामा",
      "श्री वाडीलाल परबत पोकार",
      "श्री जगदीश ईश्वरलाल केसराणी",
      "श्री अमृतकुमार कानजी दामा",
      "श्री प्रेमल प्रताप जोईसर",
      "श्री विशाल महिंद्र गडा",
    ],
  },
  // NEW — from the Gurukul's WhatsApp videos
  stem: {
    heading: "विज्ञान, तकनीक एवं रोबोटिक्स",
    intro: "वेदों के साथ-साथ ब्रह्मचारी कम्प्यूटर कक्ष और मैदान में अपने स्वयं के प्रोजेक्ट बनाते, जोड़ते और प्रोग्राम करते हैं।",
    highlights: ["आर्डुइनो सर्किट और सेंसर", "दृष्टिबाधितों के लिए स्मार्ट छड़ी", "स्वचालित पौध सिंचाई", "रोबोट कार और ड्रोन"],
    captions: [
      "दृष्टिबाधितों के लिए स्मार्ट छड़ी",
      "मैदान में ड्रोन उड़ाते हुए",
      "कम्प्यूटर कक्ष में प्रोग्रामिंग",
      "स्मार्ट घर का मॉडल",
      "आर्डुइनो से सर्किट बनाते हुए",
      "जल सेंसर का परीक्षण",
      "स्वचालित पौध सिंचाई प्रणाली",
      "एलसीडी डिस्प्ले की प्रोग्रामिंग",
      "कम्प्यूटर कक्ष में कक्षा",
      "टैबलेट से रोबोट कार चलाते हुए",
      "हाथ के इशारे से चलने वाला सेंसर प्रोजेक्ट",
      "स्मार्ट छड़ी की प्रस्तुति",
      "कम्प्यूटर पर मिलकर सीखते हुए",
    ],
  },
  media: {
    heading: "मीडिया एवं लाइव",
    intro: "गुरुकुल के लाइव प्रसारण और लघु वीडियो देखें।",
    live: "लाइव प्रसारण",
    reel: "रील",
    watchYoutube: "YouTube पर देखें",
    watchInstagram: "Instagram पर देखें",
  },
  visit: {
    heading: "भ्रमण एवं पूछताछ",
    intro:
      "अपने बालक के लिए गुरुकुल पर विचार कर रहे अभिभावक, तथा भ्रमण के इच्छुक शुभचिंतक, हमसे संपर्क कर सकते हैं। पूछताछ फॉर्म भरें, कॉल करें या व्हाट्सएप संदेश भेजें।",
    formHeading: "पूछताछ फॉर्म",
    openForm: "फॉर्म नए टैब में खोलें",
  },
  contact: {
    heading: "संपर्क करें",
    addressLabel: "पता",
    address: ["संत श्री ओधवराम वैदिक गुरुकुल,", "भवानीपर, तालुका अबडासा,", "जिला कच्छ (भुज), गुजरात – 370650"],
    phoneLabel: "फोन / यूपीआई",
    emailLabel: "ईमेल",
    call: "कॉल करें",
    directions: "मार्ग देखें",
  },
  footer: "© संत श्री ओधवराम वैदिक गुरुकुल, भवानीपर",
};

const gu: Dict = {
  name: "સંત શ્રી ઓધવરામ વૈદિક ગુરુકુલ",
  shortName: "ઓધવરામ વૈદિક ગુરુકુલ",
  place: "ભવાનીપર, કચ્છ",
  meta: {
    title: "સંત શ્રી ઓધવરામ વૈદિક ગુરુકુલ – ભવાનીપર, કચ્છ",
    description:
      "કચ્છના ભવાનીપરમાં આવેલું નિવાસી વૈદિક ગુરુકુલ — વૈદિક મંત્રોચ્ચાર, સંસ્કૃત અને શાસ્ત્રો સાથે આધુનિક શિક્ષણ, યોગ, રમતગમત અને પ્રકૃતિ સાથેનું જીવન.",
  },
  nav: [
    { id: "about", label: "પરિચય" },
    { id: "vision", label: "દ્રષ્ટિ" },
    { id: "learning", label: "અભ્યાસ" },
    { id: "science", label: "વિજ્ઞાન" },
    { id: "dinacharya", label: "દિનચર્યા" },
    { id: "gallery", label: "ગેલેરી" },
    { id: "support", label: "સહયોગ" },
    { id: "contact", label: "સંપર્ક" },
  ],
  donate: "દાન કરો",
  menu: { open: "મેનુ ખોલો", close: "મેનુ બંધ કરો" },
  hero: {
    tagline: "ધર્મ અને પ્રકૃતિમાં આધારિત વૈદિક ગુરુકુલ",
    intro:
      "કચ્છના ભવાનીપરમાં આવેલું એક નિવાસી ગુરુકુલ, જ્યાં બ્રહ્મચારીઓ પ્રકૃતિની લય સાથે જીવતાં વેદ, સંસ્કૃત અને આધુનિક વિષયોનો અભ્યાસ કરે છે.",
    ctaVisit: "મુલાકાત અથવા પૂછપરછ",
    ctaSupport: "ગુરુકુલને સહયોગ આપો",
  },
  glance: [
    { value: "05:00", label: "બ્રહ્મ મુહૂર્તમાં દિવસની શરૂઆત" },
    { value: "2×", label: "દરરોજ સંધ્યા અને હવન" },
    { value: "7", label: "અઠવાડિયા દરમિયાન રમતો અને યુદ્ધકળા" },
    { value: "1993", label: "ટ્રસ્ટની સ્થાપનાથી સેવારત" },
  ],
  about: {
    heading: "ગુરુકુલ વિશે",
    body: "સંત શ્રી ઓધવરામ વૈદિક ગુરુકુલ, ભવાનીપર, વૈદિક શિક્ષણને આધુનિક અભ્યાસ, શિસ્ત અને સાંસ્કૃતિક મૂલ્યો સાથે જોડીને ચરિત્રવાન અને સક્ષમ બ્રહ્મચારીઓના નિર્માણ માટે સમર્પિત છે. ગુરુકુલ પરંપરાગત ગુરુકુલમ પદ્ધતિનું પાલન કરે છે, જ્યાં અભ્યાસ દૈનિક જીવન, સેવા અને આધ્યાત્મિક સાધના સાથે એકરૂપ બને છે.",
  },
  parampara: {
    heading: "અમારી પ્રેરણા",
    intro: "ગુરુકુલ એ આચાર્યો અને સુધારકોના પગલે ચાલે છે જેમણે વૈદિક શિક્ષણને પુનર્જીવિત કર્યું અને રાષ્ટ્રની સેવા કરી.",
    people: [
      { name: "મહર્ષિ દયાનંદ સરસ્વતી", note: "આર્ય સમાજના સ્થાપક, જેમણે ‘વેદો તરફ પાછા વળો’નું આહ્વાન કર્યું" },
      { name: "સ્વામી શ્રદ્ધાનંદ સરસ્વતી", note: "ગુરુકુલ કાંગડીના સ્થાપક, જેમણે ગુરુકુલ પરંપરાને પુનર્જીવિત કરી" },
      { name: "શ્યામજી કૃષ્ણ વર્મા", note: "સંસ્કૃત વિદ્વાન અને સ્વાતંત્ર્ય સેનાની, કચ્છના માંડવીમાં જન્મેલા" },
      { name: "સંત ઓધવરામજી", note: "એ સંત જેમના નામે આ ગુરુકુલ સ્થાપિત છે" },
      { name: "શ્રી નિત્યાનંદ શિવાનંદ સરસ્વતી", note: "ગુરુકુલ સ્થાપક" },
    ],
  },
  teachers: {
    heading: "અમારા આચાર્યો",
    intro: "સવારની પ્રાર્થનાથી સાંજની સંધ્યા સુધી બ્રહ્મચારીઓની દિનચર્યાનું માર્ગદર્શન તેમના આચાર્યો કરે છે.",
    people: [
      { name: "આચાર્ય ગૌરવ આર્ય", note: "પ્રાતઃ પ્રાર્થના, હવન, શ્રમદાન અને રમતગમત" },
      { name: "ઉપાચાર્ય વિવેક શાસ્ત્રી", note: "વ્યાયામ-પ્રાણાયામ, વર્ગો અને સાંજની સંધ્યા" },
      { name: "અધ્યાપક સાગર આર્ય", note: "પ્રાતરાશ, ભોજન અને ભ્રમણ" },
    ],
  },
  vision: {
    heading: "અમારું દ્રષ્ટિવાક્ય",
    statement:
      "વેદિક જ્ઞાન, પુનર્જીવિત જીવનશૈલી અને જમીન, પાણી, ખોરાક તથા સમુદાય સાથેના ઊંડા જોડાણ દ્વારા બાળકોને જાગૃત, કરુણાશીલ અને પર્યાવરણમાં મૂળભૂત માનવ તરીકે ઘડવાનું અમારું લક્ષ્ય છે.",
    nature:
      "આ ગુરુકુલ પ્રકૃતિથી અલગ પડેલી શાળા નથી—અહીં પ્રકૃતિ જ ગુરુ છે. બાળકો સૂર્ય, ઋતુઓ, માટી, પશુઓ અને સ્વ સાથે જીવતાં શીખે છે.",
    philosophyLabel: "મૂલ દર્શન",
    philosophy: "જીવો જીવસ્ય જીવનમ્",
    philosophyMeaning: "સમગ્ર જીવન જીવન દ્વારા જ પોષાય છે.",
    campusOrganism:
      "આ પરિસર એક જીવંત સજીવ તરીકે કાર્ય કરે છે, જ્યાં આધ્યાત્મિકતા, પર્યાવરણ, શિક્ષણ અને દૈનિક જીવન એકબીજાથી અલગ નથી.",
    childHeading: "બાળકેન્દ્રિત શિક્ષણ હેતુ",
    child: [
      "અવલોકન, સહભાગિતા અને સેવા દ્વારા શિક્ષણ",
      "ભાવનાત્મક સુરક્ષા, સરળતા અને અપનાપણું",
      "જિજ્ઞાસા આધારિત, સ્પર્ધારહિત શિક્ષણ",
      "શરીર, મન, હૃદય અને આત્માનો સંકલન",
    ],
    childLine: "બાળકો ખોરાક ઉગાવે છે, પાણી સંચય કરે છે, પશુઓની સેવા કરે છે, જપ, ગાયન, પ્રશ્ન, ખેલ અને મૌનનો અભ્યાસ કરે છે.",
    campusHeading: "જીવંત મંડળ તરીકે પરિસર",
    campus: [
      "બ્રહ્મસ્થાનને આધ્યાત્મિક કેન્દ્ર રાખી વાસ્તુ આધારિત આયોજન",
      "પરમાકલ્ચર ઝોનિંગ",
      "કચ્છની સ્થાનિક પર્યાવરણીય વ્યવસ્થા",
      "સુરક્ષિત, પગપાળા ચાલવા યોગ્ય અને વર્તુળાકાર બાળમિત્ર વ્યવસ્થા",
    ],
    closing: "આ ગુરુકુલ બાળકોને દુનિયા માટે તૈયાર કરતું નથી, પરંતુ બાળકો દ્વારા દુનિયાને તૈયાર કરે છે.",
  },
  learning: {
    heading: "અભ્યાસ અને પ્રવૃત્તિઓ",
    items: [
      {
        title: "વેદિક જાપ, સંસ્કૃત અને શાસ્ત્ર અધ્યયન",
        text: "દરરોજ સવાર-સાંજ સંધ્યા અને હવન, તેમજ દૈનિક વર્ગોમાં વૈદિક મંત્રોચ્ચાર, સંસ્કૃત અને શાસ્ત્રોનો અભ્યાસ.",
      },
      {
        title: "આધુનિક શિક્ષણ અને કમ્પ્યુટર તાલીમ",
        text: "સવાર અને બપોરે નિયમિત વર્ગો, તેમજ દર સોમવાર અને ગુરુવારે કમ્પ્યુટર વર્ગ.",
      },
      {
        title: "યોગ, આયુર્વેદ અને શારીરિક શિસ્ત",
        text: "દરરોજ સવારે 05:45થી વ્યાયામ અને પ્રાણાયામ, સંતુલિત દિનચર્યા અને પરિસર માટે શ્રમદાન.",
      },
      {
        title: "સંગીત, કલા, ખેલકૂદ અને વ્યક્તિત્વ વિકાસ",
        text: "મંગળવાર અને શુક્રવારે સંગીત, બુધવાર અને શનિવારે ચિત્રકલા, અને દરરોજ સાંજે અલગ રમત — ફૂટબોલથી લઈને મલખમ અને તીરંદાજી સુધી.",
      },
    ],
  },
  dinacharya: {
    heading: "દૈનિક દિનચર્યા",
    intro: "ગુરુકુલમાં બ્રહ્મ મુહૂર્તથી શરૂ થતી શિસ્તબદ્ધ દિનચર્યા અનુસરવામાં આવે છે.",
    timeCol: "સમય",
    activityCol: "દિનચર્યા",
    rows: rows([
      "પ્રાતઃ જાગરણ અને પ્રાર્થના",
      "શૌચાદિ નિત્યકર્મ",
      "વ્યાયામ અને પ્રાણાયામ",
      "સ્નાન, સંધ્યા અને હવન",
      "પ્રાતરાશ (નાસ્તો)",
      "પ્રાર્થના અને વર્ગ",
      "ભોજન અને વિશ્રામ",
      "કમ્પ્યુટર, સંગીત અને ચિત્રકલા વર્ગ",
      "વર્ગ",
      "શ્રમદાન",
      "રમતગમત અને વ્યક્તિગત કાર્ય",
      "સ્નાન, સંધ્યા અને હવન",
      "ભોજન અને ભ્રમણ",
      "સ્વાધ્યાય",
      "પ્રાર્થના અને શયન",
    ]),
    contemplation: "દરરોજ રાત્રે 21:00 – 21:10: આત્મચિંતન.",
    classesHeading: "કૌશલ્ય વર્ગો · 13:00 – 14:00",
    classes: [
      { subject: "કમ્પ્યુટર વર્ગ", days: "સોમવાર, ગુરુવાર" },
      { subject: "સંગીત વર્ગ", days: "મંગળવાર, શુક્રવાર" },
      { subject: "ચિત્રકલા વર્ગ", days: "બુધવાર, શનિવાર" },
    ],
    sportsHeading: "રમતગમત · 16:30 – 18:00",
    dayCol: "વાર",
    sportCol: "રમત",
    sports: [
      { day: "સોમવાર", sport: "ફૂટબોલ, વૉલીબોલ" },
      { day: "મંગળવાર", sport: "બેડમિન્ટન" },
      { day: "બુધવાર", sport: "એરગન" },
      { day: "ગુરુવાર", sport: "અખાડો, મલખમ" },
      { day: "શુક્રવાર", sport: "લાઠી, તલવાર તાલીમ" },
      { day: "શનિવાર", sport: "તીરંદાજી (ધનુષ-બાણ)" },
      { day: "રવિવાર", sport: "ક્રિકેટ" },
    ],
    pdf: "દિનચર્યા PDF ડાઉનલોડ કરો",
  },
  gallery: {
    heading: "ગેલેરી",
    intro: "ગુરુકુલના દૈનિક જીવન, અભ્યાસ અને આધ્યાત્મિક સાધનાની ઝલકીઓ.",
    more: "વધુ ફોટાઓ માટે કૃપા કરીને વોટ્સએપ પર સંપર્ક કરો.",
    close: "બંધ કરો",
    prev: "પાછલો ફોટો",
    next: "આગલો ફોટો",
    captions: [
      "સ્વાતંત્ર્ય દિન સભા",
      "બ્રહ્મચારીઓ દ્વારા માનવ પિરામિડ",
      "મુલાકાતે આવેલા શાળાના બાળકો સાથે",
      "ખુલ્લા મંડપમાં વર્ગ",
      "મંડપમાં સંગીત અભ્યાસ",
      "ભોજનશાળામાં ભોજન",
      "સભાખંડમાં મંત્રપાઠ",
      "રાત્રિ આકાશ વિશે પાઠ",
      "દૂરબીનથી તારાદર્શન",
      "નવા પુસ્તકો સાથે બ્રહ્મચારીઓ",
      "પોતાના નવા પુસ્તકો સાથે",
      "કુસ્તી અખાડાની મુલાકાત",
      "અખાડામાં પહેલવાનો સાથે મુલાકાત",
      "મંડપ પાસે ગુરુકુલ પરિવાર",
      "ગ્રામ્ય વિસ્તારમાં પ્રવાસ",
      "પ્રજાસત્તાક દિન ધ્વજવંદન",
      "પ્રજાસત્તાક દિન: હરોળબદ્ધ સભા",
      "પ્રજાસત્તાક દિન: ધ્વજને વંદન",
      "પ્રજાસત્તાક દિન ઉજવણી",
      "પરિસરની દીવાલ પર ભીંતચિત્ર",
    ],
  },
  video: { heading: "ગુરુકુલ વીડિયો", intro: "ગુરુકુલ જીવનની એક ઝલક.", play: "વીડિયો ચલાવો" },
  support: {
    heading: "સહયોગ અને દાન",
    intro: "તમારો સહયોગ ગુરુકુલના શૈક્ષણિક, આધ્યાત્મિક અને પર્યાવરણીય કાર્યોને વધુ સશક્ત બનાવે છે.",
    qrHeading: "ક્યુઆર દ્વારા દાન",
    qrNote: "કોઈપણ યુપીઆઈ એપથી સ્કેન કરો. તમે 8305209795 પર યુપીઆઈ દ્વારા પણ મોકલી શકો છો.",
    bankHeading: "બેંક વિગતો",
    bankLabel: "બેંક",
    bankName: "જનકલ્યાણ સહકારી બેંક લિમિટેડ",
    accountNameLabel: "ખાતાનું નામ",
    accountName: "શ્રી નિત્યાનંદ શિવાનંદ સરસ્વતી યોગ",
    accountNumberLabel: "ખાતા નંબર",
    ifscLabel: "આઇએફએસસી કોડ",
    copy: "કૉપિ કરો",
    copied: "કૉપિ થયું",
    tax: "દાન આવકવેરા અધિનિયમની કલમ 80G હેઠળ કર મુક્તિ માટે પાત્ર છે.",
    acknowledge: "દાન પછી કૃપા કરીને વોટ્સએપ પર વિગતો મોકલો, જેથી અમે આપનો આભાર માની શકીએ.",
    acknowledgeCta: "વોટ્સએપ પર વિગતો મોકલો",
    acknowledgeMessage: "નમસ્તે. મેં ગુરુકુલને દાન આપ્યું છે. વિગતો:",
  },
  // From the Trust letterhead (trustee list)
  motto: "સંસ્કૃતિ, સંસ્કૃત, સંસ્કાર",
  trust: {
    heading: "ટ્રસ્ટ",
    intro: "ગુરુકુલનું સંચાલન શ્રી નિત્યાનંદ શિવાનંદ સરસ્વતી યોગ નિકેતન ટ્રસ્ટ દ્વારા થાય છે.",
    facts: [
      { label: "સ્થાપના", value: "1993" },
      { label: "રજિ. નં.", value: "એ-1441/કચ્છ" },
      { label: "આવકવેરા મુક્તિ", value: "80G, નં. 4/5 80G(5), તા. 27-10-1992" },
    ],
    objectivesHeading: "ઉદ્દેશ્યો",
    objectives: [
      "વૈદિક શિક્ષણનો પ્રસાર કરવો",
      "સંસ્કારયુક્ત શિક્ષણ પ્રદાન કરવું",
      "ભારતીય સંસ્કૃતિનું સંરક્ષણ કરવું",
      "ચરિત્રવાન વિદ્યાર્થીઓનું નિર્માણ કરવું",
      "આધ્યાત્મિક અને નૈતિક વિકાસ કરવો",
      "અનુશાસન અને આત્મનિર્ભરતા વિકસાવવી",
      "સમાજસેવાની ભાવના જાગૃત કરવી",
      "ગુરુકુલ પરંપરાને સશક્ત બનાવવી",
      "આધુનિક અને વૈદિક શિક્ષણનો સમન્વય કરવો",
      "રાષ્ટ્રહિત અને માનવ કલ્યાણ માટે કાર્ય કરવું",
      "પર્યાવરણ અને ગૌસંરક્ષણને પ્રોત્સાહન આપવું",
      "જ્ઞાન, સેવા અને સંસ્કારનો પ્રસાર કરવો",
    ],
    trusteesHeading: "ટ્રસ્ટીગણ",
    founderRole: "સ્થાપક ટ્રસ્ટી",
    trustees: [
      "શ્રી ભાઈલાલ લખમશી મંગે (મંગળભાઈ)",
      "શ્રી શંકરલાલ દેવજી ભાનુશાળી",
      "શ્રી શંકરલાલ લખમશી જોઈસર",
      "શ્રી મથુરાદાસ મોનજી ભાનુશાળી",
      "શ્રી મથુરાભાઈ પરાગજી જોઈસર",
      "શ્રી સુરેશ હંસરાજ દામા",
      "શ્રી વાડીલાલ પરબત પોકાર",
      "શ્રી જગદીશ ઈશ્વરલાલ કેસરાણી",
      "શ્રી અમૃતકુમાર કાનજી દામા",
      "શ્રી પ્રેમલ પ્રતાપ જોઈસર",
      "શ્રી વિશાલ મહિન્દ્ર ગડા",
    ],
  },
  // NEW — from the Gurukul's WhatsApp videos
  stem: {
    heading: "વિજ્ઞાન, ટેકનોલોજી અને રોબોટિક્સ",
    intro: "વેદોની સાથે સાથે બ્રહ્મચારીઓ કમ્પ્યુટર ખંડમાં અને મેદાનમાં પોતાના પ્રોજેક્ટ બનાવે છે, જોડે છે અને પ્રોગ્રામ કરે છે.",
    highlights: ["આર્ડુઇનો સર્કિટ અને સેન્સર", "દૃષ્ટિહીનો માટે સ્માર્ટ લાકડી", "સ્વયંચાલિત છોડ સિંચાઈ", "રોબોટ કાર અને ડ્રોન"],
    captions: [
      "દૃષ્ટિહીનો માટે સ્માર્ટ લાકડી",
      "મેદાનમાં ડ્રોન ઉડાડતા",
      "કમ્પ્યુટર ખંડમાં પ્રોગ્રામિંગ",
      "સ્માર્ટ ઘરનું મોડેલ",
      "આર્ડુઇનો વડે સર્કિટ બનાવતા",
      "પાણીના સેન્સરનું પરીક્ષણ",
      "સ્વયંચાલિત છોડ સિંચાઈ પ્રણાલી",
      "એલસીડી ડિસ્પ્લેનું પ્રોગ્રામિંગ",
      "કમ્પ્યુટર ખંડમાં વર્ગ",
      "ટેબ્લેટથી રોબોટ કાર ચલાવતા",
      "હાથના ઇશારાથી ચાલતો સેન્સર પ્રોજેક્ટ",
      "સ્માર્ટ લાકડીની રજૂઆત",
      "કમ્પ્યુટર પર સાથે શીખતા",
    ],
  },
  media: {
    heading: "મીડિયા અને લાઇવ",
    intro: "ગુરુકુલના લાઇવ પ્રસારણ અને ટૂંકા વીડિયો જુઓ.",
    live: "લાઇવ પ્રસારણ",
    reel: "રીલ",
    watchYoutube: "YouTube પર જુઓ",
    watchInstagram: "Instagram પર જુઓ",
  },
  visit: {
    heading: "મુલાકાત અને પૂછપરછ",
    intro:
      "પોતાના બાળક માટે ગુરુકુલ વિશે વિચારતા વાલીઓ તથા મુલાકાત લેવા ઇચ્છતા શુભેચ્છકો અમારો સંપર્ક કરી શકે છે. પૂછપરછ ફોર્મ ભરો, ફોન કરો અથવા વોટ્સએપ સંદેશ મોકલો.",
    formHeading: "પૂછપરછ ફોર્મ",
    openForm: "ફોર્મ નવા ટૅબમાં ખોલો",
  },
  contact: {
    heading: "સંપર્ક કરો",
    addressLabel: "સરનામું",
    address: ["સંત શ્રી ઓધવરામ વૈદિક ગુરુકુલ,", "ભવાનીપર, તાલુકો અબડાસા,", "જિલ્લો કચ્છ (ભુજ), ગુજરાત – 370650"],
    phoneLabel: "ફોન / યુપીઆઈ",
    emailLabel: "ઈમેલ",
    call: "ફોન કરો",
    directions: "રસ્તો જુઓ",
  },
  footer: "© સંત શ્રી ઓધવરામ વૈદિક ગુરુકુલ, ભવાનીપર",
};

export const dict: Record<Lang, Dict> = { en, hi, gu };
