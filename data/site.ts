import type { Metadata } from "next";

export const site = {
  name: "Shree Pavan Caterers",
  hindiName: "श्री पवन केटरर्स",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreepavancaterers.com",
  description:
    "Pure vegetarian Marwari, Jain and North Indian catering in Hubballi for weddings, engagements and family celebrations. Shree Pavan Caterers, Keshwapur.",
  street: "431/38, Shivaganga Colony, Keshwapur",
  locality: "Hubballi",
  region: "Karnataka",
  postalCode: "580023",
  country: "IN",
  whatsapp: "919739628092",
  greeting:
    "Namaste, I would like to book vegetarian catering with Shree Pavan Caterers in Hubballi.",
  geo: { latitude: 15.3522, longitude: 75.1304 },
};

export const hosts = [
  { name: "Gangaram", phone: "9739628092", tel: "+919739628092", wa: "919739628092" },
  { name: "Jagadish", phone: "9739628094", tel: "+919739628094", wa: "919739628094" },
  { name: "Pappuram", phone: "8867467023", tel: "+918867467023", wa: "918867467023" },
] as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/occasions", label: "Occasions" },
  { href: "/sweets", label: "Sweets" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const keywords = [
  "Shree Pavan Caterers",
  "Shri Pavan Caterers",
  "catering services in Hubli",
  "catering services in Hubballi",
  "wedding caterers in Hubballi",
  "wedding caterers in Hubli",
  "vegetarian caterers Hubli",
  "pure veg caterer Hubballi",
  "Marwari wedding catering Hubli",
  "Marwari caterers Hubballi",
  "Jain wedding caterer Hubli",
  "Jain catering Hubballi",
  "Jain food caterers Keshwapur",
  "North Indian caterer Hubli",
  "Rajasthani catering Hubli",
  "Gujarati catering Hubballi",
  "Punjabi vegetarian catering Hubli",
  "Maheshwari wedding catering Hubli",
  "Agarwal catering Hubballi",
  "South Indian wedding catering Hubli",
  "birthday party catering Hubli",
  "engagement catering Hubballi",
  "anniversary catering Hubli",
  "corporate catering Hubballi",
  "religious function catering Hubli",
  "family function caterers Hubballi",
  "marriage food catering Dharwad",
  "Hubballi Dharwad caterers",
  "Keshwapur caterers",
  "Shivaganga Colony Hubballi catering",
  "Diwali sweets Hubli",
  "Dasara sweets Hubballi",
  "Holi sweets Hubli",
  "wedding sweets Hubballi",
  "live chai station Hubli",
  "North Karnataka wedding catering",
  "हुबली कैटरिंग",
  "शाकाहारी कैटरिंग हुबली",
  "मारवाड़ी कैटरिंग हुबली",
  "जैन कैटरिंग हुबली",
  "ಹುಬ್ಬಳ್ಳಿ ಕ್ಯಾಟರಿಂಗ್",
  "ಹುಬ್ಳಿ ಮ್ಯಾರೇಜ್ ಕ್ಯಾಟರಿಂಗ್",
  "ಧಾರವಾಡ ಕ್ಯಾಟರಿಂಗ್",
];

export const areas = [
  "Hubballi",
  "Hubli",
  "Dharwad",
  "Keshwapur",
  "Shivaganga Colony",
  "Vidyanagar",
  "Navanagar",
  "Gokul Road",
  "Unkal",
  "Deshpande Nagar",
  "Akshay Colony",
  "Club Road",
  "Old Hubli",
  "Sattur",
  "Gamanagatti",
  "North Karnataka",
];

export function whatsappHref(text = site.greeting, number = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: path,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/images/fresh/hero-buffet.jpg",
          width: 1200,
          height: 675,
          alt: "Vegetarian wedding buffet by Shree Pavan Caterers, Hubballi",
        },
      ],
    },
  };
}

export const specialities = [
  {
    title: "Marwari Catering",
    text: "Traditional Rajasthani and Marwari vegetarian cuisine, from bajri roti and dal to kaju kair and dudhi gatta.",
    image: "/images/fresh/marwari.jpg",
    href: "/services#marwari",
  },
  {
    title: "Jain Catering",
    text: "Authentic Jain food prepared to the household’s rules, without the ingredients your family sets aside.",
    image: "/images/fresh/jain.jpg",
    href: "/services#jain",
  },
  {
    title: "North Indian Catering",
    text: "Rich traditional North Indian vegetarian dishes, gravies, tandoor breads, pulao and chaat.",
    image: "/images/fresh/north-indian.jpg",
    href: "/services#north-indian",
  },
  {
    title: "Wedding & Event Catering",
    text: "Complete food arrangements for weddings and large celebrations, from breakfast through the evening meal.",
    image: "/images/fresh/wedding-service.jpg",
    href: "/services#weddings",
  },
] as const;

export const services = [
  {
    id: "marwari",
    title: "Marwari Catering",
    image: "/images/fresh/marwari.jpg",
    lede: "Traditional Rajasthani and Marwari vegetarian cuisine.",
    body: "The kitchen cooks the food Marwari families expect at a wedding: bajri roti, dal marwadi, kaju kair, mogri sabzi, dhana vadiya, dudhi gatta, lapsi and mirchi kuta. Breakfast can open with badam sheera, fafda, khakhra and bajri khichdi.",
  },
  {
    id: "jain",
    title: "Jain Catering",
    image: "/images/fresh/jain.jpg",
    lede: "Authentic Jain food, prepared according to your requirements.",
    body: "Tell us what the family does not eat. Onion, garlic and other restricted ingredients are left out of the pots you name. The same celebration can still carry dal, rice, millet breads, thepla, fafda, khakhra and mithai, cooked to those rules.",
  },
  {
    id: "north-indian",
    title: "North Indian Catering",
    image: "/images/fresh/north-indian.jpg",
    lede: "Rich traditional North Indian vegetarian dishes.",
    body: "Butter paneer masala, Delhi tandoori rotis, matka pulao, raita, manchow, khowsuey and a chaat counter of pani puri, papdi chaat and ragda pattice. The table is vegetarian throughout.",
  },
  {
    id: "weddings",
    title: "Wedding & Event Catering",
    image: "/images/fresh/wedding-service.jpg",
    lede: "Complete food arrangements for weddings and large celebrations.",
    body: "A sample function in Hubballi ran breakfast for 100, a morning service for 300 and lunch for 400, then an evening meal. Your numbers and timings set the plan. We cook, carry and serve at the venue.",
  },
  {
    id: "gujarati",
    title: "Gujarati, Agarwal & Maheshwari",
    image: "/images/fresh/intro-thali.jpg",
    lede: "Fafda, thepla, khakhra and the vegetarian wedding table these families keep.",
    body: "The visiting card names Gujarati, Agarwal and Maheshwari cooking alongside Rajasthani food. Fafda with papaya chutney, methi thepla and khakhra sit naturally on that table.",
  },
  {
    id: "punjabi",
    title: "Punjabi Vegetarian",
    image: "/images/fresh/north-indian.jpg",
    lede: "Tandoor breads and the gravies a North Indian gathering asks for.",
    body: "Paneer, tandoori roti and the richer lunch gravies are cooked in the same pure vegetarian kitchen. Nothing on the menu is non-vegetarian.",
  },
  {
    id: "south-indian",
    title: "South Indian Dishes",
    image: "/images/fresh/medu-vada.jpg",
    lede: "Idli, vada, sambar, rasam and thatte idli for a Hubballi celebration.",
    body: "The house also cooks South Indian dishes: button idli, medu vada, sambar, rasam and plate idli. They belong on a city wedding menu as much as the Rajasthani counter does.",
  },
] as const;

export const occasions = [
  {
    title: "Grand Weddings",
    text: "A full day of vegetarian cooking, from the morning sheera to the evening mithai.",
    image: "/images/fresh/occasion-wedding.jpg",
    href: "/occasions#weddings",
  },
  {
    title: "Engagement Ceremonies",
    text: "A shorter, carefully set menu for the families meeting over sweets and chaat.",
    image: "/images/fresh/occasion-engagement.jpg",
    href: "/occasions#engagements",
  },
  {
    title: "Birthday Celebrations",
    text: "Lunch or an evening spread for a home, a hall, or a courtyard.",
    image: "/images/fresh/occasion-birthday.jpg",
    href: "/occasions#birthdays",
  },
  {
    title: "Anniversary Parties",
    text: "A quieter table, still cooked in the wedding kitchen.",
    image: "/images/fresh/occasion-anniversary.jpg",
    href: "/occasions#anniversaries",
  },
  {
    title: "Religious Functions",
    text: "Satvik food for pujas and traditional gatherings, including Jain rules when asked.",
    image: "/images/fresh/occasion-religious.jpg",
    href: "/occasions#religious",
  },
  {
    title: "Family Gatherings",
    text: "The everyday celebration: a house full of people and a kitchen that can keep up.",
    image: "/images/fresh/occasion-family.jpg",
    href: "/occasions#gatherings",
  },
] as const;

export const moreOccasions = [
  {
    id: "weddings",
    title: "Grand Weddings",
    image: "/images/fresh/occasion-wedding.jpg",
    text: "Marwari, Jain and North Indian weddings in Hubballi and Dharwad. Breakfast, a morning welcome, lunch and an evening meal can all be set, with live phulka and a mithai counter.",
  },
  {
    id: "engagements",
    title: "Engagement Ceremonies",
    image: "/images/fresh/occasion-engagement.jpg",
    text: "Welcome drinks, a chaat counter, paneer pakoda and sweets. Enough for both families, without the scale of the wedding day unless you want it.",
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    image: "/images/fresh/occasion-birthday.jpg",
    text: "A vegetarian lunch or evening menu for children and elders in the same room. Chaat, paneer, pulao and a fruit counter travel well to a home.",
  },
  {
    id: "anniversaries",
    title: "Anniversary Parties",
    image: "/images/fresh/occasion-anniversary.jpg",
    text: "A smaller guest list, the same pots. Dal, breads, a gravy and hot gulab jamun are enough when the room is intimate.",
  },
  {
    id: "religious",
    title: "Religious Functions",
    image: "/images/fresh/occasion-religious.jpg",
    text: "Food for pujas, festivals and traditional occasions. Jain households can have the menu cooked without onion, garlic and anything else the family names.",
  },
  {
    id: "gatherings",
    title: "Family Gatherings",
    image: "/images/fresh/occasion-family.jpg",
    text: "Sunday lunches, housewarmings and the gatherings that are not quite a wedding and still need a proper cook.",
  },
  {
    id: "corporate",
    title: "Corporate & Private Functions",
    image: "/images/fresh/occasion-corporate.jpg",
    text: "Private dinners and office gatherings that want vegetarian Indian food rather than a hotel buffet. The menu is agreed before the day.",
  },
] as const;

export const festivals = [
  {
    id: "diwali",
    title: "Diwali",
    text: "Lapsi, kalakand, kaju paan, sitaphal rabdi, baklava and angoori, prepared and delivered for the house.",
  },
  {
    id: "dasara",
    title: "Dasara",
    text: "The same mithai kitchen, packed for Dasara visits and the meals around the festival.",
  },
  {
    id: "holi",
    title: "Holi",
    text: "Hot gulab jamun, kalakand and badam sheera for a Holi table that stays vegetarian.",
  },
  {
    id: "wedding-sweets",
    title: "Wedding mithai",
    text: "A sweet counter inside the wedding meal: manglik lapsi, kaju paan, rabdi, baklava and ice cream.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Write to us",
    text: "Send the occasion, the date and a rough guest count on WhatsApp. Gangaram, Jagadish and Pappuram all take calls.",
  },
  {
    n: "02",
    title: "Compose the menu",
    text: "We build a vegetarian menu around your family. If the food must be Jain, say exactly what to leave out.",
  },
  {
    n: "03",
    title: "We cook and serve",
    text: "The kitchen in Keshwapur cooks for the venue. Live phulka, chaat and chai can be part of the service.",
  },
] as const;

export const scenes = [
  { src: "/images/fresh/hero-buffet.jpg", alt: "Vegetarian wedding buffet by Shree Pavan Caterers, Hubballi", caption: "Wedding buffet" },
  { src: "/images/fresh/intro-thali.jpg", alt: "Vegetarian brass thali, Hubballi catering", caption: "Thali" },
  { src: "/images/fresh/marwari.jpg", alt: "Marwari vegetarian meal, Shree Pavan Caterers Hubballi", caption: "Marwari" },
  { src: "/images/fresh/jain.jpg", alt: "Jain vegetarian thali prepared in Hubballi", caption: "Jain" },
  { src: "/images/fresh/north-indian.jpg", alt: "North Indian vegetarian spread, Hubballi caterer", caption: "North Indian" },
  { src: "/images/fresh/wedding-service.jpg", alt: "Wedding catering line in Hubballi", caption: "Service" },
  { src: "/images/fresh/occasion-wedding.jpg", alt: "Wedding feast setup in Hubballi", caption: "Wedding" },
  { src: "/images/fresh/occasion-engagement.jpg", alt: "Engagement sweets and drinks, Hubballi", caption: "Engagement" },
  { src: "/images/fresh/occasion-birthday.jpg", alt: "Birthday lunch table, vegetarian catering Hubli", caption: "Birthday" },
  { src: "/images/fresh/occasion-anniversary.jpg", alt: "Anniversary thali for two, Hubballi", caption: "Anniversary" },
  { src: "/images/fresh/occasion-religious.jpg", alt: "Satvik meal for a religious function, Hubballi", caption: "Religious" },
  { src: "/images/fresh/occasion-family.jpg", alt: "Family gathering vegetarian spread, Hubballi", caption: "Family" },
  { src: "/images/fresh/occasion-corporate.jpg", alt: "Private function buffet, vegetarian, Hubballi", caption: "Private function" },
  { src: "/images/fresh/sweets-festive.jpg", alt: "Festive Indian sweets from Shree Pavan Caterers, Hubli", caption: "Mithai" },
  { src: "/images/fresh/chai-kulhad.jpg", alt: "Kulhad masala chai at a Hubballi celebration", caption: "Chai" },
  { src: "/images/fresh/about-kitchen.jpg", alt: "Vegetarian catering kitchen in Keshwapur, Hubballi", caption: "Kitchen" },
] as const;
