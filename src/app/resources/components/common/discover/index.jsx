import Image from "next/image";
import styles from "./discover.module.scss";

const Discover = ({ country }) => {
  if (!country) return null;

  const tourismTitle =
    country.discover?.tourism?.title || "Unrivaled Tourism & Sightseeing";
  const tourismText =
    country.discover?.tourism?.text ||
    `Immerse yourself in the spectacular scenery, vibrant cityscapes, and unique heritage that make ${country.name} one of the top choices for Indian travelers. From shopping districts to tranquil natural landscapes, there is something for everyone.`;

  const cultureTitle =
    country.discover?.culture?.title || "Culture, Culinary & Beyond";
  const cultureText =
    country.discover?.culture?.text ||
    `Experience exquisite local culinary traditions, friendly hospitality, and deep-rooted cultural treasures. Without the hassle of pre-departure visa applications, taking a spontaneous weekend getaway or a long family holiday to ${country.name} is easier than ever.`;

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Discover</p>
          <p className={styles.dj_subtitle}>Explore {country.name}</p>
        </div>
      </div>

      <div className={styles.rowsContainer}>
        {/* Row 1: Tourism & Sightseeing */}
        <div className={styles.row}>
          <div className={styles.contentBlock}>
            <h3 className={styles.blockTitle}>{tourismTitle}</h3>
            <p className={styles.blockText}>{tourismText}</p>
          </div>
          <div className={styles.imgBlock}>
            <Image
              src={country.discoverImage1 || "/images/nepal.png"}
              alt={`${country.name} Tourism`}
              fill
              className={styles.img}
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
        </div>

        {/* Row 2: Culture & Culinary */}
        <div className={`${styles.row} ${styles.alternate}`}>
          <div className={styles.contentBlock}>
            <h3 className={styles.blockTitle}>{cultureTitle}</h3>
            <p className={styles.blockText}>{cultureText}</p>
          </div>
          <div className={styles.imgBlock}>
            <Image
              src={country.discoverImage2 || "/images/nepal.png"}
              alt={`${country.name} Culture`}
              fill
              className={styles.img}
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
