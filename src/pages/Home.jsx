import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import ServiceSection from "../section/Home/ServiceSection";
import PortfolioSection from "../section/Home/PortfolioSection";
import AboutSection from "../section/Home/AboutSection";
import ContactUsSection from "../section/Home/ContactUsSection";

const Home = () => {
  return (
    <div className="w-100">
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ServiceSection />
      <PortfolioSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
