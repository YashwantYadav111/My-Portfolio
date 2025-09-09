import React, { useEffect, useState } from "react";
import "./SkillsMeter.css";

const SkillCircle = ({ label, percent, color, delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      let start = 0;
      const stepTime = 1200 / percent; // 2s animation
      const timer2 = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= percent) clearInterval(timer2);
      }, stepTime);
    }, delay);

    return () => clearTimeout(timer1);
  }, [percent, delay]);

  return (
    <div className="circle">
      <div
        className="outer"
        style={{
          background: `conic-gradient(${color} ${progress * 3.6}deg, #222 0deg)`,
        }}
      >
        <div className="inner">
          <div className="number">{progress}%</div>
        </div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default function SkillsCircle() {
  const skills = [
    { label: "HTML", percent: 95, color: "#f97316" },
    { label: "CSS", percent: 90, color: "#2563eb" },
    { label: "JavaScript", percent: 85, color: "#facc15" },
    { label: "React", percent: 80, color: "#61dafb" },
    { label: "Node.js", percent: 75, color: "#22c55e" },
    { label: "MongoDB", percent: 70, color: "#10b981" },
    { label: "Express.js", percent: 70, color: "#a855f7" },
    { label: "Python", percent: 65, color: "#3776ab" },
    { label: "C++", percent: 60, color: "#00599c" },
    { label: "Data Structures", percent: 75, color: "#f43f5e" },
  ];

  return (
    <section id="skills" className="skills-circle">
      <h2 className="skills-title">My Skills</h2>
      <div className="circle-grid">
        {skills.map((skill, i) => (
          <SkillCircle
            key={i}
            label={skill.label}
            percent={skill.percent}
            color={skill.color}
            delay={i * 1500} // har skill 2.5s ke gap se start hogi
          />
        ))}
      </div>
    </section>
  );
}
