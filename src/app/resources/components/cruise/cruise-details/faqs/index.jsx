"use client";

import React, { useState } from "react";
import styles from "./faqs.module.scss";
import ChevronDownIcon from "@/Icons/chevron-down.svg";

const CruiseFaqs = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className={styles.sectionCard}>
      <div className={styles.sectionHeading}>
        <span className={styles.kicker}>Got Questions?</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
            >
              <button
                type="button"
                className={styles.faqHeader}
                onClick={() => toggleFaq(idx)}
              >
                <h4>{faq.question}</h4>
                <div
                  className={`${styles.toggleIcon} ${
                    isOpen ? styles.rotated : ""
                  }`}
                >
                  <ChevronDownIcon />
                </div>
              </button>

              {isOpen && (
                <div className={styles.faqBody}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CruiseFaqs;
