import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">  
      <div className="about-container">
        
        <div className="about-image">
          <img src="/image/yashwant.jpg" alt="Yashwant Yadav" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I am <b>Yashwant Yadav</b>, a passionate Web Developer and Data Science Enthusiast, currently pursuing B.Sc. in Information Technology at Career Point University. I specialize in creating modern, responsive, and user-friendly web applications using the latest technologies. Along with web development, I have strong interest in Data Analysis and Machine Learning, using Python, NumPy, and Pandas to uncover meaningful insights. My goal is to combine creativity with logic to deliver impactful digital solutions. I am always eager to learn, grow, and work on innovative projects.
          </p>

          {/* ✅ Button group wrapper */}
          <div className="btn-group">
            <a href="#contact" className="btn">Let's Connect</a>
            <a href="Resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
