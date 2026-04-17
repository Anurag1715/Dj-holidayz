import React from 'react';
import HeroSection from '../resources/components/home/hero-section';
import VisaTypesSection from '../resources/components/home/visa-types';
import PopularDestinationsSection from '../resources/components/home/popular-destinations';
import WhyChooseUsSection from '../resources/components/home/why-choose-us';
import FoodExperienceSection from '../resources/components/home/food-experience';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <VisaTypesSection />
            <PopularDestinationsSection />
            <WhyChooseUsSection />
            {/* <FoodExperienceSection /> */}
        </>
    );
};

export default HomePage;
