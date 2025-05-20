import React from "react";

const ContactUsSection = () => {
  return (
    <>
      <section style={{ width: "100%", display: "flex", justifyContent: "center", margin: "2rem 0 5rem 0" }} id="contact">
        <div className="text-center border p-4 rounded-4 shadow" style={{ width: "600px"}}>
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Contact Us
          </h2>
          <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
          <div style={{ textAlign: "center"}} className="mb-5">
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label for="exampleFormControlInput1" className="form-label">
                Full Name
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label for="exampleFormControlInput1" className="form-label">
                Your Email
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label for="exampleFormControlInput1" className="form-label">
                Phone Number
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} className="mx-auto mb-3" >
                <label for="exampleFormControlInput1" className="form-label">
                Company Name
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div style={{ width: "500px" }} class="mx-auto mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Your Message Here</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
