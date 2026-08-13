import React from "react";
import styles from "./overview.module.scss";

const CruiseOverview = ({
  overview,
  aboutTheCruise,
  cruiseLine,
  ship,
  tagline,
  departure,
  highlights = [],
  itinerarySummary,
}) => {
  if (!overview) return null;

  const paragraphs = typeof overview === "string" ? overview.split("\n\n") : [];
  const destinationsText =
    highlights && highlights.length > 0 ? highlights.join(", ") : null;

  return (
    <section id="overview" className={styles.sectionCard}>
      <div className={styles.sectionHeading}>
        <span className={styles.kicker}>Package Overview</span>
        <h2>Overview</h2>
      </div>

      <div className={styles.overviewBody}>
        {paragraphs.map((p, idx) => (
          <p key={idx} className={styles.overviewText}>
            {p}
          </p>
        ))}

        {aboutTheCruise && (
          <div className={styles.subBlock}>
            <h3 className={styles.subTitle}>About the Cruise</h3>
            {aboutTheCruise.split("\n\n").map((p, idx) => (
              <p key={idx} className={styles.overviewText}>
                {p}
              </p>
            ))}
          </div>
        )}

        <div className={styles.subBlock}>
          <h3 className={styles.subTitle}>
            Highlights {tagline ? `(${tagline})` : ""}
          </h3>
          <ul className={styles.bulletList}>
            {highlights && highlights.length > 0 ? (
              highlights.map((item, idx) => <li key={idx}>{item}</li>)
            ) : (
              <>
                {ship && cruiseLine && (
                  <li>
                    <strong>Ship:</strong> {ship} ({cruiseLine})
                  </li>
                )}
                {(itinerarySummary || (tagline && departure)) && (
                  <li>
                    <strong>Itinerary:</strong>{" "}
                    {itinerarySummary
                      ? itinerarySummary
                      : `${tagline} (Round-trip ${departure})`}
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CruiseOverview;
