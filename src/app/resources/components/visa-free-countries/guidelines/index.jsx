import styles from "./guidelines.module.scss";

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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7e57c2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2196f3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4caf50"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Pre-departure Checklist</h3>
          <ul className={styles.checklist}>
            {listToRender.map((item, idx) => (
              <li key={idx} className={styles.checkItem}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
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
