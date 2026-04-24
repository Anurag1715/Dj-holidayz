import Image from "next/image";
import Link from "next/link";
import styles from "./visa-on-arrival.module.scss";

const destinations = [
  {
    flag: "🇮🇩",
    name: "Indonesia",
    image: "/images/indonesia.png",
    stayDuration: "Up to 30 days",
    type: "Visa on Arrival",
    description:
      "Indonesia offers a simple visa on arrival process at major airports. Ideal for tourism, especially destinations like Bali.",
  },
  {
    flag: "🇱🇦",
    name: "Laos",
    image: "/images/laos.png",
    stayDuration: "Up to 30 days",
    type: "Visa on Arrival",
    description:
      "Travelers can obtain a visa at entry points with minimal documentation. A popular destination for cultural and nature experiences.",
  },
  {
    flag: "🇲🇲",
    name: "Myanmar",
    image: "/images/image copy.png",
    stayDuration: "Up to 28 days",
    type: "Visa on Arrival",
    description:
      "Visa on arrival is available under specific conditions. Travelers should ensure they meet entry requirements before arrival.",
  },
];

const benefits = [
  "No need for advance visa applications",
  "Quick and simple process at the airport",
  "Ideal for last-minute travel plans",
  "Minimal documentation required",
  "Faster entry compared to traditional visa processes",
];

const VisaOnArrival = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="contain">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                Travel freely. Get your visa when you arrive.
              </span>
              <h1>Visa on Arrival for Indian Passport Holders</h1>
              <p>
                Travel easily with visa on arrival. Get your visa at the
                destination without prior applications.
              </p>
              <div className={styles.heroActions}>
                <a href="#destinations" className={styles.primaryAction}>
                  Explore Destinations
                </a>
                <div className={styles.heroMeta}>
                  <span>3 destinations</span>
                  <span>Arrival-based visa access</span>
                </div>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Visa on Arrival</span>
                <strong>Simple process after landing</strong>
                <p>
                  Complete the visa process at the airport or entry point with
                  basic documents and a short approval flow.
                </p>
              </div>

              <div className={styles.quickList}>
                {destinations.map((destination) => (
                  <div key={destination.name} className={styles.quickItem}>
                    <span className={styles.quickFlag}>{destination.flag}</span>
                    <div className={styles.quickText}>
                      <strong>{destination.name}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="contain">
          <div className={styles.introInner}>
            <div className={styles.introHeading}>
              <span className={styles.kicker}>Overview</span>
              <h2>What visa on arrival means for Indian travelers</h2>
            </div>
            <div className={styles.introBody}>
              <p>
                Visa on Arrival (VOA) allows Indian passport holders to obtain a
                visa upon reaching their destination. There is no need to apply
                in advance, making it a convenient option for spontaneous
                travel.
              </p>
              <p>
                Upon arrival at the airport or designated entry point, travelers
                can complete a simple process that may include filling out a
                form, providing documents, and paying a visa fee. Entry is
                usually granted for short-term tourism or business purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className={styles.countrySection}>
        <div className="contain">
          <div className={styles.countryHeading}>
            <span className={styles.kicker}>Destinations</span>
            <h2>Visa on arrival destinations to explore next</h2>
          </div>

          <div className={styles.cardGrid}>
            {destinations.map((destination) => (
              <article key={destination.name} className={styles.countryCard}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3>{destination.name}</h3>
                    </div>
                    <span className={styles.typeBadge}>{destination.type}</span>
                  </div>

                  <div className={styles.cardMeta}>
                    <div>
                      <span className={styles.metaLabel}>Stay Duration</span>
                      <strong>{destination.stayDuration}</strong>
                    </div>
                  </div>

                  <p className={styles.notes}>{destination.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="contain">
          <div className={styles.processInner}>
            <div className={styles.processHeading}>
              <span className={styles.kicker}>How It Works</span>
              <h2>How Visa on Arrival Works</h2>
            </div>

            <div className={styles.processBody}>
              <p>
                Travelers can directly fly to their destination without applying
                for a visa beforehand. Upon arrival, they need to visit the visa
                counter at the airport or border entry point.
              </p>
              <p>
                The process typically includes submitting a passport, filling
                out a short form, providing photographs if required, and paying
                the visa fee. Once approved, the visa is issued on the spot,
                allowing entry into the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="contain">
          <div className={styles.benefitsInner}>
            <div className={styles.benefitsHeading}>
              <span className={styles.kicker}>Why Choose VOA</span>
              <h2>Why travelers choose visa on arrival</h2>
            </div>

            <div className={styles.benefitsList}>
              {benefits.map((benefit) => (
                <div key={benefit} className={styles.benefitItem}>
                  <span className={styles.benefitBullet}></span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="contain">
          <div className={styles.ctaInner}>
            <div className={styles.ctaCopy}>
              <span className={styles.kicker}>Next Step</span>
              <h2>Plan Your Next Trip</h2>
              <p>
                Discover more destinations with flexible visa options and start
                your journey with ease.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/vfc" className={styles.secondaryAction}>
                Visa-Free Countries
              </Link>
              <Link href="/e-visa" className={styles.ghostAction}>
                E-Visa / ETA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisaOnArrival;
