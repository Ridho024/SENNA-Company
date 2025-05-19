import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            ref={ref}
          >
            <motion.div
              className="position-relative rounded-4 overflow-hidden shadow-sm"
              style={{ height: "400px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://via.placeholder.com/600x800?text=SENNA+Team"
                alt="About SENNA"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-4"
                style={{
                  background: "linear-gradient(transparent, rgba(10, 36, 99, 0.8))",
                }}
              >
                <h4 className="text-white mb-0">SENNA Team</h4>
                <p className="text-white-50 mb-0">Passionate about technology</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="fw-bold mb-4" style={{ color: "#0a2463" }}>
              About SENNA
            </h2>
            <p className="mb-4">
              SENNA is a team of passionate developers and designers dedicated to creating
              exceptional digital experiences. With years of experience in the industry,
              we've helped businesses of all sizes transform their ideas into reality.
            </p>
            <p className="mb-4">
              Our mission is to deliver high-quality, innovative solutions that not only
              meet but exceed our clients' expectations. We believe in the power of
              technology to solve real-world problems and create meaningful impact.
            </p>

            <div className="row g-4 mt-2">
              <motion.div
                className="col-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(10, 36, 99, 0.1)",
                    }}
                  >
                    <i className="bi bi-people-fill fs-4" style={{ color: "#0a2463" }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Expert Team</h5>
                    <p className="mb-0 small text-muted">Skilled professionals</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(10, 36, 99, 0.1)",
                    }}
                  >
                    <i className="bi bi-gear-fill fs-4" style={{ color: "#0a2463" }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Modern Technologies</h5>
                    <p className="mb-0 small text-muted">Latest tools & frameworks</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(10, 36, 99, 0.1)",
                    }}
                  >
                    <i className="bi bi-clock-fill fs-4" style={{ color: "#0a2463" }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0">On-time Delivery</h5>
                    <p className="mb-0 small text-muted">Meeting deadlines</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "rgba(10, 36, 99, 0.1)",
                    }}
                  >
                    <i className="bi bi-headset fs-4" style={{ color: "#0a2463" }}></i>
                  </div>
                  <div>
                    <h5 className="mb-0">24/7 Support</h5>
                    <p className="mb-0 small text-muted">Always available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
