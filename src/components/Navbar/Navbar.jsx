import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <span className="fw-bold text-dark fs-4">nbs.</span>
          </a>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active-custom" href="#">
                  HOME
                </a>
              </li>

              <li className="nav-item dropdown position-static service-dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                  SERVICE
                </a>

                <div className="dropdown-menu mega-dropdown p-4 shadow">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="fw-bold">What would you like to build today?</h5>
                      <p className="text-muted small">A highly-experienced product engineering team and a modern and battle-tested approach will empower you to create innovative applications that customers love.</p>
                    </div>

                    <div className="col-md-8">
                      <div className="row g-4">
                        <div className="col-6 d-flex align-items-start gap-2">
                          <span>
                            <strong>Product Designs & UI/UX</strong>
                          </span>
                        </div>
                        <div className="col-6 d-flex align-items-start gap-2">
                          <span>
                            <strong>Build Applications</strong>
                          </span>
                        </div>
                        <div className="col-6 d-flex align-items-start gap-2">
                          <span>
                            <strong>Modernize Applications</strong>
                          </span>
                        </div>
                        <div className="col-6 d-flex align-items-start gap-2">
                          <span>
                            <strong>Tech Training & Consulting</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <a href="#" className="btn btn-primary custom-btn">
              Let's Talk! <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
