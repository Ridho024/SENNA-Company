import web from "../assets/services/web_dev.png";
import odoo from "../assets/services/odoo_dev.png";
import ui_ux from "../assets/services/ui_ux.png";
import graphic from "../assets/services/graphic_design.png";
import web_ecommerce from "../assets/services/web_ecommerce.png";
import web_company from "../assets/services/web_company.png";
import web_porto from "../assets/services/web_porto.png";
import web_plan from "../assets/services/web_plan.png";
import web_ux from "../assets/services/web_ux.png";
import web_ui from "../assets/services/web_ui.png";
import web_dev_process from "../assets/services/web_dev_process.png";
import web_test from "../assets/services/web_test.png";
import web_launch from "../assets/services/web_launch.png";

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
    desc: "We help you launch powerful online stores that are easy to manage, built to convert, and ready to grow with your business.",
  },
  {
    img: web_company,
    title: "Company Profile Website",
    desc: "Showcase your brand’s identity and credibility with a modern, informative, and engaging company website that speaks for your business.",
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
