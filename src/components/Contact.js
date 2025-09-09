import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Let’s Connect 🚀</h2>
        <p className="contact__text">
          Want to collaborate, hire me, or just say hello?  
          I’d love to hear from you!
        </p>

        <div className="contact__buttons">
          <a href="mailto:yadav@example.com" className="btn btn--lg">📧 Email Me</a>
          <a href="tel:+911234567890" className="btn btn--lg">📞 Call Me</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn btn--lg">
            💼 LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn--lg">
            🌐 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
