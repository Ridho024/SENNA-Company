import React from "react";
import battle_tested from "../../assets/images/about/battle_tested.png";
import creative_mind from "../../assets/images/about/creative_mind.png";
import dedicated_team from "../../assets/images/about/dedicated_team.png";
import focusing_on_you from "../../assets/images/about/focusing_on_you.png";

const WhyChooseUs = () => {
  const cards = [
    {
      imgSrc: creative_mind,
      title: "Creative Mind",
      text: "Endless creative and robust analytical mind to solve your business problems.",
      link: "#",
    },
    {
      imgSrc: dedicated_team,
      title: "Dedicated Team",
      text: "There are Avengers inside that dedicatedly craft your business solutions.",
      link: "#",
    },
    {
      imgSrc: battle_tested,
      title: "Battle Tested",
      text: "Successfully shipped hundreds of multiplatform digital products in various industries.",
      link: "#",
    },
    {
      imgSrc: focusing_on_you,
      title: "Focusing on You",
      text: "Your businesses matter to us. Having honest communication and long-term relationships are our secret recipes!",
      link: "#",
    },
  ];

  return (
    <section
      className="why-choose-us text-center py-5"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
      }}
      id="whyChooseUs"
    >
      <div className="container">
        <h1 className="text-bold fw-bolder mb-4">Why You Need To Choose Us</h1>
        <p className="mb-5" style={{ fontSize: "1.1rem" }}>
          Our purpose is simple: <strong>to empower and deliver long-lasting greatness!</strong>
        </p>
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
              <div
                className="card text-center"
                style={{
                  width: "18rem",
                  height: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={card.imgSrc}
                  className="card-img-top mb-3"
                  alt={card.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bolder">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
