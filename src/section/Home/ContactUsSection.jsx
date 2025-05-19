import React from "react";

const ContactUsSection = () => {
  return (
    <>
      <section style={{ width: "100%" }} className="my-2" id="contact">
        <div className="text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Contact Us
          </h2>
          <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
          <div style={{ textAlign: "center"}} className="mb-5">
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Email
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label">
                Company Name
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message Here</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;