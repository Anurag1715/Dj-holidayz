"use client";

import React from "react";
import styles from "./hero.module.scss";
import { cruiseCategories } from "../cruise-data";

const CruiseHero = ({ onCategorySelect }) => {
  const totalPackages = cruiseCategories.reduce(
    (acc, cat) => acc + cat.list.length,
    0,
  );

  return (
    <section className={styles.hero}>
      <div className="contain">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Sail in Luxury & Comfort</span>
            <h1>Luxury Cruise Packages</h1>
            <p>
              Discover unforgettable ocean and river voyages around the world.
              From Mediterranean highlights and Arabian Gulf luxury to Arctic
              expeditions and grand world cruises.
            </p>
            <div className={styles.heroActions}>
              <a href="#cruise-packages" className={styles.primaryAction}>
                Explore Packages
              </a>
              <div className={styles.heroMeta}>
                <span>{totalPackages}+ packages</span>
                <span>Best price guarantee</span>
              </div>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Cruise Destinations</span>
              <strong>Explore the World by Sea</strong>
              <p>
                All-inclusive luxury, gourmet dining, exotic shore excursions,
                and unmatched ocean views.
              </p>
            </div>

            <div className={styles.quickList}>
              {cruiseCategories.slice(0, 6).map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    if (onCategorySelect) onCategorySelect(cat.slug);
                    const el = document.getElementById("cruise-packages");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={styles.quickItem}
                >
                  <div className={styles.quickTextLeft}>
                    <strong>{cat.category}</strong>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseHero;
