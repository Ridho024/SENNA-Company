import React from "react";
import HeroSection from "../section/About/HeroSection";
import WhyChooseUs from "../section/About/WhyChooseUs";
import C4Section from "../section/About/C4Section";
import CTASection from "../section/About/CTASection";

const About = () => {
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      <WhyChooseUs />
      <C4Section />
      <CTASection />
    </div>
  );
};

export default About;
