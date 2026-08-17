import Image from "next/image";
import Link from "next/link";
import styles from "./e-visa.module.scss";
import GlobeIcon from "@/Icons/globe.svg";
import ForwardIcon from "@/Icons/forward.svg";
import MouseIcon from "@/Icons/mouse-pointer-click.svg";
import PlaneIcon from "@/Icons/plane-departure.svg";
import RocketIcon from "@/Icons/rocket-lunch.svg";
import { countries } from "./evisa-data";

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

const getVisaStartingPrice = (country) => {
  if (country.visaOptions && country.visaOptions.length > 0) {
    const opt = country.visaOptions[0];
    const formFee =
      parseInt((opt.visaFormFee || "").replace(/[^0-9]/g, ""), 10) || 0;
    const embassyFee =
      parseInt((opt.embassyFee || "").replace(/[^0-9]/g, ""), 10) || 0;
    const total = formFee + embassyFee;
    if (total > 0) {
      return `AED ${total.toLocaleString()}`;
    }
  }
  return country.price || null;
};

const EVisaETA = () => {
  const allCountries = countries.flatMap((region) => region.list);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="contain">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                Travel smarter. Travel digital.
              </span>
              <h1>E-Visa / ETA for Indian Passport Holders</h1>
              <p>
                Apply online and get your visa before you travel. A fast and
                convenient way to explore international destinations without the
                embassy hassle.
              </p>
              <div className={styles.heroActions}>
                <a href="#destinations" className={styles.primaryAction}>
                  Explore Destinations
                </a>
                <div className={styles.heroMeta}>
                  <span>{allCountries.length}+ countries</span>
                  <span>Fast-track processing</span>
                </div>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Why E-Visa?</span>
                <strong>Your gateway to the world</strong>
                <p>
                  No physical paperwork, no interviews. Simply upload, pay, and
                  receive your visa via email.
                </p>
              </div>

              <div className={styles.quickList}>
                {allCountries.slice(0, 6).map((country) => (
                  <Link
                    key={country.name}
                    href={`/e-visa/${toSlug(country.name)}`}
                    className={styles.quickItem}
                  >
                    {/* <span className={styles.quickFlag}>{country.flag}</span> */}
                    <div className={styles.quickText}>
                      <strong>{country.name}</strong>
                    </div>
                  </Link>
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
              <h2>What is E-Visa / ETA?</h2>
            </div>
            <div className={styles.introBody}>
              <p>
                E-Visa (Electronic Visa) and ETA (Electronic Travel
                Authorization) allow Indian passport holders to apply for a visa
                online without visiting an embassy.
              </p>
              <p>
                The application process is simple and can be completed digitally
                by submitting documents, filling out forms, and making an online
                payment. Once approved, travelers receive their visa
                electronically, making travel smoother and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className={styles.countrySection}>
        <div className="contain">
          <div className={styles.countryHeading}>
            <span className={styles.kicker}>Explore</span>
            <h2>E-Visa & ETA Destinations</h2>
          </div>

          {countries.map((region) => (
            <div key={region.region} className={styles.regionGroup}>
              <h3 className={styles.regionHeading}>{region.region}</h3>
              <div className={styles.cardGrid}>
                {region.list.map((country) => (
                  <Link
                    key={country.name}
                    href={`/e-visa/${toSlug(country.name)}`}
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
                        <h3>{country.name}</h3>
                        <span className={styles.typeBadge}>{country.type}</span>
                      </div>

                      <div className={styles.cardMetaRow}>
                        <div className={styles.metaBlock}>
                          <span className={styles.metaLabel}>
                            Stay Duration
                          </span>
                          <strong>{country.stayDuration}</strong>
                        </div>
                        {getVisaStartingPrice(country) && (
                          <div className={styles.metaBlock}>
                            <span className={styles.metaLabel}>
                              Starting From
                            </span>
                            <strong className={styles.priceTag}>
                              {getVisaStartingPrice(country)}
                            </strong>
                          </div>
                        )}
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

      <section className={styles.howSection}>
        <div className="contain">
          <div className={styles.howInner}>
            <div className={styles.howHeading}>
              <span className={styles.kicker}>Process</span>
              <h2>How E-Visa / ETA Works</h2>
            </div>
            <div className={styles.howStepGrid}>
              {[
                {
                  title: "Apply Online",
                  text: "Fill out the digital application form and upload scanned copies of your passport and photos.",
                },
                {
                  title: "Make Payment",
                  text: "Pay the visa fee securely using online payment methods like credit/debit cards.",
                },
                {
                  title: "Get Your Visa",
                  text: "Receive your approved visa or ETA via email. Print it out and carry it for your journey.",
                },
              ].map((step, i) => (
                <div key={i} className={styles.howStep}>
                  <div className={styles.stepNum}>{i + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className="contain">
          <div className={styles.whyInner}>
            <div className={styles.whyHeading}>
              <span className={styles.kicker}>Advantages</span>
              <h2>Why Choose E-Visa / ETA</h2>
            </div>
            <div className={styles.whyList}>
              {[
                {
                  text: "Apply from anywhere without visiting an embassy",
                  Icon: GlobeIcon,
                },
                {
                  text: "Faster processing compared to traditional visas",
                  Icon: ForwardIcon,
                },
                {
                  text: "Fully online and convenient process",
                  Icon: MouseIcon,
                },
                {
                  text: "Suitable for tourism and short business trips",
                  Icon: PlaneIcon,
                },
                { text: "Reduces waiting time at airports", Icon: RocketIcon },
              ].map((item, index) => (
                <div key={index} className={styles.whyItem}>
                  <div className={styles.checkIcon}>
                    <item.Icon width={24} height={24} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.schengenSection}>
        <div className="contain">
          <div className={styles.schengenInner}>
            <div className={styles.schengenAlert}>
              <span className={styles.kicker}>Take Note</span>
              <h3>Schengen Travel Information</h3>
              <p>
                Indian passport holders currently cannot use E-Visa or ETA to
                enter Schengen countries. Travelers must apply through embassies
                or authorized visa centers. The process typically takes a few
                days to a couple of weeks and requires document verification and
                appointment scheduling.
              </p>
            </div>

            <div className={styles.easySchengen}>
              <span className={styles.kicker}>Easier Options</span>
              <h4>Schengen Countries with Streamlined Processes</h4>
              <div className={styles.bubbleGrid}>
                {[
                  "Lithuania",
                  "Estonia",
                  "Latvia",
                  "Slovakia",
                  "Switzerland",
                  "Luxembourg",
                  "Greece",
                  "Iceland",
                ].map((country) => (
                  <span key={country} className={styles.bubble}>
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.popularSection}>
        <div className="contain">
          <div className={styles.popularInner}>
            <div className={styles.popularHeading}>
              <span className={styles.kicker}>Trending</span>
              <h2>Popular Destinations Among Travelers</h2>
              <p>
                These destinations are trending due to ease of access and scenic
                beauty in 2026.
              </p>
            </div>
            <div className={styles.featuredTags}>
              {[
                "Malaysia",
                "Thailand",
                "Mauritius",
                "Seychelles",
                "Nepal",
                "Barbados",
                "Bhutan",
                "Fiji",
              ].map((tag) => (
                <div key={tag} className={styles.tag}>
                  {tag}
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
              <span className={styles.kicker}>Final Step</span>
              <h2>Explore the World with Ease</h2>
              <p>
                Plan your journey with flexible visa options and discover
                destinations that match your style.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/vfc" className={styles.secondaryAction}>
                Visa-Free Countries
              </Link>
              <Link href="/visa-on-arrival" className={styles.ghostAction}>
                Visa on Arrival
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EVisaETA;
