/** React imports */
"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Libraries */
import { motion, AnimatePresence } from "framer-motion";

/** Icons */
import HamburgerMenu from "@/Icons/bars-staggered.svg";
import CloseIcon from "@/Icons/cross-small.svg";
import LogoIcon from "../../../../../../public/logo/red-split.svg";

/** Styles */
import styles from "./header.module.scss";

/**
 * Navigation links for the header.
 */
const HEADER_LINKS = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "VFC", path: "/vfc" },
  { id: 3, title: "VOA", path: "/visa-on-arrival" },
  { id: 4, title: "e-VISA/ETA", path: "/e-visa" },
  // { id: 5, title: 'Air Activities', path: '/Air Activities' },
  // { id: 6, title: 'Water Activities', path: '/Water Activities' },
  // { id: 7, title: 'Adventure Activities', path: '/Adventure Activities' },
  // { id: 8, title: 'Tickets and Attractions', path: '/Tickets and Attractions' },
  // { id: 9, title: 'Theme Parks', path: '/Theme Parks' },
  // { id: 10, title: 'Zoos & Aquarium', path: '/Zoos & Aquarium' },
  // { id: 11, title: 'Water Parks', path: '/Water Parks' },
  // { id: 12, title: 'Snorkeling & Scubadiving', path: '/Snorkeling & Scubadiving' },
  // { id: 13, title: 'Cruises', path: '/Cruises' },
  // { id: 14, title: 'Yachts', path: '/Yachts' },
  // { id: 15, title: 'Getting Around', path: '/Getting Around' },
  // { id: 16, title: 'Radio Channels', path: '/Radio Channels' },
];

/** Scroll threshold for hiding/showing header. */
const HIDE_THRESHOLD = 0;

/**
 * Header component providing navigation and top information.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-space-height",
          `${height}px`,
        );
      }
    });

    resizeObserver.observe(headerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Ensure we scroll to top on pathname changes and reset state
  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      setIsVisible(true);
      setIsAtTop(true);
    });
    lastScrollY.current = 0;
  }, [pathname]);
  useEffect(() => {
    const SCROLL_DELTA = 15;
    const SPEED_THRESHOLD = 0.25;

    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const now = Date.now();

      // Check if at the top
      setIsAtTop(currentY < 20);

      // Always show header at the very top of the page
      if (currentY < 100) {
        setIsVisible(true);
        lastScrollY.current = currentY;
        lastScrollTime.current = now;
        return;
      }

      const deltaY = currentY - lastScrollY.current;
      const deltaTime = now - lastScrollTime.current;
      const speed = Math.abs(deltaY) / (deltaTime || 1);

      // scrolling down → hide (if not already hidden)
      if (deltaY > SCROLL_DELTA) {
        setIsVisible(false);
      }

      // scrolling up fast → show (if not already shown)
      if (deltaY < -SCROLL_DELTA && speed > SPEED_THRESHOLD) {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
      lastScrollTime.current = now;
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    /**
     * Closes the sidebar when clicking outside of it.
     *
     * @param {MouseEvent} event - The click event.
     */
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Header */}
      <motion.div
        ref={headerRef}
        className={`${styles.dj_header} ${isAtTop ? styles.at_top : ""}`}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className={styles.dj_header_wrapper}>
          <div className={styles.dj_header_left}>
            <div className={styles.logo_wrapper}>
              <Link className={styles.dj_image_wrapper} href={"/"}>
                <div>
                  <img
                    src="/logo/red-split.svg"
                    alt="DJ Holidays Logo"
                    className={styles.logo_img}
                  />
                </div>
              </Link>
            </div>

            <div className={styles.link_wrapper}>
              {useMemo(
                () =>
                  HEADER_LINKS.slice(
                    0,
                    showMore ? HEADER_LINKS.length : 11,
                  ).map((item) => {
                    const isActive = pathname === item.path;
                    const words = item.title.split(" ");
                    const formattedTitle =
                      words.length > 1 ? (
                        <>
                          <span className={styles.first_word}>{words[0]}</span>{" "}
                          <span className={styles.second_word}>
                            {words.slice(1).join(" ")}
                          </span>
                        </>
                      ) : (
                        item.title
                      );

                    return (
                      <div
                        key={item.id}
                        className={styles.dj_header_linkWrapper}
                      >
                        <Link
                          href={item.path}
                          className={`${styles.dj_header_link} ${isActive ? styles.active : ""}`}
                        >
                          {formattedTitle}
                        </Link>
                      </div>
                    );
                  }),
                [pathname, showMore],
              )}

              {HEADER_LINKS.length > 12 && (
                <div
                  className={styles.dj_header_linkWrapper}
                  onClick={() => setShowMore(!showMore)}
                >
                  <div className={styles.dj_header_link}>
                    {showMore ? "Show Less" : "Show More"}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={styles.dj_hamburger_icon}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <CloseIcon /> : <HamburgerMenu />}
          </div>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                className={styles.dj_sidebar_overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
              />

              {/* Sidebar Menu */}
              <motion.div
                ref={sidebarRef}
                className={`${styles.dj_sidebar} ${styles.open}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                {HEADER_LINKS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`${styles.dj_sidebar_link} ${pathname === (item.path || "/") ? styles.active : ""}`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Header;
