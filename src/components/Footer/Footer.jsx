import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#0a2463" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <motion.div
            className="col-12 col-md-6 col-lg-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold mb-3">SENNA</h3>
            <p className="text-white-50 mb-3">
              SENNA is a digital product development company that specializes in
              creating innovative and user-centric solutions for businesses
              worldwide.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-6 col-md-6 col-lg-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none d-block mb-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none d-block mb-1"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white-50 text-decoration-none d-block mb-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portofolio"
                  className="text-white-50 text-decoration-none d-block mb-1"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white-50 text-decoration-none d-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="col-6 col-md-6 col-lg-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-semibold mb-3">Our Services</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-1">Web Development</li>
              <li className="mb-1">Odoo Customization</li>
              <li className="mb-1">UI/UX Design</li>
              <li>Graphic Design</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="col-12 col-md-6 col-lg-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-semibold mb-3">Newsletter</h5>
            <p className="text-white-50 mb-3">
              Stay updated with our latest news and updates.
            </p>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control bg-light text-dark border-0"
                  placeholder="Enter your email"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-light text-primary fw-semibold w-100"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 pt-4 border-top border-white-50">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-white-50 mb-2 mb-md-0">
              © {new Date().getFullYear()} SENNA. All rights reserved.
            </p>
            <div className="d-flex gap-3">
              <Link
                to="/privacy"
                className="text-white-50 text-decoration-none"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white-50 text-decoration-none">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
