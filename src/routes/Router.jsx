import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Portofolio, Services, About } from "../pages";

// Import individual section components
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechstackSection from "../components/TechstackSection";
import ServiceSection from "../components/ServiceSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactUsSection from "../components/ContactUsSection";

import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HeroSection />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutSection />
            </MainLayout>
          }
        />
        <Route
          path="/tech-stack"
          element={
            <MainLayout>
              <TechstackSection />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <ServiceSection />
            </MainLayout>
          }
        />
        <Route
          path="/portofolio"
          element={
            <MainLayout>
              <PortfolioSection />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactUsSection />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
