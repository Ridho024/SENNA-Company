import React from "react";
import { services } from "../../data/services";

const ServiceSection = () => {
  return (
    <section className="py-5 text-center">
      <h2 className="mb-3 fw-bold">What I Do</h2>
      <p className="mx-auto w-75">
        Very experienced in building digital solutions in various sectors, we
        are committed to creating various digital innovations according to
        client needs.
      </p>

      <div className="container">
        <div className="row justify-content-center mt-3 g-4">
          {services.map((service, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3">
              <div className="card bg-white text-dark border border-primary p-3 h-100 d-flex flex-column align-items-center justify-content-between cursor-pointer hover-shadow">
                <h6 className="mb-3">{service.title}</h6>
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
