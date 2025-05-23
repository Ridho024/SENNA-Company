import web from "../assets/services/web_dev.png";
import odoo from "../assets/services/odoo_dev.png";
import ui_ux from "../assets/services/ui_ux.png";
import graphic from "../assets/services/graphic_design.png";
import discoveryImg from "../assets/services/web_dev.png";
import developmentImg from "../assets/services/web_dev.png";
import auditImg from "../assets/services/web_dev.png";

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
