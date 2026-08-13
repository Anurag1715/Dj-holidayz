"use client";

import React, { useState } from "react";
import styles from "./itinerary.module.scss";

const CruiseItinerary = ({ itinerary }) => {
  const [openDay, setOpenDay] = useState(1);

  if (!itinerary || itinerary.length === 0) return null;

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <section id="itinerary" className={styles.sectionCard}>
      <div className={styles.sectionHeading}>
        <span className={styles.kicker}>Day by Day</span>
        <h2>Cruise Itinerary</h2>
      </div>

      <div className={styles.itineraryList}>
        {itinerary.map((item) => {
          const isOpen = openDay === item.day;
          return (
            <div
              key={item.day}
              className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
            >
              <button
                type="button"
                className={styles.accordionHeader}
                onClick={() => toggleDay(item.day)}
              >
                <div className={styles.accordionLeft}>
                  <div className={styles.dayBadge}>
                    {String(item.day).toLowerCase().startsWith("day")
                      ? item.day
                      : `Day ${item.day}`}
                  </div>
                  <h3 className={styles.portTitle}>{item.port}</h3>
                </div>
                <div
                  className={`${styles.toggleIcon} ${
                    isOpen ? styles.rotated : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className={styles.accordionBody}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CruiseItinerary;
