import Image from "next/image";
import styles from "./top-attractions.module.scss";

const TopAttractions = ({ country }) => {
  if (!country) return null;

  const items = country.thingsToDo ||
    country.attractions || [
      {
        title: country.discover?.tourism?.title || "Scenic Vistas",
        image: country.image || "/images/nepal.png",
        category: "Sightseeing",
        description: `Explore the amazing landscapes and scenic views across ${country.name}.`,
        highlights: [
          "📸 Panoramic Viewpoints",
          "🥾 Guided Nature Walks",
          "🌄 Sunrise & Sunset Spots",
        ],
      },
      {
        title: country.discover?.culture?.title || "Cultural Heritage",
        image: country.discoverImage1 || "/images/nepal.png",
        category: "Culture",
        description: `Experience the deep-rooted traditions and historical landmarks of ${country.name}.`,
        highlights: [
          "🛕 Historic Temples & Shrines",
          "🎨 Traditional Arts & Crafts",
          "🍲 Authentic Local Cuisine",
        ],
      },
      {
        title: `Explore ${country.name}`,
        image: country.discoverImage2 || "/images/nepal.png",
        category: "Experiences",
        description: `Enjoy local cuisine, vibrant street markets, and unforgettable adventures.`,
        highlights: [
          "🛍️ Local Night Markets",
          "🚣 Water Sports & Leisure",
          "✨ Unforgettable Memories",
        ],
      },
    ];

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Things To Do</p>
          <p className={styles.dj_subtitle}>
            Discover top activities & unmissable <br></br> experiences across{" "}
            {country.name}
          </p>
        </div>
      </div>

      <div className={styles.cardStack}>
        {items.map((item, index) => {
          const highlights = item.highlights || [
            "📸 Scenic Photo Stops",
            "🥾 Guided Exploration",
            "✨ Top Rated Experience",
          ];

          return (
            <div key={index} className={styles.showcaseCard}>
              {/* Card Header Strip */}
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                {item.category && (
                  <span className={styles.categoryBadge}>{item.category}</span>
                )}
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                {/* Photo Column */}
                <div className={styles.photoCol}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={100}
                    className={styles.heroImg}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                {/* Info & Activity Column */}
                <div className={styles.infoCol}>
                  <p className={styles.itemDesc}>{item.description}</p>

                  <div className={styles.chipSection}>
                    <p className={styles.chipHeading}>Things to do here:</p>
                    <div className={styles.chipGrid}>
                      {highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className={styles.chip}>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopAttractions;
