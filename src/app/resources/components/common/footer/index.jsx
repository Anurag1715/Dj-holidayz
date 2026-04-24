import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import LogoIcon from "../../../../../../public/logo/white-split.svg";

const FOOTER_LINKS = {
  quickLinks: [
    { title: "Home", path: "/" },
    { title: "Visa Free Countries", path: "/vfc" },
    { title: "Visa on Arrival", path: "/visa-on-arrival" },
    { title: "E-Visa / ETA", path: "/e-visa" },
  ],
  // activities: [
  //     { title: 'Air Activities', path: '/' },
  //     { title: 'Water Activities', path: '/' },
  //     { title: 'Adventure Activities', path: '/' },
  //     { title: 'Theme Parks', path: '/' },
  // ],
  support: [
    { title: "About Us", path: "/" },
    { title: "Contact Us", path: "/" },
    { title: "Privacy Policy", path: "/" },
    { title: "Terms of Service", path: "/" },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo_wrapper}>
              <img
                src="/logo/white-split.svg"
                alt="DJ Holidays Logo"
                className={styles.logo_img}
              />
            </Link>
            <p>
              Simplifying international travel for Indian passport holders.
              Discover destinations, check requirements, and plan your journey
              with ease.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul>
              {FOOTER_LINKS.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className={styles.footerCol}>
                        <h4>Activities</h4>
                        <ul>
                            {FOOTER_LINKS.activities.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.path}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.item}>
                <div className={styles.text}>
                  <span>Call Us</span>
                  <p>+971 4 244 4786</p>
                  <p>058 13 04 786</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.text}>
                  <span>Email Us</span>
                  <p>hello@djtoursandtravels.com</p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.text}>
                  <span>Visit Us</span>
                  <p>Office No: 061, Al Qouz Ind.first</p>
                  <p>Bin Dasmal Building 4, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} DJ Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
