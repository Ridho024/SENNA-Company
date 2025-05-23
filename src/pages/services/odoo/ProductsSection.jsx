import React from "react";
import { motion } from "motion/react";
import { products_odoo } from "../../../data/services";

const ProductsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section
      className="py-5 bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ color: "#0a2463" }}>
          Build modules for various needs
        </h2>
        <p className="text-muted mb-5">
          We offer a variety of odoo's module needs, our target is to provide the best
          service for our customers.
        </p>

        <motion.div className="row g-4" variants={containerVariants}>
          {products_odoo.map((product, index) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={index}
              variants={cardVariants}
            >
              <div
                className="card h-100 shadow-md hover-shadow transition cursor-pointer"
                style={{
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  border: "1px solid #0a2463",
                }}
              >
                <div className="card-body text-start p-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="mb-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5 className="fw-bold mb-2" style={{ color: "#0a2463" }}>{product.title}</h5>
                  <p className="text-muted mb-0">{product.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h4
          className="mt-3 fw-bold"
          style={{ color: "#0a2463" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Many more...
        </motion.h4>
      </div>
    </motion.section>
  );
};
export default ProductsSection;
