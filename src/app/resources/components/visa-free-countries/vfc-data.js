export const countries = [
  {
    region: "Asia",
    list: [
      {
        flag: "🇧🇹",
        name: "Bhutan",
        image: "/images/bhutan.png",
        discoverImage1: "/images/vfc/discover-bhutan-1.avif",
        discoverImage2: "/images/vfc/discover-bhutan-2.jpg",
        stayDuration: "Unlimited",
        type: "Visa-Free",
        notes:
          "Indian citizens can enter Bhutan without a visa. Permit may be issued at entry points.",
        requirement: "Entry permit at border",
        supportText: "with valid ID/passport",
        code: "BT",
        checklist: [
          "Valid Passport or Voter Identity Card",
          "Confirmed Accommodation Proof (SDF payment)",
          "Travel Insurance Policy",
          "Passport-sized photographs",
        ],
        discover: {
          tourism: {
            title: "Scenic Dzongs & Mountain Vistas",
            text: "Explore spectacular architectural fortresses (Dzongs) and hike up to the legendary Tiger's Nest Monastery amidst pristine mountain valleys.",
          },
          culture: {
            title: "Traditional Festivals & Organic Delicacies",
            text: "Experience the unique cultural heritage of Thimphu and Paro, and taste delicious local dishes like Ema Datshi made with organic mountain chilis.",
          },
        },
      },
      {
        flag: "🇳🇵",
        name: "Nepal",
        image: "/images/nepal.png",
        discoverImage1: "/images/vfc/discover-nepal-1.avif",
        discoverImage2: "/images/vfc/discover-nepal-2.jpg",
        stayDuration: "Unlimited",
        type: "Visa-Free",
        notes:
          "No visa required. Indian citizens can travel using passport or valid ID.",
        requirement: "Valid ID or passport",
        code: "NP",
        checklist: [
          "Valid Indian Passport or Voter Identity Card",
          "Proof of sufficient funds (optional but recommended)",
          "Confirmed emergency contact details",
          "Registration on arrival at border checkposts",
        ],
        discover: {
          tourism: {
            title: "Himalayan Treks & Sacred Temples",
            text: "Hike through magnificent trails like Everest Base Camp or Annapurna, and explore iconic shrines like Pashupatinath and Boudhanath Stupa in Kathmandu.",
          },
          culture: {
            title: "Newari Art & Sherpa Hospitality",
            text: "Immerse yourself in Newari woodcarving heritage in Kathmandu Durbar Square and enjoy authentic Momos and Dal Bhat in local organic mountain eateries.",
          },
        },
      },
      {
        flag: "🇲🇾",
        name: "Malaysia",
        image: "/images/malaysia.png",
        discoverImage1: "/images/vfc/discover-malaysia-1.jpg",
        discoverImage2: "/images/vfc/discover-malaysia-2.jpg",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Visa-free entry extended through 2026 for tourism. Passport must be valid for 6 months.",
        requirement: "Passport (6 months validity) + MDAC arrival card",
        code: "MY",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Malaysia Digital Arrival Card (MDAC) registered within 3 days prior",
          "Confirmed return flight ticket to India",
          "Hotel booking confirmation / Proof of accommodation",
        ],
        discover: {
          tourism: {
            title: "Petronas Towers & Rainforest Islands",
            text: "Marvel at the soaring skyscrapers of Kuala Lumpur, explore the rich colonial heritage of Penang, or relax on the pristine beaches of Langkawi.",
          },
          culture: {
            title: "Nyonya Flavors & Diverse Heritage",
            text: "Taste world-renowned Street Food including Nasi Lemak, Char Kway Teow, and explore colorful Chinese temples and Malay mosques side by side.",
          },
        },
      },
      {
        flag: "🇲🇴",
        name: "Macau",
        image: "/images/macao.png",
        discoverImage1: "/images/vfc/discover-1-macau.jpg",
        discoverImage2: "/images/vfc/discover-macau-2.jpg",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Entry allowed without visa for tourism. Return ticket may be required.",
        requirement: "Return ticket required",
        code: "MO",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return or onward travel ticket",
          "Proof of sufficient travel funds (approx. $600 USD recommended)",
          "Hotel reservation voucher",
        ],
        discover: {
          tourism: {
            title: "Ruins of St. Paul's & Glitzy Cotai Strip",
            text: "Stroll through the historic center showcasing Portuguese influence, and experience the dazzling lights of world-class resort hotels.",
          },
          culture: {
            title: "Macanese Cuisine & East-West Fusion",
            text: "Savor authentic Portuguese egg tarts, hot Pork Chop buns, and explore the unique blend of Chinese temple incense and Catholic cathedral aesthetics.",
          },
        },
      },
      {
        flag: "🇰🇿",
        name: "Kazakhstan",
        image: "/images/image.png",
        discoverImage1: "/images/vfc/discover-kazakhstan-1.avif",
        discoverImage2: "/images/vfc/discover-kazakhstan-2.jpg",
        stayDuration: "Up to 14 days",
        type: "Visa-Free",
        notes:
          "Unilateral visa-free entry valid for up to 14 consecutive days (max 42 days in a 180-day window).",
        requirement: "Valid passport + return flight ticket",
        code: "KZ",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking voucher",
          "Travel medical insurance policy",
        ],
        discover: {
          tourism: {
            title: "Charyn Canyon & Alpine Mountains",
            text: "Venture into the grand red rock formations of Charyn Canyon and discover the ultra-modern architecture and gorgeous mountain vistas of Almaty.",
          },
          culture: {
            title: "Nomadic Roots & Hearty Beshbarmak",
            text: "Learn about ancient horse-riding traditions, experience cozy yurt hospitality, and taste traditional national dishes like Beshbarmak.",
          },
        },
      },
      {
        flag: "🇵🇭",
        name: "Philippines",
        image: "/images/phillipines.png",
        discoverImage1: "/images/vfc/discover-philipines-1.jpg",
        discoverImage2: "/images/vfc/discover-philipines-2.jpg",
        stayDuration: "Up to 14 days",
        type: "Visa-Free",
        notes:
          "Strict 14-day visa-free entry for tourism and short business visits.",
        requirement: "Return ticket + hotel booking + funds proof",
        code: "PH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "eTravel registration QR Code (register 72 hours before arrival)",
          "Confirmed return or onward ticket to next destination",
          "Hotel booking confirmation / stay proof",
        ],
        discover: {
          tourism: {
            title: "Boracay Beaches & Chocolate Hills",
            text: "Sunbathe on the famous white sands of Boracay, go island hopping in El Nido, or look at the uniquely rounded geological hills in Bohol.",
          },
          culture: {
            title: "Spanish Fortresses & Savory Adobo",
            text: "Explore Spanish colonial history in the walled city of Intramuros and enjoy traditional dishes like Chicken Adobo, Lechon, and sweet Halo-Halo.",
          },
        },
      },
    ],
  },
  {
    region: "Africa",
    list: [
      {
        flag: "🇲🇺",
        name: "Mauritius",
        image: "/images/indonesia.png",
        discoverImage1: "/images/indonesia.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 90 days",
        type: "Visa-Free",
        notes:
          "No visa required for tourism. Must have return ticket and proof of accommodation.",
        requirement: "Return ticket + stay proof",
        code: "MU",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Mauritius All-in-One Travel Digital Form (fill before departure)",
          "Confirmed return flight ticket",
          "Sufficient daily funds proof (min $100 USD/day of stay)",
        ],
        discover: {
          tourism: {
            title: "Chamarel Seven Coloured Earths & Reefs",
            text: "Witness the rare multi-colored volcanic sand dunes, dive into crystal lagoons, or hike to the top of the iconic Le Morne Brabant mountain.",
          },
          culture: {
            title: "Creole Music & Spicy Dholl Puri",
            text: "Dance to traditional Sega music rhythms and taste Mauritian street food classics like Dholl Puri and spicy seafood curries.",
          },
        },
      },
      {
        flag: "🇸🇨",
        name: "Seychelles",
        image: "/images/laos.png",
        discoverImage1: "/images/laos.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Seychelles is entirely visa-free. A complimentary Visitor's Permit is issued on arrival.",
        requirement: "Return ticket + accommodation proof + min $150/day funds",
        code: "SC",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Seychelles Electronic Border Travel Authorization",
          "Confirmed return flight ticket",
          "Hotel booking confirmation / stay voucher",
        ],
        discover: {
          tourism: {
            title: "Anse Source d'Argent & Giant Tortoises",
            text: "Visit the world's most photographed beach in La Digue, spot wild giant Aldabra tortoises, and explore lush national reserve parks.",
          },
          culture: {
            title: "Colonial Plantation Houses & Octopus Curry",
            text: "Stroll past historic wooden plantation estates and enjoy delicious Creole seafood meals made with fresh coconut milk and local spices.",
          },
        },
      },
    ],
  },
  {
    region: "Oceania",
    list: [
      {
        flag: "🇫🇯",
        name: "Fiji",
        image: "/images/phillipines.png",
        discoverImage1: "/images/phillipines.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 120 days",
        type: "Visa-Free",
        notes: "No visa required for tourism stays.",
        requirement: "Passport and return ticket",
        code: "FJ",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed onward or return ticket",
          "Proof of sufficient funds for stay duration",
          "Valid international travel medical insurance",
        ],
        discover: {
          tourism: {
            title: "Mamanuca Islands & Coral Reef Lagoons",
            text: "Relax on pristine sandbars, enjoy world-class scuba diving along the Great Astrolabe Reef, or kayak through quiet river deltas.",
          },
          culture: {
            title: "Kava Ceremonies & Traditional Lovo",
            text: "Participate in a friendly, traditional Kava welcoming ceremony and enjoy a Lovo feast cooked slowly in an underground earth oven.",
          },
        },
      },
      {
        flag: "🇻🇺",
        name: "Vanuatu",
        image: "/images/bhutan.png",
        discoverImage1: "/images/bhutan.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes: "No visa required for tourist visits up to 30 days.",
        requirement: "Passport and return ticket",
        code: "VU",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return flight ticket",
          "Proof of sufficient daily funds",
          "Accommodation booking confirmation details",
        ],
        discover: {
          tourism: {
            title: "Active Mount Yasur & Blue Holes",
            text: "Stand on the edge of Mount Yasur, one of the world's most accessible active volcanoes, or swim in crystal-clear natural blue freshwater holes.",
          },
          culture: {
            title: "Custom Dances & Melanesian Laplap",
            text: "Discover ancestral tribal villages, witness spectacular custom dances, and try Laplap, the national dish made of grated root vegetables.",
          },
        },
      },
    ],
  },
  {
    region: "Americas & Caribbean",
    list: [
      {
        flag: "🇧🇧",
        name: "Barbados",
        image: "/images/malaysia.png",
        discoverImage1: "/images/malaysia.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 90 days",
        type: "Visa-Free",
        notes: "No visa required for tourism stays.",
        requirement: "Passport and return ticket",
        code: "BB",
        checklist: [
          "Valid Indian Passport",
          "Barbados ED Card online submission (completed 72 hours prior)",
          "Confirmed return ticket to India",
          "Proof of accommodation / stay voucher",
        ],
        discover: {
          tourism: {
            title: "Harrison's Cave & Platinum Coast",
            text: "Ride a tram through magnificent underground limestone caves and swim with sea turtles in the calm waters of Carlisle Bay.",
          },
          culture: {
            title: "Crop Over Festival & Flying Fish Cou-Cou",
            text: "Celebrate Bajan heritage with vibrant soca rhythms and savor Cou-Cou paired with spicy stewed flying fish, the national dish.",
          },
        },
      },
      {
        flag: "🇩🇲",
        name: "Dominica",
        image: "/images/macao.png",
        discoverImage1: "/images/macao.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 21 days",
        type: "Visa-Free",
        notes: "No visa required for short tourist stays.",
        requirement: "Return ticket + accommodation proof",
        code: "DM",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return flight ticket",
          "Sufficient travel funds proof",
          "Hotel reservation confirmation",
        ],
        discover: {
          tourism: {
            title: "Boiling Lake & Emerald Pool Rainforests",
            text: "Hike to the world's second-largest hot boiling lake, take a refreshing dip at Emerald Pool, or dive alongside underwater volcanic vents.",
          },
          culture: {
            title: "Kalinago Indigenous Art & Herbal Teas",
            text: "Visit the Kalinago Barana Autê to learn about indigenous Caribbean heritage and taste delicious local cassava breads.",
          },
        },
      },
      {
        flag: "🇸🇻",
        name: "El Salvador",
        image: "/images/nepal.png",
        discoverImage1: "/images/nepal.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 90 days",
        type: "Visa-Free",
        notes: "Visa-free entry. A tourist card might be required on arrival.",
        requirement: "Tourist card on entry",
        code: "SV",
        checklist: [
          "Valid Indian Passport",
          "Tourist Card purchased on entry ($12 USD)",
          "Return or onward flight ticket",
          "Hotel booking confirmation / stay proof",
        ],
        discover: {
          tourism: {
            title: "El Tunco Surfing & Santa Ana Volcano",
            text: "Catch world-class Pacific swells at El Tunco beach, or hike up to the stunning turquoise crater lake of Santa Ana Volcano.",
          },
          culture: {
            title: "Maya Ruins & Delicious Pupusas",
            text: "Explore ancient Mesoamerican ruins at Joya de Cerén (the 'Pompeii of the Americas') and eat hot, handmade cheese-filled Pupusas.",
          },
        },
      },
    ],
  },
  {
    region: "Middle East",
    list: [
      {
        flag: "🇶🇦",
        name: "Qatar",
        image: "/images/oman.png",
        discoverImage1: "/images/oman.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Indian citizens can obtain a visa waiver on arrival valid for 30 days provided they hold a hotel booking via Discover Qatar.",
        requirement: "Hotel booking + return ticket",
        code: "QA",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return or onward flight ticket",
          "Mandatory hotel booking through the Discover Qatar portal",
          "Sufficient funds (minimum of QAR 5000) or valid credit card",
        ],
        discover: {
          tourism: {
            title: "Doha Skyline & Souq Waqif",
            text: "Admire the futuristic skyline along the Doha Corniche, visit the magnificent Museum of Islamic Art, and explore the bustling alleys of Souq Waqif.",
          },
          culture: {
            title: "Arabian Hospitality & Qatari Machboos",
            text: "Experience authentic Qatari hospitality with cardamom-spiced Arabic coffee and savor traditional Machboos, a richly spiced rice dish.",
          },
        },
      },
    ],
  },
];
