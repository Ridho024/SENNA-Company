import React from "react";
import { products_web } from "../../../data/services";

const ProductsSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Build websites for various needs</h2>
        <p className="text-muted mb-5">
          We offer a variety of website needs, our target is to provide the best
          service for our customers.
        </p>

        <div className="row g-4">
          {products_web.map((product, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card border border-primary h-100 shadow-md hover-shadow transition cursor-pointer"
                style={{
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div className="card-body text-start p-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="mb-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5 className="fw-bold mb-2">{product.title}</h5>
                  <p className="text-muted mb-0">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="mt-3 fw-bold" style={{ color: "#0a2463" }}>
          Many more...
        </h4>
      </div>
    </section>
  );
};

export default ProductsSection;
