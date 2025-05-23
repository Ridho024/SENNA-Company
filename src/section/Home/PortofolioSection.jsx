import React from "react";
import { Globe } from "lucide-react";
import { portofolio } from "../../data/portofolio";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  return (
    <section className="py-5 mx-4 bg-light text-center">
      <div className="container">
        <motion.h2
          className="fw-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ color: "#0a2463" }}
        >
          Build with Purpose. Code with Impact.
        </motion.h2>

        <motion.p
          className="mx-auto w-75"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We build digital products that people love and businesses rely on.
        </motion.p>

        <div className="row justify-content-center mt-4">
          {portofolio.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-sm-6 mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="p-3 text-start">
                  <div className="d-flex align-items-center mb-2">
                    <h5 className="m-0 fw-bold">{item.title}</h5>
                  </div>
                  <div className="d-flex gap-2 text-muted small mb-3">
                    {item.platforms.includes("web") && <Globe size={18} />}
                    {item.categories}
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary fw-bold w-100"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
