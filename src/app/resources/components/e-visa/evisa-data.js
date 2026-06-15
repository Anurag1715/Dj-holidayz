export const countries = [
  {
    region: "Asia",
    list: [
      {
        flag: "🇱🇰",
        name: "Sri Lanka",
        image: "/images/evisa/sri-lanka.png",
        discoverImage1: "/images/voa/discover-srilanka-1.webp",
        discoverImage2: "/images/vfc/discover-srilanka-2.jpg",
        stayDuration: "Up to 30 days",
        type: "ETA",
        notes:
          "Sri Lanka offers a quick ETA process that can be completed online within minutes. Ideal for short leisure trips.",
        requirement: "Online ETA approval + valid passport",
        supportText: "ETA processed within 24 hours",
        code: "LK",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved ETA (Electronic Travel Authorization) printout",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds for the stay",
        ],
        discover: {
          tourism: {
            title: "Dambulla Caves & Hill Country Trains",
            text: "Explore the ancient Dambulla Cave Temple, ride scenic trains through the misty emerald tea estates of Nuwara Eliya, and hike the dramatic trails of Horton Plains.",
          },
          culture: {
            title: "Ancient Ruins & Ceylon Spice Cuisine",
            text: "Wander through the majestic ancient ruins of Anuradhapura and Polonnaruwa, and savor authentic Sri Lankan rice and curry with fiery pol sambol and fresh hoppers.",
          },
        },
        attractions: [
          {
            title: "Sigiriya Rock",
            image: "/images/evisa/ta-attraction-1.jpg",
          },
          {
            title: "Temple of the Tooth",
            image: "/images/evisa/ta-srilanka-2.webp",
          },
          {
            title: "Yala National Park",
            image: "/images/evisa/ta-srilanka-3.jpg",
          },
        ],
      },
      {
        flag: "🇻🇳",
        name: "Vietnam",
        image: "/images/evisa/vietnam.png",
        discoverImage1: "/images/evisa/discover-vietnam-1.jpg",
        discoverImage2: "/images/evisa/discover-vietnam-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "Vietnam offers a fully digital visa application system with quick processing for tourists.",
        requirement: "Online e-visa approval + valid passport",
        supportText: "processing takes 3 business days",
        code: "VN",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved e-visa printout (letter with barcode)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Two passport-sized photographs",
        ],
        discover: {
          tourism: {
            title: "Mekong Delta & Island Escapes",
            text: "Float through the lush waterways of the Mekong Delta, cycle past the striking limestone mountains of Ninh Binh, and relax on the pristine white beaches of Phu Quoc island.",
          },
          culture: {
            title: "Imperial History & Pho Culture",
            text: "Explore the ancient Hue Imperial City, crawl through the historic Cu Chi Tunnels near Ho Chi Minh City, and enjoy steaming bowls of Pho and crispy Banh Mi from family-run stalls.",
          },
        },
        attractions: [
          { title: "Ha Long Bay", image: "/images/evisa/ta-vietnam-1.jpg" },
          {
            title: "Hoi An Ancient Town",
            image: "/images/evisa/ta-vietnam-2.jpg",
          },
          { title: "Phong Nha Caves", image: "/images/evisa/ta-vietnam-3.jpg" },
        ],
      },
      {
        flag: "🇸🇬",
        name: "Singapore",
        image: "/images/evisa/singapore.png",
        discoverImage1: "/images/evisa/discover-singapore-1.jpg",
        discoverImage2: "/images/evisa/discover-singapore-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "A streamlined e-visa process allows travelers to enter Singapore for tourism or business purposes.",
        requirement: "E-visa via authorized agent + valid passport",
        supportText: "apply through Singapore-registered agencies",
        code: "SG",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved e-visa (submitted through authorized agent)",
          "Confirmed return flight ticket to India",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds for the stay",
        ],
        discover: {
          tourism: {
            title: "Night Safaris & Urban Waterfalls",
            text: "Embark on the world's first nocturnal wildlife park at the Night Safari, marvel at the breathtaking indoor waterfall at Jewel Changi Airport, and meet orangutans at the Singapore Zoo.",
          },
          culture: {
            title: "Peranakan Heritage & Hawker Feasts",
            text: "Admire the colorful Peranakan shophouses in Katong, explore the vibrant streets of Kampong Glam, and feast at UNESCO-recognized hawker centres on Hainanese Chicken Rice.",
          },
        },
        attractions: [
          {
            title: "Marina Bay Sands",
            image: "/images/evisa/ta-singapore-1.jpg",
          },
          {
            title: "Gardens by the Bay",
            image: "/images/evisa/ta-attraction-2.jpg",
          },
          {
            title: "Sentosa Island",
            image: "/images/evisa/ta-singapore-3.jpg",
          },
        ],
      },
      {
        flag: "🇲🇾",
        name: "Malaysia",
        image: "/images/malaysia.png",
        discoverImage1: "/images/vfc/discover-malaysia-1.jpg",
        discoverImage2: "/images/vfc/discover-malaysia-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "Malaysia requires all travelers to submit the Malaysia Digital Arrival Card (MDAC) online before arrival.",
        requirement: "Passport (6 months validity) + MDAC arrival card",
        supportText: "MDAC registered within 3 days prior",
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
        attractions: [
          {
            title: "Petronas Twin Towers",
            image: "/images/vfc/malaysia-ta-1.jpg",
          },
          { title: "Batu Caves", image: "/images/vfc/malaysia-ta-2.jpg" },
          { title: "Mount Kinabalu", image: "/images/vfc/malaysia-ta-3.jpg" },
        ],
      },
      {
        flag: "🇵🇭",
        name: "Philippines",
        image: "/images/phillipines.png",
        discoverImage1: "/images/vfc/discover-philipines-1.jpg",
        discoverImage2: "/images/vfc/discover-philipines-2.jpg",
        stayDuration: "Up to 14 days",
        type: "E-Visa",
        notes:
          "Strict 14-day stay for tourism. Online registration is required via the eTravel portal.",
        requirement: "eTravel registration + return ticket + valid passport",
        supportText: "eTravel registered within 72 hours prior",
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
        attractions: [
          { title: "Kawasan Falls", image: "/images/vfc/ta-philippines-1.jpg" },
          {
            title: "Banaue Rice Terraces",
            image: "/images/vfc/ta-philippines-2.jpg",
          },
          {
            title: "Mayon Volcano",
            image: "/images/vfc/ta-philippines-3.webp",
          },
        ],
      },
      {
        flag: "🇰🇭",
        name: "Cambodia",
        image: "/images/voa/cambodia-hero.avif",
        discoverImage1: "/images/voa/discover-1-cambodia.jpg",
        discoverImage2: "/images/voa/discover-cambodia-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "Cambodia offers both a simple online e-visa and a traditional Visa on Arrival at international airports.",
        requirement: "Online e-visa approval + valid passport",
        supportText: "processed within 3 business days",
        code: "KH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Cambodia e-visa printout",
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
        type: "E-Visa",
        notes:
          "Thailand offers a convenient e-Visa on Arrival (e-VOA) online application to speed up entry at major airports.",
        requirement:
          "Online e-visa approval + valid passport + return flight ticket",
        supportText: "processed within 24-72 hours",
        code: "TH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Thailand e-VOA approval printout",
          "Confirmed return flight ticket within 15 days",
          "Proof of accommodation / Hotel booking confirmation",
          "One passport-sized photograph (4x6 cm, white background)",
          "Proof of sufficient funds (10,000 THB per person in cash)",
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
    region: "Middle East",
    list: [
      {
        flag: "🇦🇪",
        name: "UAE",
        image: "/images/evisa/uae.png",
        discoverImage1: "/images/evisa/discover-uae-1.webp",
        discoverImage2: "/images/evisa/discover-uae-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "UAE provides a fast and efficient online visa system, commonly used for tourism and business trips.",
        requirement: "Online e-visa + passport + sponsor/hotel details",
        supportText: "processed within 3-4 business days",
        code: "AE",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved UAE e-visa printout",
          "Confirmed return flight ticket",
          "Proof of accommodation / Hotel booking or sponsor letter",
          "Travel medical insurance (recommended)",
        ],
        discover: {
          tourism: {
            title: "Futuristic Museums & Mountain Ziplines",
            text: "Step into tomorrow at the breathtaking Museum of the Future, capture panoramic city views from the Dubai Frame, and soar down the world's longest zipline at Jebel Jais.",
          },
          culture: {
            title: "Historic Quarters & Louvre Art",
            text: "Wander the wind-tower architecture of Al Fahidi Historical Neighbourhood, admire global masterpieces at the Louvre Abu Dhabi, and feast on traditional Machboos and sweet Luqaimat.",
          },
        },
        attractions: [
          { title: "Burj Khalifa", image: "/images/evisa/ta-uae-1.avif" },
          { title: "Sheikh Zayed Mosque", image: "/images/evisa/ta-uae-2.jpg" },
          { title: "Palm Jumeirah", image: "/images/evisa/ta-uae-3.jpg" },
        ],
      },
      {
        flag: "🇸🇦",
        name: "Saudi Arabia",
        image: "/images/evisa/saudi-arabia.png",
        discoverImage1: "/images/evisa/discover-saudi-2.jpg",
        discoverImage2: "/images/evisa/discover-saudi-1.jpg",
        stayDuration: "Up to 90 days",
        type: "E-Visa",
        notes:
          "Saudi Arabia's e-visa allows travelers to explore the country for tourism with a simple online application.",
        requirement: "Online e-visa ($160 USD) + valid passport",
        supportText: "multiple-entry valid for 1 year",
        code: "SA",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Saudi Arabia e-visa (fee ~$160 USD)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Travel medical insurance (mandatory)",
        ],
        discover: {
          tourism: {
            title: "Mountain Peaks & Island Reserves",
            text: "Trek the lush, terraced landscapes of the cool Asir Mountains, marvel at the massive Al Wahbah volcanic crater, and spot gazelles in the pristine Farasan Islands marine sanctuary.",
          },
          culture: {
            title: "Historic Jeddah & Arabian Kabsa",
            text: "Explore the intricate coral-stone houses of Al Balad in Jeddah, visit the striking King Abdulaziz Center for World Culture (Ithra), and savor authentic Kabsa with sweet Arabic coffee.",
          },
        },
        attractions: [
          { title: "AlUla", image: "/images/evisa/ta-saudi-1.jpg" },
          {
            title: "Edge of the World",
            image: "/images/evisa/ta-saudi-2.webp",
          },
          { title: "Diriyah", image: "/images/evisa/ta-saudi-3.jpeg" },
        ],
      },
      {
        flag: "🇹🇷",
        name: "Turkey",
        image: "/images/evisa/turkey-hero.jpg",
        discoverImage1: "/images/evisa/discover-turkey-1.avif",
        discoverImage2: "/images/evisa/discover-turkey-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "Turkey provides a quick and hassle-free e-Visa service for eligible nationalities traveling for tourism or commerce.",
        requirement: "Online e-visa + valid passport + supporting document",
        supportText: "processed within 24 hours",
        code: "TR",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Turkey e-Visa printout",
          "Confirmed return flight ticket",
          "Proof of accommodation / Hotel booking",
          "Supporting document (Valid US, UK, Ireland, or Schengen visa/residence permit)",
        ],
        discover: {
          tourism: {
            title: "Fairy Chimneys & Pamukkale Terraces",
            text: "Soar in a hot air balloon over the surreal fairy chimneys of Cappadocia, walk along the gleaming white thermal terraces of Pamukkale, and cruise the turquoise waters of the Aegean Coast.",
          },
          culture: {
            title: "Grand Bazaar & Whirling Dervishes",
            text: "Wander the labyrinthine corridors of the historic Grand Bazaar in Istanbul, witness the spiritual Whirling Dervish ceremony, and savor traditional Turkish delight and Turkish tea.",
          },
        },
        attractions: [
          { title: "Hagia Sophia", image: "/images/evisa/ta-turkey-1.webp" },
          {
            title: "Ephesus Ancient City",
            image: "/images/evisa/ta-turkey-2.webp",
          },
          { title: "Topkapi Palace", image: "/images/evisa/ta-turkey-3.jpg" },
        ],
      },
      {
        flag: "🇧🇭",
        name: "Bahrain",
        image: "/images/evisa/bahrain-hero.jpg",
        discoverImage1: "/images/evisa/discover-bahrain-2.jpg",
        discoverImage2: "/images/evisa/discover-bahrain-1.webp",
        stayDuration: "Up to 14 days",
        type: "E-Visa",
        notes:
          "Bahrain offers a simple e-Visa application for tourists, allowing short stays to explore the country's modern skyline and rich history.",
        requirement: "Online e-visa + valid passport",
        supportText: "processed within 3-5 business days",
        code: "BH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Bahrain e-Visa printout",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds for the stay",
        ],
        discover: {
          tourism: {
            title: "Formula 1 Track & Hawar Islands",
            text: "Feel the speed at the Bahrain International Circuit, take a boat to the scenic Hawar Islands for bird watching, and relax along the tranquil beaches of Al Dar Islands.",
          },
          culture: {
            title: "Qal'at al-Bahrain & Bab Al Bahrain",
            text: "Wander through the UNESCO-listed Qal'at al-Bahrain (Bahrain Fort), shop for traditional pearls and spices at the Bab Al Bahrain souq, and visit the Al Fateh Grand Mosque.",
          },
        },
        attractions: [
          { title: "Amwaj Islands", image: "/images/evisa/ta-bahrain-3.jpg" },
          {
            title: "Bahrain National Museum",
            image: "/images/evisa/ta-bahrain-2.webp",
          },
          {
            title: "Lost Paradise of Dilmun Waterpark",
            image: "/images/evisa/ta-bahrain-3.webp",
          },
        ],
      },
      {
        flag: "🇴🇲",
        name: "Oman",
        image: "/images/evisa/oman-hero.jpg",
        discoverImage1: "/images/evisa/discover-oman-1.jpg",
        discoverImage2: "/images/evisa/discover-oman-2.jpg",
        stayDuration: "Up to 30 days",
        type: "E-Visa",
        notes:
          "Oman provides a user-friendly e-Visa system for tourists, ideal for exploring its ancient forts, deserts, and coastline.",
        requirement: "Online e-visa + valid passport",
        supportText: "processed within 24-48 hours",
        code: "OM",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Oman e-Visa printout",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds / Travel insurance",
        ],
        discover: {
          tourism: {
            title: "Wahiba Sands & Green Mountains",
            text: "Drive over the gold dunes of Wahiba Sands, hike the scenic trails of Jebel Akhdar, and swim in the emerald pools of Wadi Shab.",
          },
          culture: {
            title: "Nizwa Fort & Mutrah Souq",
            text: "Explore the ancient round tower of Nizwa Fort, stroll through the vibrant Mutrah Souq in Muscat, and admire the majestic Sultan Qaboos Grand Mosque.",
          },
        },
        attractions: [
          { title: "Bimmah Sinkhole", image: "/images/evisa/ta-oman-1.jpg" },
          {
            title: "Daymaniyat Islands",
            image: "/images/evisa/ta-oman-2.webp",
          },
          { title: "Musandam Fjords", image: "/images/evisa/ta-oman-3.jpg" },
        ],
      },
    ],
  },
  {
    region: "Europe",
    list: [
      {
        flag: "🇦🇲",
        name: "Armenia",
        image: "/images/evisa/armenia-hero.webp",
        discoverImage1: "/images/evisa/discover-armenia-1.jpg",
        discoverImage2: "/images/evisa/discover-armenia-2.jpg",
        stayDuration: "Up to 21 or 120 days",
        type: "E-Visa",
        notes:
          "Armenia offers an easy online e-visa application for tourists, allowing travelers to explore its rich history and beautiful landscapes.",
        requirement: "Online e-visa + valid passport",
        supportText: "processed within 3 business days",
        code: "AM",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Armenia e-visa printout",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds for the stay",
        ],
        discover: {
          tourism: {
            title: "Ancient Monasteries & Lake Sevan",
            text: "Explore the ancient Geghard Monastery carved out of rock, marvel at the breathtaking views of Mount Ararat from Khor Virap, and relax by the stunning blue waters of Lake Sevan.",
          },
          culture: {
            title: "Oldest Wineries & Khorovats",
            text: "Visit the world's oldest known winery in the Areni cave, stroll through the vibrant streets of Yerevan, and savor traditional Armenian barbecue known as Khorovats.",
          },
        },
        attractions: [
          {
            title: "Garni Temple",
            image: "/images/evisa/ta-armenia-1.jpg",
          },
          {
            title: "Tatev Monastery",
            image: "/images/evisa/ta-armenia-2.jpg",
          },
          { title: "Cascade Complex", image: "/images/evisa/ta-armenia-3.jpg" },
        ],
      },
      {
        flag: "🇦🇱",
        name: "Albania",
        image: "/images/evisa/albania-hero.webp",
        discoverImage1: "/images/evisa/discover-albania-1.jpg",
        discoverImage2: "/images/evisa/discover-albania-2.webp",
        stayDuration: "Up to 90 days",
        type: "E-Visa",
        notes:
          "Albania's e-Visa system allows easy access to its stunning Riviera, ancient ruins, and vibrant cities.",
        requirement: "Online e-visa + valid passport",
        supportText: "processed within 15 business days",
        code: "AL",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Albania e-visa printout",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient financial means",
        ],
        discover: {
          tourism: {
            title: "Albanian Riviera & Accursed Mountains",
            text: "Relax on the pristine white beaches of Ksamil, hike through the dramatic peaks of the Accursed Mountains in Theth, and explore the ancient Roman ruins of Butrint.",
          },
          culture: {
            title: "Ottoman Architecture & Burek",
            text: "Wander the cobbled streets of the 'City of a Thousand Windows' in Berat, explore the lively capital Tirana with its vibrant cafe culture, and taste traditional flaky Burek.",
          },
        },
        attractions: [
          {
            title: "Gjirokaster",
            image: "/images/evisa/ta-albania-1.jpg",
          },
          {
            title: "Blue Eye Spring",
            image: "/images/evisa/ta-discover-1.webp",
          },
          { title: "Kruja Castle", image: "/images/evisa/ta-albania-3.jpg" },
        ],
      },
      {
        flag: "🇬🇪",
        name: "Georgia",
        image: "/images/evisa/georgia.png",
        discoverImage1: "/images/evisa/discover-georgia-1.jpg",
        discoverImage2: "/images/evisa/discover-georgia-2.jpg",
        stayDuration: "Up to 90 days",
        type: "E-Visa",
        notes:
          "Georgia provides a simple e-visa process and allows extended stays, making it popular among travelers.",
        requirement: "Online e-visa ($20 USD) + valid passport",
        supportText: "processed within 5 business days",
        code: "GE",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Georgia e-visa printout (fee $20 USD)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient funds for the stay",
        ],
        discover: {
          tourism: {
            title: "Cave Cities & Black Sea Coastlines",
            text: "Wander through the sprawling ancient cave city of Vardzia carved into a mountain, hike among the defensive stone towers of Svaneti, and relax on the vibrant pebble beaches of Batumi.",
          },
          culture: {
            title: "Wine Cradle & Khinkali Dumplings",
            text: "Visit the stunning Svetitskhoveli Cathedral, stroll the romantic walls of Sighnaghi overlooking the Alazani Valley, and feast on juicy Khinkali dumplings and cheese-filled Khachapuri.",
          },
        },
        attractions: [
          {
            title: "Gergeti Trinity Church",
            image: "/images/evisa/ta-georgia-1.jpg",
          },
          {
            title: "Tbilisi Old Town",
            image: "/images/evisa/ta-georgia-2.webp",
          },
          { title: "Uplistsikhe", image: "/images/evisa/ta-georgia-3.jpg" },
        ],
      },
    ],
  },
  {
    region: "Global Access",
    list: [
      {
        flag: "🇦🇺",
        name: "Australia",
        image: "/images/evisa/australia.png",
        discoverImage1: "/images/evisa/discover-australia-1.webp",
        discoverImage2: "/images/evisa/discover-australia-2.webp",
        stayDuration: "Varies",
        type: "E-Visa",
        notes:
          "Australia offers an online visa application process for tourism and short visits with quick processing timelines.",
        requirement: "Online e-visa (subclass 600) + valid passport",
        supportText: "processing times vary from 1-4 weeks",
        code: "AU",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Australia e-visa (subclass 600 Tourist)",
          "Confirmed return flight ticket",
          "Proof of accommodation / Hotel booking",
          "Proof of sufficient financial funds",
          "Travel medical insurance (highly recommended)",
        ],
        discover: {
          tourism: {
            title: "Coastal Drives & Ancient Rainforests",
            text: "Drive along the spectacular Great Ocean Road past the Twelve Apostles, sail the pristine white sands of the Whitsunday Islands, and explore the ancient, incredibly diverse Daintree Rainforest.",
          },
          culture: {
            title: "Laneway Cafés & Wine Regions",
            text: "Discover Melbourne's vibrant street art laneways and world-class café culture, taste premium vintages in the Barossa Valley, and enjoy a classic Aussie barbecue with fresh local produce.",
          },
        },
        attractions: [
          {
            title: "Sydney Opera House",
            image: "/images/evisa/ta-australia-1.jpg",
          },
          { title: "Bondi Beach", image: "/images/evisa/ta-australia-2.jpg" },
          {
            title: "Blue Mountains",
            image: "/images/evisa/ta-australia-3.jpg",
          },
        ],
      },
      {
        flag: "🇳🇿",
        name: "New Zealand",
        image: "/images/evisa/new-zealand.png",
        discoverImage1: "/images/evisa/discover-nz-1.jpg",
        discoverImage2: "/images/evisa/discover-nz-2.jpg",
        stayDuration: "Short-term",
        type: "E-Visa",
        notes:
          "Travelers can apply online for a visa to explore New Zealand's natural beauty and landscapes.",
        requirement: "Online visitor visa + NZeTA + valid passport",
        supportText: "NZeTA required before travel",
        code: "NZ",
        checklist: [
          "Valid Passport (at least 6 months beyond intended stay)",
          "Approved New Zealand Visitor Visa",
          "NZeTA (Electronic Travel Authority) if transiting",
          "Confirmed return flight ticket",
          "Proof of sufficient funds (NZ$1,000/month of stay)",
          "Travel medical insurance",
        ],
        discover: {
          tourism: {
            title: "Glowworm Caves & Glacial Valleys",
            text: "Drift silently under a galaxy of blue lights in the Waitomo Glowworm Caves, sail through the beautiful Bay of Islands, and hike up to the dramatic ice formations of Franz Josef Glacier.",
          },
          culture: {
            title: "Māori Heritage & National Museums",
            text: "Explore New Zealand's rich history at the incredible Te Papa Museum in Wellington, experience a powerful Māori haka welcome ceremony, and taste a traditional Hangi feast.",
          },
        },
        attractions: [
          { title: "Milford Sound", image: "/images/evisa/ta-nz-1.jpg" },
          { title: "Hobbiton Movie Set", image: "/images/evisa/ta-nz-2.jpg" },
          { title: "Aoraki / Mount Cook", image: "/images/evisa/ta-nz-3.jpg" },
        ],
      },
      {
        flag: "🇺🇸",
        name: "USA",
        image: "/images/evisa/usa-hero.jpg",
        discoverImage1: "/images/evisa/discover-usa-1.jpg",
        discoverImage2: "/images/evisa/discover-2.jpg",
        stayDuration: "Up to 180 days",
        type: "B1/B2 Visa",
        notes:
          "The USA B1/B2 visa is a non-immigrant visa for individuals wishing to enter the United States temporarily for business or tourism.",
        requirement: "Online DS-160 + Visa Interview + valid passport",
        supportText: "10-year multiple-entry visa available",
        code: "US",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Form DS-160 confirmation page",
          "Visa fee payment receipt",
          "Appointment confirmation letter",
          "Proof of sufficient funds and ties to home country",
        ],
        discover: {
          tourism: {
            title: "Grand Canyon & Pacific Coast Highway",
            text: "Marvel at the vast, colorful layers of the Grand Canyon, drive along the stunning cliffs of the Pacific Coast Highway in California, and explore Yosemite National Park's giant sequoias.",
          },
          culture: {
            title: "Pacific Northwest Wilderness & Coffee Culture",
            text: "Wander through the misty, moss-draped Hoh Rain Forest, marvel at the towering peak of Mount Rainier, and experience the famous coffee culture and indie music legacy of Seattle.",
          },
        },
        attractions: [
          {
            title: "Yellowstone National Park",
            image: "/images/evisa/ta-usa-1.webp",
          },
          { title: "Golden Gate Bridge", image: "/images/evisa/ta-usa-2.avif" },
          { title: "Walt Disney World", image: "/images/evisa/ta-usa-3.jpg" },
        ],
      },
      {
        flag: "🇬🇧",
        name: "United Kingdom",
        image: "/images/evisa/uk-hero.avif",
        discoverImage1: "/images/evisa/discover-uk-1.jpg",
        discoverImage2: "/images/evisa/discover-uk-2.jpg",
        stayDuration: "Up to 6 months",
        type: "Standard Visitor Visa",
        notes:
          "The UK Standard Visitor Visa allows travel for tourism, business, study (up to 6 months) and other permitted activities.",
        requirement: "Online application + Biometrics + valid passport",
        supportText: "processed within 3 weeks",
        code: "GB",
        checklist: [
          "Valid Passport (with blank pages)",
          "Online visa application printout",
          "Proof of accommodation / Hotel bookings",
          "Financial documents (bank statements)",
          "Detailed travel itinerary",
        ],
        discover: {
          tourism: {
            title: "Scottish Highlands & Roman Baths",
            text: "Hike through the majestic mountains and lochs of the Scottish Highlands, visit the ancient Roman Baths in Bath, and explore the rugged coastlines of Cornwall.",
          },
          culture: {
            title: "Cotswolds Villages & Countryside Charm",
            text: "Stroll through the picture-perfect, honey-colored stone cottages of Castle Combe, visit historic English gardens, and experience the quintessential scenic beauty of the rolling hills.",
          },
        },
        attractions: [
          { title: "London Eye", image: "/images/evisa/ta-uk-1.jpg" },
          { title: "Stonehenge", image: "/images/evisa/ta-uk-2.jpg" },
          { title: "Giant's Causeway", image: "/images/evisa/ta-uk-3-v2.jpg" },
        ],
      },
    ],
  },
  {
    region: "Africa",
    list: [
      {
        flag: "🇰🇪",
        name: "Kenya",
        image: "/images/evisa/discover-kenya-1.jpg",
        discoverImage1: "/images/evisa/discover-kenya-2.jpg",
        discoverImage2: "/images/evisa/discover-kenya-3.jpg",
        stayDuration: "Up to 90 days",
        type: "ETA",
        notes:
          "Kenya operates a 100% ETA system replacing the former e-Visa. All Indian citizens must apply online before travel.",
        requirement: "Online ETA approval + valid passport",
        supportText: "processed within 3 business days",
        code: "KE",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Approved Kenya ETA printout",
          "Confirmed return flight ticket",
          "Hotel booking confirmation / Safari itinerary",
          "Yellow Fever Vaccination certificate (if applicable)",
        ],
        discover: {
          tourism: {
            title: "Kilimanjaro Views & Coastal Sands",
            text: "Marvel at massive elephant herds beneath the shadow of Mount Kilimanjaro in Amboseli National Park, spot red elephants in Tsavo East, and relax on the stunning white sands of Diani Beach.",
          },
          culture: {
            title: "Swahili Coast & Nyama Choma",
            text: "Wander the narrow, donkey-lined streets of the historic Swahili settlement of Lamu Old Town, experience diverse tribal cultures at Bomas of Kenya, and feast on traditional Nyama Choma.",
          },
        },
        attractions: [
          { title: "Masai Mara", image: "/images/evisa/ta-kenya-1.jpg" },
          { title: "Mount Kenya", image: "/images/evisa/ta-kenya-2.jpg" },
          { title: "Lake Nakuru", image: "/images/evisa/ta-kenya-3.jpg" },
        ],
      },
    ],
  },
];
