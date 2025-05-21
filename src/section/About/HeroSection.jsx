import React from "react";

const HeroSection = () => {
  return (
    <section className="container" style={{ minHeight: "100vh", paddingTop: "7rem" }}>
      <div className="text-center">
        <h1 className="fw-bold mb-3" style={{ color: "#0a2463" }}>
          We bring long-lasting impacts into reality!
        </h1>
        <p className="lead">
          Your digital investments matter. Sustainable applications are needed to accelerate the business to a higher level. Years of experience thriving in any scale of business and technology complexities drive us to continuously innovate
          to create a modern, reliable, predictable, and battle-tested product engineering approach that is amazingly trusted and adopted by top-notch innovators, industry, and technology leaders. The way we do this ensures your digital
          sustainability investment from day one.
        </p>
      </div>
      <div className="row text-center justify-content-center mt-4">
        {["Effective", "Efficient", "Efective", "Exclusive", "Long-term"].map((item, index) => (
          <div key={index} className="col-6 col-md-2 mb-3">
            <span className="me-2 fs-4">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a href="#whyChooseUs" className="btn btn-lg" style={{ backgroundColor: "#0a2463", color: "#fff" }}>
          Click Here
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
