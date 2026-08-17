import React from "react";
import DetailsHero from "@/app/resources/components/common/details-hero";
import Guidelines from "@/app/resources/components/common/guidelines";
import Discover from "@/app/resources/components/common/discover";
import TopAttractions from "@/app/resources/components/common/top-attractions";
import VisaOptions from "@/app/resources/components/common/visa-options";
import VisaSteps from "@/app/resources/components/common/visa-steps";
import VisaFaq from "@/app/resources/components/common/visa-faq";
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
        {countryData.visaOptions && (
          <VisaOptions options={countryData.visaOptions} />
        )}
        {countryData.visaSteps && (
          <VisaSteps
            steps={countryData.visaSteps}
            title={`Get your ${countryData.name} Visa in ${countryData.visaSteps.length} Easy Steps`}
          />
        )}
        <Guidelines country={countryData} />
        {countryData.faqs && <VisaFaq faqs={countryData.faqs} />}
        <Discover country={countryData} />
        <TopAttractions country={countryData} />
      </div>
    </main>
  );
};

export default VOADetailsPage;
