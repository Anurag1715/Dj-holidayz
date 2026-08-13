import React from "react";
import Link from "next/link";
import DetailsHero from "@/app/resources/components/cruise/cruise-details/details-hero";
import Overview from "@/app/resources/components/cruise/cruise-details/overview";
import SailingDates from "@/app/resources/components/cruise/cruise-details/sailing-dates";
import Itinerary from "@/app/resources/components/cruise/cruise-details/itinerary";
import Inclusions from "@/app/resources/components/cruise/cruise-details/inclusions";
import Faqs from "@/app/resources/components/cruise/cruise-details/faqs";
import { cruiseCategories } from "@/app/resources/components/cruise/cruise-data";
import styles from "@/app/resources/components/cruise/cruise-details/cruise-details.module.scss";

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;
  const allPackages = cruiseCategories.flatMap((cat) => cat.list);
  const cruise = allPackages.find((pkg) => pkg.slug === slug);

  if (!cruise) {
    return { title: "Cruise Not Found | DJ Holidays" };
  }

  return {
    title: `${cruise.name} - ${cruise.tagline} | DJ Holidays`,
    description: cruise.overview.slice(0, 160),
  };
}

const CruiseDetailsPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const allPackages = cruiseCategories.flatMap((cat) => cat.list);
  const cruise = allPackages.find((pkg) => pkg.slug === slug);

  if (!cruise) {
    return (
      <main className={styles.detailPage}>
        <div className="contain">
          <div className={styles.notFound}>
            <h2>Cruise Package Not Found</h2>
            <p>We couldn&apos;t find the requested cruise package details.</p>
            <Link href="/cruises" className={styles.backBtn}>
              Back to Cruise Packages
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.detailPage}>
      <div className="contain">
        <DetailsHero cruise={cruise} />
        <Overview
          overview={cruise.overview}
          aboutTheCruise={cruise.aboutTheCruise}
          cruiseLine={cruise.cruiseLine}
          ship={cruise.ship}
          tagline={cruise.tagline}
          departure={cruise.departure}
          highlights={cruise.highlights}
          itinerarySummary={cruise.itinerarySummary}
        />
        <SailingDates
          sailingDates={cruise.sailingDates}
          sailingSeason={cruise.sailingSeason}
        />
        <Itinerary itinerary={cruise.itinerary} />
        <Inclusions
          inclusions={cruise.inclusions}
          exclusions={cruise.exclusions}
        />
        <Faqs faqs={cruise.faqs} />
      </div>
    </main>
  );
};

export default CruiseDetailsPage;
