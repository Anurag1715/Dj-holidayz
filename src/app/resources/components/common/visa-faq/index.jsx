"use client";

import React, { useState } from "react";
import styles from "./visa-faq.module.scss";

const VisaFaq = ({ faqs, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="contain">
        <div className={styles.dj_content_wrapper}>
          <div className={styles.dj_top_section}>
            <p className={styles.dj_tagline}>{title || "FAQs"}</p>
            <p className={styles.dj_subtitle}>Find answers to common questions about the visa process.</p>
          </div>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${activeIndex === idx ? styles.active : ''}`}
            >
              <button 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(idx)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </span>
              </button>
              <div className={styles.faqAnswer}>
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaFaq;
