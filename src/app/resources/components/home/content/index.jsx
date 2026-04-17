import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './home.content.module.scss';

/** Icons */
import GlobeIcon from '@/Icons/globe.svg';
import PlaneIcon from '@/Icons/plane-departure.svg';
import MouseIcon from '@/Icons/mouse-pointer-click.svg';

const visaTypes = [
    {
        title: 'Visa-Free Countries',
        subtitle: 'Travel without applying for a visa in advance. Simply carry your passport and explore destinations with ease.',
        cta: 'Explore Visa-Free Countries →',
        href: '/vfc',
        icon: <GlobeIcon width={32} height={32} />,
        className: styles.visaFree
    },
    {
        title: 'Visa on Arrival',
        subtitle: 'Get your visa at the airport or entry point. A great option for flexible and last-minute travel plans.',
        cta: 'Explore Visa on Arrival →',
        href: '/visa-on-arrival',
        icon: <PlaneIcon width={32} height={32} />,
        className: styles.visaOnArrival
    },
    {
        title: 'E-Visa / ETA',
        subtitle: 'Apply online before your trip and receive your visa digitally. Fast, convenient, and hassle-free.',
        cta: 'Explore E-Visa Options →',
        href: '/e-visa',
        icon: <MouseIcon width={32} height={32} />,
        className: styles.eVisa
    }
];

const steps = [
    {
        num: '01',
        title: 'Choose your destination',
        text: 'Explore countries based on visa type and travel preferences.'
    },
    {
        num: '02',
        title: 'Check visa requirements',
        text: 'Understand whether the country is visa-free, visa on arrival, or requires an e-visa.'
    },
    {
        num: '03',
        title: 'Travel with confidence',
        text: 'Pack your bags and enjoy a smooth journey with the right documents.'
    }
];

const destinations = [
    { name: 'Malaysia', tag: 'Visa Free', image: '/images/malaysia.png' },
    { name: 'Thailand', tag: 'Visa Free', image: '/images/evisa/thailand.png' },
    { name: 'Mauritius', tag: 'Visa Free', image: '/images/evisa/sri-lanka.png' }, // Fallback to sri-lanka image for now as placeholder
    { name: 'Seychelles', tag: 'Visa Free', image: '/images/evisa/vietnam.png' }, // Fallback
    { name: 'Nepal', tag: 'Visa Free', image: '/images/nepal.png' },
    { name: 'Bhutan', tag: 'Visa Free', image: '/images/bhutan.png' },
    { name: 'Barbados', tag: 'Visa Free', image: '/images/evisa/singapore.png' }, // Fallback
    { name: 'Fiji', tag: 'Visa Free', image: '/images/evisa/cambodia.png' } // Fallback
];

const features = [
    'Find visa-free destinations instantly',
    'Compare visa options easily',
    'Get clear and accurate travel information',
    'Save time with simplified guidance',
    'Plan trips with confidence'
];

const HomeAdditionalContent = () => {
    return (
        <main className={styles.main}>
            {/* 2. VISA TYPES OVERVIEW */}
            <section className={`${styles.section} ${styles.intro}`}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <span className={styles.kicker}>Visa Types Overview</span>
                        <h2>Choose Your Travel Convenience</h2>
                        <p>Different destinations offer different visa options. Find the one that suits your travel style.</p>
                    </div>

                    <div className={styles.visaGrid}>
                        {visaTypes.map((type, i) => (
                            <div key={i} className={`${styles.visaCard} ${type.className}`}>
                                <div className={styles.iconBox}>{type.icon}</div>
                                <h3>{type.title}</h3>
                                <p>{type.subtitle}</p>
                                <Link href={type.href} className={styles.cardCta}>
                                    {type.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={`${styles.section} ${styles.howItWorks}`}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <span className={styles.kicker}>Simple Flow</span>
                        <h2>How It Works</h2>
                        <p>Plan your trip in just a few simple steps.</p>
                    </div>

                    <div className={styles.stepGrid}>
                        {steps.map((step, i) => (
                            <div key={i} className={styles.step}>
                                <div className={styles.stepNum}>{step.num}</div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className={`${styles.section} ${styles.destinations}`}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <span className={styles.kicker}>Explore Trending</span>
                        <h2>Popular Destinations</h2>
                        <p>
                            Malaysia, Thailand, Mauritius, Seychelles, Nepal, Bhutan, Barbados, and Fiji are among the most
                            popular destinations offering easy travel access for Indian passport holders.
                        </p>
                    </div>

                    <div className={styles.destGrid}>
                        {destinations.map((dest, i) => (
                            <div key={i} className={styles.destCard}>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className={styles.destImage}
                                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className={styles.destOverlay}>
                                    <div className={styles.destInfo}>
                                        <span className={styles.destTag}>{dest.tag}</span>
                                        <h4>{dest.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={`${styles.section} ${styles.whySection}`}>
                <div className={styles.container}>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyContent}>
                            <div className={styles.heading}>
                                <span className={styles.kicker}>Trust & Reliability</span>
                                <h2>Why Choose Our Platform</h2>
                                <p>We simplify international travel by bringing all visa information into one easy-to-use platform.</p>
                            </div>
                            <div className={styles.whyTags}>
                                {features.map((feature, i) => (
                                    <div key={i} className={styles.whyTag}>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.whyGraphic}>
                            <Image
                                src="/images/malaysia.png"
                                alt="Travel experience"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Experience Section */}
            <section className={`${styles.section} ${styles.experience}`}>
                <div className={styles.container}>
                    <div className={styles.expInner}>
                        <span className={styles.kicker}>The Journey Awaits</span>
                        <h2>Travel Without Hassle</h2>
                        <p>
                            Whether you're planning a quick getaway or an international adventure, we help you choose
                            destinations with easy visa access so you can focus on the experience, not the paperwork.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomeAdditionalContent;
