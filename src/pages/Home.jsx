import React from "react";
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechstackSection";
import ServiceSection from "../components/ServiceSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";

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
