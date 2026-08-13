"use client";

import React from "react";
import styles from "./sailing-dates.module.scss";
import CalendarIcon from "@/Icons/calendar.svg";

const CruiseSailingDates = ({ sailingDates = [], sailingSeason }) => {
  if (!sailingDates || sailingDates.length === 0) return null;

  return (
    <section id="sailing-dates" className={styles.sectionCard}>
      <div className={styles.sectionHeading}>
        <span className={styles.kicker}>Schedule & Availability</span>
        <h2>Sailing Dates</h2>
        {sailingSeason && (
          <p className={styles.seasonText}>
            Operating Season: <strong>{sailingSeason}</strong>
          </p>
        )}
      </div>

      <div className={styles.datesGrid}>
        {sailingDates.map((item, index) => {
          if (typeof item === "string") {
            return (
              <div key={index} className={styles.monthCard}>
                <div className={styles.monthHeader}>
                  <span className={styles.calendarIcon}>
                    <CalendarIcon />
                  </span>
                  <h3>Departure</h3>
                </div>
                <div className={styles.datesList}>
                  <span className={styles.datePill}>{item}</span>
                </div>
              </div>
            );
          }

          if (item && item.month) {
            return (
              <div key={index} className={styles.monthCard}>
                <div className={styles.monthHeader}>
                  <span className={styles.calendarIcon}>
                    <CalendarIcon />
                  </span>
                  <h3>{item.month}</h3>
                </div>
                <div className={styles.datesList}>
                  {Array.isArray(item.dates) ? (
                    item.dates.map((date, idx) => (
                      <span key={idx} className={styles.datePill}>
                        {item.month.split(" ")[0]} {date}
                      </span>
                    ))
                  ) : (
                    <span className={styles.datePill}>{item.month}</span>
                  )}
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default CruiseSailingDates;
