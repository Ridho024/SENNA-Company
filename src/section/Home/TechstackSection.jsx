import React from "react";
import { techStacks } from "../../data/techStacks";

const TechStack = () => {
  return (
    <>
      <section className="mt-5 text-white" style={{ backgroundColor: "#dfe0eb" }}>
        <div className="p-5 text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Main tech stack we are use
          </h2>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className="rounded-circle d-flex justify-content-center align-items-center border border-secondary"
                style={{
                  width: "60px",
                  height: "60px",
                }}
                title={tech.name}
              >
                <img src={tech.icon} alt="icon tech" className="img-fluid" style={{ width: "30px", height: "30px", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
