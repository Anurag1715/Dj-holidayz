import React from "react";
import CruiseListing from "@/app/resources/components/cruise";

export const metadata = {
  title: "Cruise Packages | DJ Holidays",
  description:
    "Explore luxury cruise packages across Europe, Asia, Arabian Gulf, Americas, Expedition cruises, World Cruises, and River Cruises with DJ Holidays.",
};

const CruisePage = () => {
  return <CruiseListing />;
};

export default CruisePage;
