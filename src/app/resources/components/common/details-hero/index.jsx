import Image from "next/image";
import Link from "next/link";
import styles from "./details-hero.module.scss";

import ArrowLeftIcon from "@/Icons/arrow-left.svg";
import LandmarkIcon from "@/Icons/landmark.svg";
import UsersIcon from "@/Icons/users.svg";
import ClockIcon from "@/Icons/clock.svg";

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
        <ArrowLeftIcon />
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
            breathtaking beauty and culture of {country.name} with hassle-free
            entry requirements.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <LandmarkIcon />
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Capital City</span>
                <strong className={styles.statValue}>
                  {country.capital || "N/A"}
                </strong>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <UsersIcon />
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Population</span>
                <strong className={styles.statValue}>
                  {country.population || "N/A"}
                </strong>
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statIconWrap}>
                <ClockIcon />
              </div>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>Max Stay</span>
                <strong className={styles.statValue}>
                  {country.stayDuration}
                </strong>
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
