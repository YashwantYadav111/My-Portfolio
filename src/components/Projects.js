import React from "react";
import { FaReact, FaJava, FaWordpress, FaNodeJs, FaPython } from "react-icons/fa";
import "./Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.",
    link: "https://github.com/yashwant/portfolio",
    icon: <FaReact className="project-icon" />,
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack MERN e-commerce application.",
    link: "https://github.com/yashwant/ecommerce",
    icon: <FaNodeJs className="project-icon" />,
  },
  {
    title: "Blog Platform",
    description: "A blogging platform built with Node.js, Express, and MongoDB.",
    link: "https://github.com/yashwant/blog-platform",
    icon: <FaNodeJs className="project-icon" />,
  },
  {
    title: "Data Science Project",
    description: "ML model for data analysis & predictions (Python, NumPy, Pandas, Scikit-Learn).",
    link: "https://github.com/yashwant/data-science-project",
    icon: <FaPython className="project-icon" />,
  },
  {
    title: "WordPress Website",
    description: "A dynamic WordPress site with custom themes & plugins.",
    link: "https://github.com/yashwant/wordpress-website",
    icon: <FaWordpress className="project-icon" />,
  },
  {
    title: "Java Application",
    description: "Java desktop app with OOP, Swing GUI & JDBC database connectivity.",
    link: "https://github.com/yashwant/java-application",
    icon: <FaJava className="project-icon" />,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title" data-aos="fade-down">🚀 My Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="project-icon-wrap">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
