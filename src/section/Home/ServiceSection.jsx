import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../../data/services";

const ServiceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-5 text-center">
      <motion.h2 
        className="mb-3 fw-bold"
        style={{ color: "#0a2463" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h2>
      <motion.p 
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Very experienced in building digital solutions in various sectors, we
        are committed to creating various digital innovations according to
        client needs.
      </motion.p>

      <div className="container">
        <motion.div
          ref={ref}
          className="row justify-content-center mt-3 g-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="col-6 col-sm-6 col-md-4 col-lg-3"
              variants={itemVariants}
            >
              <motion.div 
                className="card bg-white text-dark border border-primary p-3 h-100 d-flex flex-column align-items-center justify-content-between"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h6 className="mb-3">{service.title}</h6>
                <motion.img
                  src={service.icon}
                  alt={service.title}
                  style={{ width: "90px", height: "90px" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;