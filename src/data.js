import imgGranEspresso from "./assets/home/desktop/image-gran-espresso.png";
import imgPlanalto from "./assets/home/desktop/image-planalto.png";
import imgPiccollo from "./assets/home/desktop/image-piccollo.png";
import imgDanche from "./assets/home/desktop/image-danche.png";

import imgFeatureQuality from "./assets/home/desktop/icon-coffee-bean.svg";
import imgBenefits from "./assets/home/desktop/icon-gift.svg";
import imgShipping from "./assets/home/desktop/icon-truck.svg";

import ukIcon from "./assets/about/desktop/illustration-uk.svg";
import canadaIcon from "./assets/about/desktop/illustration-canada.svg";
import austrailiaIcon from "./assets/about/desktop/illustration-australia.svg";

export const collection = [
  {
    id: 1,
    title: "gran espresso",
    description: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    img: imgGranEspresso,
  },
  {
    id: 2,
    title: "planalto",
    description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    img: imgPlanalto,
  },
  {
    id: 3,
    title: "piccollo",
    description: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    img: imgPiccollo,
  },
  {
    id: 4,
    title: "danche",
    description: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    img: imgDanche,
  },
];

export const feature = [
  {
    id: 1,
    title: "best quality",
    description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    img: imgFeatureQuality,
  },
  {
    id: 2,
    title: "exclusive benefits",
    description: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    img: imgBenefits,
  },
  {
    id: 3,
    title: "free shipping",
    description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    img: imgShipping,
  },
];

export const works = [
  {
    id: 1,
    title: "pick your coffee",
    description: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 2,
    title: "choose the frequency",
    description: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    title: "receive and enjoy!",
    description: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const headquarters = [
  {
    id: 1,
    title: "united kingdom",
    street: "68 Asfordby Rd",
    city: "Alcaston",
    postal: "SY6 1YA",
    phone: "+44 1241 918425",
    img: ukIcon,
  },
  {
    id: 2,
    title: "canada",
    street: "1528  Eglinton Avenue",
    city: "Toronto",
    postal: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
    img: canadaIcon,
  },
  {
    id: 3,
    title: "australia",
    street: "36 Swanston Street",
    city: "Kewell",
    postal: "Victoria",
    phone: "+61 4 9928 3629",
    img: austrailiaIcon,
  },
];

export const subscription = [
  {
    id: 1,
    title: "How do you drink your coffee?",
    type: "preferences",
    content: [
      {
        title: "capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "filter",
        description: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "espresso",
        description: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    title: "What type of coffee?",
    type: "bean-type",
    content: [
      {
        title: "single origin",
        description: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "decaf",
        description: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "blended",
        description: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    title: "How much would you like?",
    type: "quantity",

    content: [
      {
        title: "250g",
        description: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        description: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        description: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    title: "Want us to grind them?",
    type: "grind-option",
    content: [
      {
        title: "wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "filter-grind",
        description: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "cafetiére",
        description: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 5,
    title: "How often should we deliver?",
    type: "deliveries",
    content: [
      {
        title: "every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];
