import React from "react";

const ContactUsSection = () => {
  return (
    <>
      <section style={{ width: "100%", padding: "0 10rem 0 10rem" }} className="my-5" id="contact">
        <div className="text-center">
          <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
            Contact Us
          </h2>
          <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
