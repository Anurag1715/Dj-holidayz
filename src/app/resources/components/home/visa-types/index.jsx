import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./visa-types.module.scss";
import GlobeIcon from "@/Icons/globe.svg";
import PlaneIcon from "@/Icons/plane-departure.svg";
import MouseIcon from "@/Icons/mouse-pointer-click.svg";

const visaTypes = [
  {
    title: "Visa-Free Countries",
    subtitle:
      "Travel without applying for a visa in advance. Simply carry your passport and explore destinations with ease.",
    cta: "Explore Visa-Free →",
    href: "/vfc",
    image: "/images/malaysia.png",
    icon: <GlobeIcon width={16} height={16} />,
  },
  {
    title: "Visa on Arrival",
    subtitle:
      "Get your visa at the airport or entry point. A great option for flexible and last-minute travel plans.",
    cta: "Explore VOA →",
    href: "/visa-on-arrival",
    image: "/images/evisa/thailand.png",
    icon: <PlaneIcon width={16} height={16} />,
  },
  {
    title: "E-Visa / ETA",
    subtitle:
      "Apply online before your trip and receive your visa digitally. Fast, convenient, and hassle-free.",
    cta: "Explore E-Visa →",
    href: "/e-visa",
    image: "/images/evisa/vietnam.png",
    icon: <MouseIcon width={16} height={16} />,
  },
];

const VisaTypesSection = () => {
  return (
    <section className={styles.dj_bg_container}>
      <div className="contain">
        <div className={styles.dj_content_wrapper}>
          <div className={styles.dj_top_section}>
            <p className={styles.dj_tagline}>Visa Types Overview</p>
            <p className={styles.dj_subtitle}>
              Different destinations offer different visa options. Find the one
              that suits your travel style.
            </p>
          </div>
        </div>

        <div className={styles.dj_cardContainer}>
          {visaTypes.map((type, i) => (
            <div key={i} className={styles.dj_card}>
              <div className={styles.dj_imageWrapper}>
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className={styles.dj_cardImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className={styles.dj_content}>
                <div className={styles.dj_top_card}>
                  <h3 className={styles.dj_title}>{type.title}</h3>
                  <p className={styles.dj_desc}>{type.subtitle}</p>

                  <div className={styles.dj_infoRow}>
                    <span className={styles.dj_info}>
                      {type.icon} International Travel
                    </span>
                  </div>
                </div>

                <div className={styles.dj_footer}>
                  <Link href={type.href} className={styles.dj_btn}>
                    {type.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaTypesSection;
