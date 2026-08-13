"use client";

import React, { useState } from "react";
import styles from "./cruise.module.scss";
import CruiseHero from "./hero";
import CruisePackagesGrid from "./packages-grid";
import CruiseCta from "./cta";

const CruiseListing = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className={styles.page}>
      <CruiseHero onCategorySelect={(slug) => setActiveTab(slug)} />
      <CruisePackagesGrid
        activeTab={activeTab}
        onTabChange={(slug) => setActiveTab(slug)}
      />
      <CruiseCta onResetFilter={(slug) => setActiveTab(slug)} />
    </main>
  );
};

export default CruiseListing;
