import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Portofolio, Services, About } from "../pages";

import MainLayout from "../layouts/MainLayout";

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
              <Portofolio/>
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services/>
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
