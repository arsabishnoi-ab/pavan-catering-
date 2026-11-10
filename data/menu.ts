export type Dish = {
  id: string;
  name: string;
  hindi: string;
  description: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  intro: string;
  dishes: Dish[];
};

export type SampleService = {
  id: string;
  title: string;
  hindi?: string;
  guests: string;
  groups: { label?: string; items: string[] }[];
};

function dish(
  id: string,
  name: string,
  hindi: string,
  description: string,
  photo = true,
): Dish {
  return {
    id,
    name,
    hindi,
    description,
    image: photo ? `/images/fresh/${id}.jpg` : undefined,
  };
}

export const categories: MenuCategory[] = [
  {
    id: "welcome-drinks",
    title: "Welcome Drinks",
    kicker: "On arrival",
    intro:
      "Cold drinks poured as guests come in. On the sample card they were a strawberry shake and pineapple juice.",
    dishes: [
      dish(
        "strawberry-shake",
        "Strawberry shake",
        "स्ट्राबेरी शेक",
        "A thick strawberry shake served as a welcome drink.",
      ),
      dish(
        "pineapple-juice",
        "Pineapple juice",
        "पाइनएपल ज्यूस",
        "Fresh pineapple juice, poured cold beside the shake.",
      ),
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    kicker: "नाश्ता",
    intro:
      "The morning meal from the function card, set for about 100 guests. Sweets, farsan and a small South Indian counter share one table.",
    dishes: [
      dish(
        "badam-sheera",
        "Badam sheera",
        "बादाम सीरा",
        "Warm almond halwa, finished with saffron and slivered nuts.",
      ),
      dish(
        "dudh-jalebi",
        "Dudh jalebi and pheni",
        "दूध जलेबी फीण्णी",
        "Jalebi soaked in thickened milk, with fine pheni beside it.",
      ),
      dish(
        "kaju-badam-fry",
        "Kaju badam fry",
        "काजु बादाम फ्राई",
        "Cashews and almonds fried until just golden.",
      ),
      dish(
        "dates-ghee",
        "Dates with ghee",
        "खजूर, घी",
        "Dates warmed with ghee, a quiet sweet at the start of the day.",
      ),
      dish(
        "til-papdi",
        "Til papdi",
        "तील पापडी",
        "Sesame brittle cut into thin pieces.",
      ),
      dish(
        "fafda",
        "Fafda",
        "फाफडा",
        "Crisp gram-flour fafda, served with papaya chutney.",
      ),
      dish(
        "button-idli",
        "Button idli",
        "बटन ईडली",
        "Tiny steamed idlis for the South Indian side of breakfast.",
        true,
      ),
      dish(
        "medu-vada",
        "Vada",
        "वडा",
        "Medu vada with sambar and chutney.",
        true,
      ),
      dish(
        "poha",
        "Poha with fine sev",
        "पोहा, बारीक सेव",
        "Flattened rice finished with a heavy handful of fine sev.",
      ),
      dish(
        "khakhra",
        "Khakhra",
        "खाखरा",
        "Thin, roasted khakhra, the kind that stays crisp through a long morning.",
      ),
      dish(
        "bajri-khichdi",
        "Bajri khichdi",
        "बाजरी खीच",
        "Pearl-millet khichdi, a Rajasthani breakfast staple.",
      ),
      dish(
        "papaya-chutney",
        "Papaya chutney",
        "पपीता चटनी",
        "Fresh papaya chutney for the fafda.",
      ),
      dish(
        "sambar",
        "Sambar",
        "साम्बर",
        "Served with the vada and idli.",
      ),
      dish(
        "chutney",
        "Chutney",
        "चटनी",
        "The breakfast chutney, with ghee on the side.",
      ),
      dish(
        "milk-ghee-jaggery",
        "Milk, ghee and jaggery",
        "दूध, घी, गुड",
        "Warm milk with ghee and jaggery.",
      ),
      dish(
        "bread-butter-jam",
        "Bread, butter and jam",
        "ब्रेड बटर जाम",
        "A plain alternative for guests who want it.",
      ),
      dish("tea-coffee", "Tea and coffee", "चाय, कॉफी", "Hot tea and coffee through the morning."),
      dish("water", "Drinking water", "पानी", "Water with the meal."),
    ],
  },
  {
    id: "starters",
    title: "Starters",
    kicker: "Before the meal",
    intro:
      "The morning service and the lunch namkeen counter. Fried, baked and dry snacks, plus two soups.",
    dishes: [
      dish(
        "paneer-pakoda",
        "Paneer pakoda",
        "पनीर पकोड़ा",
        "Paneer fritters for the mid-morning service.",
      ),
      dish(
        "cheese-ball",
        "Cheese ball",
        "चीज बॉल",
        "Small fried cheese balls from the same service.",
      ),
      dish(
        "mathri",
        "Mathri, khari and biscuit",
        "मठरी, खारी, बिस्केट",
        "Flaky mathri with khari, biscuit and choco on the snack plate.",
      ),
      dish(
        "matar-samosa",
        "Matar samosa",
        "मटर समोसा",
        "Pea samosa from the lunch namkeen.",
        true,
      ),
      dish(
        "dry-namkeen",
        "Dry namkeen",
        "ड्राई नमकीन",
        "A dry namkeen mix set out with the samosa.",
      ),
      dish(
        "paneer-shate",
        "Paneer shate",
        "पनीर शाटे",
        "Paneer pieces from the namkeen list, as the card writes them.",
      ),
      dish(
        "manchow",
        "Manchow soup",
        "मन्चो सूप",
        "Hot vegetable manchow, one of the two lunch soups.",
      ),
      dish(
        "khowsuey",
        "Khowsuey soup",
        "खाउसा सूप",
        "A vegetarian khowsuey soup with its crunch of toppings.",
      ),
      dish(
        "two-chutneys",
        "Two chutneys",
        "चटनी 2 टाइप",
        "Two chutneys with the namkeen.",
      ),
    ],
  },
  {
    id: "chaat",
    title: "Chaat & Street Food",
    kicker: "A separate counter",
    intro: "The lunch card keeps a chaat line of its own, after the rice and before the ice cream.",
    dishes: [
      dish("pani-puri", "Pani puri", "पानी पुरी", "Puri, paani and potato, assembled to order.", true),
      dish("papdi-chaat", "Papdi chaat", "पापडी चाट", "Crisp papdi with chutneys and yoghurt."),
      dish(
        "pizza-cheese",
        "Pizza cheese",
        "पिज़्जा चीज",
        "Cheese bites from the chaat list, written on the card as pizza cheese.",
      ),
      dish("ragda-pattice", "Ragda pattice", "रगडा पेटीस", "Potato pattice with ragda, chutney and sev."),
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    kicker: "The centre of lunch",
    intro:
      "Butter paneer leads the North Indian gravies. The Rajasthani sabzis are set as their own counter, just below.",
    dishes: [
      dish(
        "butter-paneer",
        "Butter paneer masala",
        "बटर पनीर मसाला",
        "Paneer in a tomato gravy, the centrepiece of the lunch sabzis.",
        true,
      ),
      dish(
        "salad",
        "Salad",
        "सलाद",
        "Chana, moong, rajma and onion, as the card lists them.",
      ),
    ],
  },
  {
    id: "rajasthani",
    title: "Rajasthani Specialities",
    kicker: "The regional counter",
    intro:
      "Dishes the kitchen is known for: ker and kair, mogri, gatta, marwadi dal and the millet breads that go with them.",
    dishes: [
      dish(
        "kaju-kair",
        "Kaju kair",
        "काजु कैर",
        "Cashew and kair, a Rajasthani sabzi from the lunch card.",
      ),
      dish(
        "mogri-sabzi",
        "Mogri sabzi",
        "मोगरी सब्जी",
        "Radish-pod curry, cooked the Rajasthani way.",
      ),
      dish(
        "dhana-vadiya",
        "Dhana vadiya",
        "धाणा वडीया",
        "Coriander vadi, served among the lunch sabzis.",
      ),
      dish(
        "dal-marwadi",
        "Dal marwadi",
        "दाल मारवाडी",
        "A rich Marwadi dal, listed with the rice on the card.",
        true,
      ),
      dish(
        "dudhi-gatta",
        "Dudhi gatta",
        "दुदी गठा",
        "Bottle-gourd gatte from the evening meal, served hot.",
      ),
      dish(
        "mirchi-kuta",
        "Mirchi kuta",
        "मीर्ची कुटा",
        "Crushed green chilli, eaten with bajri roti or thepla.",
      ),
    ],
  },
  {
    id: "jain",
    title: "Jain Specialities",
    kicker: "Cooked to the family’s rules",
    intro:
      "The printed card has no separate Jain column. Jain food is prepared when you ask for it, without onion, garlic, or anything else the household sets aside. These dishes from the kitchen take that brief well.",
    dishes: [
      dish("fafda", "Fafda", "फाफडा", "Gram-flour fafda, cooked without restricted ingredients."),
      dish("khakhra", "Khakhra", "खाखरा", "Plain khakhra, a safe breakfast bread for many Jain tables."),
      dish("thepla", "Thepla", "थेपला", "Methi thepla, spices adjusted to the family."),
      dish("bajri-roti", "Bajri roti", "बाजरी रोटी", "Millet roti with nothing but the grain, salt and ghee if you allow it."),
      dish("dal-marwadi", "Dal marwadi", "दाल मारवाडी", "The dal, made without onion, garlic or the ingredients you name."),
      dish("poha", "Poha", "पोहा", "Poha without onion, if that is how the family eats it."),
      dish("lapsi", "Manglik lapsi", "मांगलिक लापसी", "Wheat lapsi with ghee and nuts. A sweet that suits a Jain mithai counter."),
      dish("button-idli", "Button idli", "बटन ईडली", "Steamed idli, plain enough to sit on a Jain breakfast."),
    ],
  },
  {
    id: "breads",
    title: "Indian Breads",
    kicker: "रोटी",
    intro: "Live phulka at lunch, tandoor roti, millet roti, and thepla from the evening bread counter.",
    dishes: [
      dish("phulka", "Phulka, live", "फुलका (लाईव)", "Whole-wheat phulka, puffed at the stall while lunch is served.", true),
      dish("tandoori-roti", "Delhi tandoori", "दिल्ली तन्दुरी", "Tandoori roti from the lunch bread list."),
      dish("bajri-roti", "Bajri roti", "बाजरी रोटी", "Thick millet roti, the Rajasthani bread on the card."),
      dish("thepla", "Thepla", "थेपला", "Gujarati thepla from the evening bread counter."),
    ],
  },
  {
    id: "rice",
    title: "Rice & Pulao",
    kicker: "With the dal",
    intro: "Matka pulao at lunch, plain rice at lunch and again in the evening, and raita beside them.",
    dishes: [
      dish("matka-pulao", "Matka pulao", "मटका पुलाव", "Vegetable pulao served from a clay matka."),
      dish("raita", "Raita", "रायता", "Raita set out with the rice. The card notes it is to be served warm."),
      dish("steamed-rice", "Steamed rice", "राईस", "Plain rice at lunch and with the evening rasam."),
      dish("lijjat-papad", "Lijjat papad", "लिज़्जीत पापड", "Lijjat papad with the rice."),
      dish("pickle", "Pickle", "अचार", "Achar with the rice course."),
      dish("papad", "Papad", "पापड", "Papad on the lunch table."),
      dish("bottled-water", "Bottled water", "पानी बोतल", "A bottle of water with the lunch service."),
      dish("mukhwas", "Mukhwas", "मुखवास", "Mouth freshener after the meal."),
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Sweets",
    kicker: "मिठाई",
    intro:
      "Mithai at lunch, hot sweets in the evening, and the breakfast halwa. These are also what the kitchen prepares for Diwali, Dasara, Holi and weddings.",
    dishes: [
      dish("lapsi", "Manglik lapsi", "मांगलिक लापसी", "Ceremonial wheat lapsi, rich with ghee."),
      dish("kaju-paan", "Kaju paan sweet", "काजु पान स्वीट", "A cashew sweet shaped like paan."),
      dish("sitaphal-rabdi", "Sitaphal rabdi", "सीताफल रबडी", "Custard apple folded into slow-cooked rabdi."),
      dish("baklava", "Baklava", "बकलावा", "Nut baklava on the wedding mithai list."),
      dish(
        "angoori",
        "Australian angoori",
        "ऑस्ट्रेलियन अंगुरी डिप",
        "Small angoori sweets, written on the card in those words.",
      ),
      dish("stick-sweet", "Stick sweet", "स्टिक स्वीट", "Two sweet sticks on the morning service."),
      dish("kalakand", "Hot kalakand", "गर्म कलाकन्द", "Kalakand served warm at the evening meal."),
      dish("gulab-jamun", "Hot gulab jamun", "गर्म गुलाब जामुन", "Gulab jamun in syrup, served hot.", true),
      dish(
        "ice-cream",
        "Ice cream, Abu Gadda",
        "आबु गड्डा",
        "Ice cream named Abu Gadda on the card, after the chaat.",
      ),
      dish(
        "fruit-platter",
        "Fruit",
        "केला, वाटरमिलन, पेयर, लिच्ची, सिमरन",
        "Banana, watermelon, pear, litchi and simran, as the card lists the fruit.",
      ),
    ],
  },
  {
    id: "evening",
    title: "Evening Meal",
    kicker: "शाम का खाना",
    intro:
      "A lighter night meal on the sample card: hot sweets, one Rajasthani sabzi, rasam, rice, thatte idli and thepla. Hajiyo is kept under the name printed on the card.",
    dishes: [
      dish("thatte-idli", "Thatte idli", "तट्टे इडली", "Broad, soft plate idli with chutney."),
      dish("rasam", "Rasam", "रसम", "Pepper rasam with the evening rice."),
      dish(
        "hajiyo",
        "Hajiyo",
        "हाजीयो",
        "Listed on the evening card between dudhi gatta and rasam, under this name.",
      ),
      dish(
        "putana-chutney",
        "Ghee and putana chutney",
        "घी, पुटाणा चटनी",
        "Ghee and putana chutney with the evening idli and rice.",
      ),
    ],
  },
];

export const sampleServices: SampleService[] = [
  {
    id: "breakfast-card",
    title: "Breakfast",
    hindi: "नाश्ता",
    guests: "100",
    groups: [
      {
        items: [
          "बादाम सीरा",
          "दूध जलेबी फीण्णी",
          "काजु बादाम फ्राई",
          "खजूर, घी",
          "तील पापडी",
          "फाफडा",
          "पपीता चटनी",
          "बटन ईडली",
          "वडा",
          "साम्बर",
          "चटनी",
          "पोहा, बारीक सेव",
          "खाखरा",
          "घी, चटनी",
          "बाजरी खीच",
          "दूध, घी, गुड",
          "ब्रेड बटर जाम",
          "चाय, कॉफी",
          "पानी",
        ],
      },
    ],
  },
  {
    id: "morning-card",
    title: "Morning service",
    guests: "300",
    groups: [
      { label: "Welcome drink", items: ["स्ट्राबेरी शेक", "पाइनएपल ज्यूस"] },
      { items: ["स्टिक स्वीट 2", "चीज बॉल", "पनीर पकोड़ा"] },
      { items: ["चाय, काफी"] },
      { items: ["खारी, बिस्केट, मठरी, चोको"] },
    ],
  },
  {
    id: "lunch-card",
    title: "Lunch",
    hindi: "दोपहर का खाना",
    guests: "400",
    groups: [
      { label: "Soup", items: ["मन्चो सूप", "खाउसा सूप"] },
      {
        label: "Mithai",
        items: ["मांगलिक लापसी", "काजु पान स्वीट", "सीताफल रबडी", "बकलावा", "ऑस्ट्रेलियन अंगुरी डिप"],
      },
      { label: "Namkeen", items: ["ड्राई नमकीन", "मटर समोसा", "पनीर शाटे", "चटनी 2 टाइप"] },
      { label: "Roti", items: ["फुलका (लाईव)", "दिल्ली तन्दुरी", "बाजरी रोटी"] },
      { label: "Sabzi", items: ["बटर पनीर मसाला", "काजु कैर", "धाणा वडीया", "मोगरी सब्जी"] },
      {
        label: "Rice",
        items: [
          "मटका पुलाव",
          "रायता",
          "राईस",
          "दाल मारवाडी",
          "लिज़्जीत पापड",
          "अचार",
          "पापड",
          "सलाद (चना, मूंग, राजमा, प्याज)",
          "पानी बोतल",
          "मुखवास",
        ],
      },
      { label: "Chaat", items: ["पानी पुरी", "पापडी चाट", "पिज़्जा चीज", "रगडा पेटीस"] },
      { label: "Ice cream", items: ["आबु गड्डा"] },
      { label: "Fruit", items: ["केला", "वाटरमिलन", "पेयर", "लिच्ची", "सिमरन"] },
    ],
  },
  {
    id: "evening-card",
    title: "Evening meal",
    hindi: "शाम का खाना",
    guests: "As booked",
    groups: [
      {
        items: [
          "गर्म कलाकन्द",
          "गर्म गुलाब जामुन",
          "दुदी गठा",
          "हाजीयो",
          "रसम",
          "राईस",
          "तट्टे इडली",
          "चटनी",
          "घी, पुटाणा चटनी",
        ],
      },
      { label: "आटा", items: ["थेपला", "मीर्ची कुटा"] },
    ],
  },
];

export function photoDishes(): Dish[] {
  const seen = new Set<string>();
  const list: Dish[] = [];
  for (const category of categories) {
    for (const item of category.dishes) {
      if (!item.image || seen.has(item.image)) continue;
      seen.add(item.image);
      list.push(item);
    }
  }
  return list;
}
