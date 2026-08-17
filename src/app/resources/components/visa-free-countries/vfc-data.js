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
        capital: "Thimphu",
        population: "787,000",
        code: "BT",
        checklist: [
          "Valid Passport or Voter Identity Card",
          "Confirmed Accommodation Proof (SDF payment)",
          "Travel Insurance Policy",
          "Passport-sized photographs",
        ],
        discover: {
          tourism: {
            title: "Himalayan Dzongs & Alpine Valleys",
            text: "Explore spectacular mountain fortresses (Dzongs), pristine pine forests, and high-altitude Himalayan trekking routes amidst tranquil river valleys.",
          },
          culture: {
            title: "Traditional Festivals & Organic Delicacies",
            text: "Experience the unique cultural heritage of Bhutanese tshechu festivals, traditional archery tournaments, and taste authentic local dishes like Ema Datshi made with organic mountain chilis.",
          },
        },
        thingsToDo: [
          {
            title: "Trek to Tiger's Nest Monastery (Paro Taktsang)",
            category: "Adventure & Pilgrimage",
            description:
              "Hike up the cliffside trail to the sacred 17th-century monastery overlooking the Paro valley.",
            image: "/images/vfc/ta-bhutan-1.jpeg",
            highlights: [
              "Hike scenic cliffside mountain trails",
              "Photograph panoramic Paro valley views",
              "Experience quiet meditation at sacred shrines",
            ],
          },
          {
            title: "Explore Trongsa & Punakha Dzongs",
            category: "Heritage Architecture",
            description:
              "Discover majestic riverfront fortresses built with traditional mortarless Himalayan architecture.",
            image: "/images/vfc/ta-bhutan-2-v2.jpg",
            highlights: [
              "Tour traditional mortarless fortress halls",
              "Walk across Bhutan's longest suspension bridge",
              "Capture jacaranda blossoms in spring",
            ],
          },
          {
            title: "Drive Across the Misty Dochula Pass",
            category: "Scenic Landscapes",
            description:
              "Witness panoramic snow-capped Himalayan peaks and 108 memorial chortens wrapped in mountain fog.",
            image: "/images/vfc/ta-bhutan-3.jpg",
            highlights: [
              "Observe 108 memorial Chorten stupas",
              "View snow-capped Himalayan mountain peaks",
              "Relax at high-altitude mountain tea lounges",
            ],
          },
          {
            title: "Visit Gigantic Buddha Dordenma Statue",
            category: "Monuments & Heritage",
            description:
              "Gaze up at the 51.5-meter golden bronze Buddha statue perched high above the mountains overlooking Thimphu Valley.",
            image: "/images/vfc/ta-bhutan-4.jpg",
            highlights: [
              "Marvel at the 51.5-meter golden Buddha statue",
              "Discover 125,000 miniature Buddha statues inside",
              "Enjoy sweeping viewpoints of Thimphu valley",
            ],
          },
        ],
        attractions: [
          {
            title: "Tiger's Nest Monastery",
            image: "/images/vfc/ta-bhutan-1.jpeg",
          },
          { title: "Trongsa Dzong", image: "/images/vfc/ta-bhutan-2-v2.jpg" },
          { title: "Dochula Pass", image: "/images/vfc/ta-bhutan-3.jpg" },
          { title: "Buddha Dordenma", image: "/images/vfc/ta-bhutan-4.jpg" },
        ],
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
        capital: "Kathmandu",
        population: "30.8 Million",
        code: "NP",
        checklist: [
          "Valid Indian Passport or Voter Identity Card",
          "Proof of sufficient funds (optional but recommended)",
          "Confirmed emergency contact details",
          "Registration on arrival at border checkposts",
        ],
        discover: {
          tourism: {
            title: "Himalayan Peaks & Sacred Pilgrimages",
            text: "Trek world-famous alpine mountain ranges, explore serene glacial lakes, and discover ancient pagoda temples across vibrant valley towns.",
          },
          culture: {
            title: "Newari Art & Sherpa Hospitality",
            text: "Immerse yourself in ancient Newari woodcarving craftsmanship in historic durbar squares and enjoy authentic Momos and Dal Bhat in cozy organic mountain eateries.",
          },
        },
        thingsToDo: [
          {
            title: "Himalayan Trekking & Everest Viewpoints",
            category: "Trekking & Nature",
            description:
              "Embark on iconic mountain treks through Namche Bazaar or take scenic mountain flights over Mount Everest.",
            image: "/images/vfc/nepal-ta-1.jpg",
            highlights: [
              "Trek alpine mountain hiking trails",
              "Take scenic Everest mountain flight tours",
              "Visit famous Sherpa bakeries in Namche Bazaar",
            ],
          },
          {
            title: "Visit Pashupatinath & Boudhanath Stupa",
            category: "Sacred Heritage",
            description:
              "Immerse yourself in ancient Hindu rituals along the Bagmati river and circle the world's largest stupa in Kathmandu.",
            image: "/images/vfc/nepal-ta-2.png",
            highlights: [
              "Witness sacred river Aarti ceremonies",
              "Spin Tibetan prayer wheels around stupas",
              "Shop for handmade thangkas & singing bowls",
            ],
          },
          {
            title: "Boating & Sunset Watching on Phewa Lake",
            category: "Leisure & Lakes",
            description:
              "Relax in Pokhara with boat rides across serene Phewa Lake reflecting the Annapurna mountain range.",
            image: "/images/vfc/nepal-ta-3.jpg",
            highlights: [
              "Ride traditional wooden boats across the lake",
              "Photograph Annapurna mountain reflections",
              "Enjoy lakeside cafes & vibrant local music",
            ],
          },
          {
            title: "Wildlife Safari in Chitwan National Park",
            category: "Wildlife & Safari",
            description:
              "Embark on jeep safaris and canoe rides to spot one-horned rhinoceroses, Royal Bengal tigers, and gharial crocodiles.",
            image: "/images/vfc/ta-nepal.jpg",
            highlights: [
              "Join jungle safaris to spot wild rhinos & tigers",
              "Canoe down Rapti River alongside crocodiles",
              "Watch traditional Tharu cultural dance shows",
            ],
          },
        ],
        attractions: [
          { title: "Everest Base Camp", image: "/images/vfc/nepal-ta-1.jpg" },
          {
            title: "Pashupatinath Temple",
            image: "/images/vfc/nepal-ta-2.png",
          },
          { title: "Phewa Lake, Pokhara", image: "/images/vfc/nepal-ta-3.jpg" },
          { title: "Chitwan National Park", image: "/images/vfc/ta-nepal.jpg" },
        ],
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
        capital: "Kuala Lumpur",
        population: "34.3 Million",
        code: "MY",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Malaysia Digital Arrival Card (MDAC) registered within 3 days prior",
          "Confirmed return flight ticket to India",
          "Hotel booking confirmation / Proof of accommodation",
        ],
        discover: {
          tourism: {
            title: "Futuristic Skylines & Tropical Islands",
            text: "Marvel at soaring urban skyscrapers, explore lush tropical rainforest nature reserves, and relax on white sand islands fringed by crystal waters.",
          },
          culture: {
            title: "Nyonya Flavors & Diverse Heritage",
            text: "Taste world-renowned Street Food including Nasi Lemak and Char Kway Teow, while discovering a rich tapestry of Malay, Chinese, and Indian cultural traditions.",
          },
        },
        thingsToDo: [
          {
            title: "Ascend Petronas Twin Towers Skybridge",
            category: "Modern Architecture",
            description:
              "Walk the double-decker skybridge connecting the 452m twin towers for sweeping views of the Kuala Lumpur skyline.",
            image: "/images/vfc/malaysia-ta-1.jpg",
            highlights: [
              "Walk the double-decker Skybridge connecting the towers",
              "Take in 360-degree views from the 86th-floor deck",
              "Watch the evening Lake Symphony fountain light show",
            ],
          },
          {
            title: "Climb the Rainbow Stairs to Batu Caves",
            category: "Culture & Temples",
            description:
              "Climb 272 vibrant colorful steps guarded by the giant golden Lord Murugan statue into limestone cave shrines.",
            image: "/images/vfc/malaysia-ta-2.jpg",
            highlights: [
              "Climb 272 colorful stairs past Lord Murugan",
              "Explore ancient limestone cave temple chambers",
              "Photograph giant golden statues & mischievous macaques",
            ],
          },
          {
            title: "Explore Island Beaches & Mount Kinabalu",
            category: "Islands & Eco Tourism",
            description:
              "Ride the Langkawi SkyCab cable car, scuba dive in Sipadan, or climb Sabah's highest peak.",
            image: "/images/vfc/malaysia-ta-3.jpg",
            highlights: [
              "Ride the Langkawi SkyCab glass-bottom cable car",
              "Scuba dive among colorful Sipadan coral reefs",
              "Trek UNESCO-listed trails around Mount Kinabalu",
            ],
          },
          {
            title: "Explore Street Art & Food of George Town",
            category: "Heritage & Culinary",
            description:
              "Wander through UNESCO-listed colonial shophouses, iconic wrought-iron street murals, and famous night food markets.",
            image: "/images/vfc/ta-malaysia-4.jpg",
            highlights: [
              "Discover famous wrought-iron & painted street art murals",
              "Tour historic Peranakan colonial heritage mansions",
              "Sample world-famous Penang street food delicacies",
            ],
          },
        ],
        attractions: [
          {
            title: "Petronas Twin Towers",
            image: "/images/vfc/malaysia-ta-1.jpg",
          },
          { title: "Batu Caves", image: "/images/vfc/malaysia-ta-2.jpg" },
          { title: "Mount Kinabalu", image: "/images/vfc/malaysia-ta-3.jpg" },
          {
            title: "George Town Penang",
            image: "/images/vfc/ta-malaysia-4.jpg",
          },
        ],
        visaOptions: [
          {
            title: "MALAYSIA Tourism Visa",
            category: "Sticker Visa",
            processingTime: "15 Working Days",
            visaValidity: "Up to 30 Days",
            visaFormFee: "AED 225",
            embassyFee: "AED 105",
          },
        ],
        visaSteps: [
          {
            title: "Consultation",
            description: "Contact DJ Holidayz to identify the correct Malaysia visa type for your passport",
            iconType: "start",
          },
          {
            title: "Document Submission",
            description: "Share your original passport, UAE residence visa copy, photos, and flight/hotel bookings",
            iconType: "process",
          },
          {
            title: "Application Review",
            description: "DJ Holidayz visa experts verify all details for 100% accuracy and compliance",
            iconType: "process",
          },
          {
            title: "Visa Submission",
            description: "Application is submitted through official Malaysian visa systems or embassy channels",
            iconType: "process",
          },
          {
            title: "Visa Approval",
            description: "Receive your approved electronic visa via email or stamped in your passport",
            iconType: "finish",
          },
        ],
        faqs: [
          {
            question: "When should I start applying for my Malaysia travel visa?",
            answer:
              "It's best to start your visa application process at least 3 to 4 weeks before your intended travel date. Some visas require additional processing time or document verification.",
          },
          {
            question: "What should I do if my passport is about to expire?",
            answer:
              "Most countries, including Malaysia, require your passport to be valid for at least six months beyond your travel date. Renew your passport before applying for a visa.",
          },
          {
            question: "Can I travel before my visa is approved?",
            answer:
              "No. You must wait for official visa approval before traveling.",
          },
          {
            question: "Do children need separate visas?",
            answer:
              "Yes. Each traveler, including infants and minors, must hold a valid visa.",
          },
        ],
        detailedGuide: {
          introText:
            "Planning a trip to Malaysia from the UAE? Whether traveling for tourism, business meetings, or visiting family, DJ Holidayz offers professional Malaysia visa assistance for UAE residents, ensuring a smooth, accurate, and stress-free application process across Dubai, Abu Dhabi, and the entire UAE.",
          whatIsSection: {
            title: "Malaysia Visa from UAE - What It Is & Who Needs It",
            content: [
              "A Malaysia visa is an official travel authorization issued by the Malaysian government allowing foreign nationals to enter and stay in Malaysia for a specific duration.",
              "UAE residents and expatriates holding non-visa-free passports are required to obtain a Malaysia visa (eVisa, eNTRI, or Sticker Visa) prior to departure to ensure smooth immigration clearance.",
            ],
          },
          eligibility: {
            title: "Who Can Apply?",
            description:
              "UAE residents of eligible nationalities can apply for a Malaysia visa if they meet the following mandatory criteria:",
            points: [
              "Hold a valid UAE residence visa with at least 60 days validity remaining",
              "Possess a passport valid for a minimum of 6 months beyond travel date",
              "Have confirmed return flight tickets and hotel or accommodation bookings",
              "Be financially capable of supporting your stay in Malaysia",
            ],
            footer:
              "DJ Holidayz guides you through every step to ensure complete eligibility and fast approvals.",
          },
          documents: {
            title: "Required Documents",
            description:
              "Gather the following mandatory supporting documents when applying for a Malaysia visa from the UAE:",
            points: [
              "Original passport & copy with minimum 6 months validity",
              "Valid UAE residence visa copy (minimum 60 days validity remaining)",
              "Recent passport-size photograph (white background)",
              "Confirmed return flight ticket reservation",
              "Confirmed hotel booking or accommodation proof",
              "Malaysia Digital Arrival Card (MDAC) registered within 3 days of arrival",
            ],
          },
          visaTypes: {
            title: "Types of Malaysia Visas for UAE Residents",
            description:
              "Select the visa type that matches your purpose of stay:",
            items: [
              {
                title: "Tourist Visa (Single Entry)",
                description:
                  "For short-term leisure travel, holidays, or visiting family (valid for 15–30 days; processed in 48-72 hours).",
              },
              {
                title: "Business Visa (Multiple Entry)",
                description:
                  "Suitable for corporate meetings, conferences, and frequent business travel (valid up to 12 months; processed in 3-5 days).",
              },
              {
                title: "Transit Visa",
                description:
                  "For passengers transiting through Malaysia to a third country destination.",
              },
              {
                title: "Malaysia eVisa / eNTRI",
                description:
                  "Digital visa options processed online and delivered via email for Indian, Pakistani, Bangladeshi, Chinese, Sri Lankan, and Myanmar passport holders.",
              },
            ],
            note: "eVisas and eNTRI notes can be processed digitally via email for Indian, Pakistani, Bangladeshi, Chinese, Sri Lankan, and Myanmar passport holders. Express processing options within 2 hours are available for select nationalities.",
          },
          rejections: {
            title: "Common Rejection Reasons & Tips to Avoid Rejection",
            description:
              "Be mindful of common errors during application submission:",
            points: [
              "Incomplete or incorrect documentation details",
              "Insufficient bank balance or unverified financial proof",
              "Submitting blurred or invalid passport copies",
              "Applying with less than 60 days remaining on your UAE residence visa",
            ],
            tip: "Tips to Avoid Rejection: 1. Double-check all documents before submitting to ensure details match. 2. Apply through registered travel specialists at DJ Holidayz. 3. Maintain honest, consistent travel plans. 4. Provide updated bank statements and proof of income. 5. Maintain a clean travel record without overstays.",
          },
          whyUs: {
            title: "Why Choose DJ Holidayz for Your Malaysian Visa?",
            points: [
              "15+ years of dedicated expertise in UAE travel & visa processing across Dubai and Abu Dhabi",
              "100% accuracy in document pre-verification & embassy submission",
              "Transparent fee structure with zero hidden charges",
              "Dedicated visa consultant for every applicant with fast-track processing options (within 2 hours for select nationalities)",
              "24/7 WhatsApp support for real-time application updates",
            ],
            footer:
              "Start your journey to Malaysia with confidence! Contact DJ Holidayz today for seamless visa approvals.",
          },
        },
      },
      {
        flag: "🇲🇴",
        name: "Macau",
        image: "/images/macao.png",
        discoverImage1: "/images/vfc/macau-ta-1.jpg",
        discoverImage2: "/images/vfc/discover-macau-2.jpg",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Entry allowed without visa for tourism. Return ticket may be required.",
        requirement: "Return ticket required",
        capital: "Macau",
        population: "682,000",
        code: "MO",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return or onward travel ticket",
          "Proof of sufficient travel funds (approx. $600 USD recommended)",
          "Hotel reservation voucher",
        ],
        discover: {
          tourism: {
            title: "Colonial Plazas & Glitzy Cotai Resort Strip",
            text: "Stroll through historic UNESCO cobblestone squares showcasing Portuguese architecture, and experience the dazzling lights of world-class resort hotels.",
          },
          culture: {
            title: "Macanese Cuisine & East-West Fusion",
            text: "Savor authentic Portuguese egg tarts and hot Pork Chop buns, while exploring the unique harmony of Chinese Taoist shrines and Catholic cathedral heritage.",
          },
        },
        thingsToDo: [
          {
            title: "Visit Historic Ruins of St. Paul's",
            category: "UNESCO Heritage",
            description:
              "Marvel at the majestic 17th-century stone façade of the Church of Mater Dei in historic Macau.",
            image: "/images/vfc/discover-1-macau.jpg",
            highlights: [
              "Admire the 17th-century carved stone church facade",
              "Stroll through colonial Portuguese cobblestone plazas",
              "Taste fresh warm Portuguese egg tarts nearby",
            ],
          },
          {
            title: "Stroll Through Vibrant Senado Square",
            category: "Culture & Sightseeing",
            description:
              "Explore wave-patterned Portuguese pavements surrounded by pastel colonial heritage buildings.",
            image: "/images/vfc/ta-macau-2.jpg",
            highlights: [
              "Walk across iconic wave-patterned mosaic pavements",
              "Photograph pastel neoclassical heritage buildings",
              "Shop for traditional Macanese almond pastries",
            ],
          },
          {
            title: "Skywalk & Bungy Jump at Macau Tower",
            category: "Adventure & Views",
            description:
              "Experience the world's highest commercial bungy jump or enjoy 360-degree views from the 338m tower observation deck.",
            image: "/images/vfc/ta-macau-3.jpg",
            highlights: [
              "Enjoy 360-degree views from the 338m observation deck",
              "Experience the world's highest commercial Bungy Jump",
              "Walk the outdoor Skywalk rim around the tower top",
            ],
          },
          {
            title: "Visit Ancient A-Ma Temple",
            category: "Culture & Pilgrimage",
            description:
              "Explore Macau's oldest Taoist temple built in 1488, dedicated to Mazu, the goddess of seafarers and fishermen.",
            image: "/images/vfc/ta-macau-4.jpg",
            highlights: [
              "Explore 15th-century Taoist pavilion shrines",
              "Light giant coiled incense coils for good fortune",
              "View scenic vistas of Macau Inner Harbour",
            ],
          },
        ],
        attractions: [
          {
            title: "Ruins of St. Paul's",
            image: "/images/vfc/discover-1-macau.jpg",
          },
          { title: "Senado Square", image: "/images/vfc/ta-macau-2.jpg" },
          { title: "Macau Tower", image: "/images/vfc/ta-macau-3.jpg" },
          { title: "A-Ma Temple", image: "/images/vfc/ta-macau-4.jpg" },
        ],
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
        capital: "Astana",
        population: "20.0 Million",
        code: "KZ",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return or onward flight ticket",
          "Proof of accommodation / Hotel booking voucher",
          "Travel medical insurance policy",
        ],
        discover: {
          tourism: {
            title: "Futuristic Skylines & Alpine Landscapes",
            text: "Discover ultra-modern futuristic architecture, expansive high-altitude mountain lakes, and dramatic canyon gorges across Central Asia.",
          },
          culture: {
            title: "Nomadic Roots & Hearty Beshbarmak",
            text: "Learn about ancient horse-riding nomadic traditions, experience cozy yurt hospitality, and taste traditional national dishes like Beshbarmak.",
          },
        },
        thingsToDo: [
          {
            title: "Marvel at Sunken Forest of Kaindy Lake",
            category: "Nature & Alpine Lakes",
            description:
              "Explore the tranquil turquoise mountain lake with submerged spruce trees rising out of the clear water.",
            image: "/images/vfc/ta-kazakhstan-1.jpg",
            highlights: [
              "Witness submerged spruce trees in turquoise mountain waters",
              "Hike scenic Tian Shan mountain pine trails",
              "Enjoy horseback riding through quiet alpine valleys",
            ],
          },
          {
            title: "Ice Skate at High-Altitude Medeu Rink",
            category: "Winter Sports & Mountains",
            description:
              "Visit the world's highest outdoor speed-skating rink situated in a scenic mountain valley near Almaty.",
            image: "/images/vfc/ta-kazakhstan-2.jpg",
            highlights: [
              "Skate at the world's highest outdoor ice rink",
              "Ride cable cars up to Shymbulak Ski Resort",
              "Take in sweeping views of Almaty mountain peaks",
            ],
          },
          {
            title: "Visit Grand Hazret Sultan Mosque",
            category: "Architecture & Heritage",
            description:
              "Admire the grand white marble domes and intricate Islamic calligraphy of Central Asia's largest mosque.",
            image: "/images/vfc/ta-kazakhstan-3.jpg",
            highlights: [
              "Admire grand white marble domes & soaring minarets",
              "Explore intricate Central Asian Islamic tilework",
              "Stroll around tranquil reflecting pools & plazas",
            ],
          },
          {
            title: "Ride Cable Car to Kok Tobe & Visit Big Almaty Lake",
            category: "Alpine Lakes & Panoramic Views",
            description:
              "Drive up to the turquoise alpine reservoir of Big Almaty Lake and ride the scenic aerial cable car to Kok Tobe mountain peak.",
            image: "/images/vfc/ta-kazakhstan-4.jpg",
            highlights: [
              "Explore high-altitude turquoise alpine reservoir lakes",
              "Ride panoramic cable cars to Kok Tobe mountain peak",
              "Visit the iconic TV tower & Beatles monument",
            ],
          },
        ],
        attractions: [
          { title: "Kaindy Lake", image: "/images/vfc/ta-kazakhstan-1.jpg" },
          {
            title: "Medeu Skating Rink",
            image: "/images/vfc/ta-kazakhstan-2.jpg",
          },
          {
            title: "Hazret Sultan Mosque",
            image: "/images/vfc/ta-kazakhstan-3.jpg",
          },
          {
            title: "Kok Tobe & Big Almaty Lake",
            image: "/images/vfc/ta-kazakhstan-4.jpg",
          },
        ],
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
        capital: "Manila",
        population: "117.3 Million",
        code: "PH",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "eTravel registration QR Code (register 72 hours before arrival)",
          "Confirmed return or onward ticket to next destination",
          "Hotel booking confirmation / stay proof",
        ],
        discover: {
          tourism: {
            title: "Tropical Archipelagos & Coral Reefs",
            text: "Sunbathe on world-famous white sand beaches, kayak through emerald marine lagoons, and marvel at lush hand-carved mountain terraces.",
          },
          culture: {
            title: "Spanish Fortresses & Savory Adobo",
            text: "Explore historic Spanish colonial stone fortresses and enjoy authentic Filipino culinary classics like Chicken Adobo, Lechon, and sweet Halo-Halo.",
          },
        },
        thingsToDo: [
          {
            title: "Canyoneering & Swimming at Kawasan Falls",
            category: "Adventure & Waterfalls",
            description:
              "Cliff jump into vivid turquoise jungle pools and hike down scenic canyon streams in Badian, Cebu.",
            image: "/images/vfc/ta-philippines-1.jpg",
            highlights: [
              "Swim in vivid turquoise jungle waterfall pools",
              "Experience guided cliff jumping & canyoneering",
              "Ride bamboo rafts directly under cascading waterfalls",
            ],
          },
          {
            title: "Explore 2000-Year-Old Banaue Rice Terraces",
            category: "UNESCO Heritage",
            description:
              "Trek through ancient hand-carved mountain terraces carved into the Ifugao mountain range.",
            image: "/images/vfc/ta-philippines-2.jpg",
            highlights: [
              "Trek 2,000-year-old hand-carved mountain terraces",
              "Learn about indigenous Ifugao village culture",
              "Photograph panoramic mountain viewpoint landscapes",
            ],
          },
          {
            title: "Witness Perfect Cone of Mayon Volcano",
            category: "Nature & Volcanoes",
            description:
              "Take an ATV quad bike tour across volcanic lava ruins with Mayon Volcano's symmetrical peak in the backdrop.",
            image: "/images/vfc/ta-philippines-3.webp",
            highlights: [
              "Ride ATV quad bikes across volcanic lava trails",
              "Marvel at the perfectly symmetrical active volcano peak",
              "Explore historic Cagsawa church ruins park",
            ],
          },
          {
            title: "Island Hopping & Lagoons in El Nido",
            category: "Islands & Snorkeling",
            description:
              "Kayak through secret limestone lagoons, hidden beaches, and vibrant coral gardens in Bacuit Bay.",
            image: "/images/vfc/ta-philippines-4.jpg",
            highlights: [
              "Kayak through secret limestone water lagoons",
              "Discover hidden white sand beaches fringed by cliffs",
              "Snorkel with sea turtles & tropical fish in Bacuit Bay",
            ],
          },
        ],
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
          {
            title: "El Nido Lagoons",
            image: "/images/vfc/ta-philippines-4.jpg",
          },
        ],
      },
    ],
  },
  {
    region: "Africa",
    list: [
      {
        flag: "🇲🇺",
        name: "Mauritius",
        image: "/images/vfc/mauritius-hero.jpg",
        discoverImage1: "/images/vfc/discover-mauritius-1-v2.jpg",
        discoverImage2: "/images/vfc/discover-mauritius-2.webp",
        stayDuration: "Up to 90 days",
        type: "Visa-Free",
        notes:
          "No visa required for tourism. Must have return ticket and proof of accommodation.",
        requirement: "Return ticket + stay proof",
        capital: "Port Louis",
        population: "1.26 Million",
        code: "MU",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Mauritius All-in-One Travel Digital Form (fill before departure)",
          "Confirmed return flight ticket",
          "Sufficient daily funds proof (min $100 USD/day of stay)",
        ],
        discover: {
          tourism: {
            title: "Volcanic Scenery & Turquoise Lagoons",
            text: "Witness rare multi-colored volcanic earth formations, hike lush mountain national parks, and swim in calm turquoise Indian Ocean lagoons.",
          },
          culture: {
            title: "Creole Rhythms & Spicy Dholl Puri",
            text: "Dance to energetic Sega music rhythms and taste Mauritian street food classics like Dholl Puri and spicy island seafood curries.",
          },
        },
        thingsToDo: [
          {
            title: "Hike Through Lush Black River Gorges",
            category: "National Parks & Hiking",
            description:
              "Explore rainforest trails featuring native pink pigeons, dramatic mountain waterfalls, and panoramic coastal lookouts.",
            image: "/images/vfc/ta-mauritius-1.jpg",
            highlights: [
              "Hike tropical rainforest trails to mountain waterfalls",
              "Spot rare native endemic pink pigeons & parakeets",
              "Capture panoramic coastal ocean vistas",
            ],
          },
          {
            title: "Stroll SSR Botanical Garden Giant Water Lilies",
            category: "Botany & Nature",
            description:
              "Admire the famous giant Victoria amazonica water lily ponds and historic colonial spice gardens in Pamplemousses.",
            image: "/images/vfc/ta-mauritius-2.jpg",
            highlights: [
              "Admire giant Victoria amazonica water lily ponds",
              "Stroll down centuries-old royal palm tree avenues",
              "Visit the protected giant Aldabra tortoise sanctuary",
            ],
          },
          {
            title: "View Volcanic Crater of Trou aux Cerfs",
            category: "Geology & Scenic Views",
            description:
              "Walk along the rim of a dormant volcano offering 360-degree views of Curepipe and surrounding mountain ranges.",
            image: "/images/vfc/ta-mauritius-3.jpg",
            highlights: [
              "Walk around the rim of a dormant volcanic crater",
              "Take in 360-degree panoramic views of Curepipe",
              "Enjoy fresh mountain breeze in lush pine forests",
            ],
          },
          {
            title: "Summit UNESCO Le Morne Brabant Mountain",
            category: "UNESCO & Hiking",
            description:
              "Hike the iconic basaltic monolith mountain peak overlooking turquoise lagoons and underwater waterfall illusions.",
            image: "/images/vfc/ta-mauritius-4.jpg",
            highlights: [
              "Hike the iconic UNESCO basaltic monolith peak",
              "View panoramic ocean lagoons & underwater waterfall",
              "Discover rare endemic flora & historic runaway slave sanctuary",
            ],
          },
        ],
        attractions: [
          {
            title: "Black River Gorges",
            image: "/images/vfc/ta-mauritius-1.jpg",
          },
          {
            title: "Pamplemousses Garden",
            image: "/images/vfc/ta-mauritius-2.jpg",
          },
          { title: "Trou aux Cerfs", image: "/images/vfc/ta-mauritius-3.jpg" },
          {
            title: "Le Morne Brabant",
            image: "/images/vfc/ta-mauritius-4.jpg",
          },
        ],
        visaOptions: [
          {
            title: "MAURITIUS Tourism Visa",
            category: "Sticker Visa",
            processingTime: "15 Working Days",
            visaValidity: "Up to 90 Days",
            visaFormFee: "AED 450",
            embassyFee: "AED 0",
          },
        ],
        visaSteps: [
          {
            title: "Choose Visa Category",
            description: "Select the right Mauritius visa type based on your travel purpose",
            iconType: "start",
          },
          {
            title: "Gather Supporting Documents",
            description: "Prepare passport, 6-month bank statements, travel insurance, and flight/hotel bookings",
            iconType: "process",
          },
          {
            title: "Fill Application & Schedule Appointment",
            description: "DJ Holidayz assists in completing the official application form and scheduling your visa center slot",
            iconType: "process",
          },
          {
            title: "Submit Biometrics",
            description: "Attend your biometric meeting at the visa submission center in Dubai or Abu Dhabi",
            iconType: "process",
          },
          {
            title: "Receive Approved Visa",
            description: "Receive your approved Mauritius visit visa stamped in your passport within 10-15 working days",
            iconType: "finish",
          },
        ],
        faqs: [
          {
            question: "Who needs a visa to travel to Mauritius?",
            answer:
              "The majority of non-exempt passport holders residing in the UAE or GCC require a visa to enter Mauritius prior to travel.",
          },
          {
            question: "How do I apply for a Mauritius visa from Dubai?",
            answer:
              "You can apply through DJ Holidayz. Our experts complete your paperwork, organize supporting documents, and schedule your biometric submission appointment in Dubai.",
          },
          {
            question: "What is the validity of a Mauritius tourist visa?",
            answer:
              "A Mauritius tourist visa typically permits a maximum stay of up to 90 days within a 180-day period.",
          },
          {
            question: "How long does Mauritius tourist visa processing take?",
            answer:
              "Standard processing normally takes between 10 to 15 working days from the date of biometric submission.",
          },
          {
            question: "Can Abu Dhabi residents apply for a Mauritius visa from UAE?",
            answer:
              "Yes. Abu Dhabi residents can easily apply for a Mauritius visa through DJ Holidayz with complete end-to-end guidance.",
          },
        ],
        detailedGuide: {
          introText:
            "Applying for a Mauritius visa is easier than ever with DJ Holidayz, your trusted UAE visa experts. Whether traveling for leisure holidays, business meetings, or visiting family, we process your visa application smoothly with expert document review and dedicated support across Dubai, Abu Dhabi, and the UAE.",
          whatIsSection: {
            title: "What is a Mauritius Visa & Why You Need One?",
            content: [
              "A visa to Mauritius is an official entry permit issued by Mauritius immigration authorities allowing foreign nationals from non-visa-exempt countries to enter and stay for tourism, business, transit, medical care, family visits, or study.",
              "Most non-EU nationals residing in the UAE must obtain a visa prior to travel. Approval depends on fulfilling entry requirements and presenting verified supporting documentation.",
            ],
          },
          eligibility: {
            title: "Who Can Apply",
            description:
              "UAE residents of any non-exempt nationality can apply for a Mauritius visa if they satisfy the following conditions:",
            points: [
              "Hold a valid passport with at least 6 months validity from intended entry",
              "Hold a valid UAE residence visa and Emirates ID",
              "Provide proof of sufficient financial capability (last 6 months bank statements)",
              "Show confirmed travel itinerary including return flights and hotel bookings",
              "Meet health standards, clear security checks, and present complete paperwork",
            ],
            footer:
              "DJ Holidayz provides end-to-end guidance for foreign nationals requiring professional support.",
          },
          documents: {
            title: "Required Documents",
            description:
              "Gather the following mandatory supporting documents for your Mauritius visa application:",
            points: [
              "Original passport (valid for at least 6 months with 2 blank pages)",
              "Completed & signed Mauritius visa application form",
              "Copy of valid UAE residence visa & Emirates ID",
              "Last 6 months' bank statements stamped by the bank showing sufficient funds",
              "Travel medical insurance policy (minimum €30,000 medical coverage)",
              "Confirmed return flight ticket and hotel accommodation booking",
              "Employment NOC letter from employer or trade license copy (for business owners)",
            ],
          },
          visaTypes: {
            title: "Types of Mauritius Visas for UAE Residents",
            description:
              "Select the visa classification that aligns with your travel plans:",
            items: [
              {
                title: "Tourist Visa (Type C)",
                description:
                  "For leisure travel, sightseeing, and vacation holidays (stay up to 90 days in 180 days).",
              },
              {
                title: "Business Visa (Type C)",
                description:
                  "For commercial meetings, trade discussions, and professional events.",
              },
              {
                title: "Transit & Visitor Visas",
                description:
                  "For airport transit passengers or visitors staying with family/friends.",
              },
              {
                title: "Student, Work & Medical Visas (Type D)",
                description:
                  "Long-term permits for full-time study, employment, or specialized medical treatments.",
              },
            ],
            note: "Standard processing takes 10 to 15 working days from biometric submission. Priority/express services may be available depending on consular schedules.",
          },
          rejections: {
            title: "Common Rejection Reasons & Tips for Approval",
            description:
              "Be aware of primary factors that lead to visa rejections:",
            points: [
              "Missing or incorrectly formatted supporting documents",
              "Insufficient bank balance or unverified financial statements",
              "Unclear or unverified travel purpose and hotel bookings",
              "Invalid travel medical insurance coverage",
            ],
            tip: "Tips for Approval: Provide accurate financial proof (stamped 6-month bank statements), include confirmed flight & hotel itineraries, maintain valid travel insurance (€30k coverage), and rely on DJ Holidayz professional document pre-verification.",
          },
          whyUs: {
            title: "Why Apply for Your Mauritius Visa with DJ Holidayz?",
            points: [
              "Fast & professional visa processing with 100% document pre-verification accuracy",
              "From Dubai & Abu Dhabi: We schedule your appointment, handle documentation and form filing, track application status, and collect/deliver your approved passport — you only attend the biometric step",
              "Priority and fast-track submission support available for urgent travel dates",
              "High approval success rate backed by dedicated 24/7 customer support",
            ],
            footer:
              "Get your Mauritius visa from Dubai or Abu Dhabi approved quickly with expert guidance. Contact DJ Holidayz today!",
          },
        },
      },
      {
        flag: "🇸🇨",
        name: "Seychelles",
        image: "/images/vfc/seychelles.jpg",
        discoverImage1: "/images/vfc/discover-seychelles-1.jpg",
        discoverImage2: "/images/vfc/discover-seychelles-2-v2.jpeg",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes:
          "Seychelles is entirely visa-free. A complimentary Visitor's Permit is issued on arrival.",
        requirement: "Return ticket + accommodation proof + min $150/day funds",
        capital: "Victoria",
        population: "119,000",
        code: "SC",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Seychelles Electronic Border Travel Authorization",
          "Confirmed return flight ticket",
          "Hotel booking confirmation / stay voucher",
        ],
        discover: {
          tourism: {
            title: "Granite Islands & Marine Sanctuaries",
            text: "Wade through crystal-clear reef lagoons framed by pink granite boulders, trek high jungle trails, and explore protected island marine parks.",
          },
          culture: {
            title: "Creole Heritage & Moutya Beats",
            text: "Immerse yourself in the rhythmic beats of UNESCO-recognized Moutya dance performances and explore colorful, spice-scented Creole island architecture.",
          },
        },
        thingsToDo: [
          {
            title: "Relax on Sunset Waters of Beau Vallon Beach",
            category: "Beaches & Water Sports",
            description:
              "Swim in calm turquoise bays, try jet-skiing and paddleboarding, and savor beachfront seafood bazaars.",
            image: "/images/vfc/ta-seychelles-1.jpg",
            highlights: [
              "Swim in calm turquoise Indian Ocean bays",
              "Try sunset kayaking & stand-up paddleboarding",
              "Savor fresh grilled fish at weekly beachfront bazaars",
            ],
          },
          {
            title: "Trek Morne Seychellois National Park",
            category: "Hiking & Rainforest",
            description:
              "Hike mist-enshrouded granite peaks through dense tropical jungle to reach panoramic island overlooks.",
            image: "/images/vfc/ta-seychelles-2.jpg",
            highlights: [
              "Hike mist-enshrouded granite mountain summit trails",
              "Tour historic tea plantations & spice gardens",
              "Capture sweeping island views from high lookouts",
            ],
          },
          {
            title: "Meet Giant Tortoises on Curieuse Island",
            category: "Wildlife & Islands",
            description:
              "Walk alongside free-roaming giant Aldabra tortoises and explore red soil mangrove boardwalks.",
            image: "/images/vfc/ta-seychelles-3.jpg",
            highlights: [
              "Meet free-roaming giant Aldabra tortoises in the wild",
              "Walk protected red soil mangrove timber boardwalks",
              "Snorkel in marine reserve coral reef gardens",
            ],
          },
          {
            title: "Trek UNESCO Vallée de Mai Palm Forest",
            category: "UNESCO & Nature",
            description:
              "Walk through an ancient prehistoric palm forest home to the legendary Coco de Mer nut and rare black parrots.",
            image: "/images/vfc/ta-seychelles-4.jpg",
            highlights: [
              "Discover the famous giant Coco de Mer palm nuts",
              "Spot rare Seychelles black parrots in virgin jungle",
              "Trek serene UNESCO prehistoric rainforest boardwalks",
            ],
          },
        ],
        attractions: [
          {
            title: "Beau Vallon Beach",
            image: "/images/vfc/ta-seychelles-1.jpg",
          },
          {
            title: "Morne Seychellois Park",
            image: "/images/vfc/ta-seychelles-2.jpg",
          },
          {
            title: "Curieuse Island",
            image: "/images/vfc/ta-seychelles-3.jpg",
          },
          {
            title: "Vallée de Mai Forest",
            image: "/images/vfc/ta-seychelles-4.jpg",
          },
        ],
      },
    ],
  },
  {
    region: "Oceania",
    list: [
      {
        flag: "🇫🇯",
        name: "Fiji",
        image: "/images/vfc/fiji.jpg",
        discoverImage1: "/images/vfc/discover-fiji-1.jpg",
        discoverImage2: "/images/vfc/discover-fiji-2.jpg",
        stayDuration: "Up to 120 days",
        type: "Visa-Free",
        notes: "No visa required for tourism stays.",
        requirement: "Passport and return ticket",
        capital: "Suva",
        population: "936,000",
        code: "FJ",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed onward or return ticket",
          "Proof of sufficient funds for stay duration",
          "Valid international travel medical insurance",
        ],
        discover: {
          tourism: {
            title: "Pacific Lagoons & Barrier Reefs",
            text: "Relax on pristine private island sandbars, snorkel along world-class coral barrier reefs, and kayak through calm tropical river deltas.",
          },
          culture: {
            title: "Kava Ceremonies & Traditional Lovo Feasts",
            text: "Participate in a friendly, traditional Kava welcoming ceremony and enjoy a Lovo feast cooked slowly in an underground earth oven.",
          },
        },
        thingsToDo: [
          {
            title: "Island Hopping in Yasawa Archipelago",
            category: "Islands & Cruises",
            description:
              "Sail past volcanic islands, swim in Sawa-i-Lau limestone sea caves, and snorkel with gentle manta rays.",
            image: "/images/vfc/ta-fiji-1.jpg",
            highlights: [
              "Swim inside secret Sawa-i-Lau limestone sea caves",
              "Snorkel alongside gentle wild manta rays",
              "Go island hopping across turquoise Pacific lagoons",
            ],
          },
          {
            title: "Wander Garden of the Sleeping Giant",
            category: "Botany & Nature",
            description:
              "Stroll landscaped boardwalks beneath the shadow of mountain cliffs displaying over 2,000 species of Asian orchids.",
            image: "/images/vfc/ta-2.jpg",
            highlights: [
              "Stroll boardwalks displaying over 2,000 orchid species",
              "Walk beneath high canopy rainforest mountain cliffs",
              "Sample fresh tropical fruit juices at garden lounges",
            ],
          },
          {
            title: "Explore Sigatoka Sand Dunes National Park",
            category: "Heritage & Sand Dunes",
            description:
              "Hike high coastal sand dunes hiding 3,000-year-old Lapita archaeological relics and mahogany forests.",
            image: "/images/vfc/ta-fiji-3.jpg",
            highlights: [
              "Hike towering 60-meter coastal sand dunes",
              "Discover 3,000-year-old ancient Lapita pottery sites",
              "Follow mahogany forest trails to ocean beaches",
            ],
          },
          {
            title: "Scuba Diving at Great Astrolabe Reef",
            category: "Diving & Marine Life",
            description:
              "Dive along one of the world's largest barrier reefs featuring vibrant soft corals, manta rays, and reef sharks.",
            image: "/images/vfc/ta-fiji-4.webp",
            highlights: [
              "Scuba dive among world-famous Fijian soft coral gardens",
              "Swim with reef sharks & colorful tropical marine life",
              "Experience traditional Beqa Lagoon firewalking rituals",
            ],
          },
        ],
        attractions: [
          { title: "Yasawa Islands", image: "/images/vfc/ta-fiji-1.jpg" },
          { title: "Sleeping Giant Garden", image: "/images/vfc/ta-2.jpg" },
          { title: "Sigatoka Sand Dunes", image: "/images/vfc/ta-fiji-3.jpg" },
          {
            title: "Great Astrolabe Reef",
            image: "/images/vfc/ta-fiji-4.webp",
          },
        ],
      },
      {
        flag: "🇻🇺",
        name: "Vanuatu",
        image: "/images/vfc/vanautu.jpg",
        discoverImage1: "/images/vfc/discover-vanautu-1.jpg",
        discoverImage2: "/images/vfc/discover-vanautu-2.jpg",
        stayDuration: "Up to 30 days",
        type: "Visa-Free",
        notes: "No visa required for tourist visits up to 30 days.",
        requirement: "Passport and return ticket",
        capital: "Port Vila",
        population: "334,000",
        code: "VU",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return flight ticket",
          "Proof of sufficient daily funds",
          "Accommodation booking confirmation details",
        ],
        discover: {
          tourism: {
            title: "Active Volcanic Peaks & Natural Blue Holes",
            text: "Stand on the edge of accessible active volcanic craters, swim in natural deep blue freshwater spring holes, and relax on pristine coral beaches.",
          },
          culture: {
            title: "Melanesian Village Customs & Laplap Feasts",
            text: "Discover ancestral tribal villages, witness spectacular custom dances, and try Laplap, the national dish made of grated root vegetables.",
          },
        },
        thingsToDo: [
          {
            title: "Explore UNESCO Chief Roi Mata's Domain",
            category: "UNESCO Heritage",
            description:
              "Visit sacred 17th-century chief burial sites, pristine reef reserves, and ancient oral history landscapes.",
            image: "/images/vfc/ta-vanuatu-1.jpg",
            highlights: [
              "Tour sacred 17th-century chief burial sites",
              "Receive a traditional Melanesian village welcome",
              "Kayak through pristine marine sanctuary reserves",
            ],
          },
          {
            title: "Sunbathe on Pure White Champagne Beach",
            category: "Beaches & Coastal",
            description:
              "Relax on pink-white sands fringed by coconut palms and swim in clear waters with bubbling underwater thermal springs.",
            image: "/images/vfc/ta-vanuatu-2.jpg",
            highlights: [
              "Sunbathe on world-famous horseshoe white sand beaches",
              "Feel underwater thermal spring bubbles while swimming",
              "Relax under shaded lagoon coconut palm groves",
            ],
          },
          {
            title: "Send Mail from Underwater Post Office",
            category: "Unique Experiences",
            description:
              "Post waterproof postcards at the world's only official underwater post office at Hideaway Island.",
            image: "/images/vfc/ta-vanuatu-3.avif",
            highlights: [
              "Post waterproof postcards at an underwater post office",
              "Snorkel with colorful damselfish & sea anemones",
              "Take glass-bottom boat tours over coral gardens",
            ],
          },
          {
            title: "Swim in Nanda Blue Hole & Mele Cascades",
            category: "Freshwater & Waterfalls",
            description:
              "Swim in natural deep blue freshwater springs and trek rainforest trail pools at Mele Cascades.",
            image: "/images/vfc/ta-vanuatu-4.jpg",
            highlights: [
              "Dive into crystal-clear deep blue natural spring holes",
              "Hike lush rainforest trails to Mele Cascades waterfalls",
              "Relax in clear freshwater jungle swimming pools",
            ],
          },
        ],
        attractions: [
          {
            title: "Chief Roi Mata's Domain",
            image: "/images/vfc/ta-vanuatu-1.jpg",
          },
          { title: "Champagne Beach", image: "/images/vfc/ta-vanuatu-2.jpg" },
          {
            title: "Hideaway Island Reserve",
            image: "/images/vfc/ta-vanuatu-3.avif",
          },
          { title: "Nanda Blue Hole", image: "/images/vfc/ta-vanuatu-4.jpg" },
        ],
      },
    ],
  },
  {
    region: "Americas & Caribbean",
    list: [
      {
        flag: "🇧🇧",
        name: "Barbados",
        image: "/images/vfc/barbodos-hero.webp",
        discoverImage1: "/images/vfc/discover-barbados-1.jpg",
        discoverImage2: "/images/vfc/discover-barbados-2.jpg",
        stayDuration: "Up to 90 days",
        type: "Visa-Free",
        notes: "No visa required for tourism stays.",
        requirement: "Passport and return ticket",
        code: "BB",
        capital: "Bridgetown",
        population: "282,000",
        checklist: [
          "Valid Indian Passport",
          "Barbados ED Card online submission (completed 72 hours prior)",
          "Confirmed return ticket to India",
          "Proof of accommodation / stay voucher",
        ],
        discover: {
          tourism: {
            title: "Limestone Sea Caves & Platinum Coasts",
            text: "Explore magnificent underground limestone sea caves, swim alongside green sea turtles, and relax on pristine Caribbean white sand beaches.",
          },
          culture: {
            title: "Crop Over Festivities & Flying Fish Cou-Cou",
            text: "Celebrate vibrant Bajan heritage with soca rhythms and savor Cou-Cou paired with spicy stewed flying fish, the national dish.",
          },
        },
        thingsToDo: [
          {
            title: "Explore Cliffside Animal Flower Cave",
            category: "Caves & Cliffs",
            description:
              "Stand inside natural ocean sea caves featuring opening rock windows overlooking crashing Atlantic swells.",
            image: "/images/vfc/ta-barbados-1.jpg",
            highlights: [
              "Explore natural ocean sea cave rock windows",
              "Watch crashing Atlantic swells from cliffside lookouts",
              "Discover natural coral sea anemone rock pools",
            ],
          },
          {
            title: "Tour Historic St. Nicholas Abbey",
            category: "Heritage & Plantation",
            description:
              "Ride a steam railway through sugarcane fields and tour a preserved 1658 Jacobean plantation house and rum distillery.",
            image: "/images/vfc/ta-barbados-2.jpg",
            highlights: [
              "Tour a preserved 1658 Jacobean plantation mansion",
              "Ride heritage steam railways through sugarcane fields",
              "Sample artisanal small-batch Caribbean rum",
            ],
          },
          {
            title: "Experience Friday Night Oistins Fish Fry",
            category: "Culinary & Culture",
            description:
              "Dine on freshly grilled tuna, mahi-mahi, and marlin while enjoying vibrant reggae music and local craft stalls.",
            image: "/images/vfc/ta-barbados-3.jpg",
            highlights: [
              "Dine on freshly grilled tuna, mahi-mahi & marlin",
              "Enjoy vibrant Bajan reggae music & dancing",
              "Shop for handmade crafts at local night markets",
            ],
          },
          {
            title: "Swim with Sea Turtles in Carlisle Bay",
            category: "Marine & Snorkeling",
            description:
              "Snorkel over sunken shipwrecks harboring green sea turtles, stingrays, and tropical marine life near Bridgetown.",
            image: "/images/vfc/ta-barbados-4.jpg",
            highlights: [
              "Snorkel over sunken shipwrecks harboring sea turtles",
              "Swim alongside friendly wild green sea turtles",
              "Take catamaran cruises & paddleboard along calm bays",
            ],
          },
        ],
        attractions: [
          {
            title: "Animal Flower Cave",
            image: "/images/vfc/ta-barbados-1.jpg",
          },
          {
            title: "St. Nicholas Abbey",
            image: "/images/vfc/ta-barbados-2.jpg",
          },
          { title: "Oistins Fish Fry", image: "/images/vfc/ta-barbados-3.jpg" },
          {
            title: "Carlisle Bay Turtles",
            image: "/images/vfc/ta-barbados-4.jpg",
          },
        ],
      },
      {
        flag: "🇩🇲",
        name: "Dominica",
        image: "/images/vfc/dominica.webp",
        discoverImage1: "/images/vfc/discover-dominica-1.jpg",
        discoverImage2: "/images/vfc/discover-dominica-2.jpg",
        stayDuration: "Up to 21 days",
        type: "Visa-Free",
        notes: "No visa required for short tourist stays.",
        requirement: "Return ticket + accommodation proof",
        capital: "Roseau",
        population: "71,946",
        code: "DM",
        checklist: [
          "Valid Passport (at least 6 months validity)",
          "Confirmed return flight ticket",
          "Sufficient travel funds proof",
          "Hotel reservation confirmation",
        ],
        discover: {
          tourism: {
            title: "Volcanic Rainforests & Thermal Springs",
            text: "Hike through volcanic mountain rainforests featuring hot boiling crater lakes, plunge waterfalls, and geothermal underwater ocean reefs.",
          },
          culture: {
            title: "Kalinago Indigenous Art & Herbal Teas",
            text: "Visit indigenous Kalinago cultural villages to learn about Caribbean heritage and taste delicious local cassava breads and herbal infusions.",
          },
        },
        thingsToDo: [
          {
            title: "Trek UNESCO Morne Trois Pitons National Park",
            category: "UNESCO Parks",
            description:
              "Hike through volcanic mountain rainforests featuring steaming fumaroles, thermal springs, and Emerald Pool waterfall.",
            image: "/images/vfc/ta-dominica-1.jpg",
            highlights: [
              "Hike rainforest trails to famous Emerald Pool waterfall",
              "Discover steaming fumaroles in the Valley of Desolation",
              "Explore virgin tropical volcanic mountain rainforests",
            ],
          },
          {
            title: "Snorkel Volcanic Fissures at Champagne Reef",
            category: "Diving & Reefs",
            description:
              "Swim over geothermal underwater springs spewing thousands of tiny warm bubbles through vibrant marine coral reefs.",
            image: "/images/vfc/ta-dominica-2.jpg",
            highlights: [
              "Snorkel over geothermal underwater bubbling ocean springs",
              "Spot colorful parrotfish, seahorses & sea turtles",
              "Swim in crystal-clear warm volcanic ocean waters",
            ],
          },
          {
            title: "Explore Historic Cabrits National Park",
            category: "History & Parks",
            description:
              "Tour 18th-century British garrison ruins at Fort Shirley overlooking Prince Rupert Bay.",
            image: "/images/vfc/ta-dominica-3.webp",
            highlights: [
              "Tour restored 18th-century Fort Shirley garrison ruins",
              "Take in panoramic views of Prince Rupert Bay",
              "Hike quiet coastal wetlands & nature trails",
            ],
          },
          {
            title: "Hike to Trafalgar Twin Waterfalls",
            category: "Waterfalls & Hot Springs",
            description:
              "Trek to the famous Father and Mother twin waterfalls and soak in natural mineral hot spring pools.",
            image: "/images/vfc/ta-dominica-4.webp",
            highlights: [
              "View side-by-side Father & Mother twin waterfalls",
              "Soak in natural warm geothermal mineral spring pools",
              "Enjoy lush rainforest valley viewing platforms",
            ],
          },
        ],
        attractions: [
          {
            title: "Morne Trois Pitons",
            image: "/images/vfc/ta-dominica-1.jpg",
          },
          { title: "Champagne Reef", image: "/images/vfc/ta-dominica-2.jpg" },
          {
            title: "Cabrits National Park",
            image: "/images/vfc/ta-dominica-3.webp",
          },
          {
            title: "Trafalgar Twin Falls",
            image: "/images/vfc/ta-dominica-4.jpg",
          },
        ],
      },
    ],
  },
];
