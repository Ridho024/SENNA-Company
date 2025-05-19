import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="badge mb-3 px-3 py-2 rounded-pill" 
              style={{ backgroundColor: "#0a2463" }}
              whileHover={{ scale: 1.05 }}
            >
              We Build. We Design. We Automate
            </motion.span>
            <motion.h2 
              className="mb-3 fw-bold hero-heading" 
              style={{ color: "#0a2463" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Fullstack web developer & Odoo specialist with a designer's eye.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From clean code to pixel-perfect design. We craft digital solutions that work and look good.
            </motion.p>
            <motion.a 
              href="/about" 
              className="btn mt-3 fw-bold" 
              style={{ backgroundColor: "#0a2463", color: "#fff" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.a>
          </motion.div>

          <motion.div 
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="border border-primary rounded-4 overflow-hidden" 
              style={{ height: "250px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Hero" 
                className="img-fluid h-100 w-100 object-fit-cover" 
                style={{ objectFit: "cover" }} 
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;