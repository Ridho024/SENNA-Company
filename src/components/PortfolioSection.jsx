import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample portfolio data - you can replace this with your actual data
const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration",
    category: "Web Development",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A30pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22125%22%20y%3D%22217.7%22%3EE-Commerce%20Project%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Custom ERP solution for tracking inventory and sales",
    category: "Enterprise Software",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A30pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_2%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22125%22%20y%3D%22217.7%22%3EInventory%20System%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    category: "Mobile Development",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_3%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A30pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_3%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22125%22%20y%3D%22217.7%22%3EBanking%20App%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    description: "Modern redesign of a corporate website with improved UX",
    category: "UI/UX Design",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_4%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A30pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_4%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22125%22%20y%3D%22217.7%22%3EWebsite%20Redesign%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  },
];

const PortfolioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold" style={{ color: "#0a2463" }}>
            Our Portfolio
          </h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Explore our recent projects and see how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-3"
              variants={itemVariants}
            >
              <motion.div
                className="card h-100 border-0 shadow-sm overflow-hidden"
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top h-100 w-100"
                    style={{ objectFit: "cover" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="card-body">
                  <span className="badge mb-2" style={{ backgroundColor: "#0a2463" }}>
                    {project.category}
                  </span>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted small">{project.description}</p>
                  <motion.a
                    href="#"
                    className="btn btn-sm"
                    style={{ color: "#0a2463" }}
                    whileHover={{ x: 5 }}
                  >
                    View Details <span>→</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-5">
          <motion.a
            href="#"
            className="btn btn-outline-primary px-4 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
