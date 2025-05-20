// import React from "react";

// const Footer = () => {
//   return (
//     <div style={{ width: "100%", height: "400px", backgroundColor: "#0a2463", color: "white" }}>
//       <div style={{ width: "100%" }}>
//         <div className="row row-cols-2" style={{ width: "100%", padding: "5rem 9rem" }}>
//           <div className="col-9">
//             <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>SENNA is a digital product development company that specializes in creating innovative and user-centric solutions for businesses worldwide.</p>
//           </div>
//           <div className="col-3">
//             <ul style={{ listStyleType: "none", padding: 0 }}>
//               <li>
//                 <a href="#about" style={{ color: "white", textDecoration: "none" }}>
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" style={{ color: "white", textDecoration: "none" }}>
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div style={{ textAlign: "center", marginTop: "2rem" }}>
//         <p>&copy; {new Date().getFullYear()} SENNA. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0a2463", color: "white" }}>
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-lg-9">
            <p className="fs-5 fw-bold">
              SENNA is a digital product development company that specializes in
              creating innovative and user-centric solutions for businesses worldwide.
            </p>
          </div>
          <div className="col-lg-3 d-flex flex-column align-items-lg-end">
            <ul className="list-unstyled mb-3">
              <li>
                <a href="#about" className="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <Link to="https://facebook.com" className="text-white">
                <Facebook size={20} />
              </Link>
              <Link to="https://instagram.com" className="text-white">
                <Instagram size={20} />
              </Link>
              <Link to="https://linkedin.com" className="text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3 border-top border-white border-opacity-25">
        <small>&copy; {new Date().getFullYear()} SENNA. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
