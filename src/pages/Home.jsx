import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import Navbar from "../components/Navbar/Navbar";
import ServiceSection from "../section/Home/ServiceSection";
import PortfolioSection from "../section/Home/PortofolioSection";

const Home = () => {
  return (
    <div className="w-100">
      <HeroSection />
      <TechStack />
      <ServiceSection />
      <PortfolioSection/>
    </div>
  );
};

export default Home;
