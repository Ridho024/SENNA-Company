import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import ServiceSection from "../section/Home/ServiceSection";
import PortfolioSection from "../section/Home/PortofolioSection";
import ContactUsSection from "../section/Home/ContactUsSection";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <PortfolioSection/>
      <ContactUsSection />
    </div>
  );
};

export default Home;
