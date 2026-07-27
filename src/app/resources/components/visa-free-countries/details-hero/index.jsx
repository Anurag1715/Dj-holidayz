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
            breathtaking beauty and culture of {country.name} with hassle-free entry requirements.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="22" x2="21" y2="22"></line>
                  <line x1="6" y1="18" x2="6" y2="11"></line>
                  <line x1="10" y1="18" x2="10" y2="11"></line>
                  <line x1="14" y1="18" x2="14" y2="11"></line>
                  <line x1="18" y1="18" x2="18" y2="11"></line>
                  <polygon points="12 2 20 7 4 7 12 2"></polygon>
                </svg>
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Capital City</span>
                <strong className={styles.statValue}>{country.capital || "N/A"}</strong>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Population</span>
                <strong className={styles.statValue}>{country.population || "N/A"}</strong>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Max Stay</span>
                <strong className={styles.statValue}>{country.stayDuration}</strong>
              </div>
            </div>
          </div>
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
