"use client";
import React, { useState } from "react";
import VisaEnquiryForm from "../visa-enquiry-form";
import styles from "./visa-options.module.scss";

const hasEmbassyFee = (feeStr) => {
  if (!feeStr) return false;
  const num = parseInt(feeStr.replace(/[^0-9]/g, ""), 10);
  return !isNaN(num) && num > 0;
};

const VisaOptions = ({ options, countryName }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  if (!options || options.length === 0) return null;

  const handleEnquireClick = (option) => {
    setSelectedOption({
      ...option,
      countryName: countryName || option.countryName || "",
    });
    setIsEnquiryOpen(true);
  };

  return (
    <>
      <section className={styles.section}>
        <div className="contain">
          <div className={styles.dj_content_wrapper}>
            <div className={styles.dj_top_section}>
              <p className={styles.dj_tagline}>Visa Options</p>
              <p className={styles.dj_subtitle}>
                Choose the best visa category for your travel needs.
              </p>
            </div>
          </div>

          <div className={styles.cardsGrid}>
            {options.map((option, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{option.title}</h3>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.infoRow}>
                    <span className={styles.label}>Category</span>
                    <span className={`${styles.value} ${styles.badge}`}>
                      {option.category}
                    </span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.label}>Processing Time</span>
                    <span className={styles.value}>
                      {option.processingTime}
                    </span>
                  </div>
                  {option.visaValidity && (
                    <div className={styles.infoRow}>
                      <span className={styles.label}>Visa Validity</span>
                      <span className={styles.value}>
                        {option.visaValidity}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.pricingSection}>
                  <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>
                      Visa Form Fee + Tax
                    </span>
                    <span className={styles.priceValue}>
                      {option.visaFormFee}
                    </span>
                  </div>
                  {hasEmbassyFee(option.embassyFee) && (
                    <div className={styles.priceBlock}>
                      <span className={styles.priceLabel}>Embassy Fee</span>
                      <span className={styles.priceValue}>
                        {option.embassyFee}
                      </span>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <button
                    className={styles.enquireBtn}
                    onClick={() => handleEnquireClick(option)}
                  >
                    Enquire
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.29 15.88L13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Enquiry Popup Form */}
      <VisaEnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultOption={selectedOption}
      />
    </>
  );
};

export default VisaOptions;
