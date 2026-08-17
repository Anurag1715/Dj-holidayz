import React from "react";
import styles from "./guidelines.module.scss";

const Guidelines = ({ country }) => {
  if (!country) return null;

  const guide = country.detailedGuide;

  const defaultChecklist = [
    "Valid Passport (at least 6 months validity)",
    "Confirmed Return Ticket",
    "Hotel Booking / Proof of Stay",
  ];
  const listToRender = country.checklist || defaultChecklist;

  return (
    <section className={styles.section}>
      <div className={styles.dj_content_wrapper}>
        <div className={styles.dj_top_section}>
          <p className={styles.dj_tagline}>Guidelines</p>
          <p className={styles.dj_subtitle}>
            Crucial Travel Information & Requirements
          </p>
        </div>
      </div>

      {guide ? (
        <div className={styles.guideContainer}>
          {/* Intro Section */}
          {guide.introText && (
            <p className={styles.introLead}>{guide.introText}</p>
          )}

          {/* What Is Section */}
          {guide.whatIsSection && (
            <div className={styles.guideBlock}>
              <h2>{guide.whatIsSection.title}</h2>
              {guide.whatIsSection.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {/* Who Can Apply */}
          {guide.eligibility && (
            <div className={styles.guideBlock}>
              <h2>{guide.eligibility.title}</h2>
              <p>{guide.eligibility.description}</p>
              <ul className={styles.bulletList}>
                {guide.eligibility.points.map((pt, idx) => (
                  <li key={idx}>
                    <span className={styles.redDot}></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {guide.eligibility.footer && (
                <p className={styles.blockFooter}>{guide.eligibility.footer}</p>
              )}
            </div>
          )}

          {/* Required Documents */}
          {guide.documents && (
            <div className={styles.guideBlock}>
              <h2>{guide.documents.title}</h2>
              <p>{guide.documents.description}</p>
              <ul className={styles.bulletList}>
                {guide.documents.points.map((doc, idx) => (
                  <li key={idx}>
                    <span className={styles.redDot}></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Types of Visa */}
          {guide.visaTypes && (
            <div className={styles.guideBlock}>
              <h2>{guide.visaTypes.title}</h2>
              <p>{guide.visaTypes.description}</p>
              <div className={styles.visaTypesGrid}>
                {guide.visaTypes.items.map((item, idx) => (
                  <div key={idx} className={styles.visaTypeCard}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              {guide.visaTypes.note && (
                <p className={styles.blockNote}>{guide.visaTypes.note}</p>
              )}
            </div>
          )}

          {/* Common Rejection Reasons & Tips */}
          {guide.rejections && (
            <div className={styles.guideBlock}>
              <h2>{guide.rejections.title}</h2>
              <p>{guide.rejections.description}</p>
              <ul className={styles.bulletList}>
                {guide.rejections.points.map((pt, idx) => (
                  <li key={idx}>
                    <span className={styles.redDot}></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {guide.rejections.tip && (
                <div className={styles.tipCallout}>
                  <p>{guide.rejections.tip}</p>
                </div>
              )}
            </div>
          )}

          {/* Why Apply with Us */}
          {guide.whyUs && (
            <div className={styles.guideBlock}>
              <h2>{guide.whyUs.title}</h2>
              <ul className={styles.bulletList}>
                {guide.whyUs.points.map((pt, idx) => (
                  <li key={idx}>
                    <span className={styles.redDot}></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              {guide.whyUs.footer && (
                <p className={styles.contactFooter}>{guide.whyUs.footer}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.guideContainer}>
          <div className={styles.guideBlock}>
            <h2>Visa Guidelines & Stay Duration</h2>
            <p>
              You are permitted to stay for up to{" "}
              <strong>
                {country.stayDuration || "the specified visa validity"}
              </strong>
              . Ensure your passport has at least 6 months of validity from your
              arrival date. Primary requirement:{" "}
              <strong>{country.requirement || "Valid Passport"}</strong>.
            </p>
          </div>

          <div className={styles.guideBlock}>
            <h2>Pre-departure Required Checklist</h2>
            <p>
              To ensure smooth travel and entry, please prepare the following
              mandatory documents:
            </p>
            <ul className={styles.bulletList}>
              {listToRender.map((item, idx) => (
                <li key={idx}>
                  <span className={styles.redDot}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Guidelines;
