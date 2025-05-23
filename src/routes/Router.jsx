import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Portofolio, About, Web, UiUx, GraphicDesign } from "../pages";
import MainLayout from "../layouts/MainLayout";
import PortfolioSection from "../section/Home/PortofolioSection";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/portofolio"
          element={
            <MainLayout>
              <PortfolioSection/>
            </MainLayout>
          }
        />
        <Route
          path="/services/web-development"
          element={
            <MainLayout>
              <Web />
            </MainLayout>
          }
        />
        <Route
          path="/services/ui-ux-design"
          element={
            <MainLayout>
              <UiUx />
            </MainLayout>
          }
        />
        <Route
          path="/services/graphic-design"
          element={
            <MainLayout>
              <GraphicDesign />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About/>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
