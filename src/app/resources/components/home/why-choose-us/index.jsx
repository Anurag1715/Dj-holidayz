import React from 'react';
import styles from './why-choose-us.module.scss';
import GlobeIcon from '@/Icons/globe.svg';
import PlaneIcon from '@/Icons/plane-departure.svg';
import RocketIcon from '@/Icons/rocket-lunch.svg';
import KeyIcon from '@/Icons/key.svg';

const DIFFERENCES = [
    {
        icon: <GlobeIcon />,
        title: 'Global Expertise',
        description: 'Our team’s deep travel roots bring you authentic experiences, cultural insights, and hidden gems worth discovering.',
    },
    {
        icon: <RocketIcon />,
        title: 'Fast Processing',
        description: 'We ensure a seamless and quick visa process, delivering a hassle-free journey filled with memories you’ll cherish.',
    },
    {
        icon: <PlaneIcon />,
        title: 'Luxury & Comfort',
        description: 'We collaborate with top hotels and trusted transport providers, ensuring every journey is comfortable and enjoyable.',
    },
    {
        icon: <KeyIcon />,
        title: 'Exclusive Access',
        description: 'Gain exclusive access to rare attractions and experiences, offering moments unavailable to the general public.',
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className={styles.why_us_section}>
            <div className="contain">
                <div className={styles.dj_content_wrapper}>
                    <div className={styles.dj_top_section}>
                        <p className={styles.dj_tagline}>Why Travel with Us</p>
                        <p className={styles.dj_subtitle}>Discover unmatched journeys crafted with care and expertise.</p>
                    </div>

                    <div className={styles.dj_bottom_section}>
                        <div className={styles.image_wrapper}>
                            <video
                                src="/home-videos/halong-bay.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.desert_img}
                            />
                        </div>
                        <div className={styles.dj_difference_section}>
                            <div className={styles.dj_header}>
                                <p className={styles.dj_heading}>The DJ Holidays Difference</p>
                                <p className={styles.dj_subtext}>
                                    We make every journey extraordinary.
                                </p>
                            </div>

                            <div className={styles.dj_grid}>
                                {DIFFERENCES.map((item, index) => (
                                    <div key={index} className={styles.dj_card}>
                                        <div className={styles.dj_icon}>{item.icon}</div>
                                        <div className={styles.dj_text}>
                                            <p className={styles.title}>{item.title}</p>
                                            <p className={styles.description}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
