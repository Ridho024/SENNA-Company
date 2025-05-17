import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpeg"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <span className="badge mb-3 px-3 py-2 rounded-pill" style={{ backgroundColor: "#0a2463" }}>
                We Build. We Design. We Automate
              </span>
              <h2 className="mb-3 fw-bold hero-heading" style={{ color: "#0a2463" }}>
                Fullstack web developer & Odoo specialist with a designer's eye.
              </h2>
              <p>From clean code to pixel-perfect design. We craft digital solutions that work and look good.</p>
              <a href="/about" className="btn mt-3 fw-bold" style={{ backgroundColor: "#0a2463", color: "#fff" }}>
                Learn more
              </a>
            </div>

            <div className="col-md-6 text-center">
              <div className="border border-primary rounded-4 overflow-hidden" style={{ height: "250px" }}>
                <img src={heroImage} alt="Hero" className="img-fluid h-100 w-100 object-fit-cover" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
