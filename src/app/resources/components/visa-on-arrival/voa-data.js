export const countries = [
  {
    region: "Southeast Asia",
    list: [
      {
        flag: "🇮🇩",
        name: "Indonesia",
        image: "/images/indonesia.png",
        discoverImage1: "/images/voa/discover-indonesia-1.avif",
        discoverImage2: "/images/voa/discover-indonesia-2.avif",
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
        attractions: [
          {
            title: "Uluwatu Temple",
            image: "/images/voa/ta-attraction-1.avif",
          },
          {
            title: "Ubud Rice Terraces",
            image: "/images/voa/ta-indonesia-2.jpg",
          },
          { title: "Mount Batur", image: "/images/voa/ta-indonesia-3.jpg" },
        ],
      },
      {
        flag: "🇱🇦",
        name: "Laos",
        image: "/images/voa/laos-hero.webp",
        discoverImage1: "/images/voa/discover-1-laos.jpg",
        discoverImage2: "/images/voa/discover-laos-2.jpg",
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
            title: "Mekong River Cruises & Ancient Ruins",
            text: "Sail down the serene Mekong River taking in lush jungle landscapes, and explore the mysterious ancient sites of the Plain of Jars across the misty Xieng Khouang Plateau.",
          },
          culture: {
            title: "Buddhist Monasteries & Lao Cuisine",
            text: "Experience deeply spiritual traditions at the historic Wat Xieng Thong, explore the sacred Pak Ou Caves, and enjoy authentic Laap and sticky rice prepared the traditional way.",
          },
        },
        attractions: [
          { title: "Kuang Si Falls", image: "/images/voa/ta-laos-1.webp" },
          { title: "Pha That Luang", image: "/images/voa/ta-laos-3.jpg" },
          { title: "Vang Vieng", image: "/images/voa/ta-attraction-3.jpg" },
        ],
      },
      {
        flag: "🇲🇲",
        name: "Myanmar",
        image: "/images/image copy.png",
        discoverImage1: "/images/voa/discover-myanmar-1.jpg",
        discoverImage2: "/images/voa/discover-myanmar-2.webp",
        stayDuration: "Up to 30 days",
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
            title: "Irrawaddy Cruises & Pristine Beaches",
            text: "Glide along the historic Irrawaddy River on a traditional riverboat, trek through misty mountain villages in Shan State, and relax on the untouched white sands of Ngapali Beach.",
          },
          culture: {
            title: "Monastic Life & Burmese Tea Culture",
            text: "Immerse yourself in deeply spiritual traditions at the Mahamuni Buddha Temple, walk across the iconic U Bein Bridge at sunset, and enjoy traditional Mohinga, the beloved national breakfast dish.",
          },
        },
        attractions: [
          { title: "Bagan Temples", image: "/images/voa/ta-myanmar-1.avif" },
          { title: "Inle Lake", image: "/images/voa/ta-myanmar-2.jpg" },
          { title: "Shwedagon Pagoda", image: "/images/voa/ta-myanmar-3.jpg" },
        ],
      },
      {
        flag: "🇰🇭",
        name: "Cambodia",
        image: "/images/voa/cambodia-hero.avif",
        discoverImage1: "/images/voa/discover-1-cambodia.jpg",
        discoverImage2: "/images/voa/discover-cambodia-2.jpg",
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
            title: "Jungle Trails & Tropical Islands",
            text: "Cycle through dense rainforest paths to uncover forgotten, moss-covered ruins like Beng Mealea, explore the Cardamom Mountains, and relax on the pristine white-sand beaches of Koh Rong.",
          },
          culture: {
            title: "Khmer Heritage & Amok Fish Curry",
            text: "Discover majestic royal architecture at the Phnom Penh Royal Palace, marvel at the gleaming Silver Pagoda, and taste the iconic Fish Amok steamed in banana leaves with aromatic spices.",
          },
        },
        attractions: [
          { title: "Angkor Wat", image: "/images/voa/ta-cambodia-1.webp" },
          { title: "Bayon Temple", image: "/images/voa/ta-attraction-2.jpg" },
          { title: "Tonlé Sap", image: "/images/voa/ta-cambodia-3.jpg" },
        ],
      },
      {
        flag: "🇹🇭",
        name: "Thailand",
        image: "/images/voa/thailand-home.webp",
        discoverImage1: "/images/voa/discover-thailand-1.jpg",
        discoverImage2: "/images/voa/discover-thailand-2.avif",
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
            title: "Lush Jungles & Andaman Coastlines",
            text: "Trek through the ancient rainforests of Khao Sok National Park, visit ethical elephant sanctuaries in Chiang Dao, and relax on the stunning limestone-framed shores of Railay Beach.",
          },
          culture: {
            title: "Night Markets & Tom Yum Traditions",
            text: "Marvel at the massive Reclining Buddha at Wat Pho, navigate the vibrant stalls of Damnoen Saduak Floating Market, and savor authentic Tom Yum Goong and sweet Mango Sticky Rice.",
          },
        },
        attractions: [
          { title: "Grand Palace", image: "/images/voa/ta-thailand-1.jpg" },
          { title: "Phi Phi Islands", image: "/images/voa/ta-thailand-2.jpg" },
          { title: "Ayutthaya", image: "/images/voa/ta-thailand-3.jpg" },
        ],
      },
    ],
  },
  {
    region: "South Asia & Indian Ocean",
    list: [
      {
        flag: "🇲🇻",
        name: "Maldives",
        image: "/images/voa/maldiver-hero.jpg",
        discoverImage1: "/images/voa/discover-maldives-1.jpg",
        discoverImage2: "/images/voa/discover-maldives-2.jpg",
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
            text: "Swim alongside majestic whale sharks in the South Ari Atoll, experience the glowing bioluminescent 'Sea of Stars' on Vaadhoo Island, and stay in world-famous overwater private villas.",
          },
          culture: {
            title: "Dhivehi Hospitality & Fresh Seafood",
            text: "Explore the historic coral-stone architecture of the Male Friday Mosque (Hukuru Miskiy), enjoy traditional Boduberu drumming, and savor coconut-infused Garudhiya fish broth.",
          },
        },
        attractions: [
          { title: "Maafushi", image: "/images/voa/ta-maldives-1.avif" },
          { title: "Male Atoll", image: "/images/voa/ta-maldives-2.jpg" },
          { title: "Baa Atoll", image: "/images/voa/ta-maldives-3.jpg" },
        ],
      },
    ],
  },
  {
    region: "Middle East",
    list: [
      {
        flag: "🇯🇴",
        name: "Jordan",
        image: "/images/voa/jordan-hero.jpg",
        discoverImage1: "/images/voa/discover-jordan-1.jpg",
        discoverImage2: "/images/voa/discover-jordan-2.webp",
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
            title: "Roman Ruins & Red Sea Reefs",
            text: "Hike the scenic trails of the Dana Biosphere Reserve, discover incredibly preserved Roman architecture at Jerash, and marvel at colorful coral reefs while snorkeling in the warm waters of Aqaba.",
          },
          culture: {
            title: "Bedouin Hospitality & Mansaf Traditions",
            text: "Explore the ancient ruins at the Amman Citadel, admire the famous Byzantine mosaic map in Madaba, and dine on traditional Mansaf cooked in fermented yogurt sauce over rice.",
          },
        },
        attractions: [
          { title: "Petra", image: "/images/voa/ta-jordan-1.jpg" },
          { title: "Dead Sea", image: "/images/voa/ta-attraction-3.webp" },
          { title: "Wadi Rum", image: "/images/voa/ta-jordan-3.webp" },
        ],
      },
    ],
  },
  {
    region: "Africa",
    list: [
      {
        flag: "🇹🇿",
        name: "Tanzania",
        image: "/images/voa/tanzania-hero.jpg",
        discoverImage1: "/images/voa/discover-tanzania-1.webp",
        discoverImage2: "/images/voa/discover-tanzania-2.png",
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
            title: "Vast Savannas & Sunrise Safaris",
            text: "Spot the Big Five descending into the incredible Ngorongoro Crater, marvel at the massive elephant herds in Tarangire National Park, and drift over the landscape in a breathtaking hot air balloon.",
          },
          culture: {
            title: "Coastal Labyrinths & Swahili Spices",
            text: "Wander through the historic, winding alleyways of Stone Town in Zanzibar, experience traditional Maasai boma village life, and taste authentic Swahili biryani and coconut fish curries.",
          },
        },
        attractions: [
          {
            title: "Serengeti National Park",
            image: "/images/voa/ta-tanzania-1.jpg",
          },
          {
            title: "Mount Kilimanjaro",
            image: "/images/voa/ta-tanzania-2.avif",
          },
          { title: "Lake Manyara", image: "/images/voa/ta-tanzania-3.jpg" },
        ],
      },
      {
        flag: "🇿🇼",
        name: "Zimbabwe",
        image: "/images/voa/zimbabwe-hero.jpg",
        discoverImage1: "/images/voa/discover-zimbabwe-1.jpg",
        discoverImage2: "/images/voa/discover-zimbabwe-2.jpg",
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
            title: "River Cruises & Walking Safaris",
            text: "Take a tranquil sunset cruise on the massive Lake Kariba, embark on thrilling walking safaris in Mana Pools National Park, and spot roaming rhinos in the spectacular granite hills of Matobo.",
          },
          culture: {
            title: "Tribal Heritage & Stone Sculptures",
            text: "Explore the fascinating ancient Khami Ruins near Bulawayo, admire complex Shona stone sculptures at the National Gallery in Harare, and experience vibrant traditional music and dance performances.",
          },
        },
        attractions: [
          { title: "Victoria Falls", image: "/images/voa/ta-zimbabwe-1.jpg" },
          {
            title: "Hwange National Park",
            image: "/images/voa/ta-zimbabwe-3.jpg",
          },
          { title: "Chinhoyi Caves", image: "/images/voa/ta-zimbabwe-2.jpg" },
        ],
      },
    ],
  },
];
