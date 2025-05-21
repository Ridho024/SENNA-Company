import React from "react";
import scbd from "../../assets/images/about/scbd.jpg"; // Replace with your image path

const C4Section = () => {
  return (
    <section className="container-fluid py-5" style={{ backgroundColor: "#f9f9ff" }}>
      <div className="row px-5 align-items-center">
        {/* Left Image Section */}
        <div className="col-lg-5 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src={scbd}
            alt="Office Building"
            className="rounded shadow-lg"
            style={{ height: "90vh", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-lg-7">
          <h2 className="mb-4" style={{ color: "#0a2463", fontWeight: "bold" }}>
            4C is Our Valuable Identity
          </h2>
          <p className="mb-4" style={{ fontSize: "1.1rem", paddingRight: "2rem", lineHeight: "1.8" }}>
            At our office, we believe in creating an environment that fosters creativity, collaboration, and innovation. We're passionate about helping our clients succeed and are committed to providing the tools and resources they need to
            achieve their goals.
          </p>

          {/* Cards Section */}
          <div className="row">
            <div className="col-md-5 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img src="communication-icon.png" alt="Communication" className="mb-3" style={{ width: "50px" }} />
                  <h5 className="card-title" style={{ color: "#0a2463", fontWeight: "bold" }}>Communication</h5>
                  <p className="card-text">
                    Communication is very crucial. We always build strong, healthy, honest communication between our team and partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img src="care-icon.png" alt="Care" className="mb-3" style={{ width: "50px" }} />
                  <h5 className="card-title" style={{ color: "#0a2463", fontWeight: "bold" }}>Care</h5>
                  <p className="card-text">
                    We are very passionate and detail-oriented. It's because we love what we do! And we love solving problems!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img src="collaboration-icon.png" alt="Collaboration" className="mb-3" style={{ width: "50px" }} />
                  <h5 className="card-title" style={{ color: "#0a2463", fontWeight: "bold" }}>Collaboration</h5>
                  <p className="card-text">
                    We are a team, not a bunch of individuals. We work together, encourage and support each other, and grow together as a team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img src="competitive-icon.png" alt="Competitive" className="mb-3" style={{ width: "50px" }} />
                  <h5 className="card-title" style={{ color: "#0a2463", fontWeight: "bold" }}>Competitive</h5>
                  <p className="card-text">
                    We are the best in our industry because we are battle-tested. We have the latest industry standards and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default C4Section;
