/** React imports */
'use client';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

/** Libraries */
import { motion, AnimatePresence } from 'framer-motion';

/** Local imports */
import videoData from '@/Datastream/videos.json';

/** Icons */
import SearchIcon from '@/Icons/search.svg';
import LeftArrow from '@/Icons/nav_left.svg';
import RightArrow from '@/Icons/nav_right.svg';

/** Styles */
import styles from './hero-section.module.scss';

/**
 * World records or facts for the scrolling ticker.
 * Note: These can be updated later to focus on Vietnam/Global records.
 */
const SCROLLING_FACTS = [
    "Ha Long Bay - UNESCO World Heritage Site",
    "Son Doong - World's Largest Cave",
    "Fansipan - The Roof of Indochina",
    "Golden Bridge - Iconic architecture in Da Nang",
    "Hoi An - Best preserved ancient trading port",
    "Cu Chi Tunnels - Historical underground network",
    "Ban Gioc - One of the world's most beautiful waterfalls",
    "Trang An - The inland Ha Long Bay",
    "Mekong Delta - The rice basket of Vietnam",
    "Phu Quoc - Pearl Island with pristine beaches"
];

/**
 * Contact numbers for general inquiries and sales.
 */
// const CONTACT_NUMBERS = [
//     { label: "General Inquiries", number: "+84 123 456 789" },
//     { label: "Sales & Booking", number: "+84 987 654 321" }
// ];

/**
 * HeroSection component featuring a video slider and search functionality.
 */
const HeroSection = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Generates video paths from the imported JSON data.
     */
    const videos = useMemo(() => {
        return videoData.map(item => `/home-videos/${item.filename}`);
    }, [videoData]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            router.push(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const currentContent = videoData[currentIndex] || videoData[0];

    return (
        <div className={styles.dj_hero_main_wrapper}>
            <div className={styles.dj_hero_wrapper}>
                <div className={styles.dj_content_container}>
                    <div className={styles.dj_videoWrapper}>
                        <div className={styles.leftPointers}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={styles.featurePoints}>
                                        <div className={styles.title_item}>
                                            <div className={styles.title_text}>{currentContent.title}</div>
                                        </div>

                                        {currentContent.points.map((point, index) => (
                                            <div key={index} className={styles.point_item}>
                                                <div className={styles.point_text}>{point}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className={styles.rightVideoSection}>
                            <AnimatePresence mode="sync">
                                {videos.map(
                                    (video, index) =>
                                        index === currentIndex && (
                                            <motion.video
                                                key={video}
                                                className={styles.dj_video}
                                                autoPlay
                                                muted
                                                playsInline
                                                preload="auto"
                                                onEnded={handleNext}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                            >
                                                <source src={video} type="video/mp4" />
                                            </motion.video>
                                        )
                                )}
                            </AnimatePresence>
                            <div className={styles.nav_arrows}>
                                <div className={styles.left} onClick={handlePrev}>
                                    <LeftArrow />
                                </div>
                                <div className={styles.right} onClick={handleNext}>
                                    <RightArrow />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.dj_contact_wrapper}>
                        {CONTACT_NUMBERS.map((contact, index) => (
                            <a
                                key={index}
                                href={`tel:${contact.number.replace(/\s+/g, '')}`}
                                className={styles.contact_item}
                            >
                                <span className={styles.label}>{contact.label}:</span>
                                <span className={styles.number}>{contact.number}</span>
                            </a>
                        ))}
                    </div>

                    <div className={styles.dj_bottom_content_wrapper}>
                        <div className={styles.dj_tagline}>
                            <p className={styles.dj_title}>
                                Uncover The True Spirit and Timeless Soul of <span> Your Journey.</span>
                            </p>
                            <p className={styles.dj_subtitle}>
                                From breathtaking landscapes to luxury stays,<span> DJ HOLIDAYS </span> crafts your
                                unforgettable escape.
                            </p>
                        </div>
                        <div className={styles.dj_search_projects}>
                            <div className={styles.searchContainer}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for your next adventure (e.g. 'Ha Long Bay')"
                                    className={styles.searchInput}
                                    required
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }}
                                />
                                <button
                                    className={styles.searchButton}
                                    onClick={handleSearch}
                                    disabled={!searchTerm.trim()}
                                >
                                    <SearchIcon className={styles.searchIcon} />
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <div className={styles.recordsWrapper}>
                <span className={styles.label}>DISCOVER THE BEST :</span>
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollContent}>
                        {SCROLLING_FACTS.map((fact, index) => (
                            <React.Fragment key={index}>
                                <span className={styles.link}>{fact}</span>
                                {index < SCROLLING_FACTS.length - 1 && <span className={styles.separator}>✦</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeroSection;
