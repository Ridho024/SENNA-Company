import React from "react";
import { whatWeDo } from "../../data/whatWeDo";

const WhatWeDoSection = () => {
  return (
    <>
      <section style={{ width: "100%"}}>
        <div className="text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            What we do
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {whatWeDo.map((item, index) => (
                <div className="col" key={index} style={{ display: "flex", justifyContent: "center", marginRight: "10px", marginBottom: "10px"}}>
                    <div className="card h-100" style={{ width: "350px", height: "400px"}}>
                        <img src={item.image} class="card-img-top" alt={item.title} style={{ width: "100%", height: "300px"}} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoSection;
