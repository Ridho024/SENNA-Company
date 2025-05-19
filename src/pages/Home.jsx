import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import ServiceSection from "../section/Home/ServiceSection";
import WhatWeDoSection from "../section/Home/WhatWeDoSection";
import ContactUsSection from "../section/Home/ContactUsSection";

const Home = () => {
  return (
    <div className="w-100">
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <WhatWeDoSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
