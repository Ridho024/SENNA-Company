import React from "react";
import image_animation from "../../assets/images/about/image_animation.png"

const CTASection = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
      }}
      className="cta-section"
    >
      <div className="container">
        <div
          className="row align-items-center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Left Content */}
          <div
            className="col-lg-6 col-md-12 text-center text-lg-start"
            style={{ marginBottom: "2rem" }}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Love what we do?
            </h2>
            <p
              className="mb-4"
              style={{
                fontSize: "1.125rem",
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              Your ideas matter to us. Share what you have in mind, feel free to
              discuss it (for free!) and see what we can do!
            </p>
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: "#0a2463",
                border: "none",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                borderRadius: "8px",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => alert("Let's Talk!")}
            >
              Let's Talk!
            </button>
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 col-md-12 text-center"
            style={{
              position: "relative",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <img
              src={image_animation}
              alt="Animation"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                animation: "bounce 2s infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframes for Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default CTASection;
