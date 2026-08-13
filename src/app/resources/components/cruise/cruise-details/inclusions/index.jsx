import React from "react";
import styles from "./inclusions.module.scss";

const CruiseInclusions = ({ inclusions = [], exclusions = [] }) => {
  return (
    <section id="inclusions" className={styles.sectionCard}>
      <div className={styles.sectionHeading}>
        <span className={styles.kicker}>Package Details</span>
        <h2>What&apos;s Included</h2>
      </div>

      <div className={styles.includeGrid}>
        <div className={styles.includeCard}>
          <h3>✓ Inclusions</h3>
          <ul className={styles.checkList}>
            {inclusions.map((inc, i) => (
              <li key={i} className={`${styles.checkItem} ${styles.green}`}>
                <span className={styles.icon}>✓</span>
                {inc}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.excludeCard}>
          <h3>✕ Exclusions</h3>
          <ul className={styles.checkList}>
            {exclusions.map((exc, i) => (
              <li key={i} className={`${styles.checkItem} ${styles.red}`}>
                <span className={styles.icon}>✕</span>
                {exc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CruiseInclusions;
