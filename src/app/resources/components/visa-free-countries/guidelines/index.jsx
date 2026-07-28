import styles from "./guidelines.module.scss";

import ClockIcon from "@/Icons/clock.svg";
import FileTextIcon from "@/Icons/file-text.svg";
import CheckIcon from "@/Icons/check.svg";

const Guidelines = ({ country }) => {
  if (!country) return null;

  const defaultChecklist = [
    "Valid Indian Passport",
    "Confirmed Return Ticket",
    "Hotel Booking / Proof of Stay",
  ];
  const listToRender = country.checklist || defaultChecklist;

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Guidelines</p>
          <p className={styles.dj_subtitle}>Crucial Travel Information</p>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Card 1: Stay Duration */}
        <div className={styles.card}>
          <div className={`${styles.iconWrap} ${styles.purple}`}>
            <ClockIcon />
          </div>
          <h3 className={styles.cardTitle}>Stay Duration</h3>
          <p className={styles.cardText}>
            You are permitted to stay for up to{" "}
            <strong>{country.stayDuration}</strong>. Please ensure your travel
            itinerary aligns with this limitation to avoid any overstay issues.
          </p>
        </div>

        {/* Card 2: Primary Requirement */}
        <div className={styles.card}>
          <div className={`${styles.iconWrap} ${styles.blue}`}>
            <FileTextIcon />
          </div>
          <h3 className={styles.cardTitle}>Primary Requirement</h3>
          <p className={styles.cardText}>
            <strong>{country.requirement || "Valid Passport"}</strong> is
            required upon entry. Ensure your Indian passport has at least 6
            months of validity from your arrival date.
          </p>
        </div>

        {/* Card 3: Pre-departure Checklist */}
        <div className={styles.card}>
          <div className={`${styles.iconWrap} ${styles.green}`}>
            <CheckIcon />
          </div>
          <h3 className={styles.cardTitle}>Pre-departure Checklist</h3>
          <ul className={styles.checklist}>
            {listToRender.map((item, idx) => (
              <li key={idx} className={styles.checkItem}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
