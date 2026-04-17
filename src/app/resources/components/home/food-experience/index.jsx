import React from 'react';
import styles from './food-experience.module.scss';

const DELIVERY_APPS = [
    {
        name: "Talabat",
        restaurants: "20,000+ (estimated)",
        deliveryTime: "30-45 min (avg)",
        coverage: "UAE-wide (Dubai, Abu Dhabi & more)"
    },
    {
        name: "Deliveroo",
        restaurants: "8,000-10,000 (approx)",
        deliveryTime: "25-45 min (avg)",
        coverage: "Dubai, Abu Dhabi, Sharjah"
    },
    {
        name: "Careem Now",
        restaurants: "7,000+ (approx)",
        deliveryTime: "35-55 min (avg)",
        coverage: "UAE-wide (major and minor cities)"
    },
    {
        name: "Noon Food",
        restaurants: "5,000-8,000 (est.)",
        deliveryTime: "30-50 min (avg)",
        coverage: "UAE-wide (major cities)"
    },
    {
        name: "Global Dining",
        restaurants: "Infinite Choices",
        foodoutlets: "Everywhere",
        coverage: "Worldwide Partners",
        availability: "Planning available 24/7"
    }
];

const FOOD_TOUR_DATA = [
    {
        region: "India",
        image: "/images/evisa/india.png",
        items: [
            "North Indian: Butter Chicken, Paneer Tikka",
            "South Indian: Dosa, Idli, Fish Curry",
            "Street Food: Vada Pav, Chaat, Kebabs"
        ],
        size: "large"
    },
    {
        region: "Arabian Peninsula",
        image: "/images/evisa/thailand.png",
        items: [
            "Traditional Kabsa & Lamb Mandi",
            "Grilled Shish Tawook & Shawarma",
            "Mezze: Hummus, Falafel & Fresh Pita"
        ],
        size: "large"
    },
    {
        region: "Southeast Asia",
        image: "/images/evisa/vietnam.png",
        items: [
            "Thai: Pad Thai & Tom Yum",
            "Vietnamese: Authentic Beef Pho",
            "Indonesian: Nasi Goreng & Satay"
        ],
        size: "large"
    },
    {
        region: "Himalayan",
        image: "/images/nepal.png",
        items: [
            "Nepalese: Momos & Dal Bhat",
            "Bhutanese: Ema Datshi",
            "Mountain Herb Teas"
        ],
        size: "large"
    }
];

const FoodExperienceSection = () => {
    return (
        <section className={styles.delivery_info_section}>
            <div className="contain">
                <div className={styles.simple_container}>
                    {/* ORDER FOOD SECTION */}
                    <div className={styles.image_top}>
                        <div className={styles.image_side}>
                            <img
                                src="/images/food.png"
                                alt="Dining Experience"
                                className={styles.feature_image}
                            />
                        </div>
                        <div className={styles.text_side}>
                            <div className={styles.dj_top_section} style={{ alignItems: 'flex-start', textAlign: 'left', marginBottom: 0 }}>
                                <p className={styles.dj_tagline} style={{ margin: 0 }}>Order Food Online</p>
                            </div>
                            <p className={styles.description}>
                                At DJ Holidays, we believe great travel is defined by great food. Whether you are staying in a luxury hotel or a cozy apartment, you can explore local culinary delights with ease.
                                <br /><br />
                                Craving a cozy night in? You can now order your favorite meals from authorized delivery apps and themed restaurants. Enjoy a premium dining experience delivered straight to your door.
                                <br /><br />
                                <strong>Note:</strong> We recommend using the following platforms for the most reliable service during your stay.
                            </p>
                        </div>
                    </div>

                    {/* APPS GRID */}
                    <div className={styles.apps_section_wrapper}>
                        <div className={styles.apps_section}>
                            <div className={styles.dj_top_section} style={{ alignItems: 'flex-start', textAlign: 'left', marginBottom: '2rem' }}>
                                <p className={styles.dj_tagline} style={{ margin: 0 }}>Main Delivery Platforms</p>
                            </div>
                            <div className={styles.apps_grid}>
                                {DELIVERY_APPS.map((app, index) => (
                                    <div key={index} className={styles.app_card}>
                                        <div className={styles.app_header_row}>
                                            <h4 className={styles.app_name}>{app.name}</h4>
                                            {app.availability && (
                                                <span className={styles.availability_tag}>
                                                    {app.availability}
                                                </span>
                                            )}
                                        </div>
                                        <div className={styles.app_stats}>
                                            <div className={styles.stat_item}>
                                                <span className={styles.stat_label}>Restaurants</span>
                                                <span className={styles.stat_value}>{app.restaurants}</span>
                                            </div>
                                            <div className={styles.stat_item}>
                                                <span className={styles.stat_label}>
                                                    {app.deliveryTime ? "Delivery Time" : "Food Outlets"}
                                                </span>
                                                <span className={styles.stat_value}>
                                                    {app.deliveryTime ? app.deliveryTime : app.foodoutlets}
                                                </span>
                                            </div>
                                            <div className={styles.stat_item}>
                                                <span className={styles.stat_label}>Coverage</span>
                                                <span className={styles.stat_value}>{app.coverage}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.image_bottom}>
                            <img
                                src="/images/delivery-patner.png"
                                alt="Food Delivery"
                                className={styles.feature_image}
                            />
                        </div>
                    </div>

                    {/* WORLD OF FLAVORS */}
                    <div className={styles.food_tour_section}>
                        <div className={styles.dj_top_section}>
                            <p className={styles.dj_tagline}>A World of Flavors</p>
                            <p className={styles.dj_subtitle}>Explore the diverse cuisines of our featured destinations.</p>
                        </div>
                        <div className={styles.bento_grid}>
                            {FOOD_TOUR_DATA.map((data, index) => (
                                <div
                                    key={index}
                                    className={`${styles.tour_card} ${styles[data.size]}`}
                                >
                                    <div className={styles.card_header}>
                                        <div className={styles.map_wrapper}>
                                            <img
                                                src={data.image}
                                                alt={data.region}
                                                className={styles.map_icon}
                                            />
                                        </div>
                                        <h4 className={styles.region_title}>{data.region}</h4>
                                    </div>
                                    <div className={styles.tags_container}>
                                        {data.items.map((item, i) => (
                                            <span key={i} className={styles.food_tag}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ANIMATED BANNER */}
                    <div className={styles.full_width_text_section}>
                        <p className={styles.animated_gradient_text}>
                            Taste the world with DJ Holidays curated dining guides
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodExperienceSection;
