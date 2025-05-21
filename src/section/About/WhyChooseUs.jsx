import React from "react";
import { cards } from "../../data/about";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  return (
    <motion.section
      className="why-choose-us text-center py-5"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
      }}
      id="whyChooseUs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h1
          className="text-bold fw-bolder mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why You Need To Choose Us
        </motion.h1>

        <motion.p
          className="mb-5"
          style={{ fontSize: "1.1rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our purpose is simple:{" "}
          <strong>to empower and deliver long-lasting greatness!</strong>
        </motion.p>

        <div className="row">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              <div
                className="card text-center"
                style={{
                  width: "18rem",
                  height: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={card.imgSrc}
                  className="card-img-top mb-3"
                  alt={card.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bolder">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
