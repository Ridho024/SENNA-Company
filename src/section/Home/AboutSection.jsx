import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-3 py-md-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container px-4">
        <div className="row align-items-center gy-5">
          <motion.div
            className="col-md-6 mb-4 mb-md-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            ref={ref}
          >
            <motion.div
              className="position-relative rounded-4 overflow-hidden shadow-sm"
              style={{ height: "300px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/api/placeholder/600/800"
                alt="About SENNA"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3 p-md-4"
                style={{
                  background: "linear-gradient(transparent, rgba(10, 36, 99, 0.8))",
                }}
              >
                <h4 className="text-white mb-0 fs-5 fs-md-4">SENNA Team</h4>
                <p className="text-white-50 mb-0 small">Passionate about technology</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="fw-bold mb-3 mb-md-4 fs-3 fs-md-2" style={{ color: "#0a2463" }}>
              About SENNA
            </h2>
            <p className="mb-3 mb-md-4 small text-md-start">
              SENNA is a team of passionate developers and designers dedicated to creating
              exceptional digital experiences. With years of experience in the industry,
              we've helped businesses of all sizes transform their ideas into reality.
            </p>
            <p className="mb-3 mb-md-4 small text-md-start">
              Our mission is to deliver high-quality, innovative solutions that not only
              meet but exceed our clients' expectations. We believe in the power of
              technology to solve real-world problems and create meaningful impact.
            </p>

            <div className="row g-3 g-md-4 mt-2">
              {[
                {
                  icon: "bi-people-fill",
                  title: "Expert Team",
                  subtitle: "Skilled professionals",
                },
                {
                  icon: "bi-gear-fill",
                  title: "Modern Technologies",
                  subtitle: "Latest tools & frameworks",
                },
                {
                  icon: "bi-clock-fill",
                  title: "On-time Delivery",
                  subtitle: "Meeting deadlines",
                },
                {
                  icon: "bi-headset",
                  title: "24/7 Support",
                  subtitle: "Always available",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="col-6"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-2 me-md-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        minWidth: "40px",
                        backgroundColor: "rgba(10, 36, 99, 0.1)",
                      }}
                    >
                      <i className={`bi ${item.icon} fs-5`} style={{ color: "#0a2463" }}></i>
                    </div>
                    <div>
                      <h5 className="mb-0 fs-6 fs-md-5">{item.title}</h5>
                      <p className="mb-0 small text-muted d-none d-sm-block">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;