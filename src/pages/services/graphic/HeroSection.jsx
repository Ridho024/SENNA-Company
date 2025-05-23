import React from "react";
import graphic_hero from "../../../assets/services/graphic/graphic_hero.png";
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
          <motion.span
            className="badge mb-3 px-3 py-2 rounded-pill"
            style={{ backgroundColor: "#0a2463" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Graphic Design
          </motion.span>
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: "2rem", lineHeight: "1.4", color: "#0a2463" }}
          >
            Crafting Visual Stories That Captivate
          </h1>
          <p className="text-muted mb-4">
            We design stunning visuals and graphics that communicate your brand's story, engage your audience, and leave a lasting impression. Let us bring your ideas to life with creativity and precision.
          </p>
          <a
            href="#learn-more"
            className="btn fw-bold"
            style={{ backgroundColor: "#0a2463", color: "#fff" }}
          >
            learn more <span className="ms-1">↓</span>
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
            src={graphic_hero}
            alt="Graphic Design Illustration"
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
