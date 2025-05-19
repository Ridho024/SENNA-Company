import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import WhatWeDoSection from "../section/Home/WhatWeDoSection";
import ContactUsSection from "../section/Home/ContactUsSection";

const Home = () => {
  return (
    <div className="w-100 color-primary">
      <HeroSection />
      <TechStack />
      <WhatWeDoSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
