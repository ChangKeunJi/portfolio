import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNpm
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="card-left">
        <div className="text">
          <div className="title hl">A littel bit about me</div>
          <p>Hello again, I'm Changkeun from Korea.</p>
          <p>
            I happend to come across programming at January 2019. After that
            moment, I've been teaching myself coding and now It has become my
            obsession.
          </p>
          <p>
            I believe in the power of software and beautiful design that make
            people life more variety and give beautiful impact.
          </p>
          <p>
            That's why I'm fascinated by coding and keep trying to be better and
            overcoming challenging problem.
          </p>
        </div>
        <div className="lang">
          <div className="title hl">Things I speak</div>
          <div className="things">
            <div className="icons">
              <ul>
                <li>
                  <FaHtml5 />
                </li>
                <li>
                  <FaCss3 />
                </li>
                <li>
                  <FaSass />
                </li>
                <li>
                  <FaJsSquare />
                </li>
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaNpm />
                </li>
              </ul>
            </div>
            <div className="list">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>React & Redux</li>
                <li>Npm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
