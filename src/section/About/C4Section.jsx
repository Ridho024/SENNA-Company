import React from "react";
import { motion } from "framer-motion";
import scbd from "../../assets/images/about/scbd.jpg"; 
import { identityCards } from "../../data/about";

const C4Section = () => {
  return (
    <motion.section
      className="container-fluid py-5"
      style={{ backgroundColor: "#f9f9ff" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="row px-5 align-items-center">
        {/* Left Image Section */}
        <motion.div
          className="col-lg-5 d-flex justify-content-center mb-4 mb-lg-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={scbd}
            alt="Office Building"
            className="rounded shadow-lg"
            style={{ height: "90vh", width: "100%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className="col-lg-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-4" style={{ color: "#0a2463", fontWeight: "bold" }}>
            4C is Our Valuable Identity
          </h2>
          <p
            className="mb-4"
            style={{
              fontSize: "1.1rem",
              paddingRight: "2rem",
              lineHeight: "1.8",
            }}
          >
            At our office, we believe in creating an environment that fosters
            creativity, collaboration, and innovation. We're passionate about
            helping our clients succeed and are committed to providing the tools
            and resources they need to achieve their goals.
          </p>

          {/* Cards Section */}
          <div className="row">
            {identityCards.map((card, index) => (
              <motion.div
                className="col-md-5 mb-4"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="mb-3"
                      style={{ width: "50px" }}
                    />
                    <h5
                      className="card-title"
                      style={{ color: "#0a2463", fontWeight: "bold" }}
                    >
                      {card.title}
                    </h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default C4Section;
