import React from "react";
import uiuxImage from "../../../assets/services/web_dev.png";

const HeroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p
            className="text-uppercase fw-semibold mb-2"
            style={{ color: "#0a2463" }}
          >
            Website Development
          </p>
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: "2rem", lineHeight: "1.4" }}
          >
            Let’s Build a Website Your Users Will Love
          </h1>
          <p className="text-muted mb-4">
            We create fast, modern, and easy-to-use websites that help you
            connect better with your audience and grow your business, all
            without the tech headache.
          </p>
          <a
            href="#learn-more"
            className="btn fw-bold"
            style={{ backgroundColor: "#0a2463", color: "#fff" }}
          >
         learn more <span className="ms-1">↓</span>
          </a>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={uiuxImage}
            alt="UI/UX Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
