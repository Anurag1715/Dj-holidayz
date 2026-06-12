import React from "react";
import DetailsHero from "@/app/resources/components/visa-free-countries/details-hero";
import Guidelines from "@/app/resources/components/visa-free-countries/guidelines";
import Discover from "@/app/resources/components/visa-free-countries/discover";
import TopAttractions from "@/app/resources/components/visa-free-countries/top-attractions";
import styles from "@/app/resources/components/visa-free-countries/visa-free-countries.module.scss";
import { countries } from "@/app/resources/components/visa-on-arrival/voa-data";

const VOADetailsPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;
  const countryName = slug.toLowerCase().replace(/-/g, " ");

  const allCountries = countries.flatMap((region) => region.list);
  const countryData = allCountries.find(
    (c) => c.name.toLowerCase() === countryName,
  );

  if (!countryData) {
    return (
      <div className={styles.notFound}>
        <h2>Destination Not Found</h2>
        <p>
          We couldn&apos;t find the requested visa on arrival country details.
        </p>
      </div>
    );
  }

  const code = countryData.code || "VOA";

  return (
    <main className={styles.detailsPage}>
      <div className="contain">
        <DetailsHero
          country={countryData}
          code={code}
          backHref="/visa-on-arrival"
          backLabel="Back to Visa on Arrival"
        />
        <Guidelines country={countryData} />
        <Discover country={countryData} />
        <TopAttractions country={countryData} />
      </div>
    </main>
  );
};

export default VOADetailsPage;
