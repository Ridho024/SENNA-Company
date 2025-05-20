import React from "react";
import { Globe } from "lucide-react";
import { portofolio}  from "../../data/portofolio";

const PortfolioSection = () => {
  return (
    <section className="py-5 mx-4 bg-light text-center">
      <div className="container">
        <h2 className="fw-bold mb-2">
          We build <span className="text-primary">products</span> people love
        </h2>
        <p className="mx-auto w-75">
          clean design, smart code, and real impact.
        </p>

        <div className="row justify-content-center">
          {portofolio.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden h-100 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="p-3 text-start">
                  <div className="d-flex align-items-center mb-2">
                    <h5 className="m-0 fw-bold">{item.title}</h5>
                  </div>
                  <div className="d-flex gap-2 text-muted small mb-3">
                    {item.platforms.includes("web") && <Globe size={18} />}{" "}
                    {item.categories}
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-primary fw-bold w-100"
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
