import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <section className="contact-image">
        <div className="hero">
          <img src="./img/contact.jpg" alt="image" />
          <div className="text">
            <h1>
              <span className="hl">If you want to talk with me, </span>
            </h1>
            <p>ckdrmsdk@gmail.com</p>
            <p>
              My Linkedin
              <a href="#">
                <FaLinkedin />
              </a>
            </p>
            <p>
              My Github
              <a href="">
                <GoMarkGithub />
              </a>
            </p>
          </div>
        </div>
      </section>
      <div className="slider"></div>
    </section>
  );
};

export default Contact;
