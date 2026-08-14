import React from "react";
import styles from "./visa-steps.module.scss";
import IconCalendar from "@/Icons/visa-calendar.svg";
import IconDocument from "@/Icons/visa-document.svg";
import IconCheck from "@/Icons/visa-check.svg";

const VisaSteps = ({ steps, title }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="contain">
        <div className={styles.dj_content_wrapper}>
          <div className={styles.dj_top_section}>
            <p className={styles.dj_tagline}>{title || "Steps"}</p>
            <p className={styles.dj_subtitle}>
              Our Visa Expert review and process the Visa to the embassy on your
              behalf
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => {
            let Icon = IconDocument;
            if (step.iconType === "start") Icon = IconCalendar;
            if (step.iconType === "finish") Icon = IconCheck;

            return (
              <div
                key={idx}
                className={`${styles.stepItem} ${styles[step.iconType] || styles.process}`}
              >
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <div className={styles.stepContent}>
                  <h4>{step.title}</h4>
                  <p>{step.date || step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaSteps;
