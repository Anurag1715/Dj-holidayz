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
      },
      {
        title: country.discover?.culture?.title || "Cultural Heritage",
        image: country.discoverImage1 || "/images/nepal.png",
        category: "Culture",
        description: `Experience the deep-rooted traditions and historical landmarks of ${country.name}.`,
      },
      {
        title: `Explore ${country.name}`,
        image: country.discoverImage2 || "/images/nepal.png",
        category: "Experiences",
        description: `Enjoy local cuisine, vibrant street markets, and unforgettable adventures.`,
      },
    ];

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Things To Do</p>
          <p className={styles.dj_subtitle}>
            Unmissable experiences & top activities in {country.name}
          </p>
        </div>
      </div>

      <div className={styles.floatingGrid}>
        {items.map((item, index) => {
          const stepNumber = String(index + 1).padStart(2, "0");

          return (
            <div key={index} className={styles.floatingCard}>
              <div className={styles.photoContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={100}
                  className={styles.cardImg}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {item.category && (
                  <span className={styles.categoryBadge}>{item.category}</span>
                )}
                <span className={styles.stepCounter}>{stepNumber}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.description && (
                  <p className={styles.cardDesc}>{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopAttractions;
