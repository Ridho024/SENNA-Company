import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Contact Us
          </h2>
          <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <motion.div 
                className="card shadow-sm p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    className="form-control"
                    id="company"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  className="btn btn-primary w-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: "#0a2463" }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;