import { motion } from "motion/react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="container"
      style={{ minHeight: "100vh", paddingTop: "7rem" }}
    >
      <div className="text-center">
        <motion.h1
          className="fw-bold mb-3"
          style={{ color: "#0a2463" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Turning Vision into Reality with Lasting Impact!
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Your digital future matters. Build sustainable solutions that drive
          meaningful change.
        </motion.p>
      </div>

      <div className="row text-center justify-content-center mt-4">
        {["Innovative", "Efficient", "Reliable", "Exclusive", "Sustainable"].map(
          (item, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-2 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              <span className="me-2 fs-4">✓</span>
              <span>{item}</span>
            </motion.div>
          )
        )}
      </div>

      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="#whyChooseUs"
          className="btn btn-lg"
          style={{ backgroundColor: "#0a2463", color: "#fff" }}
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
