import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-5 text-center">
      <motion.h2
        className="mb-3 fw-bold"
        style={{ color: "#0a2463" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What We Do
      </motion.h2>

      <motion.p
        className="mx-auto w-75"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Very experienced in building digital solutions in various sectors, we
        are committed to creating various digital innovations according to
        client needs.
      </motion.p>

      <div className="container">
        <motion.div
          className="row justify-content-center mt-3 g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-6 col-sm-6 col-md-4 col-lg-3"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link className="text-decoration-none" to={service.path}>
                <div className="card bg-white text-dark border border-primary p-3 h-100 d-flex flex-column align-items-center justify-content-between">
                  <h6 className="mb-3">{service.title}</h6>
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
