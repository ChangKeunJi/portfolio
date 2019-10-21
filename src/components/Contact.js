import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <div className="contact-content">
          <div className="text">
            <h1>
              <span className="hl">Contact Me </span>
            </h1>
            <a href="mailto:changkeun.j@gmail.com">
              <p>changkeun.j@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/chang-keun-ji-847588178/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Linkedin <FaLinkedin />
              </p>
            </a>

            <a
              href="https://github.com/ChangKeunJi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Github <GoMarkGithub />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
