import Image from "next/image";
import Link from "next/link";
import styles from "./details-hero.module.scss";

const DetailsHero = ({
  country,
  code,
  backHref = "/vfc",
  backLabel = "Back to Visa-Free Countries",
}) => {
  if (!country) return null;

  return (
    <section className={styles.heroSection}>
      <Link href={backHref} className={styles.backBtn}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        {backLabel}
      </Link>

      <div className={styles.heroCard}>
        <div className={styles.heroLeft}>
          <div className={styles.badgeRow}>
            <span className={`${styles.badge} ${styles.red}`}>
              {country.type}
            </span>
            <span className={`${styles.badge} ${styles.gray}`}>
              {country.stayDuration}
            </span>
          </div>

          <h1 className={styles.titleRow}>
            <span className={styles.countryName}>{country.name}</span>
          </h1>

          <p className={styles.description}>
            {country.notes} Indian passport holders can experience the
            breathtaking beauty and culture of {country.name} with absolutely
            hassle-free entry requirements.
          </p>
        </div>

        <div className={styles.heroRight}>
          <Image
            src={country.image || "/images/nepal.png"}
            alt={country.name}
            fill
            priority
            className={styles.heroImg}
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
