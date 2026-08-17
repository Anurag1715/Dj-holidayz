import React from "react";
import styles from "./visa-steps.module.scss";
import IconSearch from "@/Icons/visa-search.svg";
import IconCalendar from "@/Icons/visa-calendar.svg";
import IconDocument from "@/Icons/visa-document.svg";
import IconCheck from "@/Icons/visa-check.svg";
import IconPayment from "@/Icons/visa-payment.svg";
import IconReview from "@/Icons/visa-review.svg";
import IconAppointment from "@/Icons/visa-appointment.svg";

const getStepIconInfo = (step, idx, total) => {
  const title = (step.title || "").toLowerCase();
  const type = (step.iconType || "").toLowerCase();

  // 1. Badge color: ONLY step 0 is Red ('start'), ONLY last step is Green ('finish'), rest are Black ('process')
  let styleClass = "process";
  if (type === "start" || idx === 0) {
    styleClass = "start";
  } else if (type === "finish" || idx === total - 1) {
    styleClass = "finish";
  }

  // 2. Icon resolution
  let Icon = IconDocument;

  if (type === "finish" || idx === total - 1 || title.includes("grant") || title.includes("receive") || title.includes("approval") || title.includes("get your")) {
    Icon = IconCheck;
  } else if (type === "pay" || title.includes("pay") || title.includes("fee")) {
    Icon = IconPayment;
  } else if (type === "review" || title.includes("review") || title.includes("consular") || title.includes("processing") || title.includes("verify")) {
    Icon = IconReview;
  } else if (type === "appointment" || title.includes("appointment") || title.includes("biometric")) {
    Icon = IconAppointment;
  } else if (type === "start" || idx === 0 || title.includes("check") || title.includes("eligibility") || title.includes("confirm")) {
    Icon = IconSearch;
  } else {
    Icon = IconDocument;
  }

  return { Icon, styleClass };
};

const VisaSteps = ({ steps, title }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="contain">
        <div className={styles.dj_content_wrapper}>
          <div className={styles.dj_top_section}>
            <p className={styles.dj_tagline}>{title || "Steps"}</p>
            <p className={styles.dj_subtitle}>
              Our Visa Experts review and process your visa with the embassy on your behalf
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => {
            const { Icon, styleClass } = getStepIconInfo(step, idx, steps.length);

            return (
              <div
                key={idx}
                className={`${styles.stepItem} ${styles[styleClass] || styles.process}`}
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
