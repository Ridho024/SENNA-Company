// import React from "react";

// const ContactUsSection = () => {
//   return (
//     <>
//       <section style={{ width: "100%", display: "flex", justifyContent: "center", margin: "2rem 0 5rem 0" }} id="contact">
//         <div className="text-center border p-4 rounded-4 shadow" style={{ width: "600px"}}>
//           <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
//             Contact Us
//           </h2>
//           <p className="mb-4">If you have any questions or inquiries, feel free to reach out to us!</p>
//           <div style={{ textAlign: "center"}} className="mb-5">
//             <div style={{ width: "500px" }} className="mx-auto mb-3" >
//                 <label for="exampleFormControlInput1" className="form-label">
//                 Full Name
//                 </label>
//                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//             </div>
//             <div style={{ width: "500px" }} className="mx-auto mb-3" >
//                 <label for="exampleFormControlInput1" className="form-label">
//                 Your Email
//                 </label>
//                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//             </div>
//             <div style={{ width: "500px" }} className="mx-auto mb-3" >
//                 <label for="exampleFormControlInput1" className="form-label">
//                 Phone Number
//                 </label>
//                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//             </div>
//             <div style={{ width: "500px" }} className="mx-auto mb-3" >
//                 <label for="exampleFormControlInput1" className="form-label">
//                 Company Name
//                 </label>
//                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//             </div>
//             <div style={{ width: "500px" }} class="mx-auto mb-3">
//                 <label for="exampleFormControlTextarea1" class="form-label">Your Message Here</label>
//                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactUsSection;

import React from "react";

const ContactUsSection = () => {
  return (
    <section
      className="w-100 d-flex justify-content-center my-5 px-3"
      id="contact"
    >
      <div
        className="text-center border p-4 rounded-4 shadow w-100"
        style={{ maxWidth: "700px" }}
      >
        <h2 className="mb-4 fw-bold" style={{ color: "#0a2463" }}>
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions or inquiries, feel free to reach out to us!
        </p>

        <form className="text-start">
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="+62 812 3456 7890"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Your company name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
