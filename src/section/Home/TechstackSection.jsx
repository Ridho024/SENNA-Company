import React from "react";
import { techStacks } from "../../data/techStacks";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <>
      <section
        className="mt-5 text-white"
        style={{ backgroundColor: "#dfe0eb" }}
      >
        <div className="p-5 text-center">
          <motion.h2
            className="mb-4 fw-bold"
            style={{ color: "#0a2463" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Main tech stack we are use
          </motion.h2>

          <motion.div
            className="d-flex justify-content-center flex-wrap gap-3"
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
            {techStacks.map((tech, index) => (
              <motion.div
                key={index}
                className="rounded-circle d-flex justify-content-center align-items-center border border-secondary bg-white"
                style={{
                  width: "60px",
                  height: "60px",
                }}
                title={tech.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={tech.icon}
                  alt="icon tech"
                  className="img-fluid"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
