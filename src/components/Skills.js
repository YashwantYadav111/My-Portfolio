import React from "react";
import "./Skill.css";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Python",
    "WordPress", "MS Word", "MS Excel", "Java", "SQL", "GitHub", "VS Code",
    "NumPy", "Pandas", "Machine Learning", "Data Analysis"
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">🚀 My Skills</h2>
      <p className="skills-subtitle">Technologies & Tools I use</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
