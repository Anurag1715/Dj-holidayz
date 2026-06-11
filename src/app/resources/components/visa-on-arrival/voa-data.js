export const countries = [
  {
    region: "Southeast Asia",
    list: [
      {
        flag: "🇮🇩",
        name: "Indonesia",
        image: "/images/indonesia.png",
        discoverImage1: "/images/indonesia.png",
        discoverImage2: "/images/indonesia.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "Indonesia offers a simple visa on arrival process at major airports. Ideal for tourism, especially destinations like Bali.",
        requirement:
          "Passport (6 months validity) + VOA fee ($35 USD / IDR 500,000) + Bali Tourist Levy",
        supportText: "extendable by 30 days at local immigration",
        code: "ID",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee of IDR 500,000 or $35 USD (cash or card)",
          "Mandatory Bali Tourist Levy payment receipt (IDR 150,000 paid via official Satria portal)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Electronic Customs Declaration (e-CD) QR Code",
        ],
        discover: {
          tourism: {
            title: "Bali Beaches & Ancient Temples",
            text: "Explore the iconic rice terraces of Ubud, surf world-class waves at Uluwatu, and witness breathtaking sunsets at Tanah Lot temple perched dramatically on a rocky outcrop in the sea.",
          },
          culture: {
            title: "Javanese Heritage & Spice-Rich Cuisine",
            text: "Discover the ancient Borobudur temple, the largest Buddhist monument in the world, and savor rich flavors of Nasi Goreng, Rendang, and freshly grilled Satay from bustling street-side warungs.",
          },
        },
      },
      {
        flag: "🇱🇦",
        name: "Laos",
        image: "/images/laos.png",
        discoverImage1: "/images/laos.png",
        discoverImage2: "/images/laos.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "Travelers can obtain a visa at entry points with minimal documentation. A popular destination for cultural and nature experiences.",
        requirement: "Passport + 2 photos + VOA fee ($40 USD)",
        supportText: "available at international airports and border crossings",
        code: "LA",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Two recent passport-sized photographs",
          "Visa on Arrival fee ($40 USD in cash, clean bills)",
          "Confirmed return or onward flight ticket",
          "Completed arrival/departure card",
        ],
        discover: {
          tourism: {
            title: "Luang Prabang & Kuang Si Waterfalls",
            text: "Wander through the UNESCO-listed streets of Luang Prabang at dawn to witness monks collecting alms, then cool off in the turquoise cascading pools of Kuang Si Falls surrounded by jungle.",
          },
          culture: {
            title: "Buddhist Monasteries & Lao River Cuisine",
            text: "Experience the deeply spiritual Buddhist traditions at Wat Xieng Thong, cruise the mighty Mekong River, and enjoy authentic Laap (minced meat salad) and sticky rice prepared the traditional way.",
          },
        },
      },
      {
        flag: "🇲🇲",
        name: "Myanmar",
        image: "/images/image copy.png",
        discoverImage1: "/images/image copy.png",
        discoverImage2: "/images/image copy.png",
        stayDuration: "Up to 28 days",
        type: "Visa on Arrival",
        notes:
          "Visa on arrival is available under specific conditions. Travelers should ensure they meet entry requirements before arrival.",
        requirement: "Passport + VOA fee ($50 USD) + return ticket",
        supportText: "available at Yangon, Mandalay, and Nay Pyi Taw airports",
        code: "MM",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee of $50 USD (cash only)",
          "Confirmed return flight ticket",
          "Proof of hotel reservation or accommodation",
          "Two recent passport-sized colour photographs",
        ],
        discover: {
          tourism: {
            title: "Bagan Temples & Inle Lake",
            text: "Watch the sunrise over 2,000 ancient pagodas scattered across the plains of Bagan, and glide through the serene floating gardens and stilt villages of Inle Lake by traditional longboat.",
          },
          culture: {
            title: "Golden Pagodas & Burmese Tea Culture",
            text: "Visit the awe-inspiring Shwedagon Pagoda covered in real gold leaf, explore vibrant local markets, and enjoy traditional Mohinga (fish noodle soup), the beloved national breakfast dish.",
          },
        },
      },
      {
        flag: "🇰🇭",
        name: "Cambodia",
        image: "/images/evisa/cambodia.png",
        discoverImage1: "/images/evisa/cambodia.png",
        discoverImage2: "/images/evisa/cambodia.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "Cambodia offers both a simple online e-visa and a traditional Visa on Arrival at international airports.",
        requirement: "Passport + VOA fee ($30 USD)",
        supportText: "issued directly at airports in Phnom Penh and Siem Reap",
        code: "KH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee ($30 USD in cash, crisp bills)",
          "Two passport-sized photographs (4x6 cm)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
        ],
        discover: {
          tourism: {
            title: "Angkor Wat & Tonlé Sap Lake",
            text: "Witness the magnificent sunrise over Angkor Wat, the largest religious monument in the world, explore the labyrinth of Ta Prohm temple engulfed by giant tree roots, and visit the floating villages of Tonlé Sap.",
          },
          culture: {
            title: "Khmer Heritage & Amok Fish Curry",
            text: "Discover ancient Khmer civilization through intricate stone carvings, enjoy traditional Apsara dance performances, and taste the iconic Fish Amok steamed in banana leaves with aromatic kroeung paste.",
          },
        },
      },
      {
        flag: "🇹🇭",
        name: "Thailand",
        image: "/images/evisa/thailand.png",
        discoverImage1: "/images/evisa/thailand.png",
        discoverImage2: "/images/evisa/thailand.png",
        stayDuration: "Up to 15 days",
        type: "Visa on Arrival",
        notes:
          "Thailand has reintroduced the Visa on Arrival requirement for Indian tourists following the conclusion of its temporary exemption status.",
        requirement:
          "Passport + VOA fee (2,000 THB in cash) + TDAC QR Code + return flight",
        supportText: "available 24/7 at all international airport entry points",
        code: "TH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee of 2,000 THB (cash only, must be in Thai Baht)",
          "Thailand Digital Arrival Card (TDAC) submitted online at least 3 days prior",
          "Confirmed return flight ticket within 15 days",
          "Proof of accommodation / Hotel booking confirmation",
          "One passport-sized photograph (4x6 cm, white background)",
          "Proof of sufficient funds (10,000 THB per person or 20,000 THB per family in cash)",
        ],
        discover: {
          tourism: {
            title: "Bangkok Temples & Phi Phi Islands",
            text: "Explore the ornate Grand Palace and Wat Pho's reclining Buddha in Bangkok, then escape to the crystal-clear waters of Phi Phi Islands for world-class snorkeling and diving adventures.",
          },
          culture: {
            title: "Night Markets & Tom Yum Traditions",
            text: "Navigate the buzzing night markets of Chiang Mai, participate in a traditional Thai cooking class, and savor authentic Tom Yum Goong, Pad Thai, and sweet Mango Sticky Rice from street vendors.",
          },
        },
      },
    ],
  },
  {
    region: "South Asia & Indian Ocean",
    list: [
      {
        flag: "🇲🇻",
        name: "Maldives",
        image: "/images/indonesia.png",
        discoverImage1: "/images/indonesia.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "A complimentary 30-day tourist visa on arrival is issued to all Indian passport holders.",
        requirement:
          "IMUGA traveler declaration + valid passport + return ticket",
        supportText: "complimentary visitor permit on arrival",
        code: "MV",
        checklist: [
          "Valid Passport (at least 1 month validity from arrival date)",
          "IMUGA Traveler Declaration (submitted online within 96 hours before travel flight departure)",
          "Confirmed return flight ticket to India",
          "Confirmed hotel booking confirmation for the entire stay duration",
          "Sufficient funds proof (minimum $100 USD per day or booking proof)",
        ],
        discover: {
          tourism: {
            title: "Overwater Villas & Turquoise Lagoons",
            text: "Relax on pristine white-sand beaches, stay in world-famous overwater private villas, and snorkel among vibrant coral reefs teeming with sea turtles and reef sharks.",
          },
          culture: {
            title: "Dhivehi Hospitality & Fresh Seafood",
            text: "Experience warm Maldivian culture, enjoy traditional Boduberu drumming performances, and savor fresh grilled reef fish and coconut-infused Garudhiya fish broth.",
          },
        },
      },
    ],
  },
  {
    region: "Middle East",
    list: [
      {
        flag: "🇯🇴",
        name: "Jordan",
        image: "/images/nepal.png",
        discoverImage1: "/images/nepal.png",
        discoverImage2: "/images/nepal.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "Jordan grants a visa on arrival at international airports. Purchasing the digital 'Jordan Pass' beforehand waives the standard visa fee.",
        requirement:
          "Passport + Return flight ticket + VOA fee (40 JOD / Waived with Jordan Pass)",
        supportText: "available at Queen Alia International Airport",
        code: "JO",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa fee of 40 JOD (approx. $56 USD) or a pre-purchased Jordan Pass",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel reservation",
          "Sufficient funds to cover the duration of stay",
        ],
        discover: {
          tourism: {
            title: "Ancient Petra & Floating in the Dead Sea",
            text: "Walk through the narrow Siq canyon to witness the rose-red Treasury of ancient Petra, then head to the lowest point on earth to effortlessly float in the salt-rich waters of the Dead Sea.",
          },
          culture: {
            title: "Bedouin Hospitality & Mansaf Traditions",
            text: "Sleep beneath a canopy of stars in a Martian-like desert camp at Wadi Rum, share hot sweet mint tea with local Bedouins, and dine on traditional Mansaf (tender lamb cooked in fermented yogurt sauce over rice).",
          },
        },
      },
    ],
  },
  {
    region: "Africa",
    list: [
      {
        flag: "🇹🇿",
        name: "Tanzania",
        image: "/images/nepal.png",
        discoverImage1: "/images/nepal.png",
        discoverImage2: "/images/food.png",
        stayDuration: "Up to 90 days",
        type: "Visa on Arrival",
        notes:
          "Tanzania offers a convenient Visa on Arrival process for Indian tourists at major international airports.",
        requirement: "Passport + return ticket + VOA fee ($100 USD)",
        supportText:
          "available at Dar es Salaam, Kilimanjaro, and Zanzibar airports",
        code: "TZ",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee of $100 USD for Indian Citizens (grants a 1-year Multiple Entry visa, 90 days limit per visit)",
          "Confirmed return flight ticket",
          "Proof of accommodation / Hotel booking confirmation",
          "Yellow Fever Vaccination certificate (mandatory if arriving from or transiting through endemic countries)",
        ],
        discover: {
          tourism: {
            title: "Serengeti Safaris & Mount Kilimanjaro",
            text: "Witness the spectacular Great Wildebeest Migration in the Serengeti National Park, explore the ancient Ngorongoro Crater, and gaze up at the snow-capped peak of Mount Kilimanjaro.",
          },
          culture: {
            title: "Zanzibar Stone Town & Swahili Spices",
            text: "Wander through the historic labyrinth of Stone Town in Zanzibar, visit fragrant spice plantations, and taste traditional Swahili biryani and coconut fish curries along the coast.",
          },
        },
      },
      {
        flag: "🇿🇼",
        name: "Zimbabwe",
        image: "/images/nepal.png",
        discoverImage1: "/images/nepal.png",
        discoverImage2: "/images/nepal.png",
        stayDuration: "Up to 30 days",
        type: "Visa on Arrival",
        notes:
          "Zimbabwe offers hassle-free visas on arrival for Indian tourists at land borders and international airports, unlocking immediate access to incredible African safaris.",
        requirement: "Passport + return ticket + VOA fee ($30 USD)",
        supportText: "available at Victoria Falls and Harare airports",
        code: "ZW",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Visa on Arrival fee of $30 USD (cash preferred, clean crisp notes)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation or tour itinerary",
          "Sufficient funds for the stay period",
        ],
        discover: {
          tourism: {
            title: "The Thunder of Victoria Falls",
            text: "Stand directly at the edge of Victoria Falls, the largest curtain of falling water in the world, and track massive elephant herds through the pristine wilderness of Hwange National Park.",
          },
          culture: {
            title: "Great Zimbabwe Ruins & Shona Stone Sculptures",
            text: "Explore the towering medieval dry-stone structures of the Great Zimbabwe monument, and admire complex Shona stone sculptures hand-carved by local artisans in Harare's cultural markets.",
          },
        },
      },
    ],
  },
];
