import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="badge mb-3 px-3 py-2 rounded-pill"
              style={{ backgroundColor: "#0a2463" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We Build. We Design. We Automate
            </motion.span>
            <h2
              className="mb-3 fw-bold hero-heading"
              style={{ color: "#0a2463" }}
            >
              Driven by Speed. Designed for Impact.
            </h2>
            <p>
              At Senna, we build digital solutions with the precision of a
              supercar — fast, sleek, and built to perform.
            </p>
            <motion.a
              href="/about"
              className="btn mt-3 fw-bold"
              style={{ backgroundColor: "#0a2463", color: "#fff" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn more
            </motion.a>
          </motion.div>

          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="border border-primary rounded-4 overflow-hidden"
              style={{ height: "250px" }}
            >
              <img
                src={heroImage}
                alt="Hero"
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
