import React from "react";
import uiuxImage from "../../../assets/services/web_dev.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <motion.div
          className="col-lg-6 mb-4 mb-lg-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-uppercase fw-semibold mb-2"
            style={{ color: "#0a2463" }}
          >
            Web Development Services
          </p>
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: "2rem", lineHeight: "1.4" }}
          >
            Crafting Websites That Captivate and Convert
          </h1>
          <p className="text-muted mb-4">
            Our team specializes in building sleek, high-performing websites
            designed to engage your audience, elevate your brand, and drive
            measurable results—all without the technical hassle.
          </p>
          <a
            href="#learn-more"
            className="btn fw-bold"
            style={{ backgroundColor: "#0a2463", color: "#fff" }}
          >
            Discover More <span className="ms-1">↓</span>
          </a>
        </motion.div>

        <motion.div
          className="col-lg-6 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={uiuxImage}
            alt="Web Development Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
