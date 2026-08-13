"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./packages-grid.module.scss";
import { cruiseCategories } from "../cruise-data";

const CruisePackagesGrid = ({ activeTab: activeTabProp, onTabChange }) => {
  const [internalTab, setInternalTab] = useState("all");
  const activeTab = activeTabProp || internalTab;

  const handleTabClick = (slug) => {
    if (onTabChange) {
      onTabChange(slug);
    } else {
      setInternalTab(slug);
    }
  };

  const categoriesList = [
    { label: "All", slug: "all" },
    ...cruiseCategories.map((cat) => ({
      label: cat.category,
      slug: cat.slug,
    })),
  ];

  const filteredCategories =
    activeTab === "all"
      ? cruiseCategories
      : cruiseCategories.filter((cat) => cat.slug === activeTab);

  return (
    <section id="cruise-packages" className={styles.tabSection}>
      <div className="contain">
        <div className={styles.tabHeader}>
          <span className={styles.kicker}>Destinations & Styles</span>
          <h2>Explore Cruise Categories</h2>

          {/* Horizontal Scrollable Tabs */}
          <div className={styles.tabsScroll}>
            <div className={styles.tabsRow}>
              {categoriesList.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  className={`${styles.tab} ${
                    activeTab === cat.slug ? styles.active : ""
                  }`}
                  onClick={() => handleTabClick(cat.slug)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Render Groups */}
        {filteredCategories.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No cruise packages found</h3>
            <p>Try selecting a different category tab above.</p>
          </div>
        ) : (
          filteredCategories.map((group) => (
            <div key={group.slug} className={styles.regionGroup}>
              <h3 className={styles.regionHeading}>{group.category}</h3>
              <div className={styles.cardGrid}>
                {group.list.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    href={`/cruises/${pkg.slug}`}
                    className={styles.packageCard}
                  >
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        quality={90}
                        className={styles.cardImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        <h3>{pkg.name}</h3>
                        <span className={styles.durationBadge}>
                          {pkg.tagline}
                        </span>
                      </div>

                      <div className={styles.featurePills}>
                        <span className={styles.pill}>Meals</span>
                        <span className={styles.pill}>Entertainments</span>
                        <span className={styles.pill}>Pool</span>
                        <span className={styles.pill}>Cabin</span>
                      </div>

                      <div className={styles.cardMeta}>
                        <span className={styles.metaLabel}>Starting From</span>
                        <strong className={styles.price}>
                          AED {pkg.price.toLocaleString()}
                          <span>/person</span>
                        </strong>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CruisePackagesGrid;
