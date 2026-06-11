import Image from "next/image";
import Link from "next/link";
import styles from "./visa-free-countries.module.scss";
import { countries } from "./vfc-data";

const VisaFreeCountries = () => {
  const allCountries = countries.flatMap((region) => region.list);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="contain">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                Travel smarter. Travel easier. Travel visa-free.
              </span>
              <h1>Visa-Free Countries for Indian Passport Holders</h1>
              <p>
                Explore destinations where you can travel without a visa. Enjoy
                hassle-free international trips with just your passport.
              </p>
              <div className={styles.heroActions}>
                <a href="#countries" className={styles.primaryAction}>
                  Explore Countries
                </a>
                <div className={styles.heroMeta}>
                  <span>{allCountries.length} destinations</span>
                  <span>Short-stay travel guidance</span>
                </div>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Visa-Free Access</span>
                <strong>Simple entry, lighter planning</strong>
                <p>
                  Carry your passport, prepare the usual travel documents, and
                  focus more on the trip than the paperwork.
                </p>
              </div>

              <div className={styles.quickList}>
                {allCountries.slice(0, 6).map((country) => (
                  <Link
                    key={country.name}
                    href={`/vfc/${country.name.toLowerCase()}`}
                    className={styles.quickItem}
                  >
                    <div className={styles.quickTextLeft}>
                      <strong>{country.name}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <SeasonalPlanner /> */}

      <section className={styles.intro}>
        <div className="contain">
          <div className={styles.introInner}>
            <div className={styles.introHeading}>
              <span className={styles.kicker}>Overview</span>
              <h2>What visa-free travel means for Indian travelers</h2>
            </div>
            <div className={styles.introBody}>
              <p>
                Visa-free travel allows Indian passport holders to enter certain
                countries without applying for a visa in advance. These
                destinations permit short stays for tourism, business, or
                transit purposes.
              </p>
              <p>
                Travelers can simply carry a valid passport and meet basic entry
                requirements such as return tickets or sufficient funds. The
                duration of stay and conditions may vary depending on the
                country.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="countries" className={styles.countrySection}>
        <div className="contain">
          <div className={styles.countryHeading}>
            <span className={styles.kicker}>Destinations</span>
            <h2>Visa-free countries to shortlist for your next trip</h2>
          </div>

          {countries.map((region) => (
            <div key={region.region} className={styles.regionGroup}>
              <h3 className={styles.regionHeading}>{region.region}</h3>
              <div className={styles.cardGrid}>
                {region.list.map((country) => (
                  <Link
                    key={country.name}
                    href={`/vfc/${country.name.toLowerCase()}`}
                    className={styles.countryCard}
                  >
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className={styles.cardImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        <div>
                          <h3>{country.name}</h3>
                        </div>
                        <span className={styles.typeBadge}>{country.type}</span>
                      </div>

                      <div className={styles.cardMeta}>
                        <div>
                          <span className={styles.metaLabel}>
                            Stay Duration
                          </span>
                          <strong>{country.stayDuration}</strong>
                          {country.supportText ? (
                            <p>{country.supportText}</p>
                          ) : null}
                        </div>
                      </div>

                      <p className={styles.notes}>{country.notes}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="contain">
          <div className={styles.ctaInner}>
            <div className={styles.ctaCopy}>
              <span className={styles.kicker}>Next Step</span>
              <h2>Explore Other Visa Options</h2>
              <p>
                Looking for more destinations? Check out countries offering Visa
                on Arrival and E-Visa options for Indian travelers.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/visa-on-arrival" className={styles.secondaryAction}>
                Visa on Arrival
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

export default VisaFreeCountries;
