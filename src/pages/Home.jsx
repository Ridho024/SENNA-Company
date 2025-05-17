import React from "react";
import HeroSection from "../section/Home/HeroSection";
import TechStack from "../section/Home/TechstackSection";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="w-100 color-primary">
      <HeroSection />
      <TechStack />
    </div>
  );
};

export default Home;
