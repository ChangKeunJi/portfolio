import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <div className="contact-content">
          <div className="text">
            <h1>
              <span className="hl">Contact Me </span>
            </h1>
            <a href="mailto:ckdrmsdk@gmail.com">
              <p>ckdrmsdk@gmail.com</p>
            </a>

            <a href="#">
              <p>
                Linkedin <FaLinkedin />
              </p>
            </a>

            <a href="#">
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
