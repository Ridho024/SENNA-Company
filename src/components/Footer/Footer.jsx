import React from "react";

const Footer = () => {
  return (
    <div style={{ width: "100%", height: "400px", backgroundColor: "#0a2463", color: "white" }}>
      <div style={{ width: "100%" }}>
        <div className="row row-cols-2" style={{ width: "100%", padding: "5rem 9rem" }}>
          <div className="col-9">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SENNA is a digital product development company that specializes in creating innovative and user-centric solutions for businesses worldwide.</p>
          </div>
          <div className="col-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#about" style={{ color: "white", textDecoration: "none" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "white", textDecoration: "none" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p>&copy; {new Date().getFullYear()} SENNA. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
