import React from "react";

const C4Section = () => {
  return (
    <section style={{ width: "100%", height: "100vh", paddingLeft: "12rem", paddingRight: "12rem" }}>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-md-5 d-flex justify-content-center">
          <div className="card text-bg-light mb-3" style={{ maxWidth: "30rem", height: "90vh" }}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-7 ps-5">
          <h2>4C is Our Valuable Identity</h2>
          <p>
            At our office, we believe in creating an environment that fosters creativity, collaboration, and innovation. We're passionate about helping our clients succeed and are committed to providing the tools and resources they need to
            achieve their goals.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-5 ps-2">
              <div className="row">
                <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  </div>
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
