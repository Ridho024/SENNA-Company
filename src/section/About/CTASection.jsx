import React from "react";

const CTASection = () => {
  return (
    <section style={{ width: "100%", height: "100vh", paddingLeft: "15rem", paddingRight: "15rem" }} className="d-flex align-items-center">
      <div className="row" style={{ width: "100%" }}>
        <div className="col-md-7">
            <h2>Love what we do?</h2>
            <p>Your ideas matter to us. Share what you have in mind, feel free to discuss it (for free!) and see what we can do!</p>
            <div><button>Lets Talk</button></div>
        </div>
        <div className="col-md-5">Ini image animasi</div>
      </div>
    </section>
  );
};

export default CTASection;
