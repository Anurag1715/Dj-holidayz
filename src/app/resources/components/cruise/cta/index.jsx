"use client";

import React from "react";
import styles from "./cta.module.scss";

const CruiseCta = ({ onResetFilter }) => {
  return (
    <section className={styles.ctaSection}>
      <div className="contain">
        <div className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <span className={styles.kicker}>Unforgettable Journeys</span>
            <h2>Ready to Sail the Seas?</h2>
            <p>
              Explore our curated selection of luxury ocean and river cruise
              packages with exclusive deals and world-class itineraries.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <button
              type="button"
              onClick={() => {
                if (onResetFilter) onResetFilter("all");
                const el = document.getElementById("cruise-packages");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.secondaryAction}
            >
              View All Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseCta;
