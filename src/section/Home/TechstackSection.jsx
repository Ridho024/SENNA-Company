import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStacks } from "../../data/techStacks";

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-5" style={{ backgroundColor: "#dfe0eb" }}>
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Main tech stack we use
          </h2>
          <motion.div
            ref={ref}
            className="d-flex justify-content-center flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {techStacks.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                style={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                }}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={tech.icon} 
                  alt="icon tech" 
                  className="img-fluid" 
                  style={{ width: "40px", height: "40px", objectFit: "contain" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;