import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './popular-destinations.module.scss';
import GlobeIcon from '@/Icons/globe.svg';

const destinations = [
    { name: 'Malaysia', tag: 'Visa Free', image: '/images/malaysia.png', desc: 'Modern skylines and heritage charm.' },
    { name: 'Thailand', tag: 'Visa Free', image: '/images/evisa/thailand.png', desc: 'Bustling markets and serene beaches.' },
    { name: 'Mauritius', tag: 'Visa Free', image: '/images/evisa/sri-lanka.png', desc: 'A tropical paradise in the Indian Ocean.' },
    { name: 'Seychelles', tag: 'Visa Free', image: '/images/evisa/vietnam.png', desc: 'Untouched nature and crystal clear waters.' },
    { name: 'Nepal', tag: 'Visa Free', image: '/images/nepal.png', desc: 'The roof of the world and cultural richness.' },
    { name: 'Bhutan', tag: 'Visa Free', image: '/images/bhutan.png', desc: 'The land of happiness and peace.' }
];

const PopularDestinationsSection = () => {
    return (
        <section className={styles.dj_bg_container}>
            <div className="contain">
                <div className={styles.dj_content_wrapper}>
                    <div className={styles.dj_top_section}>
                        <p className={styles.dj_tagline}>Popular Destinations</p>
                        <p className={styles.dj_subtitle}>
                            Malaysia, Thailand, Mauritius, Seychelles, Nepal, and Bhutan are among the most
                            popular destinations offering easy travel access.
                        </p>
                    </div>
                </div>

                <div className={styles.dj_cardContainer}>
                    {destinations.map((dest, i) => (
                        <div key={i} className={styles.dj_card}>
                            <div className={styles.dj_imageWrapper}>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className={styles.dj_cardImage}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <span className={styles.dj_badge}>{dest.tag}</span>
                            </div>

                            <div className={styles.dj_content}>
                                <div className={styles.dj_top_card}>
                                    <h3 className={styles.dj_title}>{dest.name}</h3>
                                    <p className={styles.dj_desc}>{dest.desc}</p>

                                    <div className={styles.dj_infoRow}>
                                        <span className={styles.dj_info}>
                                            <GlobeIcon width={12} height={12} /> Easy Access
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.dj_footer}>
                                    <Link href={`/`} className={styles.dj_btn}>
                                        Explore More
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

export default PopularDestinationsSection;
