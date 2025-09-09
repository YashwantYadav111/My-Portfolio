import React, { useState } from "react";
import "./Certificate.css";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy | 2024",
      img: "/image/webdev-cert.jpg",
    },
    {
      title: "Data Science with Python",
      issuer: "Coursera | 2024",
      img: "/image/datasci-cert.jpg",
    },
    {
      title: "React JS Advanced",
      issuer: "FreeCodeCamp | 2025",
      img: "/image/react-cert.jpg",
    },
    {
      title: "Quiz Competition",
      issuer: "Career Point University | 2023",
      img: "/image/quiz-cert.jpg",
    },
      {
        title: "IOT Workshop",
        issuer: "Upflairs pvt.Career Point University,Kota 2025",
        img: "/image/iot-cert.jpg"
      },
  ];

  return (
    <section id="certificate" className="certificate">
      <h2 className="certificate__title">Certificates</h2>
      <p className="certificate__intro">
        Here are some of my professional achievements and certifications.
      </p>

      <div className="certificate__grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.img}
              alt={cert.title}
              onClick={() => setSelectedImage(cert.img)}
            />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Certificate" />
        </div>
      )}
    </section>
  );
};

export default Certificate;
