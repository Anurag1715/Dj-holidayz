import React from "react";
import DetailsHero from "@/app/resources/components/common/details-hero";
import Guidelines from "@/app/resources/components/common/guidelines";
import Discover from "@/app/resources/components/common/discover";
import TopAttractions from "@/app/resources/components/common/top-attractions";
import styles from "@/app/resources/components/visa-free-countries/visa-free-countries.module.scss";
import { countries } from "@/app/resources/components/visa-free-countries/vfc-data";

const VFCDetailsPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;
  const countryName = slug.toLowerCase();

  const allCountries = countries.flatMap((region) => region.list);
  const countryData = allCountries.find(
    (c) => c.name.toLowerCase() === countryName,
  );

  if (!countryData) {
    return (
      <div className={styles.notFound}>
        <h2>Destination Not Found</h2>
        <p>We couldn&apos;t find the requested visa-free country details.</p>
      </div>
    );
  }

  const code = countryData.code || "VF";

  return (
    <main className={styles.detailsPage}>
      <div className="contain">
        <DetailsHero country={countryData} code={code} />
        <Guidelines country={countryData} />
        <Discover country={countryData} />
        <TopAttractions country={countryData} />
      </div>
    </main>
  );
};

export default VFCDetailsPage;
