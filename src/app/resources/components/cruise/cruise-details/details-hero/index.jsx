"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./details-hero.module.scss";

import ArrowLeftIcon from "@/Icons/arrow-left.svg";

const CruiseDetailsHero = ({ cruise }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!cruise) return null;

  const galleryImages =
    cruise.gallery && cruise.gallery.length > 0
      ? cruise.gallery
      : [cruise.image, cruise.image, cruise.image];

  const whatsappMessage = encodeURIComponent(
    `Hi DJ Holidays, I am interested in booking the cruise package: "${cruise.name}" (${cruise.tagline}) for AED ${cruise.price.toLocaleString()} per person.`,
  );

  return (
    <>
      {/* Back Button */}
      <Link href="/cruises" className={styles.backBtn}>
        <ArrowLeftIcon />
        Back to Cruise Packages
      </Link>

      {/* Hero Card with 3 Images & Price Panel */}
      <div className={styles.heroCard}>
        <div className={styles.heroLeft}>
          <div className={styles.badgeRow}>
            <span className={`${styles.badge} ${styles.gray}`}>
              {cruise.tagline}
            </span>
          </div>

          <h1 className={styles.title}>{cruise.name}</h1>

          {/* 3 Images Gallery Grid */}
          <div className={styles.galleryGrid}>
            <div className={styles.mainImageWrap}>
              <Image
                src={galleryImages[selectedImgIndex] || cruise.image}
                alt={cruise.name}
                fill
                priority
                quality={95}
                className={styles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
              />
            </div>

            <div className={styles.sideImagesWrap}>
              {galleryImages.slice(1, 3).map((img, index) => {
                const imgIdx = index + 1;
                return (
                  <div
                    key={imgIdx}
                    className={`${styles.sideImageItem} ${
                      selectedImgIndex === imgIdx ? styles.activeImage : ""
                    }`}
                    onClick={() => setSelectedImgIndex(imgIdx)}
                  >
                    <Image
                      src={img}
                      alt={`${cruise.name} view ${imgIdx + 1}`}
                      fill
                      quality={95}
                      className={styles.galleryImage}
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sticky Price & Enquire Card */}
        <div className={styles.heroRight}>
          <div className={styles.priceHeader}>
            <span className={styles.priceLabel}>Starting Price</span>
            <div className={styles.priceValue}>
              AED {cruise.price.toLocaleString()}
              <span> /person</span>
            </div>
          </div>

          <div className={styles.specList}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Duration</span>
              <span className={styles.specValue}>{cruise.duration}</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Departure Port</span>
              <span className={styles.specValue}>{cruise.departure}</span>
            </div>
          </div>

          <a href="#" className={styles.enquireBtn}>
            Enquire Now
          </a>
        </div>
      </div>

      {/* Section Navigation */}
      <div className={styles.navSection}>
        <div className={styles.navTabs}>
          <a href="#overview" className={styles.navTabLink}>
            Overview
          </a>
          {cruise.sailingDates && cruise.sailingDates.length > 0 && (
            <a href="#sailing-dates" className={styles.navTabLink}>
              Sailing Dates
            </a>
          )}
          <a href="#itinerary" className={styles.navTabLink}>
            Itinerary
          </a>
          <a href="#inclusions" className={styles.navTabLink}>
            What&apos;s Included
          </a>
          <a href="#faqs" className={styles.navTabLink}>
            FAQs
          </a>
        </div>
      </div>
    </>
  );
};

export default CruiseDetailsHero;
