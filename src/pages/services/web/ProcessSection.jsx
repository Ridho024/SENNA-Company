import React from "react";
import { process_web } from "../../../data/services";

const ProcessSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#0a2463" }}>
            Development Process
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We build websites with a clear and collaborative process, focused on
            understanding your needs, designing with purpose, and delivering
            results that work for your business
          </p>
        </div>

        <div className="row mx-4">
          {process_web.map((step, idx) => (
            <div key={idx} className="col-12">
              <div className="row align-items-center">
                <div
                  className={`col-md-6 d-flex justify-content-center ${
                    idx % 2 === 1 ? "order-md-2" : ""
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.number}
                    className="img-fluid rounded shadow-sm mb-3 mb-md-0"
                    style={{
                      borderRadius: "20px",
                      maxWidth: "450px",
                      width: "100%",
                    }}
                  />
                </div>

                <div
                  className={`col-md-6 text-center text-md-start mb-4 ${
                    idx % 2 === 1 ? "order-md-1" : ""
                  }`}
                >
                  <h4 className="fw-bold" style={{ color: "#0a2463" }}>
                    {step.number}
                  </h4>
                  <p className="text-muted " style={{ maxWidth: "500px" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
