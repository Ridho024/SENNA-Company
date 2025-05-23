import web from "../assets/services/web_dev.png";
import odoo from "../assets/services/odoo_dev.png";
import ui_ux from "../assets/services/ui_ux.png";
import graphic from "../assets/services/graphic_design.png";
import discoveryImg from "../assets/services/web_dev.png";
import developmentImg from "../assets/services/web_dev.png";
import auditImg from "../assets/services/web_dev.png";

// Website Development
import web_ecommerce from "../assets/services/website/web_ecommerce.png";
import web_company from "../assets/services/website/web_company.png";
import web_porto from "../assets/services/website/web_porto.png";
import web_plan from "../assets/services/website/web_plan.png";
import web_ux from "../assets/services/website/web_ux.png";
import web_ui from "../assets/services/website/web_ui.png";
import web_dev_process from "../assets/services/website/web_dev_process.png";
import web_test from "../assets/services/website/web_test.png";
import web_launch from "../assets/services/website/web_launch.png";

// Odoo customization
import odoo_cp from "../assets/services/odoo/odoo_costumization_planning.png";
import odoo_md from "../assets/services/odoo/odoo_module_development.png";
import odoo_im from "../assets/services/odoo/odoo_implementation.png";
import odoo_tav from "../assets/services/odoo/odoo_testing_and_validation.png";
import odoo_das from "../assets/services/odoo/odoo_deployment_and_support.png";
import odoo_ra from "../assets/services/odoo/odoo_requirement_analysis.png";

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
    img: web_ecommerce,
    title: "E Commerce Website",
    desc: "Launch a seamless online store designed to attract customers, drive sales, and scale effortlessly with your business.",
  },
  {
    img: web_company,
    title: "Company Profile Website",
    desc: "Create a professional online presence that reflects your brand, builds trust, and communicates your business values effectively.",
  },
  {
    img: web_porto,
    title: "Personal portofolio website",
    desc: "Stand out and share your story with a clean, creative portfolio that highlights your skills, work, and personality — all in one place.",
  },
];

export const process_web = [
  {
    number: "1. Discovery & Planning",
    image: web_plan,
    desc: "We start by understanding your business, audience, and goals to define the right strategy and website structure.",
  },
  {
    number: "2. Wireframing & UX Design",
    image: web_ux,
    desc: "We create intuitive wireframes to map out the user journey and ensure smooth, goal-driven navigation.",
  },
  {
    number: "3. UI Design",
    image: web_ui,
    desc: "Beautiful, modern, and brand-aligned designs are crafted to make your website stand out and feel professional.",
  },
  {
    number: "4. Development",
    image: web_dev_process,
    desc: "We bring the design to life using clean code, responsive layouts, and best practices across devices and browsers.",
  },
  {
    number: "5. Testing & QA",
    image: web_test,
    desc: "We thoroughly test everything from performance to usability, ensuring your website works perfectly before going live.",
  },
  {
    number: "6. Launch & Optimization",
    image: web_launch,
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
