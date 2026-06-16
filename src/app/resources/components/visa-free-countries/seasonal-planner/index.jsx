"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ChevronLeftIcon from "@/Icons/chevron-left.svg";
import ChevronRightIcon from "@/Icons/chevron-right.svg";
import styles from "../visa-free-countries.module.scss";

import { countries as vfcCountries } from "../vfc-data";
import { countries as voaCountries } from "../../visa-on-arrival/voa-data";
import { countries as evisaCountries } from "../../e-visa/evisa-data";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Helper: flatten all countries from a data set and tag them with visaType + route prefix
const tagCountries = (data, visaType, routePrefix) =>
  data.flatMap((region) =>
    region.list.map((c) => ({ ...c, visaType, routePrefix })),
  );

const allCountriesTagged = [
  ...tagCountries(vfcCountries, "Visa-Free", "/vfc"),
  ...tagCountries(voaCountries, "VOA", "/visa-on-arrival"),
  ...tagCountries(evisaCountries, "E-Visa", "/e-visa"),
];

// Build a quick lookup by country name (lowercase) → tagged country object
const countryLookup = {};
allCountriesTagged.forEach((c) => {
  countryLookup[c.name.toLowerCase()] = c;
});

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

// Month recommendations now include countries from ALL visa types
const monthRecommendations = {
  JAN: [
    {
      name: "Bhutan",
      reason: "Cool, sunny weather with crystal clear views of the Himalayas.",
      duration: "Unlimited",
    },
    {
      name: "Indonesia",
      reason:
        "Escape the winter chill with Bali's warm beaches and lush rice terraces.",
      duration: "Up to 30 days",
    },
    {
      name: "Thailand",
      reason:
        "Peak tourist season with perfect tropical weather and vibrant night markets.",
      duration: "Up to 30 days",
    },
  ],
  FEB: [
    {
      name: "Nepal",
      reason:
        "Clear skies and moderate temperatures, excellent for early trekking.",
      duration: "Unlimited",
    },
    {
      name: "Sri Lanka",
      reason:
        "Warm, dry weather on the south coast — ideal for beach holidays and safaris.",
      duration: "Up to 30 days",
    },
    {
      name: "Malaysia",
      reason:
        "Vibrant festivities around Chinese New Year and warm beach weather.",
      duration: "Up to 30 days",
    },
  ],
  MAR: [
    {
      name: "Seychelles",
      reason: "Calm seas and warm weather, perfect for diving and snorkeling.",
      duration: "Up to 30 days",
    },
    {
      name: "Vietnam",
      reason: "Spring blossoms in Hanoi and perfect beach weather in Da Nang.",
      duration: "Up to 30 days",
    },
    {
      name: "Mauritius",
      reason:
        "Warm summer days transitioning to autumn, great for water sports.",
      duration: "Up to 90 days",
    },
  ],
  APR: [
    {
      name: "Cambodia",
      reason:
        "Experience Khmer New Year festivities and explore Angkor Wat in warm weather.",
      duration: "Up to 30 days",
    },
    {
      name: "Bhutan",
      reason:
        "Spring is in full swing with beautiful blossoms and pleasant weather.",
      duration: "Unlimited",
    },
    {
      name: "Georgia",
      reason:
        "Spring flowers bloom across the Caucasus valleys with mild hiking weather.",
      duration: "Up to 90 days",
    },
  ],
  MAY: [
    {
      name: "Fiji",
      reason:
        "Start of the sunny dry season with pleasant tropical temperatures.",
      duration: "Up to 120 days",
    },
    {
      name: "Kazakhstan",
      reason:
        "Spring landscapes are lush and green, comfortable for city walks.",
      duration: "Up to 14 days",
    },
    {
      name: "Oman",
      reason:
        "Shoulder season with fewer tourists and pleasant coastal breezes.",
      duration: "Up to 30 days",
    },
  ],
  JUN: [
    {
      name: "Indonesia",
      reason:
        "Peak dry season in Bali — perfect for surfing, temples, and rice terrace hikes.",
      duration: "Up to 30 days",
    },
    {
      name: "Mauritius",
      reason:
        "Pleasant cool breezes and lower hotel rates make it a great winter getaway.",
      duration: "Up to 90 days",
    },
    {
      name: "Vanuatu",
      reason: "Dry and sunny winter days, perfect for outdoor adventures.",
      duration: "Up to 30 days",
    },
  ],
  JUL: [
    {
      name: "Kenya",
      reason:
        "The starting window of the legendary Great Wildebeest Migration.",
      duration: "Up to 90 days",
    },
    {
      name: "Laos",
      reason: "Lush green landscapes during monsoon season and fewer tourists.",
      duration: "Up to 30 days",
    },
    {
      name: "Fiji",
      reason:
        "Peak dry season with perfect sunny days and cool tropical nights.",
      duration: "Up to 120 days",
    },
  ],
  AUG: [
    {
      name: "Kenya",
      reason:
        "Peak migration season in Masai Mara! Unforgettable wildlife viewing.",
      duration: "Up to 90 days",
    },
    {
      name: "Singapore",
      reason:
        "National Day celebrations, world-class hawker food, and indoor attractions.",
      duration: "Up to 30 days",
    },
    {
      name: "Myanmar",
      reason:
        "Off-season deals with fewer crowds at Bagan's ancient temple plains.",
      duration: "Up to 28 days",
    },
  ],
  SEP: [
    {
      name: "UAE",
      reason:
        "Summer heat eases and early-bird deals for the upcoming tourist season.",
      duration: "Up to 30 days",
    },
    {
      name: "Bhutan",
      reason:
        "End of monsoon brings fresh air and colorful local festivals (Tshechus).",
      duration: "Unlimited",
    },
    {
      name: "Nepal",
      reason: "Clear post-monsoon skies offer breathtaking Himalayan vistas.",
      duration: "Unlimited",
    },
  ],
  OCT: [
    {
      name: "Nepal",
      reason:
        "Peak trekking season with optimal temperature and maximum visibility.",
      duration: "Unlimited",
    },
    {
      name: "Thailand",
      reason:
        "Cool season begins — perfect for exploring Bangkok and northern hill towns.",
      duration: "Up to 30 days",
    },
    {
      name: "Armenia",
      reason:
        "Stunning autumn foliage across ancient monasteries and mountain valleys.",
      duration: "21–30 days",
    },
  ],
  NOV: [
    {
      name: "Bhutan",
      reason: "Clear winter skies and the arrival of rare black-necked cranes.",
      duration: "Unlimited",
    },
    {
      name: "Vietnam",
      reason:
        "Cool, comfortable weather in Hanoi and dry season begins in the south.",
      duration: "Up to 30 days",
    },
    {
      name: "Saudi Arabia",
      reason:
        "Mild winter temperatures, perfect for exploring AlUla and Jeddah.",
      duration: "Up to 90 days",
    },
  ],
  DEC: [
    {
      name: "Macau",
      reason: "Cool, dry and sunny winter days. Perfect holiday vibe.",
      duration: "Up to 30 days",
    },
    {
      name: "Sri Lanka",
      reason:
        "Festive season with warm beaches on the west coast and whale watching.",
      duration: "Up to 30 days",
    },
    {
      name: "Philippines",
      reason:
        "Start of the dry season — ideal for island hopping in Palawan and Cebu.",
      duration: "Up to 30 days",
    },
  ],
};

const SeasonalPlanner = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const tabsRef = useRef([]);
  const gridRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const currentMonthName = months[activeMonthIndex];
  const currentRecommendations = useMemo(
    () => monthRecommendations[currentMonthName] || [],
    [currentMonthName],
  );
  const hasSwiper = currentRecommendations.length > 3;

  const checkScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (tabsRef.current[activeMonthIndex]) {
      tabsRef.current[activeMonthIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeMonthIndex]);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = 0;
    }
    // Small delay to allow layout recalculation
    const timer = setTimeout(checkScroll, 100);
    return () => clearTimeout(timer);
  }, [activeMonthIndex, currentRecommendations]);

  useEffect(() => {
    const el = gridRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll();
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, [hasSwiper, currentRecommendations]);

  const handlePrevMonth = () => {
    setActiveMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setActiveMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const scrollLeft = () => {
    if (gridRef.current) {
      const cardWidth =
        gridRef.current.querySelector(`.${styles.recommendCard}`)
          ?.clientWidth || 320;
      gridRef.current.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const cardWidth =
        gridRef.current.querySelector(`.${styles.recommendCard}`)
          ?.clientWidth || 320;
      gridRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.seasonalSection}>
      <div className="contain">
        <div className={styles.dj_content_wrapper}>
          <div className={styles.dj_top_section}>
            <p className={styles.dj_tagline}>Where to Go When</p>
            <p className={styles.dj_subtitle}>
              Explore the best destinations matching your travel month —
              visa-free, visa on arrival, and e-visa options included.
            </p>
          </div>
        </div>

        <div className={styles.monthPlanner}>
          <div className={styles.monthHeader}>
            <div className={styles.monthTabsScroll}>
              <div className={styles.monthTabs}>
                {months.map((month, index) => (
                  <button
                    key={month}
                    ref={(el) => (tabsRef.current[index] = el)}
                    onClick={() => setActiveMonthIndex(index)}
                    className={`${styles.monthTab} ${
                      index === activeMonthIndex ? styles.active : ""
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.navControls}>
              <button
                onClick={handlePrevMonth}
                className={styles.navBtn}
                aria-label="Previous Month"
              >
                <ChevronLeftIcon width={18} height={18} />
              </button>
              <button
                onClick={handleNextMonth}
                className={styles.navBtn}
                aria-label="Next Month"
              >
                <ChevronRightIcon width={18} height={18} />
              </button>
            </div>
          </div>

          <div className={styles.swiperContainer}>
            {hasSwiper && (
              <button
                onClick={scrollLeft}
                className={`${styles.swiperNavBtn} ${styles.prevBtn}`}
                disabled={!canScrollLeft}
                aria-label="Previous Destinations"
              >
                <ChevronLeftIcon width={20} height={20} />
              </button>
            )}

            <div
              ref={gridRef}
              className={`${styles.recommendationsGrid} ${hasSwiper ? styles.hasSwiper : ""}`}
            >
              {currentRecommendations.map((rec) => {
                const tagged = countryLookup[rec.name.toLowerCase()];
                const imgUrl = tagged?.image || "/images/bhutan.png";
                const routePrefix = tagged?.routePrefix || "/vfc";
                const visaType = tagged?.visaType || "Visa-Free";
                const slug = toSlug(rec.name);

                return (
                  <Link
                    key={rec.name}
                    href={`${routePrefix}/${slug}`}
                    className={styles.recommendCard}
                  >
                    <div className={styles.recommendImageWrap}>
                      <Image
                        src={imgUrl}
                        alt={rec.name}
                        fill
                        className={styles.recommendImage}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className={styles.recommendCardContent}>
                      <div className={styles.recommendHeader}>
                        <div className={styles.recommendTitle}>
                          <h4>{rec.name}</h4>
                        </div>
                        <span className={styles.recommendBadge}>
                          {rec.duration}
                        </span>
                      </div>
                      <div
                        className={styles.recommendVisaTag}
                        data-type={visaType}
                      >
                        {visaType}
                      </div>
                      <p className={styles.recommendReason}>{rec.reason}</p>
                      <span className={styles.recommendAction}>
                        Learn entry details &rarr;
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {hasSwiper && (
              <button
                onClick={scrollRight}
                className={`${styles.swiperNavBtn} ${styles.nextBtn}`}
                disabled={!canScrollRight}
                aria-label="Next Destinations"
              >
                <ChevronRightIcon width={20} height={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalPlanner;
