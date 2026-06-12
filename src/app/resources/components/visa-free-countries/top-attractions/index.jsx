import Image from "next/image";
import styles from "./top-attractions.module.scss";

const TopAttractions = ({ country }) => {
  if (!country) return null;

  // We derive exactly 3 photos for the section.
  const attractions = country.attractions || [
    {
      title: country.discover?.tourism?.title || "Scenic Vistas",
      image: country.image || "/images/placeholder-1.jpg",
    },
    {
      title: country.discover?.culture?.title || "Cultural Heritage",
      image: country.discoverImage1 || "/images/placeholder-2.jpg",
    },
    {
      title: `Explore ${country.name}`,
      image: country.discoverImage2 || "/images/placeholder-3.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Top Attractions</p>
          <p className={styles.dj_subtitle}>Must-visit places in {country.name}</p>
        </div>
      </div>
      <div className={styles.grid}>
        {attractions.slice(0, 3).map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              quality={100}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAttractions;
