import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const activeLinkStyle = {
    color: "#0a2463",
    fontWeight: "bold",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4 sticky-top">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <span className="fw-bold fs-4" style={{ color: "#0a2463" }}>
            SENNA.
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item dropdown position-static service-dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                SERVICE
              </a>

              <div className="dropdown-menu mega-dropdown p-4 shadow mx-4">
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="fw-bold">
                      What would you like to build today?
                    </h5>
                    <p className="text-muted small">
                      A highly-experienced product engineering team and a modern
                      and battle-tested approach will empower you to create
                      innovative applications that customers love.
                    </p>
                  </div>

                  <div className="col-md-8">
                    <div className="row g-2">
                      <div className="col-6">
                        <NavLink
                          to="/services/web-development"
                          className="dropdown-item-custom"
                        >
                          Web Development
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/services/ui-ux-design"
                          className="dropdown-item-custom"
                        >
                          UI/UX Design
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/services/odoo-customization"
                          className="dropdown-item-custom"
                        >
                          Odoo Customization
                        </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink
                          to="/services/graphic-design"
                          className="dropdown-item-custom"
                        >
                          Graphic Design
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portofolio"
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
              >
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
          <div className="d-block d-lg-none mt-3 text-center">
            <NavLink
              to="/contact"
              className="btn w-100"
              style={{ backgroundColor: "#0a2463", color: "#fff" }}
            >
              Let's Talk! <span className="arrow">→</span>
            </NavLink>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <NavLink
            to="/contact"
            className="btn"
            style={{ backgroundColor: "#0a2463", color: "#fff" }}
          >
            Let's Talk! <span className="arrow">→</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
