import web from "../assets/services/web_dev.png";
import odoo from "../assets/services/odoo_dev.png";
import ui_ux from "../assets/services/ui_ux.png";
import graphic from "../assets/services/graphic_design.png";
import discoveryImg from "../assets/services/web_dev.png";
import developmentImg from "../assets/services/web_dev.png";
import auditImg from "../assets/services/web_dev.png";

// Odoo customization
import odoo_cp from "../assets/services/odoo/odoo_costumization_planning.png";
import odoo_md from "../assets/services/odoo/odoo_module_development.png";
import odoo_im from "../assets/services/odoo/odoo_implementation.png";
import odoo_tav from "../assets/services/odoo/odoo_testing_and_validation.png";
import odoo_das from "../assets/services/odoo/odoo_deployment_and_support.png";
import odoo_ra from "../assets/services/odoo/odoo_requirement_analysis.png";

// Graphic design
import graphic_ds from "../assets/services/graphic/graphic_g_design.png";
import graphic_ba from "../assets/services/graphic/graphic_brand_analysis.png";
import graphic_is from "../assets/services/graphic/graphic_ideation_and_scetching.png";
import graphic_rr from "../assets/services/graphic/graphic_review_and_refinement.png";
import graphic_das from "../assets/services/graphic/graphic_delivery_and_support.png";

import graphic_ld from "../assets/services/graphic/graphic_logo_design.png";
import graphic_cd from "../assets/services/graphic/graphic_card_design.png";
import graphic_sm from "../assets/services/graphic/graphic_socmed.png";

export const services = [
  { title: "Web development", icon: web, path: "/services/web-development" },
  {
    title: "Odoo Customization",
    icon: odoo,
    path: "/services/web-development",
  },
  { title: "UI/UX Design", icon: ui_ux, path: "/services/web-development" },
  { title: "Graphic design", icon: graphic, path: "/services/web-development" },
];

// service web development
export const products_web = [
  {
    img: discoveryImg,
    title: "E Commerce Website",
    desc: "Launch a seamless online store designed to attract customers, drive sales, and scale effortlessly with your business.",
  },
  {
    img: developmentImg,
    title: "Company Profile Website",
    desc: "Create a professional online presence that reflects your brand, builds trust, and communicates your business values effectively.",
  },
  {
    img: auditImg,
    title: "Personal Portfolio Website",
    desc: "Showcase your unique talents and achievements with a visually stunning portfolio that leaves a lasting impression.",
  },
];

export const process_web = [
  {
    number: "1. Discovery & Planning",
    image: discoveryImg,
    desc: "We start by understanding your business, audience, and goals to define the right strategy and website structure.",
  },
  {
    number: "2. Wireframing & UX Design",
    image: discoveryImg,
    desc: "We create intuitive wireframes to map out the user journey and ensure smooth, goal-driven navigation.",
  },
  {
    number: "3. UI Design",
    image: discoveryImg,
    desc: "Beautiful, modern, and brand-aligned designs are crafted to make your website stand out and feel professional.",
  },
  {
    number: "4. Development",
    image: discoveryImg,
    desc: "We bring the design to life using clean code, responsive layouts, and best practices across devices and browsers.",
  },
  {
    number: "5. Testing & QA",
    image: discoveryImg,
    desc: "We thoroughly test everything from performance to usability, ensuring your website works perfectly before going live.",
  },
  {
    number: "6. Launch & Optimization",
    image: discoveryImg,
    desc: "Once everything’s ready, we go live — and stay with you to refine, support, and help you grow with insights and updates.",
  },
];

// Service odoo customization
export const products_odoo = [
  {
    img: discoveryImg,
    title: "Custom Module Development",
    desc: "Tailor Odoo modules to meet your unique business needs, ensuring seamless integration and enhanced functionality.",
  },
  {
    img: developmentImg,
    title: "Odoo Implementation",
    desc: "Streamline your business processes with expert Odoo implementation, customized to fit your operational requirements.",
  },
  {
    img: auditImg,
    title: "Odoo Support & Maintenance",
    desc: "Ensure your Odoo system runs smoothly with ongoing support, updates, and troubleshooting from our expert team.",
  },
];

export const process_odoo = [
  {
    number: "1. Requirement Analysis",
    image: odoo_ra,
    desc: "We begin by analyzing your business requirements to identify the best Odoo solutions tailored to your needs.",
  },
  {
    number: "2. Customization Planning",
    image: odoo_cp,
    desc: "We plan and design customizations to ensure Odoo aligns perfectly with your operational workflows.",
  },
  {
    number: "3. Module Development",
    image: odoo_md,
    desc: "Our team develops and integrates custom modules to enhance functionality and meet your specific goals.",
  },
  {
    number: "4. Implementation",
    image: odoo_im,
    desc: "We implement the customized Odoo solution, ensuring seamless integration with your existing systems.",
  },
  {
    number: "5. Testing & Validation",
    image: odoo_tav,
    desc: "We rigorously test the system to ensure it operates smoothly and meets your business requirements.",
  },
  {
    number: "6. Deployment & Support",
    image: odoo_das,
    desc: "After deployment, we provide ongoing support and optimization to ensure your Odoo system continues to perform effectively.",
  },
];

// Graphic
export const products_graphic = [
  {
    img: graphic_ld,
    title: "Logo Design",
    desc: "Create a unique and memorable logo that represents your brand identity and resonates with your target audience.",
  },
  {
    img: graphic_cd,
    title: "Business Card Design",
    desc: "Design professional business cards that leave a lasting impression and effectively communicate your brand.",
  },
  {
    img: graphic_sm,
    title: "Social Media Graphics",
    desc: "Craft eye-catching graphics for social media platforms to enhance engagement and promote your brand effectively.",
  },
];

export const process_graphic = [
  {
    number: "1. Brand Analysis",
    image: graphic_ba,
    desc: "We analyze your brand's identity, values, and target audience to create designs that resonate effectively.",
  },
  {
    number: "2. Ideation & Sketching",
    image: graphic_is,
    desc: "We generate creative ideas and draft initial sketches to align with your brand's vision and goals.",
  },
  {
    number: "3. Graphic Design",
    image: graphic_ds,
    desc: "Our team crafts visually stunning designs, ensuring they are both impactful and aligned with your brand identity.",
  },
  {
    number: "4. Review & Refinement",
    image: graphic_rr,
    desc: "We work closely with you to review the designs and refine them based on your feedback for perfection.",
  },
  {
    number: "5. Delivery & Support",
    image: graphic_das,
    desc: "We deliver the final designs in all required formats and provide support for their effective implementation.",
  },
];
