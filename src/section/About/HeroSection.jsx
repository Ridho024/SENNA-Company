import React from 'react'

const HeroSection = () => {
  return (
    <section style={{ padding: "0 10rem", marginTop: "7rem", marginBottom: "7rem", height: "50vh" }}>
        <h1 className="text-center fw-bold mb-3" style={{ color: "#0a2463" }}>
            We bring long-lasting impacts into reality!
        </h1>
        <p className="text-center" >
            Your digital investments matter. Sustainable applications are needed to accelerate the business to a higher level. Years of experience thriving in any scale of business and technology complexities drive us to continuously innovate to create a modern, reliable, predictable, and battle-tested product engineering approach that is amazingly trusted and adopted by top-notch innovators, industry, and technology leaders. The way we do this ensures your digital sustainability investment from day one.
        </p>
        <div className="text-center d-flex justify-content-center">
            <div style={{marginLeft: "1rem", marginRight: "1rem"}}><span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>✓</span><span>Effective</span></div>
            <div style={{marginLeft: "1rem", marginRight: "1rem"}}><span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>✓</span><span>Efficient</span></div>
            <div style={{marginLeft: "1rem", marginRight: "1rem"}}><span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>✓</span><span>Efective</span></div>
            <div style={{marginLeft: "1rem", marginRight: "1rem"}}><span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>✓</span><span>Exclusive</span></div>
            <div style={{marginLeft: "1rem", marginRight: "1rem"}}><span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>✓</span><span>Long-term</span></div>
        </div>
        <div className='d-flex justify-content-center' style={{ marginTop: "2rem" }}>
            <button>Click Here</button>
        </div>
    </section>
  )
}

export default HeroSection

